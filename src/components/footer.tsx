import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Matrix Institute of Information Technology</h3>
            <p className="text-gray-300 mb-4">Empowering students with cutting-edge IT education and support for BIT University of Colombo (UCSC) program.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <FaFacebookF className="w-6 h-6" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <FaTwitter className="w-6 h-6" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <FaLinkedinIn className="w-6 h-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <FaInstagram className="w-6 h-6" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <FaYoutube className="w-6 h-6" />
                <span className="sr-only">YouTube</span>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/courses" className="text-gray-300 hover:text-white transition-colors">Courses</Link>
              </li>
              <li>
                <Link href="/gpa-calculator" className="text-gray-300 hover:text-white transition-colors">GPA Calculator</Link>
              </li>
              <li>
                <Link href="/past-papers" className="text-gray-300 hover:text-white transition-colors">Past Papers</Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <FaMapMarkerAlt className="w-5 h-5 mr-2 text-yellow-600" />
                <span>123 Education Street, Colombo, Sri Lanka</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="w-5 h-5 mr-2 text-yellow-600" />
                <a href="tel:+94123456789" className="hover:text-yellow-600 transition-colors">+94 12 345 6789</a>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="w-5 h-5 mr-2 text-yellow-600" />
                <a href="mailto:info@matrixinstitute.lk" className="hover:text-yellow-600 transition-colors">info@matrixinstitute.lk</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-300">&copy; {new Date().getFullYear()} Matrix Institute of Information Technology. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
