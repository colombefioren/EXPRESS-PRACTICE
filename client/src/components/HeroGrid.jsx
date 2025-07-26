import Card from "./ui/Card";

const HeroGrid = ({ heroes }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {heroes.map((hero) => (
        <Card key={hero.id} hero={hero} />
      ))}
    </div>
  );
};
export default HeroGrid;
