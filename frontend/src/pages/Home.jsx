<<<<<<< HEAD
import React from 'react'
import Hero from '../components/Hero.jsx'
import Categories from '../components/Categories.jsx'
import NewArrivals from '../components/NewArrivals.jsx'


const Home = () => {
  return (
    <div>
      <Hero />
      <Categories />
      <NewArrivals />
    </div>
  )
}

export default Home
=======
import React from "react";
import { Link } from "react-router";


const Home = () => {
    return (
        <div className="bg-gray-900 text-white">
            {/* Hero Section with Background Image */}
            <section
                className="relative bg-cover bg-center bg-no-repeat h-screen flex items-center justify-center  "
                style={{
                    backgroundImage:
                        "url('https://gnlu.ac.in/Content/library/images/library.jpg')",
                }}
            >
                <div className="bg-black opacity-70 w-full h-full absolute inset-0"></div>
                <div className="relative text-center px-6">
                    <h1 className="text-5xl font-bold mb-4 text-white">
                        Welcome to OpenBook Library
                    </h1>
                    <p className="text-xl mb-6 text-white">
                        A place where stories live and knowledge thrives.
                    </p>
                    <Link
                        to="/PustakMandi/books"
                        className=" bg-violet-600 text-white font-semibold px-6 py-3 rounded hover:   transition shadow-md"
                    >
                        Explore the Collection
                    </Link>
                </div>
            </section>

            {/* What We Offer */}
            <section id="explore" className="py-16 px-6 ">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-10  ">What We Offer</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="     p-6 rounded shadow-md">
                            <h3 className="font-semibold text-xl mb-2  ">
                                Vast Book Collection
                            </h3>
                            <p>
                                Over 50,000 books including fiction, non-fiction, and academic
                                titles.
                            </p>
                        </div>
                        <div className="     p-6 rounded shadow-md">
                            <h3 className="font-semibold text-xl mb-2  ">
                                Community Programs
                            </h3>
                            <p>
                                Join reading clubs, attend events, and connect with fellow book
                                lovers.
                            </p>
                        </div>
                        <div className="     p-6 rounded shadow-md">
                            <h3 className="font-semibold text-xl mb-2  ">
                                Book of the Month
                            </h3>
                            <p>
                                Discover a must-read title every month, handpicked by our
                                experts!
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Books */}
            <section className="py-6 px-6   ">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-10  ">
                        Featured Books
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="       p-6 rounded shadow-md">
                            <h3 className="font-semibold text-xl mb-2  ">
                                "The Great Gatsby"
                            </h3>
                            <p>A timeless classic exploring wealth and ambition.</p>
                        </div>
                        <div className="       p-6 rounded shadow-md">
                            <h3 className="font-semibold text-xl mb-2  ">
                                "Sapiens: A Brief History of Humankind"
                            </h3>
                            <p>
                                A fascinating look at human evolution and societal development.
                            </p>
                        </div>
                        <div className="       p-6 rounded shadow-md">
                            <h3 className="font-semibold text-xl mb-2  ">
                                "Atomic Habits"
                            </h3>
                            <p>Discover small habits that lead to big success in life.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Upcoming Events */}


            {/* Testimonials */}
            <section className="py-16 px-6   ">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-10  ">
                        What Our Readers Say
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="       p-6 rounded shadow-md">
                            <p className="italic  ">
                                "The library has completely transformed my reading habits!"
                            </p>
                            <h3 className="font-semibold text-lg mt-4  ">
                                - Arjun Patel
                            </h3>
                        </div>
                        <div className="       p-6 rounded shadow-md">
                            <p className="italic  ">
                                "I love the selection of books and the community events!"
                            </p>
                            <h3 className="font-semibold text-lg mt-4  ">
                                - Meera Sharma
                            </h3>
                        </div>
                        <div className="       p-6 rounded shadow-md">
                            <p className="italic  ">
                                "A fantastic place to discover new authors and genres!"
                            </p>
                            <h3 className="font-semibold text-lg mt-4  ">
                                - Rohan Gupta
                            </h3>
                        </div>
                        <div className="       p-6 rounded shadow-md">
                            <p className="italic  ">
                                "The peaceful study zones help me stay focused on my research."
                            </p>
                            <h3 className="font-semibold text-lg mt-4  ">
                                - Sneha Verma
                            </h3>
                        </div>
                        <div className="       p-6 rounded shadow-md">
                            <p className="italic  ">
                                "Great knowledgable resources! The Book collection is amazing."
                            </p>
                            <h3 className="font-semibold text-lg mt-4  ">
                                - Aditya Singh
                            </h3>
                        </div>
                        <div className="       p-6 rounded shadow-md">
                            <p className="italic  ">
                                "I have met so many wonderful fellow book lovers here!"
                            </p>
                            <h3 className="font-semibold text-lg mt-4  ">
                                - Priya Mehta
                            </h3>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-16 mb-10 px-6       ">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-4  ">
                        Become a Member Today
                    </h2>
                    <p className="mb-6  ">
                        Join our library and gain access to thousands of resources — free of
                        charge!
                    </p>
                    <Link
                        to="/PustakMandi/register"
                        className="bg-fuchsia-500 text-gray-900 font-semibold px-6 py-3 rounded-lg hover:bg-violet-500 transition shadow-md"
                    >
                        Sign Up Now
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Home;
>>>>>>> aea2970d30785cb3ad372155b984cc8132ea8a01
