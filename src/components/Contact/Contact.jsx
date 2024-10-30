/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import BannerPng from "../../assets/banner.png"; // Image for the right side
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section>
      {/* Contact Section: Form on Left, Image on Right */}
      <div className="container py-14 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-8 space-y-6 md:space-y-0">
        {/* Left Side: Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="bg-white p-8 rounded-lg shadow-md space-y-4 flex flex-col justify-center"
        >
          <h2 className="text-2xl font-semibold text-center">Contact Form</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="border rounded-md p-2"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="border rounded-md p-2"
              required
            />
          </div>
          <textarea
            placeholder="Your Message"
            className="border rounded-md p-2 w-full"
            rows="4"
            required
          ></textarea>
          <button type="submit" className="primary-btn w-full">
            Send Message
          </button>
        </motion.div>

        {/* Right Side: Contact Image */}
        <div className="flex justify-center items-center">
          <motion.img
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            src={BannerPng}
            alt="Contact"
            className="w-[350px] md:max-w-[450px] object-cover drop-shadow"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
