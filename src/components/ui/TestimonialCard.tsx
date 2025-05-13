import { motion } from 'framer-motion';
import { QuoteIcon } from 'lucide-react';

interface TestimonialCardProps {
  content: string;
  author: string;
  company: string;
}

const TestimonialCard = ({ content, author, company }: TestimonialCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="p-6 rounded-xl bg-gray-50 dark:bg-gray-800 shadow-md relative"
    >
      <QuoteIcon className="w-10 h-10 text-purple-200 dark:text-purple-900 absolute top-6 right-6" />
      <p className="text-gray-700 dark:text-gray-300 mb-6 relative z-10">{content}</p>
      <div className="mt-auto">
        <p className="font-semibold text-gray-900 dark:text-white">{author}</p>
        <p className="text-sm text-gray-600 dark:text-gray-400">{company}</p>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;