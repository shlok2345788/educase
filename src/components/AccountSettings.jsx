

import { useRef, useState, useEffect } from 'react';
import { Camera } from 'lucide-react';

export default function AccountSettings() {
    const user = JSON.parse(localStorage.getItem('user'));
    const fileInputRef = useRef(null);
    const [profilePic, setProfilePic] = useState(null);

    // Load from localStorage when page loads
    useEffect(() => {
        const savedImage = localStorage.getItem('profilePic');
        if (savedImage) {
            setProfilePic(savedImage);
        } else {
            setProfilePic('https://via.placeholder.com/150'); // default pic
        }
    }, []);

    const handleImageClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const base64String = reader.result;
                setProfilePic(base64String);
                localStorage.setItem('profilePic', base64String); // Save to localStorage
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="max-w-md mx-auto p-6 bg-white shadow rounded-lg mt-10">
            <h2 className="text-xl font-semibold mb-6">Account Settings</h2>

            <div className="flex items-center gap-4">
                {/* Profile image container */}
                <div className="relative">
                    <img
                        src={profilePic}
                        alt="Profile"
                        className="w-20 h-20 rounded-full object-cover border-2 border-gray-300"
                    />

                    {/* Camera Icon */}
                    <div
                        onClick={handleImageClick}
                        className="absolute bottom-0 left-0 bg-purple-600 p-1.5 rounded-full cursor-pointer hover:bg-purple-700"
                    >
                        <Camera className="text-white w-5 h-5" />
                    </div>

                    {/* Hidden file input */}
                    <input
                        type="file"
                        ref={fileInputRef}
                        className="hidden"
                        accept="image/*"
                        onChange={handleFileChange}
                    />
                </div>

                {/* Name and Email */}
                <div>
                    <h3 className="font-semibold text-lg">{user?.fullName}</h3>
                    <p className="text-gray-600 text-sm">{user?.email}</p>
                </div>
            </div>

            {/* Some Description */}
            <p className="mt-4 text-gray-700 text-sm">
                Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy
                Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquam Erat, Sed Diam
            </p>
        </div>
    );
}
