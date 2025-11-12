import { Link } from "react-router-dom";
import logoImg from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-l from-primary via-white to-primary py-4 border-t border-gray-300">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 max-w-6xl mx-auto px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 font-bold text-lg">
          <img src={logoImg} alt="PustakMandi Logo" className="h-8" />
          <span>PustakMandi</span>
        </Link>

        {/* Copyright */}
        <p className="text-sm font-medium text-gray-700">
          &copy; {new Date().getFullYear()} PustakMandi. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
