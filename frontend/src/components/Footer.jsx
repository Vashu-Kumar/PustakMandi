<<<<<<< HEAD
// // import React from "react";

// // const Footer = () => {
// //     return (
// //         <footer className="bottom-0 z-10 w-full bg-gray-800 text-gray-300 p-4 text-center shadow-lg">
// //             <p className="text-sm font-bold">
// //                 &copy; {new Date().getFullYear()} PUSHTAKMANDI. All rights reserved.
// //             </p>
// //             <p className="text-xs text-gray-400 font-bold">
// //                 Made with ❤️ by Vasu.
// //             </p>
// //         </footer>
// //     );
// // };

// // export default Footer;



// import { Link } from "react-router-dom";
// import logoImg from "../assets/logo.png";


// const Footer = () => {
//     return (
//         <footer className="max-padd-container bg-gradient-to-l from-primary via-white to-primary">
//             <div className="flex flex-col md:flex-row items-start justify-between gap-10 border-b border-gray-500/30">
//                 {/* LOGO */}
//                 <div className=" flex flex-1">
//                     <Link to={"/"} className="bold-22 sx-bold-28 flex items-end gap-1">
//                         <img src="logoImg" alt="" className="h-9" />
//                         <div className="relative top-1.5">
//                             PustakMandi
//                         </div>
//                     </Link>
//                 </div>
//                 <p className="text-sm font-bold">
//                     &copy; {new Date().getFullYear()} PUSHTAKMANDI. All rights reserved.
//                 </p>
//             </div>
//         </footer>
//     )
// }

// export default Footer;


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
=======
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
>>>>>>> aea2970d30785cb3ad372155b984cc8132ea8a01
};

export default Footer;
