import Image from "next/image";
import Link from "next/link";
import { getProductStartingPrice } from "../utlis/helper";

export default function ProductCard({ product }) {
  const { startingPrice, startingMRP } = getProductStartingPrice(product);
  return (
    <div className="card bg-white shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-1 rounded-lg overflow-hidden">
      <figure className="p-4 bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="h-48 w-full object-contain"
        />
      </figure>
      <div className="card-body p-4">
        <h2 className="card-title text-lg font-semi-bold text-gray-800">{product.name}</h2>
        <p className="text-sm text-gray-500 mb-2">{product.brand}</p>
        <div className="mt-2">
          <p className="text-lg font-bold text-primary">
            From ₹{startingPrice.toLocaleString()}
          </p>
          <p className="line-through text-gray-400 text-sm">
             MRP: ₹{startingMRP.toLocaleString()}
          </p>
        </div>
        <div className="card-actions justify-between items-center mt-4">
          <Link href={`/products/${product.slug}`} className="btn btn-sm btn-primary">
            View Details
          </Link>
        
        </div>
      </div>
    </div>
  );
}
