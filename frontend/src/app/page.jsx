"use client";
import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "./utlis/api";
import ProductCard from "./components/ProductCard";
export default function Home() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  if (isLoading)
    return <div className="text-center py-10">Loading products...</div>;
  if (error)
    return (
      <div className="text-center py-10 text-error">
        Failed to load products: {error.message}
      </div>
    );

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6 text-center">
        Available Smartphones
      </h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data?.data?.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
}
