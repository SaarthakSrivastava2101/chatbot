import React from 'react';
import { Coffee, UtensilsCrossed, Cookie, Moon } from 'lucide-react';

interface QuickActionsProps {
  onMealSelect: (meal: string) => void;
}

const QuickActions: React.FC<QuickActionsProps> = ({ onMealSelect }) => {
  const meals = [
    { name: 'breakfast', icon: Coffee, label: 'Breakfast', color: 'from-yellow-400 to-orange-500' },
    { name: 'lunch', icon: UtensilsCrossed, label: 'Lunch', color: 'from-green-400 to-emerald-500' },
    { name: 'snacks', icon: Cookie, label: 'Snacks', color: 'from-purple-400 to-pink-500' },
    { name: 'dinner', icon: Moon, label: 'Dinner', color: 'from-blue-400 to-indigo-500' }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
      {meals.map(({ name, icon: Icon, label, color }) => (
        <button
          key={name}
          onClick={() => onMealSelect(name)}
          className={`bg-gradient-to-br ${color} p-8 rounded-2xl text-white hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-2xl group`}
        >
          <Icon className="w-10 h-10 mx-auto mb-3 group-hover:scale-110 transition-transform" />
          <span className="text-base font-bold block">{label}</span>
          <span className="text-xs opacity-80 block mt-1">View Weekly Menu</span>
        </button>
      ))}
    </div>
  );
};

export default QuickActions;