/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import { IoIosArrowRoundForward, IoMdMenu, IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";

const NavbarMenu = [
  { id: 1, title: "Home", path: "/" },
  { id: 2, title: "Services", path: "/services" },
  { id: 3, title: "About Us", path: "/about" },
  { id: 4, title: "Our Team", path: "/team" },
  { id: 5, title: "Contact Us", path: "/contact" },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="relative z-20">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="container py-10 flex justify-between items-center"
      >
        {/* Logo section */}
        <div>
          <h1 className="font-bold text-2xl">Let's build Website With Me</h1>
        </div>
        {/* Desktop Menu section */}
        <div className="hidden lg:block">
          <ul className="flex items-center gap-3">
            {NavbarMenu.map((menu) => (
              <li key={menu.id}>
                <a
                  href={menu.path}
                  className="inline-block py-2 px-3 hover:text-secondary relative group"
                >
                  <div className="w-2 h-2 bg-secondary absolute mt-4 rounded-full left-1/2 -translate-x-1/2 top-1/2 bottom-0 group-hover:block hidden"></div>
                  {menu.title}
                </a>
              </li>
            ))}
            <button className="primary-btn flex items-center gap-2 group">
              Get Started
              <IoIosArrowRoundForward className="text-xl group-hover:translate-x-2 group-hover:-rotate-45 duration-300" />
            </button>
          </ul>
        </div>
        {/* Mobile Hamburger menu section */}
        <div className="lg:hidden">
          <button onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? (
              <IoMdClose className="text-4xl" />
            ) : (
              <IoMdMenu className="text-4xl" />
            )}
          </button>
        </div>
      </motion.div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-black text-white absolute top-20 left-0 w-full z-10 shadow-md">
          <ul className="flex flex-col items-center gap-4 py-6">
            {NavbarMenu.map((menu) => (
              <li key={menu.id}>
                <a
                  href={menu.path}
                  className="text-lg font-medium hover:text-secondary"
                  onClick={toggleMobileMenu}
                >
                  {menu.title}
                </a>
              </li>
            ))}
            <button className="primary-btn flex items-center gap-2 mt-4">
              Get Started
              <IoIosArrowRoundForward className="text-xl" />
            </button>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

// /* eslint-disable no-unused-vars */
// /* eslint-disable react/no-unescaped-entities */
// import React, { useState, useEffect } from "react";
// import { IoIosArrowRoundForward, IoMdMenu } from "react-icons/io";
// import { motion } from "framer-motion";

// const NavbarMenu = [
//   { id: 1, title: "Home", path: "/" },
//   { id: 2, title: "Services", link: "#" },
//   { id: 3, title: "About Us", link: "#" },
//   { id: 4, title: "Our Team", link: "#" },
//   { id: 5, title: "Contact Us", link: "#" },
// ];

// const Navbar = () => {
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   useEffect(() => {
//     document.documentElement.classList.toggle("dark", isDarkMode);
//   }, [isDarkMode]);

//   return (
//     <nav className="relative z-20 lg:fixed lg:top-0 lg:w-full sm:fixed sm:bottom-0 sm:w-full">
//       <motion.div
//         initial={{ opacity: 0, y: -50 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="container py-4 flex justify-between items-center"
//       >
//         {/* Logo section */}
//         <div>
//           <h1 className="font-bold text-2xl">The Coding Journey</h1>
//         </div>

//         {/* Menu section for large screens */}
//         <div className="hidden lg:flex items-center gap-3">
//           <ul className="flex items-center gap-3">
//             {NavbarMenu.map((menu) => (
//               <li key={menu.id}>
//                 <a
//                   href={menu.path}
//                   className="inline-block py-2 px-3 hover:text-secondary relative group"
//                 >
//                   <div className="w-2 h-2 bg-secondary absolute mt-4 rounded-full left-1/2 -translate-x-1/2 top-1/2 bottom-0 group-hover:block hidden"></div>
//                   {menu.title}
//                 </a>
//               </li>
//             ))}
//             <button className="primary-btn flex items-center gap-2 group">
//               Get Started
//               <IoIosArrowRoundForward className="text-xl group-hover:translate-x-2 group-hover:-rotate-45 duration-300" />
//             </button>
//           </ul>

//           {/* Dark Mode Toggle on the right */}
//           <button
//             onClick={() => setIsDarkMode(!isDarkMode)}
//             className="ml-4 p-2 border rounded"
//           >
//             {isDarkMode ? "Light Mode" : "Dark Mode"}
//           </button>
//         </div>

//         {/* Mobile Hamburger menu section */}
//         <div className="lg:hidden">
//           <IoMdMenu className="text-4xl" />
//         </div>
//       </motion.div>
//     </nav>
//   );
// };

// export default Navbar;
