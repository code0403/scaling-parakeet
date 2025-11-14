import Link from "next/link";

export default function Navbar() {
  return (
    <div className="navbar bg-base-200 shadow-sm sticky top-0 z-50">
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost normal-case text-xl">📱 EMI Shop</Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li><a>Home</a></li>
          <li><a>Products</a></li>
        </ul>
      </div>
    </div>
  );
}
