import HeroGrid from "../components/HeroGrid";
import useHeroes from "../hooks/useHeroes";

const Explore = () => {
  const { heroes, loading } = useHeroes();

  if (loading) return <div className="text-center py-20">Loading...</div>;

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6">Hero Gallery</h1>
      <HeroGrid heroes={heroes} />
    </div>
  );
};

export default Explore;
