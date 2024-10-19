import ChatBots from "@/components/ChatBot/ChatBots";
import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen flex flex-col transition-colors duration-300">
      {/* <ChatBots /> */}
      <section className="flex-1 flex items-center justify-center bg-white dark:bg-gray-800 p-6 md:p-12 shadow-lg transition-colors duration-300">
        <div className="max-w-4xl w-full text-center">
          <h2 className="text-3xl font-semibold mb-6 text-gray-900 dark:text-white">
            Get in Touch
          </h2>
          <p className="text-lg leading-relaxed mb-4 text-gray-700 dark:text-gray-300">
            We’d love to hear from you! Whether you have questions, feedback, or
            inquiries, feel free to reach out to us.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Address Section */}
            <div className="flex flex-col items-center bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md transition-colors duration-300">
              <FaMapMarkerAlt className="text-purple-600 text-4xl mb-4" />
              <h3 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-white">
                Our Address
              </h3>
              <p className="text-lg leading-relaxed text-center text-gray-700 dark:text-gray-300">
                Kamakhya Enterprises
              </p>
              <p className="text-lg leading-relaxed text-center text-gray-700 dark:text-gray-300">
                Shamasundar Singh layout, <br />
                near Nageshwar Temple, <br />
                Kalkere, Bannerghatta Road, Bannerghatta, Karnataka <br />
                560083, India
              </p>
            </div>

            {/* Phone Section */}
            <div className="flex flex-col items-center bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md transition-colors duration-300">
              <FaPhoneAlt className="text-purple-600 text-4xl mb-4" />
              <h3 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-white">
                Contact Information
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Phone:{" "}
                <a href="tel:+917026202925" className="text-purple-600">
                  7026202925
                </a>
              </p>
            </div>

            {/* Email Section */}
            <div className="flex flex-col items-center bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md transition-colors duration-300">
              <FaEnvelope className="text-purple-600 text-4xl mb-4" />
              <h3 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-white">
                Email Us
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Email:{" "}
                <a href="mailto:kamakhyaenterprises.srg@gmail.com" className="text-purple-600">
                  kamakhyaenterprises.srg @gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
