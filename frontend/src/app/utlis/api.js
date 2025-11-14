import axios from "axios";

export const API_BASE = process.env.NEXT_PUBLIC_API_BASE || "http://localhost:8080/api"; 

export const fetchProducts = async () => {
  const { data } = await axios.get(`${API_BASE}/products`);
  return data;
};

export const fetchProductBySlug = async (slug) => {
  const { data } = await axios.get(`${API_BASE}/products/${slug}`);
  return data;
};
