import { useState, useEffect } from "react";
import { BACKEND_URL } from "../config";

const useHeroes = () => {
  const [heroes, setHeroes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(BACKEND_URL)
      .then((res) => res.json())
      .then((data) => {
        setHeroes(data);
        setLoading(false);
      });
  }, []);

  return { heroes, loading };
};

export default useHeroes;
