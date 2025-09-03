import React, { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import Navbar from './Navbar';
import SideMenu from './SideMenu';
import ICON from '../../assets/icon.svg';

const DashboardLayout = ({ children, activeMenu }) => {
  const { user } = useContext(UserContext);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Background gradient + image overlay for dashboard */}
      <div className="absolute inset-0 auth-gradient-bg" />
      <div className="absolute inset-0 dashboard-bg-image" />

      <Navbar activeMenu={activeMenu} />

      <div className="flex relative z-10">
        {user && (
          <div className="max-[1080px]:hidden">
            <SideMenu activeMenu={activeMenu} /> 
          </div>
        )}

        <div className="grow mx-5">{children}</div>
      </div>

      {/* Bottom-left floating icon */}
      <img src={ICON} alt="icon" className="absolute left-5 bottom-5 w-9 h-9 md:w-10 md:h-10 opacity-95" />
    </div>
  );
};

export default DashboardLayout;
