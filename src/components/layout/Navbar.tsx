import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Moon, Sun } from 'lucide-react';
import Logo from '../ui/Logo';

interface NavbarProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const Navbar = ({ theme, toggleTheme }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close menu when location changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Accueil', path: '/' },
    { name: 'À propos', path: '/about' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white bg-opacity-90 dark:bg-gray-900 dark:bg-opacity-90 backdrop-blur-sm shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container flex items-center justify-between py-4">
        <Link to="/" className="flex items-center">
          <Logo />
          <span className={`ml-2 text-xl font-bold ${scrolled ? 'text-gray-900 dark:text-white' : 'text-white'}`}>
            Expert-Digital-Autodictate
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:items-center">
          <ul className="flex space-x-8">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`font-medium transition-colors duration-300 ${
                    location.pathname === link.path
                      ? 'text-purple-700 dark:text-purple-400'
                      : scrolled
                      ? 'text-gray-900 hover:text-purple-700 dark:text-gray-300 dark:hover:text-purple-400'
                      : 'text-white hover:text-purple-300'
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <button
            onClick={toggleTheme}
            className={`p-2 ml-8 transition-colors rounded-full ${
              scrolled
                ? 'text-gray-900 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
                : 'text-white hover:bg-white/10'
            }`}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </nav>

        {/* Mobile Navigation Toggle */}
        <div className="flex items-center md:hidden">
          <button
            onClick={toggleTheme}
            className={`p-2 mr-2 transition-colors rounded-full ${
              scrolled
                ? 'text-gray-900 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
                : 'text-white hover:bg-white/10'
            }`}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            onClick={toggleMenu}
            className={`p-2 transition-colors rounded-full ${
              scrolled
                ? 'text-gray-900 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
                : 'text-white hover:bg-white/10'
            }`}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 transition-transform duration-300 ease-in-out transform bg-white dark:bg-gray-900 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <div className="flex flex-col h-full p-6">
          <div className="flex items-center justify-between mb-8">
            <Link to="/" className="flex items-center" onClick={() => setIsOpen(false)}>
              <Logo />
              <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">
                Expert-Digital-Autodictate
              </span>
            </Link>
            <button
              onClick={toggleMenu}
              className="p-2 text-gray-700 transition-colors rounded-full hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>
          <nav className="flex-grow">
            <ul className="space-y-6">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={`block text-xl font-medium transition-colors duration-300 ${
                      location.pathname === link.path
                        ? 'text-purple-700 dark:text-purple-400'
                        : 'text-gray-900 hover:text-purple-700 dark:text-gray-300 dark:hover:text-purple-400'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="mt-auto">
            <Link
              to="/contact"
              className="block w-full py-3 text-center text-white bg-purple-700 rounded-lg btn hover:bg-purple-800"
              onClick={() => setIsOpen(false)}
            >
              Contactez-nous
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;