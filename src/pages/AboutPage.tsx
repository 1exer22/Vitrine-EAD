import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Shield, Monitor, BarChart3, Medal, Clock, Users, BookOpen } from 'lucide-react';

const AboutPage = () => {
  const [sectionRef, sectionInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [teamRef, teamInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [valuesRef, valuesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-purple-700 text-white py-20">
        <div className="container text-center">
          <h1 className="text-4xl font-bold mb-6 sm:text-5xl">À propos de nous</h1>
          <p className="max-w-3xl mx-auto text-xl text-purple-100">
            Découvrez Expert-Digital-Autodidacte, une agence web dirigée par Fomato F. avec 3 ans d'expertise dans la transformation digitale.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section ref={sectionRef} className="py-20 bg-white dark:bg-gray-900">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={sectionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 className="section-title">Notre histoire</h2>
              <div className="h-1 w-20 bg-purple-700 mb-6"></div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Fondée en 2022 par Fomato F., Expert-Digital-Autodidacte est née d'une passion pour le digital et d'une vision claire : aider les entreprises à réussir dans l'ère numérique.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Avec un parcours autodidacte et une expertise technique solide, notre fondateur a construit une agence qui se distingue par la qualité de ses réalisations et son approche personnalisée.
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                Aujourd'hui, après 3 ans d'expérience et de nombreux projets réussis, notre équipe continue de grandir tout en conservant les valeurs qui ont fait notre succès : excellence technique, créativité et satisfaction client.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={sectionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative aspect-video rounded-lg overflow-hidden shadow-xl"
            >
              <img 
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Notre équipe en plein travail" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Skills Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="section-title">
              Nos <span className="gradient-text">Expertises</span>
            </h2>
            <p className="section-subtitle">
              Nous proposons une gamme complète de services digitaux pour répondre à tous vos besoins.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md">
              <div className="bg-purple-100 dark:bg-purple-900/30 w-16 h-16 rounded-lg flex items-center justify-center mb-5">
                <Code2 className="w-8 h-8 text-purple-700 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Développement Web</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Création de sites web modernes, réactifs et optimisés pour tous types d'appareils.
              </p>
              <div className="mt-4">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">HTML/CSS</span>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">95%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                  <div className="bg-purple-700 h-2 rounded-full" style={{ width: '95%' }}></div>
                </div>
              </div>
              <div className="mt-3">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">JavaScript/React</span>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">90%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                  <div className="bg-purple-700 h-2 rounded-full" style={{ width: '90%' }}></div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md">
              <div className="bg-purple-100 dark:bg-purple-900/30 w-16 h-16 rounded-lg flex items-center justify-center mb-5">
                <Shield className="w-8 h-8 text-purple-700 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Cybersécurité</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Protection de vos systèmes et données contre les menaces numériques actuelles.
              </p>
              <div className="mt-4">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Tests d'intrusion</span>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">85%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                  <div className="bg-purple-700 h-2 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
              <div className="mt-3">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Audit de sécurité</span>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">90%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                  <div className="bg-purple-700 h-2 rounded-full" style={{ width: '90%' }}></div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md">
              <div className="bg-purple-100 dark:bg-purple-900/30 w-16 h-16 rounded-lg flex items-center justify-center mb-5">
                <Monitor className="w-8 h-8 text-purple-700 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Montage Vidéo</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Création de contenu vidéo professionnel pour promouvoir votre entreprise.
              </p>
              <div className="mt-4">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Édition vidéo</span>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">92%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                  <div className="bg-purple-700 h-2 rounded-full" style={{ width: '92%' }}></div>
                </div>
              </div>
              <div className="mt-3">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Motion design</span>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">88%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                  <div className="bg-purple-700 h-2 rounded-full" style={{ width: '88%' }}></div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md">
              <div className="bg-purple-100 dark:bg-purple-900/30 w-16 h-16 rounded-lg flex items-center justify-center mb-5">
                <BarChart3 className="w-8 h-8 text-purple-700 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Marketing Digital</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Stratégies de marketing sur les réseaux sociaux pour augmenter votre visibilité.
              </p>
              <div className="mt-4">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Réseaux sociaux</span>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">95%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                  <div className="bg-purple-700 h-2 rounded-full" style={{ width: '95%' }}></div>
                </div>
              </div>
              <div className="mt-3">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Analyse de données</span>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">85%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                  <div className="bg-purple-700 h-2 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section ref={valuesRef} className="py-20 bg-white dark:bg-gray-900">
        <div className="container">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={valuesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="section-title"
            >
              Nos <span className="gradient-text">Valeurs</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={valuesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="section-subtitle"
            >
              Principes qui guident notre travail et notre relation avec nos clients.
            </motion.p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={valuesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center p-6"
            >
              <div className="mb-4 mx-auto bg-purple-100 dark:bg-purple-900/30 w-16 h-16 rounded-full flex items-center justify-center">
                <Medal className="w-8 h-8 text-purple-700 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Excellence</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Nous visons l'excellence dans chaque projet, avec une attention particulière aux détails et à la qualité.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={valuesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center p-6"
            >
              <div className="mb-4 mx-auto bg-purple-100 dark:bg-purple-900/30 w-16 h-16 rounded-full flex items-center justify-center">
                <Clock className="w-8 h-8 text-purple-700 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Ponctualité</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Nous respectons nos engagements et livrons toujours nos projets dans les délais convenus.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={valuesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center p-6"
            >
              <div className="mb-4 mx-auto bg-purple-100 dark:bg-purple-900/30 w-16 h-16 rounded-full flex items-center justify-center">
                <Users className="w-8 h-8 text-purple-700 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Collaboration</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Nous travaillons en étroite collaboration avec nos clients pour garantir leur satisfaction.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={valuesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-center p-6"
            >
              <div className="mb-4 mx-auto bg-purple-100 dark:bg-purple-900/30 w-16 h-16 rounded-full flex items-center justify-center">
                <BookOpen className="w-8 h-8 text-purple-700 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Innovation</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Nous restons à la pointe de la technologie pour offrir des solutions innovantes et efficaces.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section ref={teamRef} className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={teamInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="section-title"
            >
              Notre <span className="gradient-text">Équipe</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={teamInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="section-subtitle"
            >
              Rencontrez les experts passionnés derrière Expert-Digital-Autodidacte.
            </motion.p>
          </div>

          <div className="grid gap-x-12 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={teamInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center"
            >
              <div className="relative mb-6 mx-auto w-48 h-48 rounded-full overflow-hidden ring-4 ring-purple-700">
                <img 
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Fomato F." 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1 text-gray-900 dark:text-white">Fomato F.</h3>
              <p className="text-purple-700 dark:text-purple-400 mb-3">Fondateur & Directeur</p>
              <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto">
                Passionné par le digital depuis toujours, Fomato F. a fondé Expert-Digital-Autodidacte avec la vision d'aider les entreprises à réussir dans l'ère numérique.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={teamInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <div className="relative mb-6 mx-auto w-48 h-48 rounded-full overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Sophie M." 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1 text-gray-900 dark:text-white">Sophie M.</h3>
              <p className="text-purple-700 dark:text-purple-400 mb-3">Responsable Marketing</p>
              <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto">
                Experte en marketing digital, Sophie élabore des stratégies innovantes pour maximiser la visibilité de nos clients sur les réseaux sociaux.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={teamInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center"
            >
              <div className="relative mb-6 mx-auto w-48 h-48 rounded-full overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Thomas L." 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1 text-gray-900 dark:text-white">Thomas L.</h3>
              <p className="text-purple-700 dark:text-purple-400 mb-3">Développeur Web</p>
              <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto">
                Développeur talentueux, Thomas crée des sites web modernes et performants qui répondent parfaitement aux besoins de nos clients.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;