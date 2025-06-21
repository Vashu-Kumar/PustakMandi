import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (!storedUser) {
            navigate('/PustakMandi/login');
        } else {
            setUser(JSON.parse(storedUser));
        }
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        alert('Logged out successfully!');
        navigate('/PustakMandi/login');
    };

    if (!user) return null;

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md text-center">
                <h2 className="text-2xl font-bold mb-4">👋 Hi, {user.username}</h2>
                <p className="mb-2"><strong>User ID:</strong> {user.id}</p>
                <p className="mb-4"><strong>Role:</strong> {user.role}</p>
                <button
                    onClick={handleLogout}
                    className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition"
                >
                    Logout
                </button>
            </div>
        </div>
    );
};

export default Profile;
