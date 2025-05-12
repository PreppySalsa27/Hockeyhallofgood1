import { Link } from "wouter";
import { Instagram, Twitter, Facebook, Youtube, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-12 pb-6">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-poppins text-xl font-bold mb-4">Hockey Hall of Good</h3>
            <p className="text-gray-300 mb-4">
              Celebrating hockey's remarkable players who might not have reached Hall of Fame status.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-accent transition duration-200">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent transition duration-200">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-accent transition duration-200">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-accent transition duration-200">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-poppins text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/">
                  <a className="text-gray-300 hover:text-white transition duration-200">Home</a>
                </Link>
              </li>
              <li>
                <Link href="/inductees">
                  <a className="text-gray-300 hover:text-white transition duration-200">All Inductees</a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a className="text-gray-300 hover:text-white transition duration-200">About Us</a>
                </Link>
              </li>
              <li>
                <Link href="/rules">
                  <a className="text-gray-300 hover:text-white transition duration-200">Selection Rules</a>
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-poppins text-lg font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition duration-200">NHL History</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition duration-200">Statistics Database</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition duration-200">Nomination Process</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition duration-200">Media Resources</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-poppins text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/contact">
                  <a className="text-gray-300 hover:text-white transition duration-200 flex items-start">
                    <Mail className="h-5 w-5 mr-2 mt-1" />
                    <span>info@hockeyhallofgood.com</span>
                  </a>
                </Link>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-2 mt-1" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-1" />
                <span>123 Hockey Lane<br />Toronto, ON, Canada</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Hockey Hall of Good. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="/about">
              <a className="text-gray-400 hover:text-white text-sm transition duration-200">About Us</a>
            </Link>
            <Link href="/rules">
              <a className="text-gray-400 hover:text-white text-sm transition duration-200">Selection Rules</a>
            </Link>
            <Link href="/contact">
              <a className="text-gray-400 hover:text-white text-sm transition duration-200">Contact</a>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
