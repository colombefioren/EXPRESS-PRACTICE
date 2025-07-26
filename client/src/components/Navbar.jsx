import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between">
        <Link to="/" className="text-xl font-bold text-purple-400">
          Superhero API
        </Link>
        <div className="space-x-4">
          <Link to="/explore" className="hover:text-purple-300">
            Explore
          </Link>
          <Link to="/admin" className="hover:text-purple-300">
            Admin
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
