import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Eye, Code, Link as LinkIcon } from 'lucide-react';

const PortfolioPage = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [filter, setFilter] = useState('all');

  const categories = [
    { id: 'all', name: 'Tous' },
    { id: 'web', name: 'Sites Web' },
    { id: 'security', name: 'Cybersécurité' },
    { id: 'video', name: 'Montage Vidéo' },
    { id: 'marketing', name: 'Marketing Digital' },
  ];

  const projects = [
    {
      id: 1,
      title: 'E-commerce Luxury Fashion',
      description: 'Site e-commerce pour une marque de mode haut de gamme avec système de paiement sécurisé.',
      imgSrc: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      categories: ['web', 'marketing'],
      client: 'ModeLuxe Paris',
      date: 'Janvier 2023',
      url: '#',
    },
    {
      id: 2,
      title: 'Audit de Sécurité Bancaire',
      description: 'Audit complet de la sécurité informatique pour une institution financière.',
      imgSrc: 'https://images.pexels.com/photos/5483071/pexels-photo-5483071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      categories: ['security'],
      client: 'BankSecure',
      date: 'Mars 2023',
      url: '#',
    },
    {
      id: 3,
      title: 'Campagne Vidéo Produit',
      description: 'Série de vidéos promotionnelles pour le lancement d\'un nouveau produit tech.',
      imgSrc: 'https://images.pexels.com/photos/2983401/pexels-photo-2983401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      categories: ['video', 'marketing'],
      client: 'TechInnovate',
      date: 'Juin 2023',
      url: '#',
    },
    {
      id: 4,
      title: 'Refonte Site Corporate',
      description: 'Refonte complète du site corporate d\'une entreprise internationale.',
      imgSrc: 'https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      categories: ['web'],
      client: 'Global Services Inc.',
      date: 'Septembre 2023',
      url: '#',
    },
    {
      id: 5,
      title: 'Stratégie Social Media',
      description: 'Développement et mise en œuvre d\'une stratégie de présence sur les réseaux sociaux.',
      imgSrc: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      categories: ['marketing'],
      client: 'BrandConnect',
      date: 'Novembre 2023',
      url: '#',
    },
    {
      id: 6,
      title: 'Sécurisation Infrastructure Cloud',
      description: 'Implémentation de solutions de sécurité pour une infrastructure cloud complète.',
      imgSrc: 'https://images.pexels.com/photos/1181673/pexels-photo-1181673.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      categories: ['security'],
      client: 'CloudSecure',
      date: 'Février 2024',
      url: '#',
    },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.categories.includes(filter));

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-purple-700 text-white py-20">
        <div className="container text-center">
          <h1 className="text-4xl font-bold mb-6 sm:text-5xl">Notre Portfolio</h1>
          <p className="max-w-3xl mx-auto text-xl text-purple-100">
            Découvrez nos projets récents et l'impact qu'ils ont eu pour nos clients.
          </p>
        </div>
      </section>

      {/* Portfolio Section */}
      <section ref={ref} className="py-20 bg-white dark:bg-gray-900">
        <div className="container">
          <div className="flex flex-wrap justify-center mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-5 py-2 m-2 rounded-full transition-colors ${
                  filter === category.id
                    ? 'bg-purple-700 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.imgSrc}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div>
                      <div className="flex space-x-3 mb-3">
                        {project.categories.map((cat) => (
                          <span 
                            key={cat} 
                            className="text-xs font-medium bg-purple-700/60 text-white px-2 py-1 rounded"
                          >
                            {categories.find(c => c.id === cat)?.name}
                          </span>
                        ))}
                      </div>
                      <div className="flex space-x-3">
                        <a 
                          href={project.url} 
                          className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/40 transition-colors"
                          aria-label="Voir le projet"
                        >
                          <Eye size={18} />
                        </a>
                        <a 
                          href={project.url} 
                          className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/40 transition-colors"
                          aria-label="Voir le code"
                        >
                          <Code size={18} />
                        </a>
                        <a 
                          href={project.url} 
                          className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/40 transition-colors"
                          aria-label="Visiter le site"
                        >
                          <LinkIcon size={18} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap justify-between text-sm">
                    <span className="text-purple-700 dark:text-purple-400 font-medium">{project.client}</span>
                    <span className="text-gray-500 dark:text-gray-500">{project.date}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;