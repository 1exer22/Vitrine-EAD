import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ChevronRight, MousePointer } from 'lucide-react';

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const parallaxValue = scrollY * 0.4;

  return (
    <section className="relative flex items-center justify-center min-h-screen overflow-hidden pt-16">
      {/* Background with parallax effect */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: `translateY(${parallaxValue}px)`,
          filter: 'brightness(0.3)',
        }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/40 to-black/70 z-10" />

      {/* Content */}
      <div className="container relative z-20 text-white text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl mb-6">
            Expert-Digital
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-purple-400">
              <TypeAnimation
                sequence={[
                  'Création de Sites Web',
                  2000,
                  'Cybersécurité',
                  2000,
                  'Montage Vidéo',
                  2000,
                  'Marketing Digital',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="inline-block"
              />
            </span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-3xl mx-auto text-xl text-gray-300 mb-8"
        >
          Transformez votre présence digitale avec notre agence web experte.
          Nous créons des solutions innovantes pour votre entreprise.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 justify-center"
        >
          <Link
            to="/contact"
            className="btn btn-primary text-lg px-8 py-4 shadow-lg"
          >
            Démarrer un projet <ChevronRight className="ml-2 w-5 h-5" />
          </Link>
          <Link
            to="/portfolio"
            className="btn btn-outline bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20 text-lg px-8 py-4"
          >
            Voir nos réalisations
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <a
          href="#services"
          className="flex flex-col items-center text-white text-sm"
          aria-label="Scroll down"
        >
          <span className="mb-2">Découvrir</span>
          <MousePointer className="w-5 h-5 animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;