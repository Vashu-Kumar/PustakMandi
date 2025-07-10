import React, { useState } from 'react';
import axios from 'axios';

const LikeButton = ({ bookId, initialLikes, isLiked, onLikeToggle }) => {
    const [liked, setLiked] = useState(isLiked || false);
    const [likes, setLikes] = useState(initialLikes || 0);

    const token = localStorage.getItem('token'); // or from context

    const handleClick = async () => {
        if (!token) {
            alert("You must be logged in to like books.");
            return;
        }

        try {
            const endpoint = liked ? 'unlike' : 'like';
            const res = await axios.post(
                `${import.meta.env.VITE_BASE_URL}/books/${bookId}/${endpoint}`,
                {},
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            setLiked(!liked);
            setLikes(res.data.likes);

            // Optional callback to parent
            if (onLikeToggle) onLikeToggle(!liked, res.data.likes);
        } catch (err) {
            console.error(err);
            alert(err.response?.data?.error || 'Something went wrong');
        }
    };

    return (
        <button
            onClick={handleClick}
            className={`flex items-center gap-1 px-3 py-1 rounded transition 
        ${liked ? 'bg-red-100 text-red-600' : 'bg-gray-100 text-gray-700'} 
        hover:bg-red-200`}
        >
            {liked ? '❤️ Liked' : '🤍 Like'}
            <span className="text-sm">({likes})</span>
        </button>
    );
};

export default LikeButton;
