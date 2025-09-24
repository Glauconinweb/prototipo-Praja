import { Link } from "react-router-dom";

export default function Navbar() {
  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/login";
  };

  return (
    <nav className="bg-orange-500 text-white p-4 flex justify-between items-center">
      <h1 className="font-bold text-xl">Prajá</h1>
      <div className="space-x-4">
        <Link to="/home" className="hover:underline">
          Home
        </Link>
        <button onClick={handleLogout} className="hover:underline">
          Sair
        </button>
      </div>
    </nav>
  );
}
