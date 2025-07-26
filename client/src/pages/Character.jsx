import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Character = () => {
  const { id } = useParams();
  const [hero, setHero] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:4000/characters/${id}`)
      .then((res) => res.json())
      .then((data) => setHero(data));
  }, [id]);

  if (!hero) return <div className="text-center py-20">Loading...</div>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/3">
          <img
            src={`https://robohash.org/${hero.id}?set=set4&size=300x300`}
            alt={hero.name}
            className="rounded-xl border-4 border-purple-500"
          />
        </div>
        <div className="md:w-2/3">
          <h1 className="text-4xl font-bold mb-2">{hero.name}</h1>
          <h2 className="text-2xl text-gray-400 mb-6">{hero.realName}</h2>
          <div className="bg-gray-800 p-4 rounded-lg">
            <h3 className="text-xl font-bold mb-2">Universe</h3>
            <p className="text-purple-400">{hero.universe}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Character;
