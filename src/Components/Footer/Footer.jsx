import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start">
        {/* Menu Section */}
        <div className="mb-2 md:mb-0">
          <h2 className="text-lg font-bold">Menu</h2>
          <ul>
            <li>
              <Link
                to="/features"
                className="hover:text-red-400 transition-colors duration-200"
              >
                Features
              </Link>
            </li>
            <li>
              <Link
                to="/sitemap"
                className="hover:text-red-400 transition-colors duration-200"
              >
                Sitemap
              </Link>
            </li>
          </ul>
        </div>

        {/* Tech Support Section */}
        <div className="mb-6 md:mb-0">
          <h2 className="text-lg font-bold">Tech Support</h2>
          <p className="text-sm">
            Need help? Our support team is here for you.
          </p>
          <p className="text-sm">Email: support@StyleHaven.com</p>
          <p className="text-sm">Phone: (123) 456-7890</p>
        </div>

        {/* Company Information Section */}
        <div className="mb-6 md:mb-0">
          <h2 className="text-lg font-bold">Company</h2>
          <ul>
            <li>
              <Link
                to="/about"
                className="hover:text-red-400 transition-colors duration-200"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-red-400 transition-colors duration-200"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/privacy"
                className="hover:text-red-400 transition-colors duration-200"
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="mb-6 md:mb-0">
          <h2 className="text-lg font-bold">Contact Us</h2>
          <p className="text-sm">Phone: (123) 456-7890</p>
          <p className="text-sm">Email: info@StyleHaven.com</p>
        </div>

        {/* Social Media Links Section */}
        <div className="flex space-x-4 mb-6 md:mb-0 items-center justify-center">
          <a
            href="#"
            aria-label="Facebook"
            className="hover:text-red-400 transition-colors duration-200"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="#"
            aria-label="Twitter"
            className="hover:text-red-400 transition-colors duration-200"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="#"
            aria-label="Instagram"
            className="hover:text-red-400 transition-colors duration-200"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="#"
            aria-label="LinkedIn"
            className="hover:text-red-400 transition-colors duration-200"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-700 mt-4 pt-6 text-center text-sm">
        © 2024 Style Haven. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
