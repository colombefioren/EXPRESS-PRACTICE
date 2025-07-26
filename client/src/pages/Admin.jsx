import { useState } from "react";
import useHeroes from "../hooks/useHeroes";

const Admin = () => {
  const { heroes: allHeroes, loading } = useHeroes();
  const [formData, setFormData] = useState({
    name: "",
    realName: "",
    universe: "Earth-616",
  });
  const [editingId, setEditingId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [heroToDelete, setHeroToDelete] = useState(null);
  const heroesPerPage = 5;

  const filteredHeroes = allHeroes.filter(
    (hero) =>
      hero.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      hero.realName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      hero.universe.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastHero = currentPage * heroesPerPage;
  const indexOfFirstHero = indexOfLastHero - heroesPerPage;
  const currentHeroes = filteredHeroes.slice(indexOfFirstHero, indexOfLastHero);
  const totalPages = Math.ceil(filteredHeroes.length / heroesPerPage);

  const handleDelete = (id) => {
    setHeroToDelete(id);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    fetch(
      `https://express-practice-nqjt.onrender.com/characters/${heroToDelete}`,
      {
        method: "DELETE",
      }
    ).then(() => {
      window.location.reload();
      setShowDeleteModal(false);
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = editingId
      ? `https://express-practice-nqjt.onrender.com/characters/${editingId}`
      : "https://express-practice-nqjt.onrender.com/characters";

    fetch(url, {
      method: editingId ? "PUT" : "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then(() => {
      window.location.reload();
    });
  };

  const handleEdit = (hero) => {
    setFormData({
      name: hero.name,
      realName: hero.realName,
      universe: hero.universe,
    });
    setEditingId(hero.id);
  };

  const resetForm = () => {
    setFormData({
      name: "",
      realName: "",
      universe: "Earth-616",
    });
    setEditingId(null);
  };

  if (loading)
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 p-6 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Hero Management
          </h1>
          <p className="text-gray-400">Manage your superhero database</p>
        </div>

        <div className="relative mt-4 md:mt-0 w-full md:w-64">
          <input
            type="text"
            placeholder="Search heroes..."
            className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-900"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
          />
          <svg
            className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>

      <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 mb-8 border border-gray-700 shadow-lg">
        <h2 className="text-xl font-semibold mb-4 text-white">
          {editingId ? "Edit Hero" : "Create New Hero"}
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Hero Name
              </label>
              <input
                type="text"
                placeholder="e.g. Spider-Man"
                className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-900"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Real Name
              </label>
              <input
                type="text"
                placeholder="e.g. Peter Parker"
                className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-900"
                value={formData.realName}
                onChange={(e) =>
                  setFormData({ ...formData, realName: e.target.value })
                }
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Universe
              </label>
              <select
                className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-900"
                value={formData.universe}
                onChange={(e) =>
                  setFormData({ ...formData, universe: e.target.value })
                }
              >
                <option value="Earth-616">Earth-616</option>
                <option value="Blackpink world">Blackpink World</option>
                <option value="Earth-normal">Earth-normal</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
          <div className="flex space-x-3">
            <button
              type="submit"
              className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-lg font-medium shadow-lg transition-all transform hover:scale-105"
            >
              {editingId ? "Update Hero" : "Create Hero"}
            </button>
            {editingId && (
              <button
                type="button"
                onClick={resetForm}
                className="px-6 py-2 bg-gray-600 hover:bg-gray-700 rounded-lg font-medium"
              >
                Cancel
              </button>
            )}
          </div>
        </form>
      </div>

      <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-white">
            {filteredHeroes.length} Heroes Found
          </h2>
          {filteredHeroes.length > heroesPerPage && (
            <div className="flex space-x-2">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="px-3 py-1 rounded-lg bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Previous
              </button>
              <span className="px-3 py-1 bg-gray-700 rounded-lg">
                Page {currentPage} of {totalPages}
              </span>
              <button
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={currentPage === totalPages}
                className="px-3 py-1 rounded-lg bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next
              </button>
            </div>
          )}
        </div>

        {currentHeroes.length === 0 ? (
          <div className="text-center py-12 text-gray-400">
            No heroes found matching your search
          </div>
        ) : (
          <div className="space-y-3">
            {currentHeroes.map((hero) => (
              <div
                key={hero.id}
                className="flex items-center justify-between p-4 bg-gray-700/50 hover:bg-gray-700/70 rounded-lg transition-all border border-gray-700"
              >
                <div>
                  <h3 className="font-bold text-lg text-white">{hero.name}</h3>
                  <p className="text-gray-300">{hero.realName}</p>
                  <span
                    className={`inline-block mt-1 px-2 py-0.5 text-xs rounded-full ${
                      hero.universe.includes("616")
                        ? "bg-purple-900/50 text-purple-300"
                        : hero.universe.includes("Blackpink")
                        ? "bg-pink-900/50 text-pink-300"
                        : "bg-gray-600 text-gray-300"
                    }`}
                  >
                    {hero.universe}
                  </span>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleEdit(hero)}
                    className="px-3 py-1 bg-blue-600 hover:bg-blue-700 rounded-lg text-sm"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(hero.id)}
                    className="px-3 py-1 bg-red-600 hover:bg-red-700 rounded-lg text-sm"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {showDeleteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-800 rounded-xl p-6 max-w-md w-full border border-gray-700 shadow-2xl">
            <h3 className="text-xl font-bold text-white mb-4">
              Confirm Deletion
            </h3>
            <p className="text-gray-300 mb-6">
              Are you sure you want to delete this hero? This action cannot be
              undone.
            </p>
            <div className="flex justify-end space-x-3">
              <button
                onClick={() => setShowDeleteModal(false)}
                className="px-4 py-2 bg-gray-600 hover:bg-gray-700 rounded-lg font-medium"
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg font-medium"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Admin;
