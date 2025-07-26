import { motion } from "framer-motion";

const Card = ({ hero }) => {
  const imageSources = `https://api.dicebear.com/7.x/adventurer/svg?seed=${hero.name}&flip=true&radius=50`;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{
        y: -8,
        scale: 1.02,
        boxShadow: "0 25px 50px -12px rgba(236, 72, 153, 0.25)",
      }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 15,
      }}
      className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-5 shadow-xl border border-gray-700 overflow-hidden group"
    >
      <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-purple-500"
            style={{
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${
                Math.random() * 10 + 5
              }s infinite ease-in-out alternate`,
            }}
          />
        ))}
      </div>

      <motion.div
        whileHover={{ scale: 1.03 }}
        className="relative h-48 w-full rounded-xl overflow-hidden mb-4"
      >
        <img
          src={imageSources} 
          alt={hero.name}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.src = `https://source.boringavatars.com/marble/200/${hero.id}`;
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-transparent to-white/5" />
      </motion.div>

      <div className="relative z-10">
        <h3 className="text-2xl font-bold text-white mb-1">{hero.name}</h3>
        <p className="text-gray-400 text-sm mb-3">{hero.realName}</p>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${
            hero.universe.toLowerCase().includes("earth")
              ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white"
              : "bg-gradient-to-r from-pink-600 to-rose-600 text-white"
          }`}
        >
          <span className="relative flex h-2 w-2 mr-2">
            <span
              className={`animate-ping absolute inline-flex h-full w-full rounded-full ${
                hero.universe.includes("616") ? "bg-purple-400" : "bg-pink-400"
              } opacity-75`}
            ></span>
            <span
              className={`relative inline-flex rounded-full h-2 w-2 ${
                hero.universe.includes("616") ? "bg-purple-200" : "bg-pink-200"
              }`}
            ></span>
          </span>
          {hero.universe}
        </motion.div>
      </div>
    </motion.div>
  );
};
motion;
export default Card;
