import { useState } from "react";
import HeroGrid from "../components/HeroGrid";
import useHeroes from "../hooks/useHeroes";

const Admin = () => {
  const { heroes, loading } = useHeroes();
  const [formData, setFormData] = useState({
    name: "",
    realName: "",
    universe: "Earth-616",
  });

  const handleDelete = (id) => {
    fetch(`http://localhost:4000/characters/${id}`, {
      method: "DELETE",
    }).then(() => window.location.reload());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:4000/characters", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then(() => window.location.reload());
  };

  if (loading) return <div className="text-center py-20">Loading...</div>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Hero Management</h1>

      <form onSubmit={handleSubmit} className="mb-8 p-6 bg-gray-800 rounded-lg">
        <h2 className="text-xl font-bold mb-4">Create New Hero</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Hero Name"
            className="p-2 rounded bg-gray-700"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <input
            type="text"
            placeholder="Real Name"
            className="p-2 rounded bg-gray-700"
            value={formData.realName}
            onChange={(e) =>
              setFormData({ ...formData, realName: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Universe"
            className="p-2 rounded bg-gray-700"
            value={formData.universe}
            onChange={(e) =>
              setFormData({ ...formData, universe: e.target.value })
            }
          />
          <button
            type="submit"
            className="bg-purple-600 hover:bg-purple-700 p-2 rounded"
          >
            Create Hero
          </button>
        </div>
      </form>

      <div className="grid grid-cols-1 gap-4">
        {heroes.map((hero) => (
          <div
            key={hero.id}
            className="flex items-center justify-between p-4 bg-gray-800 rounded-lg"
          >
            <div>
              <h3 className="font-bold">{hero.name}</h3>
              <p className="text-gray-400">{hero.realName}</p>
            </div>
            <button
              onClick={() => handleDelete(hero.id)}
              className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Admin;
