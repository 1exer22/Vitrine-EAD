import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone } from 'lucide-react';
import Logo from '../ui/Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 pt-16 pb-6 dark:bg-gray-800">
      <div className="container">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <Logo />
              <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">
                Expert-Digital
              </span>
            </div>
            <p className="mb-4 text-gray-600 dark:text-gray-400">
              Votre partenaire pour la transformation digitale de votre entreprise. Expertise et innovation depuis 3 ans.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 transition-colors hover:text-purple-700 dark:text-gray-400 dark:hover:text-purple-400"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 transition-colors hover:text-purple-700 dark:text-gray-400 dark:hover:text-purple-400"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 transition-colors hover:text-purple-700 dark:text-gray-400 dark:hover:text-purple-400"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 transition-colors hover:text-purple-700 dark:text-gray-400 dark:hover:text-purple-400"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">Nos Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 transition-colors hover:text-purple-700 dark:text-gray-400 dark:hover:text-purple-400">
                  Création de sites web
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-600 transition-colors hover:text-purple-700 dark:text-gray-400 dark:hover:text-purple-400">
                  Cybersécurité
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-600 transition-colors hover:text-purple-700 dark:text-gray-400 dark:hover:text-purple-400">
                  Montage vidéo
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-600 transition-colors hover:text-purple-700 dark:text-gray-400 dark:hover:text-purple-400">
                  Marketing digital
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">Liens Rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 transition-colors hover:text-purple-700 dark:text-gray-400 dark:hover:text-purple-400">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 transition-colors hover:text-purple-700 dark:text-gray-400 dark:hover:text-purple-400">
                  À propos
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-600 transition-colors hover:text-purple-700 dark:text-gray-400 dark:hover:text-purple-400">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 transition-colors hover:text-purple-700 dark:text-gray-400 dark:hover:text-purple-400">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail size={20} className="mr-2 text-purple-700 dark:text-purple-400" />
                <a href="mailto:contact@expert-digital.com" className="text-gray-600 transition-colors hover:text-purple-700 dark:text-gray-400 dark:hover:text-purple-400">
                  contact@expert-digital.com
                </a>
              </li>
              <li className="flex items-start">
                <Phone size={20} className="mr-2 text-purple-700 dark:text-purple-400" />
                <a href="tel:+33123456789" className="text-gray-600 transition-colors hover:text-purple-700 dark:text-gray-400 dark:hover:text-purple-400">
                  +33 1 23 45 67 89
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 mt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              &copy; {currentYear} Expert-Digital-Autodidacte. Tous droits réservés.
            </p>
            <div className="mt-4 space-x-4 text-sm text-gray-600 dark:text-gray-400 md:mt-0">
              <Link to="/" className="transition-colors hover:text-purple-700 dark:hover:text-purple-400">
                Politique de confidentialité
              </Link>
              <Link to="/" className="transition-colors hover:text-purple-700 dark:hover:text-purple-400">
                Mentions légales
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;