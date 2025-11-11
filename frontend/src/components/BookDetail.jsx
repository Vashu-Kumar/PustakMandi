<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BASE_URL, IMAGE_URL } from "../../config";

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        // 🟢 Try fetching from local DB
        const res = await axios.get(`${BASE_URL}/books/${id}`);
        setBook(res.data);
      } catch (err) {
        console.warn("Local fetch failed, trying Gutendex by title...");
        try {
          // 🟡 If not found in local DB, try fetching from Gutendex using title
          const title = decodeURIComponent(id);
          const res = await axios.get(`${BASE_URL}/books/title/${title}`);
          setBook(res.data);
        } catch (gutendexErr) {
          console.error("❌ Error fetching from Gutendex:", gutendexErr);
        }
      }
    };

    fetchBook();
  }, [id]);

  if (!book)
    return <h2 className="text-center mt-20 text-gray-500">Loading book...</h2>;

  // 🟢 Handle Read Button
  const handleReadNow = () => {
    if (book.source === "gutenberg" && book.readLink) {
      window.open(book.readLink, "_blank"); // Open Gutenberg book link
    } else {
      alert("Reading not available for this book yet.");
    }
  };

  return (
    <div className="max-padd-container pt-32 max-w-4xl mx-auto py-16 px-4">
      <div className="flex flex-col md:flex-row gap-8">
        {/* 🖼️ Book Image */}
        <img
          src={
            book.imageURI?.startsWith("http")
              ? book.imageURI
              : `${IMAGE_URL}${book.imageURI}`
          }
          alt={book.title}
          className="w-64 h-80 object-cover rounded-xl shadow-lg"
        />

        {/* 📘 Book Info */}
        <div>
          <h1 className="text-3xl font-bold mb-4">{book.title}</h1>
          <p className="text-gray-600 mb-2">
            <strong>Author:</strong> {book.author || "Unknown"}
          </p>
          <p className="text-gray-600 mb-2">
            <strong>Genre:</strong> {book.genre || "N/A"}
          </p>
          <p className="text-gray-800 mt-4 leading-relaxed">
            {book.description || "No description available."}
          </p>

          {/* 🟢 Read Button */}
          <button
            onClick={handleReadNow}
            className="mt-6 bg-blue-700 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition duration-300"
          >
            📖 Read Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
=======
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
>>>>>>> aea2970d30785cb3ad372155b984cc8132ea8a01
