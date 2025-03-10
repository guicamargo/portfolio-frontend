import React, { useState, useEffect, useRef } from "react";
import { LogOut, CircleUser } from "lucide-react";
import "./styles.css";
import { useAuth } from "../../context/AuthContext/index";
import Login from "../../services/loginGoogle";
import LogoutGoogle from "../../services/logout";

// Component for a profile dropdown menu
const ProfileDropdown = () => {
  // State to manage the visibility of the dropdown menu
  const [isMenuActive, setIsMenuActive] = useState(false);
  const dropdownRef = useRef(null); // Ref for the dropdown element

  // Usando o context de autenticação em vez de estado local
  const { isAuthenticated, user } = useAuth();

  // Toggle the menu visibility
  const menuToggle = () => {
    setIsMenuActive(!isMenuActive);
  };

  // Close the menu when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsMenuActive(false); // Close the menu
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Render the profile dropdown menu
  return (
    <div className="action" ref={dropdownRef}>
      <div className="profile cursor-pointer" onClick={menuToggle}>
        {isAuthenticated && user?.picture ? (
          <img src={user.picture} alt="Profile" className="circleUser" />
        ) : (
          <div className="circleUser">
            <CircleUser size={25} />
          </div>
        )}
      </div>

      <div className={`menu ${isMenuActive ? "active" : ""}`}>
        {isAuthenticated ? (
          <>
            <h3 className="text-center">
              {user?.name || user?.given_name}
              <br />
              <span className="text-sm text-gray-500">{user?.email}</span>
            </h3>
            <ul className="mt-4">
              <li className="mb-2">
                <LogoutGoogle />
              </li>
            </ul>
          </>
        ) : (
          <div className="p-4">
            <Login />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileDropdown;
