import HeroGrid from "../components/HeroGrid";
import useHeroes from "../hooks/useHeroes";

const Explore = () => {
  const { heroes, loading } = useHeroes();
  console.log(heroes);
  if (loading) return <div className="text-center py-20">Loading...</div>;

  return (
    <div className="p-4">
      <HeroGrid heroes={heroes} />
    </div>
  );
};

export default Explore;
