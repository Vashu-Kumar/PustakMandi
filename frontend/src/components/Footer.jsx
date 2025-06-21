import React from "react";

const Footer = () => {
    return (
        <footer className="fixed bottom-0 z-10 w-full bg-gray-800 text-gray-300 p-4 text-center shadow-lg">
            <p className="text-sm font-bold">
                &copy; {new Date().getFullYear()} PUSHTAKMANDI. All rights reserved.
            </p>
            <p className="text-xs text-gray-400 font-bold">
                Made with ❤️ by Vasu and Anirudh.
            </p>
        </footer>
    );
};

export default Footer;
