import React, { useState, useEffect, useRef } from 'react';
import { LogOut, CircleUser   } from 'lucide-react'; // Alternative to Font Awesome icon
import './styles.css';

const ProfileDropdown = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const dropdownRef = useRef(null); // Ref para o dropdown

  const menuToggle = () => {
    setIsMenuActive(!isMenuActive);
  };

  // Fechar o menu ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsMenuActive(false); // Fecha o menu
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="action" ref={dropdownRef}>
      <div 
        className="profile cursor-pointer" 
        onClick={menuToggle}
      >
        <div className="circleUser">
            <CircleUser  size={25} />
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
                // Lógica de logout
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
