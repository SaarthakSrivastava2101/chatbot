import React from 'react';
import { Moon, Sun } from 'lucide-react';

interface DarkModeToggleProps {
  isDark: boolean;
  onToggle: () => void;
}

const DarkModeToggle: React.FC<DarkModeToggleProps> = ({ isDark, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-lg transition-all duration-300 hover:scale-110 ${
        isDark 
          ? 'bg-yellow-500 hover:bg-yellow-400 text-gray-900' 
          : 'bg-gray-800 hover:bg-gray-700 text-white'
      }`}
      aria-label="Toggle dark mode"
    >
      <div className="flex items-center justify-center">
        {isDark ? (
          <Sun className="w-6 h-6 animate-spin" style={{ animationDuration: '3s' }} />
        ) : (
          <Moon className="w-6 h-6" />
        )}
      </div>
    </button>
  );
};

export default DarkModeToggle;