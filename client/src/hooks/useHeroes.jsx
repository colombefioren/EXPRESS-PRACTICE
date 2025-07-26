import { useState, useEffect } from "react";

const useHeroes = () => {
  const [heroes, setHeroes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://express-practice-nqjt.onrender.com/characters")
      .then((res) => res.json())
      .then((data) => {
        setHeroes(data);
        setLoading(false);
      });
  }, []);

  return { heroes, loading };
};

export default useHeroes;
