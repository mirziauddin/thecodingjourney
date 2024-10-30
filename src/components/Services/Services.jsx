// /* eslint-disable no-unused-vars */
// /* eslint-disable react/no-unescaped-entities */
// import React from "react";
// import { RiComputerLine } from "react-icons/ri";
// import { CiMobile3 } from "react-icons/ci";
// import { TbWorldWww } from "react-icons/tb";
// import { IoMdHappy } from "react-icons/io";
// import { BiSupport } from "react-icons/bi";
// import { IoPulseOutline } from "react-icons/io5";
// import { motion } from "framer-motion";

// const ServicesData = [
//   {
//     id: 1,
//     title: "Web Development",
//     icon: <TbWorldWww />,
//   },
//   {
//     id: 2,
//     title: "Mobile development",
//     icon: <CiMobile3 />,
//   },
//   {
//     id: 3,
//     title: "Software development",
//     icon: <RiComputerLine />,
//   },
//   {
//     id: 4,
//     title: "Satisfied clients",
//     icon: <IoMdHappy />,
//   },
//   {
//     id: 5,
//     title: "SEO optimization",
//     icon: <IoPulseOutline />,
//   },
//   {
//     id: 6,
//     title: "24/7 support",
//     icon: <BiSupport />,
//   },
// ];

// const Services = () => {
//   return (
//     <section className="bg-white">
//       <div className="container pb-14 pt-16 overflow-hidden">
//         <h1 className="text-4xl font-bold text-left pb-10">
//           Services we provide
//         </h1>
//         <div className="flex overflow-hidden">
//           <motion.div
//             className="flex gap-8"
//             animate={{
//               x: ["0%", "-100%"], // Move from right to left
//             }}
//             transition={{
//               duration: 15, // Adjust duration for speed
//               ease: "linear",
//               repeat: Infinity,
//             }}
//           >
//             {/* Duplicate the data to create a seamless effect */}
//             {[...ServicesData, ...ServicesData].map((service, index) => (
//               <motion.div
//                 key={index}
//                 className="bg-[#f4f4f4] rounded-2xl flex flex-col gap-4 items-center justify-center p-4 py-7 hover:bg-white hover:scale-110 duration-300 hover:shadow-2xl"
//                 style={{ minWidth: "200px" }}
//               >
//                 <div className="text-4xl mb-4">{service.icon}</div>
//                 <h1 className="text-lg font-semibold text-center px-3">
//                   {service.title}
//                 </h1>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>

//         <div className="container pb-14 pt-16 ">
//           <motion.div
//             className="flex gap-8"
//             animate={{
//               x: ["0%", "-100%"],
//             }}
//             transition={{
//               repeat: Infinity,
//               duration: 15,
//               ease: "linear",
//             }}
//           >
//             {[...ServicesData, ...ServicesData].map((service, index) => (
//               <motion.div
//                 key={index}
//                 className="bg-[#f4f4f4] rounded-2xl flex flex-col gap-4 items-center justify-center p-4 py-7 hover:bg-white hover:scale-110 duration-300 hover:shadow-2xl"
//                 style={{ minWidth: "200px" }}
//               >
//                 <div className="text-4xl mb-4"> {service.icon}</div>
//                 <h1 className="text-lg font-semibold text-center px-3">
//                   {service.title}
//                 </h1>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>

//         <div className="flex overflow-hidden">
//           <motion.div
//             className="flex gap-8"
//             animate={{
//               x: ["0%", "-100%"], // Move left to right
//             }}
//             transition={{
//               repeat: Infinity,
//               duration: 15,
//               ease: "linear",
//             }}
//           >
//             {[...ServicesData, ...ServicesData].map((service, index) => (
//               <motion.div
//                 key={index}
//                 className="bg-[#f4f4f4] rounded-2xl flex flex-col gap-4 items-center justify-center p-4 py-7 hover:bg-white hover:scale-110 duration-300 hover:shadow-2xl"
//                 style={{ minWidth: "200px" }}
//               >
//                 <div className="text-4xl mb-4">{service.icon}</div>
//                 <h1 className="text-lg font-semibold text-center px-3">
//                   {service.title}
//                 </h1>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from "react";
import { RiComputerLine } from "react-icons/ri";
import { CiMobile3 } from "react-icons/ci";
import { TbWorldWww } from "react-icons/tb";
import { IoMdHappy } from "react-icons/io";
import { BiSupport } from "react-icons/bi";
import { IoPulseOutline } from "react-icons/io5";
import { motion } from "framer-motion";

const ServicesData = [
  {
    id: 1,
    title: "Web Development",
    icon: <TbWorldWww />,
  },
  {
    id: 2,
    title: "Mobile Development",
    icon: <CiMobile3 />,
  },
  {
    id: 3,
    title: "Software Development",
    icon: <RiComputerLine />,
  },
  {
    id: 4,
    title: "Satisfied Clients",
    icon: <IoMdHappy />,
  },
  {
    id: 5,
    title: "SEO Optimization",
    icon: <IoPulseOutline />,
  },
  {
    id: 6,
    title: "24/7 Support",
    icon: <BiSupport />,
  },
];

const Services = () => {
  // Duplicate the ServicesData for seamless scrolling
  const services = [...ServicesData, ...ServicesData];

  return (
    <section className="bg-white">
      <div className="container pb-14 pt-16 overflow-hidden">
        <h1 className="text-4xl font-bold text-left pb-10">
          Services We Provide
        </h1>
        <hr className="bold" />
        <div className="flex pb-14 pt-16">
          <motion.div
            className="flex gap-8"
            animate={{
              x: ["-50%", "0%"], // Move from left to right
            }}
            transition={{
              duration: 15, // Adjust duration for speed
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-[#f4f4f4] rounded-2xl flex flex-col gap-4 items-center justify-center p-4 py-7 hover:bg-white hover:scale-110 duration-300 hover:shadow-2xl"
                style={{ minWidth: "200px" }}
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h1 className="text-lg font-semibold text-center px-3">
                  {service.title}
                </h1>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <h1 className="text-4xl font-bold text-left pb-10">
          Services We Provide
        </h1>
        <div className="flex pb-14 pt-16">
          <motion.div
            className="flex gap-8"
            animate={{
              x: ["-50%", "0%"], // Move from left to right
            }}
            transition={{
              duration: 15, // Adjust duration for speed
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-[#f4f4f4] rounded-2xl flex flex-col gap-4 items-center justify-center p-4 py-7 hover:bg-white hover:scale-110 duration-300 hover:shadow-2xl"
                style={{ minWidth: "200px" }}
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h1 className="text-lg font-semibold text-center px-3">
                  {service.title}
                </h1>
              </motion.div>
            ))}
          </motion.div>
        </div>
        <h1 className="text-4xl font-bold text-left pb-10">
          Services We Provide
        </h1>
        <div className="flex pb-14 pt-16">
          <motion.div
            className="flex gap-8"
            animate={{
              x: ["-50%", "0%"], // Move from left to right
            }}
            transition={{
              duration: 15, // Adjust duration for speed
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-[#f4f4f4] rounded-2xl flex flex-col gap-4 items-center justify-center p-4 py-7 hover:bg-white hover:scale-110 duration-300 hover:shadow-2xl"
                style={{ minWidth: "200px" }}
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h1 className="text-lg font-semibold text-center px-3">
                  {service.title}
                </h1>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
