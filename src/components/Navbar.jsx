import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Our Services', path: '/services' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="bg-white shadow-lg py-3 border-b-2 border-indigo-100">
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-3xl">🧸</span>
          <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Anokhi Asha
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item, i) => (
            <Link
              key={i}
              to={item.path}
              className="relative group text-indigo-900 font-medium hover:text-purple-600 transition-colors"
            >
              {item.label}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <a
          href="https://wa.me/918770953003?text=Hi%2C%20I%20would%20like%20to%20schedule%20a%20consultation%20for%20my%20child."
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:block bg-yellow-400 hover:bg-yellow-300 text-indigo-900 px-5 py-2 rounded-lg font-semibold shadow-md transition-colors"
        >
          Book Now
        </a>

        {/* Mobile Menu Button */}
        <button onClick={toggleMobileMenu} className="md:hidden text-indigo-900 focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isMobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden px-6 py-4 space-y-4 border-t border-indigo-50 bg-white transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        {navItems.map((item, i) => (
          <Link
            key={i}
            to={item.path}
            onClick={toggleMobileMenu}
            className="block text-indigo-900 hover:text-purple-600"
          >
            {item.label}
          </Link>
        ))}
        <a
          href="https://wa.me/918770953003?text=Hi%2C%20I%20would%20like%20to%20schedule%20a%20consultation%20for%20my%20child."
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-yellow-400 hover:bg-yellow-300 text-indigo-900 px-4 py-2 rounded-lg font-semibold text-center"
        >
          Book Now
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
