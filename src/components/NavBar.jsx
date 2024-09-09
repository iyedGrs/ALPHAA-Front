/* eslint-disable react/jsx-key */
// import { NavLink } from "react-router-dom";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { NavLink } from "react-router-dom";
import { navItems, serviceItems } from "../data/navBarItems";
import { useState } from "react";
const NavBar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  return (
    <nav className="container mx-auto">
      <div className="flex justify-between py-2 items-center">
        <div className="w-[240px]">
          <img
            fetchPriority="high"
            src="https://alphaafin.com.au/wp-content/uploads/2024/08/2-e1723186410313-768x252.png"
            className="attachment-medium_large size-medium_large wp-image-253"
            alt=""
            srcSet="https://alphaafin.com.au/wp-content/uploads/2024/08/2-e1723186410313-768x252.png 768w, https://alphaafin.com.au/wp-content/uploads/2024/08/2-e1723186410313-300x98.png 300w, https://alphaafin.com.au/wp-content/uploads/2024/08/2-e1723186410313.png 853w"
            sizes="(max-width: 768px) 100vw, 768px"
          />
        </div>
        <div className="right">
          <ul className="flex gap-4 items-center">
            {navItems.map((item) =>
              item.label !== "Services" ? (
                <NavLink
                  key={item.label}
                  to={item.path}
                  className={({ isActive }) =>
                    isActive
                      ? " text-[#2A2C38] font-bold px-4 py-10"
                      : "hover:bg-[#2A2C38] transition-all text-[#2A2C38] font-bold duration-200 hover:text-white px-4 py-10 cursor-pointer"
                  }
                >
                  <a>{item.label}</a>
                </NavLink>
              ) : (
                <div
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                  className="relative "
                >
                  <NavLink
                    key={item.label}
                    to={item.path}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    className={({ isActive }) =>
                      isActive
                        ? "text-[#2A2C38] font-bold px-6 py-10"
                        : "hover:bg-[#2A2C38] transition-all text-[#2A2C38] font-bold duration-200 hover:text-white px-4 py-10 cursor-pointer"
                    }
                  >
                    <span>
                      {item.label}
                      <ArrowDropDownIcon
                        style={{ fill: isHovered ? "white" : "black" }}
                      />
                    </span>
                  </NavLink>
                  {dropdownOpen && (
                    <ul className="absolute w-[300px]  top-10  bg-white shadow-md mt-2">
                      {serviceItems.map((service) => (
                        <li
                          key={service.label}
                          className="px-6 py-4 border-b-2 text-[#2A2C38] font-semibold hover:bg-gray-100 cursor-pointer"
                        >
                          <NavLink
                            to={service.path}
                            className="text-black hover:text-[#2A2C38]"
                          >
                            <span>{service.label}</span>
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )
            )}
            <li className=" uppercase px-4 text-sm py-4 rounded-md hover:scale-110 bg-[#2A2C38] text-white font-bold transition-all duration-150">
              call us anytime
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
