import { Code2, Zap } from 'lucide-react';

const Logo = () => {
  return (
    <div className="relative flex items-center justify-center">
      <div className="absolute animate-spin-slow opacity-20">
        <Zap size={36} className="text-purple-600" />
      </div>
      <div className="z-10">
        <Code2 size={24} className="text-purple-700 dark:text-purple-500" />
      </div>
    </div>
  );
};

export default Logo;