import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ADMIN_URL } from '../../config';

const AddBook = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        title: '',
        author: '',
        genre: '',
        imageURI: '',
        description: ''
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { title, author, genre, description } = formData;

        if (!title || !author || !genre) {
            alert('Title, Author, and Genre are required!');
            return;
        }

        try {
            const token = localStorage.getItem('token');
            const response = await axios.post(
                `${ADMIN_URL}/addBook`,
                formData,
                {
                    headers: {
                        Authorization: `Bearer ${token}`, // 👈 Include the token
                    },
                }
            );

            console.log("📘 Book added:", response.data);
            alert("Book added successfully!");

            setFormData({
                title: '',
                author: '',
                genre: '',
                imageURI: '',
                description: ''

            });

            navigate('/PustakMandi/books');
        } catch (error) {
            console.error("❌ Error adding book:", error.response?.data || error.message);
            alert("Error adding book. See console for details.");
        }
    };

    return (
        <div className="flex justify-center items-center py-12 pb-28 min-h-screen bg-gray-50 ">
            <div className="w-full max-w-md bg-white p-6 rounded-xl shadow-md">
                <h2 className="text-2xl font-bold  text-center">Add a New Book</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    {["title", "author", "genre", "imageURI", "description"].map((field) => (
                        <div key={field}>
                            <label htmlFor={field} className="block text-sm font-medium text-gray-700 capitalize">
                                {field === "imageURI" ? "Image URI" : field}
                            </label>
                            <input
                                type="text"
                                id={field}
                                value={formData[field]}
                                onChange={handleChange}
                                required={["title", "author", "genre"].includes(field)}
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>
                    ))}
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
                    >
                        Add Book
                    </button>
                </form>
            </div>
        </div>
    );

};

export default AddBook;
