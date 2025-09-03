import React from 'react';

const LogoutConfirmation = ({ onConfirm, onCancel }) => {
  return (
    <div className="text-center">
      <div className="mb-6">
        <div className="w-16 h-16 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center">
          <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-black mb-2">Confirm Logout</h3>
        <p className="text-sm text-black/70">
          Are you sure you want to logout? You'll need to sign in again to access your account.
        </p>
      </div>
      
      <div className="flex gap-3 justify-center">
        <button
          onClick={onCancel}
          className="glass-btn-secondary px-6 py-2.5"
        >
          Cancel
        </button>
        <button
          onClick={onConfirm}
          className="glass-btn-primary px-6 py-2.5"
        >
          Yes, Logout
        </button>
      </div>
    </div>
  );
};

export default LogoutConfirmation;
