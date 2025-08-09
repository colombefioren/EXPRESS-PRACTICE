import HeroGrid from "../components/HeroGrid";
import useHeroes from "../hooks/useHeroes";

const Explore = () => {
  const { heroes, loading } = useHeroes();
  
   if (loading)
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    );

  return (
    <div className="p-4">
      <HeroGrid heroes={heroes} />
    </div>
  );
};

export default Explore;
