import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL, IMAGE_URL } from '../../config';

const BookDetail = () => {
    const { id } = useParams();
    const [book, setBook] = useState(null);

    useEffect(() => {
        axios.get(`${BASE_URL}/book/${id}`)
            .then(res => setBook(res.data))
            .catch(err => console.error(err));
    }, [id]);

    if (!book) return <div className="p-4">Loading...</div>;

    return (
        <div className="flex flex-col md:flex-row my-22 mx-8 gap-6 max-w-6xl">
            {/* Book Cover */}
            <div className="flex-shrink-0">
                <img
                    src={`${IMAGE_URL}${book.imageURI}`}
                    alt={book.title}
                    className="w-full md:w-64 h-auto rounded shadow-md"
                />
                <button className="mt-4 w-full bg-blue-700 text-white py-2 px-4 rounded hover:bg-blue-800 transition">
                    Read Now
                </button>
            </div>

            {/* Book Info */}
            <div className="flex flex-col justify-start flex-grow">
                <h1 className="text-3xl font-bold mb-2">{book.title}</h1>
                <h2 className="text-xl text-gray-700 mb-1">{book.author}</h2>
                <p className="text-sm text-gray-500 mb-4">
                    Genre: <span className="font-medium">{book.genre}</span> | Likes: ❤️ {book.likes}
                </p>

                <p className="text-gray-800 leading-relaxed mb-6">{book.description || "No description available."}</p>

                <div className="flex items-center gap-4">
                    <button className="text-red-600 hover:text-red-800 font-semibold">
                        ❤️ Like
                    </button>
                    <button className="text-gray-600 hover:text-gray-800 font-semibold">
                        🔁 Share
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BookDetail;
