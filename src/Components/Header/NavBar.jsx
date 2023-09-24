import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="flex justify-between items-center py-2">
      <div>
        <img
          className="w-32 md:w-64"
          src="https://i.ibb.co/G5Qpm9k/Logo.png"
          alt=""
        />
      </div>
      <nav>
        <ul className="flex items-center gap-4 text-lg">
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-[#FF444A] underline"
                  : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/donation"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-[#FF444A] underline"
                  : ""
              }
            >
              Donation
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/statistics"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-[#FF444A] underline"
                  : ""
              }
            >
              Statistics
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
