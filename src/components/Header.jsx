import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-indigo-800 shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="/logo.png"
              alt="Logo"
              className="size-10 pt-1 ps-1 -me-0.5"
            />
            <span className="text-xl font-semibold text-white">AlertWise</span>
          </Link>

          {/* Menu principal */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-sky-50 hover:text-gray-900 font-medium duration-300"
            >
              Início
            </Link>
            <Link
              to="/leaderboardPage"
              className="text-sky-50 hover:text-gray-900 font-medium duration-300"
            >
              Ranking
            </Link>
            <Link
              to="/alertas"
              className="text-sky-50 hover:text-gray-900 font-medium duration-300"
            >
              Alertas
            </Link>
            <Link
              to="relatar"
              className="text-sky-50 hover:text-gray-900 font-medium duration-300"
            >
              Relatar
            </Link>
            <a
              href="https://alert-wise.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-50 hover:text-gray-900 font-medium duration-300"
            >
              Nossa IA
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <Link to="/user">
              <button className="bg-purple-950 cursor-pointer hover:bg-purple-800 text-white px-4 py-2 rounded-md font-medium transition duration-300">
                Entrar
              </button>
            </Link>
          </div>

          <button className="md:hidden text-gray-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
