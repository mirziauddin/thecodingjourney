/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */ import React from "react";
import { IoIosArrowRoundForward, IoMdMenu } from "react-icons/io";
import { motion } from "framer-motion";

const NavbarMenu = [
  {
    id: 1,
    title: "Home",
    path: "/",
  },
  {
    id: 2,
    title: "Services",
    link: "#",
  },
  {
    id: 3,
    title: "About Us",
    link: "#",
  },
  {
    id: 4,
    title: "Our Team",
    link: "#",
  },
  {
    id: 5,
    title: "Contact Us",
    link: "#",
  },
];
const Navbar = () => {
  return (
    <nav className="relative z-20">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="container py-10 flex justify-between items-center"
      >
        {/* Logo section */}
        <div>
          <h1 className="font-bold text-2xl">The Coding Journey</h1>
        </div>
        {/* Menu section */}
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
          <IoMdMenu className="text-4xl" />
        </div>
      </motion.div>
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
