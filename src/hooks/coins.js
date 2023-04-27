import { useEffect, useState } from "react";
import axios from "axios";

export function useCoins() {
  const [coins, setCoins] = useState([]);
  const [error, setError] = useState("");

  async function fetchProducts() {
    try {
      setError("");
      const response = await axios.get("https://api.coinlore.net/api/tickers/");
      setCoins(response.data);
    } catch (e) {
      setError(error.message);
    }
  }
  useEffect(() => {
    fetchProducts();
  }, []);
  return { coins, error };
}
