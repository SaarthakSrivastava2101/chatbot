import React, { useRef } from 'react';
import { School, MapPin, Clock, Users, UtensilsCrossed } from 'lucide-react';
import ChatBot from './components/ChatBot';
import SuggestionBox from './components/SuggestionBox';
import QuickActions from './components/QuickActions';
import WeeklyMenu from './components/WeeklyMenu';

function App() {
  const chatBotRef = useRef<HTMLDivElement>(null);
  const [selectedMeal, setSelectedMeal] = React.useState<string | null>(null);

  const handleMealSelect = (mealType: string) => {
    setSelectedMeal(mealType);
  };

  const handleCloseMenu = () => {
    setSelectedMeal(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-xl">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              {/* SRM IST Logo */}
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                <img 
                  src="https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&fit=crop" 
                  alt="SRM IST Logo" 
                  className="w-12 h-12 rounded-full object-cover"
                />
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-bold">
                  SRM IST Tirupati Mess
                </h1>
                <p className="text-blue-100 text-sm md:text-base">
                  Perfection of Mess • Food Menu Chatbot
                </p>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="text-right">
                <p className="font-semibold text-orange-200">Tirupati Mess</p>
                <p className="text-blue-100 text-sm">Digital Food Assistant</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
            Welcome to <span className="text-blue-600">Tirupati Mess</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Your AI-powered food companion at SRM IST University. Get personalized meal recommendations 
            and explore our delicious menu options!
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-4 shadow-lg">
              <Users className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-800">5000+</div>
              <div className="text-gray-600 text-sm">Students Served</div>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-lg">
              <UtensilsCrossed className="w-8 h-8 text-orange-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-800">50+</div>
              <div className="text-gray-600 text-sm">Menu Items</div>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-lg">
              <Clock className="w-8 h-8 text-green-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-800">24/7</div>
              <div className="text-gray-600 text-sm">Service Available</div>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-lg">
              <MapPin className="w-8 h-8 text-purple-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-800">SRM</div>
              <div className="text-gray-600 text-sm">IST University</div>
            </div>
          </div>

          {/* Quick Actions - Weekly Menu Buttons */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Explore Weekly Menus</h3>
          </div>
          <QuickActions onMealSelect={handleMealSelect} />
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              Chat with Chef Bot & Share Your Thoughts
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Get instant meal recommendations from our AI chef and help us improve 
              by sharing your suggestions and feedback.
            </p>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-8 justify-center items-start max-w-6xl mx-auto">
            {/* ChatBot */}
            <div ref={chatBotRef} className="flex-1 flex justify-center">
              <ChatBot />
            </div>
            
            {/* Suggestion Box */}
            <div className="flex-1 flex justify-center">
              <SuggestionBox />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Our Mess?</h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <School className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">AI-Powered</h4>
              <p className="text-gray-600">Smart recommendations based on your preferences and meal times.</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <UtensilsCrossed className="w-8 h-8 text-orange-500" />
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Fresh & Healthy</h4>
              <p className="text-gray-600">Nutritious meals prepared with fresh ingredients daily.</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-500" />
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Student-Friendly</h4>
              <p className="text-gray-600">Affordable prices and meal plans designed for students.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <img 
                src="https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop" 
                alt="SRM IST Logo" 
                className="w-8 h-8 rounded-full object-cover"
              />
            </div>
            <span className="text-lg font-semibold">Tirupati Mess • SRM IST</span>
          </div>
          <p className="text-gray-400">
            Serving delicious meals with love since 2020 • Made with ❤️ for SRM students
          </p>
        </div>
      </footer>

      {/* Weekly Menu Modal */}
      {selectedMeal && (
        <WeeklyMenu mealType={selectedMeal} onClose={handleCloseMenu} />
      )}
    </div>
  );
}

export default App;