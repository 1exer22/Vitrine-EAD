import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const ServiceCard = ({ icon, title, description }: ServiceCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -10, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
      transition={{ type: 'spring', stiffness: 300 }}
      className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-md hover:shadow-xl transition-all duration-300"
    >
      <div className="bg-purple-100 dark:bg-purple-900/30 w-16 h-16 rounded-lg flex items-center justify-center mb-5">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
    </motion.div>
  );
};

export default ServiceCard;