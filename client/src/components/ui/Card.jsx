import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import VanillaTilt from "tilt.js";

const Card = ({ hero }) => {
  motion;
  const tiltRef = useRef();

  useEffect(() => {
    VanillaTilt.init(tiltRef.current, {
      max: 25,
      scale: 1.05,
      glare: true,
      "max-glare": 0.2,
    });
  }, []);

  return (
    <div ref={tiltRef} className="tilt-element">
      <motion.div
        whileHover={{ y: -10 }}
        className="bg-gray-800 rounded-xl p-4 shadow-lg border border-purple-500"
      >
        <img
          src={`https://robohash.org/${hero.id}?set=set4`}
          alt={hero.name}
          className="w-full h-48 object-cover rounded-lg"
        />
        <h3 className="text-xl font-bold mt-2">{hero.name}</h3>
        <p className="text-gray-400">{hero.realName}</p>
        <span
          className={`px-2 py-1 rounded-full text-xs ${
            hero.universe.includes("616") ? "universe-616" : "bp-world"
          }`}
        >
          {hero.universe}
        </span>
      </motion.div>
    </div>
  );
};

export default Card;
