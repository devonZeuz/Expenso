import React, { useContext, useState } from "react";
import { SIDE_MENU_DATA } from "../../utils/data";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import CharAvatar from "../Cards/CharAvatar";
import Modal from "../Modal";
import LogoutConfirmation from "../LogoutConfirmation";

const SideMenu = ({ activeMenu }) => {
  const { user, clearUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const handleClick = (route) => {
    if (route === "logout") {
      setShowLogoutModal(true);
      return;
    }
    navigate(route);
  };

  const handleLogout = () => {
    localStorage.clear();
    clearUser();
    navigate("/login");
  };

  const handleLogoutConfirm = () => {
    setShowLogoutModal(false);
    handleLogout();
  };

  const handleLogoutCancel = () => {
    setShowLogoutModal(false);
  };

  return (
    <div className="w-64 h-[calc(100vh-61px)] p-5 sticky top-2 z-20">
      {/* Profile Section removed to avoid duplication with top-right navbar */}

      {/* Menu Items - keep container centered and sticky */}
      <div className="sticky top-[45vh] -translate-y-1/2">
      {SIDE_MENU_DATA.map((item, index) => (
        <button
          key={`menu_${index}`}
          className={`w-full flex items-center gap-4 text-[15px] py-3 px-6 rounded-xl mb-3 transition ${
            activeMenu === item.label
              ? "text-white bg-[rgba(255,50,0,0.9)] border border-white/40 backdrop-blur-xl"
              : "text-black hover:bg-white/60"
          }`}
          onClick={() => handleClick(item.path)}
        >
          <item.icon className="text-xl" />
          {item.label}
        </button>
      ))}
      </div>

      {/* Logout Confirmation Modal */}
      <Modal
        isOpen={showLogoutModal}
        onClose={handleLogoutCancel}
        title=""
      >
        <LogoutConfirmation
          onConfirm={handleLogoutConfirm}
          onCancel={handleLogoutCancel}
        />
      </Modal>
    </div>
  );
};

export default SideMenu;
