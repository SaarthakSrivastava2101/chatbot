import React from 'react';
import { X, Calendar, ChefHat } from 'lucide-react';

interface WeeklyMenuProps {
  mealType: string;
  onClose: () => void;
  isDarkMode?: boolean;
}

const weeklyMenuData = {
  breakfast: {
    Monday: ["Masala Dosa with Coconut Chutney", "Poha with Green Chutney", "Tea/Coffee"],
    Tuesday: ["Idli Vada with Tomato Chutney", "Upma with Sambar", "Tea/Coffee"],
    Wednesday: ["Paratha with Curd and Pickle", "Rava Upma with Pickle", "Tea/Coffee"],
    Thursday: ["Bread Omelette with Tea", "Aloo Paratha with Butter", "Tea/Coffee"],
    Friday: ["Masala Dosa with Coconut Chutney", "Poha with Green Chutney", "Tea/Coffee"],
    Saturday: ["Idli Vada with Tomato Chutney", "Upma with Sambar", "Tea/Coffee"],
    Sunday: ["Paratha with Curd and Pickle", "Bread Omelette", "Tea/Coffee"]
  },
  lunch: {
    Monday: ["Rice with Dal Tadka", "Mixed Vegetables", "Chapati", "Pickle"],
    Tuesday: ["Biryani with Raita", "Pickle", "Papad", "Curd"],
    Wednesday: ["Rice with Sambar", "Rasam", "Chapati", "Vegetable Curry"],
    Thursday: ["Rajma Rice", "Papad", "Aloo Gobi", "Curd"],
    Friday: ["Chole Bhature", "Onion Salad", "Pickle", "Lassi"],
    Saturday: ["Pulao with Chicken Curry", "Raita", "Papad", "Pickle"],
    Sunday: ["Dal Rice", "Aloo Gobi", "Chapati", "Pickle"]
  },
  snacks: {
    Monday: ["Samosa with Green Chutney", "Masala Chai", "Biscuits"],
    Tuesday: ["Pav Bhaji with Butter", "Masala Chai", "Cookies"],
    Wednesday: ["Corn Chaat with Lemon", "Coffee", "Namkeen"],
    Thursday: ["Vada Pav with Fried Green Chillies", "Chai", "Biscuits"],
    Friday: ["Bhel Puri with Sev", "Fresh Lime Water", "Chips"],
    Saturday: ["Cutlet with Ketchup", "Masala Chai", "Cookies"],
    Sunday: ["Pakora with Mint Chutney", "Chai", "Namkeen"]
  },
  dinner: {
    Monday: ["Rice with Dal", "Vegetable Curry", "Chapati", "Pickle"],
    Tuesday: ["Fried Rice with Manchurian", "Soup", "Papad", "Curd"],
    Wednesday: ["Rice with Curd", "Pickle", "Chapati", "Sabzi"],
    Thursday: ["Pasta with Garlic Bread", "Salad", "Soup", "Dessert"],
    Friday: ["Khichdi with Papad", "Curd", "Pickle", "Ghee"],
    Saturday: ["Noodles with Chilli Chicken", "Soup", "Fried Rice", "Pickle"],
    Sunday: ["Rice with Fish Curry", "Chapati", "Dal", "Pickle"]
  }
};

const WeeklyMenu: React.FC<WeeklyMenuProps> = ({ mealType, onClose, isDarkMode = false }) => {
  const menuData = weeklyMenuData[mealType as keyof typeof weeklyMenuData];
  const days = Object.keys(menuData);

  const getMealIcon = () => {
    switch (mealType) {
      case 'breakfast': return '🌅';
      case 'lunch': return '🍛';
      case 'snacks': return '☕';
      case 'dinner': return '🌙';
      default: return '🍽️';
    }
  };

  const getMealColor = () => {
    switch (mealType) {
      case 'breakfast': return 'from-yellow-400 to-orange-500';
      case 'lunch': return 'from-green-400 to-emerald-500';
      case 'snacks': return 'from-purple-400 to-pink-500';
      case 'dinner': return 'from-blue-400 to-indigo-500';
      default: return 'from-gray-400 to-gray-500';
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className={`rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden transition-colors duration-300 ${
        isDarkMode ? 'bg-gray-800' : 'bg-white'
      }`}>
        {/* Header */}
        <div className={`bg-gradient-to-r ${getMealColor()} p-6 text-white relative`}>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 hover:bg-white hover:bg-opacity-20 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="flex items-center space-x-4">
            <div className="text-4xl">{getMealIcon()}</div>
            <div>
              <h2 className="text-3xl font-bold capitalize">{mealType} Menu</h2>
              <p className="text-white text-opacity-90">Weekly schedule for Tirupati Mess</p>
            </div>
          </div>
        </div>

        {/* Menu Content */}
        <div className={`p-6 overflow-y-auto max-h-[calc(90vh-120px)] transition-colors duration-300 ${
          isDarkMode ? 'bg-gray-800' : 'bg-white'
        }`}>
          <div className="grid gap-6">
            {days.map((day) => (
              <div key={day} className={`rounded-xl p-4 hover:shadow-md transition-all duration-300 ${
                isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-50 hover:bg-gray-100'
              }`}>
                <div className="flex items-center space-x-3 mb-3">
                  <Calendar className="w-5 h-5 text-blue-600" />
                  <h3 className={`text-xl font-semibold transition-colors duration-300 ${
                    isDarkMode ? 'text-white' : 'text-gray-800'
                  }`}>{day}</h3>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {menuData[day as keyof typeof menuData].map((item: string, index: number) => (
                    <div key={index} className={`flex items-center space-x-2 p-3 rounded-lg shadow-sm transition-colors duration-300 ${
                      isDarkMode ? 'bg-gray-600' : 'bg-white'
                    }`}>
                      <ChefHat className="w-4 h-4 text-orange-500 flex-shrink-0" />
                      <span className={`text-sm transition-colors duration-300 ${
                        isDarkMode ? 'text-gray-200' : 'text-gray-700'
                      }`}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeeklyMenu;