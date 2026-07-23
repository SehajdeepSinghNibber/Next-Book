import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-zinc-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-bold text-lime-400">
          Counter
        </h1>

        <div className="flex items-center gap-6">
          <Link
            href="/"
            className="hover:text-lime-400 transition-colors duration-200"
          >
            Home
          </Link>

          <Link
            href="/counter"
            className="hover:text-lime-400 transition-colors duration-200"
          >
            Counter
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;