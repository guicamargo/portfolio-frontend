import React, { useState, useEffect, useRef } from 'react';
import { LogOut, CircleUser } from 'lucide-react'; // Alternative to Font Awesome icon
import './styles.css';

// Component for a profile dropdown menu
const ProfileDropdown = () => {
  // State to manage the visibility of the dropdown menu
  const [isMenuActive, setIsMenuActive] = useState(false);
  const dropdownRef = useRef(null); // Ref for the dropdown element

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

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Render the profile dropdown menu
  return (
    <div className="action" ref={dropdownRef}>
      <div 
        className="profile cursor-pointer" 
        onClick={menuToggle}
      >
        <div className="circleUser">
            <CircleUser size={25} />
        </div>
      </div>
      <div className={`menu ${isMenuActive ? 'active' : ''}`}>
        <h3 className="text-center">
          NAME USER<br />
          <span className="text-sm text-gray-500">role</span>
        </h3>
        <ul className="mt-4">
          <li className="mb-2">
            <button 
              className="flex items-center w-full text-left p-2 hover:bg-gray-100"
              onClick={() => {
                // Logout logic can be added here
              }}
            >
              <LogOut className="mr-2" size={20} />
              Logout
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProfileDropdown;