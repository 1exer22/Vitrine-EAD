import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { useInView } from 'react-intersection-observer';
import { 
  Globe, 
  Shield, 
  Video, 
  BarChart4, 
  ChevronRight, 
  Users, 
  Zap, 
  Check 
} from 'lucide-react';
import HeroSection from '../components/sections/HeroSection';
import ServiceCard from '../components/ui/ServiceCard';
import TestimonialCard from '../components/ui/TestimonialCard';

const HomePage = () => {
  const [servicesRef, servicesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const servicesData = [
    {
      icon: <Globe className="w-8 h-8 text-purple-700 dark:text-purple-400" />,
      title: 'Création de Sites Internet',
      description: 'Sites vitrines, portfolios et applications web personnalisés pour tous vos besoins digitaux.',
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-700 dark:text-purple-400" />,
      title: 'Cybersécurité',
      description: 'Protection de vos données et systèmes contre les menaces numériques actuelles.',
    },
    {
      icon: <Video className="w-8 h-8 text-purple-700 dark:text-purple-400" />,
      title: 'Montage Vidéo',
      description: 'Création de contenu vidéo professionnel pour promouvoir votre entreprise et vos produits.',
    },
    {
      icon: <BarChart4 className="w-8 h-8 text-purple-700 dark:text-purple-400" />,
      title: 'Marketing Digital',
      description: 'Stratégies de marketing sur les réseaux sociaux pour augmenter votre visibilité en ligne.',
    },
  ];

  const testimonials = [
    {
      content: "Grâce à Expert-Digital, notre présence en ligne a complètement changé. Notre nouveau site a généré 40% de leads en plus dès le premier mois.",
      author: "Marie Dupont",
      company: "Directrice, Innovatech"
    },
    {
      content: "L'expertise en cybersécurité de Dorico et son équipe nous a permis de renforcer considérablement notre infrastructure. Un travail exceptionnel.",
      author: "Jean Martin",
      company: "CTO, SecureCorp"
    },
    {
      content: "Les vidéos produites par Expert-Digital ont transformé notre stratégie de contenu. Nos taux d'engagement ont explosé sur les réseaux sociaux.",
      author: "Sophie Lefèvre",
      company: "Marketing Manager, VideoPlus"
    }
  ];

  return (
    <>
      <HeroSection />
      
      {/* Services Section */}
      <section 
        ref={servicesRef} 
        className="py-20 bg-white dark:bg-gray-900"
        id="services"
      >
        <div className="container">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={servicesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="section-title"
            >
              Nos <span className="gradient-text">Compétences</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={servicesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="section-subtitle"
            >
              Nous proposons une gamme complète de services digitaux pour répondre à tous vos besoins.
            </motion.p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {servicesData.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <ServiceCard
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                />
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={servicesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Link to="/about" className="btn btn-primary">
                En savoir plus <ChevronRight className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="section-title mb-6">
                Pourquoi choisir <span className="gradient-text">Expert-Digital</span> ?
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                Avec 3 ans d'expérience dans le domaine du digital, notre équipe possède l'expertise nécessaire pour transformer votre présence en ligne et vous aider à atteindre vos objectifs.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 p-1">
                    <Check className="w-5 h-5 text-purple-700 dark:text-purple-400" />
                  </div>
                  <div className="ml-3">
                    <h3 className="font-medium text-gray-900 dark:text-white">Expertise technique</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Nos développeurs maîtrisent les dernières technologies web pour créer des solutions innovantes.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 p-1">
                    <Check className="w-5 h-5 text-purple-700 dark:text-purple-400" />
                  </div>
                  <div className="ml-3">
                    <h3 className="font-medium text-gray-900 dark:text-white">Design moderne</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Nous créons des designs élégants et fonctionnels qui captent l'attention de vos visiteurs.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 p-1">
                    <Check className="w-5 h-5 text-purple-700 dark:text-purple-400" />
                  </div>
                  <div className="ml-3">
                    <h3 className="font-medium text-gray-900 dark:text-white">Support réactif</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Notre équipe est toujours disponible pour répondre à vos questions et résoudre vos problèmes.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Link to="/about" className="btn btn-primary">
                  Découvrir notre équipe <Users className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-radial from-purple-500/20 to-transparent animate-pulse" />
              <div className="relative rounded-xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Notre équipe au travail" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-16 bg-purple-700 text-white">
        <div className="container">
          <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
            <div>
              <div className="text-4xl font-bold mb-2">
                <TypeAnimation
                  sequence={[
                    0,
                    1000,
                    100,
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={0}
                  className="inline-block"
                />
                +
              </div>
              <p className="text-purple-200">Projets réalisés</p>
            </div>
            
            <div>
              <div className="text-4xl font-bold mb-2">
                <TypeAnimation
                  sequence={[
                    0,
                    1000,
                    50,
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={0}
                  className="inline-block"
                />
                +
              </div>
              <p className="text-purple-200">Clients satisfaits</p>
            </div>
            
            <div>
              <div className="text-4xl font-bold mb-2">
                <TypeAnimation
                  sequence={[
                    0,
                    1000,
                    3,
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={0}
                  className="inline-block"
                />
              </div>
              <p className="text-purple-200">Ans d'expérience</p>
            </div>
            
            <div>
              <div className="text-4xl font-bold mb-2">
                <TypeAnimation
                  sequence={[
                    0,
                    1000,
                    4,
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={0}
                  className="inline-block"
                />
              </div>
              <p className="text-purple-200">Experts passionnés</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="section-title">
              Ce que nos <span className="gradient-text">clients</span> disent
            </h2>
            <p className="section-subtitle">
              Découvrez les témoignages de nos clients satisfaits par notre expertise et nos services.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                content={testimonial.content}
                author={testimonial.author}
                company={testimonial.company}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-700 to-purple-900 text-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 sm:text-4xl">
              Prêt à transformer votre présence digitale ?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Contactez-nous dès aujourd'hui pour discuter de votre projet et découvrir comment nous pouvons vous aider.
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 justify-center">
              <Link to="/contact" className="btn bg-white text-purple-700 hover:bg-gray-100">
                Contactez-nous <Zap className="ml-2 w-5 h-5" />
              </Link>
              <Link to="/portfolio" className="btn bg-purple-600 text-white hover:bg-purple-500 border border-purple-500">
                Voir notre portfolio <ChevronRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;