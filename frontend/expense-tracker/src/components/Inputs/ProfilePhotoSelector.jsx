import React, { useRef, useState, useEffect } from 'react';
import { LuUser, LuUpload, LuTrash } from "react-icons/lu";

const ProfilePhotoSelector = ({image, setImage}) => {
    const inputRef = useRef(null);
    const [previewUrl, setPreviewUrl] = useState(null);

    // Update previewUrl when image prop changes
    useEffect(() => {
        if (image && typeof image === 'object') {
            // If image is a File object, create preview URL
            const preview = URL.createObjectURL(image);
            setPreviewUrl(preview);
            
            // Cleanup function to revoke the URL when component unmounts or image changes
            return () => URL.revokeObjectURL(preview);
        } else if (typeof image === 'string') {
            // If image is already a URL string
            setPreviewUrl(image);
        } else {
            // If no image
            setPreviewUrl(null);
        }
    }, [image]);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file && file.type.startsWith('image/')) {
            setImage(file);
        }
    };

    const handleRemoveImage = () => {
        setImage(null);
        setPreviewUrl(null);
        // Reset the input field
        if (inputRef.current) {
            inputRef.current.value = '';
        }
    };

    const onChooseFile = () => {
        inputRef.current.click();
    };

    return (
        <div className="flex justify-start mb-2">
            <input 
                type="file"
                accept="image/*"
                ref={inputRef}
                onChange={handleImageChange}  //
                className="hidden"
            />

            {!image ? (
                <button
                    type="button"
                    onClick={onChooseFile}
                    className="w-28 h-28 flex flex-col items-center justify-center bg-white/50 border-2 border-dashed border-black/20 hover:border-[rgba(255,102,81,0.6)] rounded-2xl shadow-[0_8px_24px_rgba(31,38,135,0.15)] transition"
                >
                    <LuUpload className="text-2xl text-black/60 mb-1" />
                    <span className="text-xs text-black/60">Upload photo</span>
                </button>
            ) : (
                <div className="relative">
                    <img  
                        src={previewUrl}
                        alt="profile photo"
                        className="w-24 h-24 rounded-2xl object-cover"  
                    />
                    <button
                        type="button"
                        className="w-9 h-9 flex items-center justify-center bg-red-500 text-white rounded-full absolute -bottom-1 -right-1"  
                        onClick={handleRemoveImage} 
                    >
                        <LuTrash />
                    </button>
                </div> 
            )}
        </div>
    )
}

export default ProfilePhotoSelector