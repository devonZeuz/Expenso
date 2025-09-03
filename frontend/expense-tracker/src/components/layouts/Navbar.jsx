import React, { useState, useContext } from 'react';
import LOGO from "../../assets/Logo.svg";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi"; 
import SideMenu from "./SideMenu";
import { UserContext } from '../../context/UserContext';
import CharAvatar from '../Cards/CharAvatar';

const Navbar = ({ activeMenu }) => {
  const [openSideMenu, setOpenSideMenu] = useState(false);
  const { user } = useContext(UserContext);

  return (
    <div className="flex items-center gap-5 py-4 px-7 sticky top-2 z-30">
      <button
        className="block lg:hidden text-black" 
        onClick={() => setOpenSideMenu(!openSideMenu)}
      >
        {openSideMenu ? (
          <HiOutlineX className="text-2xl" />  
        ) : ( 
          <HiOutlineMenu className="text-2xl" />
        )}
      </button> 

      <img src={LOGO} alt="eXpenso" className="h-9 w-auto" />

      <div className="ml-auto flex items-center gap-3">
        {user?.profileImageUrl ? (
          <img src={user.profileImageUrl} alt="Profile" className="w-10 h-10 rounded-full object-cover" />
        ) : (
          <CharAvatar fullName={user?.fullName} width="w-10" height="h-10" />
        )}
        <span className="text-black font-medium">{user?.fullName}</span>
      </div>

      {openSideMenu && (
        <div className="fixed top-[61px] -ml-4 bg-white/60 backdrop-blur-xl">
          <SideMenu activeMenu={activeMenu} />
        </div>   
      )}
    </div>
  );
};

export default Navbar;
