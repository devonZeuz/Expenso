import React from 'react'

const DeleteAlert = ({ content, onDelete }) => {
  return (
    <div>
        <p className="text-sm text-black/80">{content}</p>

        <div className="flex justify-end mt-6">
            <button
                type="button"
                className="glass-btn-primary"
                onClick={onDelete}
            >
                Delete
            </button>    
        </div>
    </div>
  )
}

export default DeleteAlert