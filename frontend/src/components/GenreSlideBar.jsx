import React from 'react'
import { useNavigate } from 'react-router-dom'
const genres = [
    'Fiction', 'Non-Fiction', 'Mystery', 'Horror', 'Purana / Mythology', 'Fantasy', 'Science-Fiction',
    'Dystopian', 'Political Satire', 'Thriller', 'Psychological Thriller', 'Romantic Thriller',
    'Romance', 'Historical Fiction', 'Epic / Scripture', 'Scripture / Veda', 'Politics / Economics'
]
const GenreSlideBar = () => {
    const navigate = useNavigate();

    const handleGenreClick = (genre) => {
        const formatted =  encodeURIComponent(genre);
        navigate(`/PustakMandi/books?genre=${formatted}`);
    }
    return (
        <div className='w-48 h-screen fixed overflow-y-auto bg-white shadow-md px-4 py-4 border-r border-gray-200'>
            <h2 className='text-lg font-semibold mb-4'>Genres</h2>
            <ul className='space-y-2'>
                {genres.map((genre, index) => (
                    <li
                        key={index}
                        onClick={() => handleGenreClick(genre)}
                        className='cursor-pointer hover:bg-green-100 rounded-md px-2 py-1 transition'
                    >
                        {genre}
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default GenreSlideBar
