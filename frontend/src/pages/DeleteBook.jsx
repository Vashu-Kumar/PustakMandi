import React, { useState } from 'react';
import axios from 'axios';
import { ADMIN_URL } from '../../config';

const DeleteBook = () => {
    const [deleteTitle, setDeleteTitle] = useState('');

    const handleDelete = async () => {
        const trimmedTitle = deleteTitle.trim();

        if (!trimmedTitle) {
            alert('Please enter a book title to delete.');
            return;
        }

        const confirmDelete = window.confirm(`Are you sure you want to delete "${trimmedTitle}"?`);
        if (!confirmDelete) return;

        try {
            await axios.delete(`${ADMIN_URL}/deleteBook/${encodeURIComponent(trimmedTitle)}`);
            alert(`Book "${trimmedTitle}" deleted successfully.`);
            setDeleteTitle('');
        } catch (error) {
            console.error("❌ Error deleting book:", error.response?.data || error.message);
            alert(error.response?.data?.message || "Error deleting book. See console for details.");
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-50 p-4">
            <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-md">
                <h3 className="text-xl font-semibold mb-4 text-center">Delete Book by Title</h3>
                <div className="flex flex-col space-y-4">
                    <input
                        type="text"
                        placeholder="Enter book title to delete"
                        value={deleteTitle}
                        onChange={(e) => setDeleteTitle(e.target.value)}
                        className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 outline-none"
                    />
                    <button
                        type="button"
                        onClick={handleDelete}
                        className="bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition"
                    >
                        Delete Book
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DeleteBook;
