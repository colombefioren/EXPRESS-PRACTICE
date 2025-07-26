import { useState, useEffect } from "react";

const useHeroes = () => {
  const [heroes, setHeroes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:4000/characters")
      .then((res) => res.json())
      .then((data) => {
        setHeroes(data.characters);
        setLoading(false);
      });
  }, []);

  return { heroes, loading };
};

export default useHeroes;
