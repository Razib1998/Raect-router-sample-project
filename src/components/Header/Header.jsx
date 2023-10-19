import { Link, NavLink } from "react-router-dom";


const Header = () => {
    return (
      <div>
        <nav className="flex gap-6 items-center justify-center text-2xl mt-6">
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "bg-green-400 border rounded-lg"
                : ""
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "bg-green-400 border rounded-lg"
                : ""
            }
          >
            Products
          </NavLink>
          <NavLink
            to="/dashboard"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "bg-green-400 border rounded-lg"
                : ""
            }
          >
            Dashboard
          </NavLink>
        </nav>
      </div>
    );
};

export default Header;