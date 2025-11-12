import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BASE_URL, IMAGE_URL } from "../../config";
import Title from "../components/Title";
import Item from "../components/Item";
// import Header from "../components/Header";
import { FaSearch } from "react-icons/fa";

const Books = () => {
  const [books, setBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  // ✅ Fetch books (works for both MongoDB + Gutendex)
  const fetchBooks = async (query = "") => {
    try {
      const res = await axios.get(`${BASE_URL}/books`, {
        params: query ? { search: query } : {},
      });
      setBooks(res.data);
    } catch (err) {
      console.error("❌ Error fetching books:", err);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  // 🔍 Handle search
  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    fetchBooks(query);
  };

  const handleBookClick = (book) => {
    if (book.source === "gutenberg") {
      navigate(`/PustakMandi/book/${encodeURIComponent(book.title)}`);
    } else {
      navigate(`/PustakMandi/book/${book._id}`);
    }
  };

  return (
    <>

      <div className="max-padd-container py-16 pt-28">
        {/* <Title title1="All" title2="Books" titlestyles="pb-10" /> */}

        {/* 🔍 Search Bar (Responsive) */}
        <div className="flex justify-center mb-10 px-4">
          <div className="flex items-center w-full sm:w-2/3 md:w-1/2 lg:w-1/3 bg-[#1B1212] border border-gray-500 rounded-full px-4 py-2">
            <FaSearch className="text-yellow-400 text-lg mr-2" />
            <input
              type="text"
              placeholder="Search for books or authors..."
              value={searchQuery}
              onChange={handleSearch}
              className="bg-transparent w-full text-white focus:outline-none placeholder-gray-300"
            />
          </div>
        </div>

        {/* 📚 Books Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 sm:gap-8 pt-8">
          {books.length > 0 ? (
            books.map((book) => (
              <div
                key={book._id}
                onClick={() => handleBookClick(book)}
                className="cursor-pointer transition-transform duration-300 hover:scale-105"
              >
                <Item
                  book={{
                    ...book,
                    image:
                      book.imageURI?.startsWith("http")
                        ? book.imageURI
                        : `${IMAGE_URL}${book.imageURI || "default.jpg"}`,
                  }}
                />
              </div>
            ))
          ) : (
            <h4 className="text-center text-gray-500 col-span-full">
              {/* Oops! No book found. */}
              API is running slow. Please wait...
            </h4>
          )}
        </div>
      </div>
    </>
  );
};

export default Books;
