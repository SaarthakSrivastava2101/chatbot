import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, Send, User, Bot } from 'lucide-react';

interface ChatBotProps {
  isDarkMode?: boolean;
}

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

interface MenuData {
  breakfast: string[];
  lunch: string[];
  snacks: string[];
  dinner: string[];
}

const menuData: MenuData = {
  breakfast: [
    "Masala Dosa with Coconut Chutney",
    "Poha with Green Chutney",
    "Upma with Sambar",
    "Idli Vada with Tomato Chutney",
    "Paratha with Curd and Pickle",
    "Bread Omelette with Tea",
    "Rava Upma with Pickle",
    "Aloo Paratha with Butter"
  ],
  lunch: [
    "Rice with Dal Tadka and Mixed Vegetables",
    "Chapati with Paneer Butter Masala",
    "Biryani with Raita and Pickle",
    "Rice with Sambar and Rasam",
    "Rajma Rice with Papad",
    "Chole Bhature with Onion Salad",
    "Pulao with Chicken Curry",
    "Dal Rice with Aloo Gobi"
  ],
  snacks: [
    "Samosa with Green Chutney",
    "Pav Bhaji with Butter",
    "Masala Chai with Biscuits",
    "Corn Chaat with Lemon",
    "Vada Pav with Fried Green Chillies",
    "Bhel Puri with Sev",
    "Cutlet with Ketchup",
    "Pakora with Mint Chutney"
  ],
  dinner: [
    "Rice with Dal and Vegetable Curry",
    "Chapati with Paneer Masala",
    "Fried Rice with Manchurian",
    "Rice with Curd and Pickle",
    "Pasta with Garlic Bread",
    "Khichdi with Papad",
    "Noodles with Chilli Chicken",
    "Rice with Fish Curry"
  ]
};

const ChatBot: React.FC<ChatBotProps> = ({ isDarkMode = false }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm Chef Bot from Tirupati Mess! 🍽️ Ask me about our delicious meals for breakfast, lunch, snacks, or dinner!",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getRandomDish = (mealType: keyof MenuData): string => {
    const dishes = menuData[mealType];
    return dishes[Math.floor(Math.random() * dishes.length)];
  };

  const getBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('breakfast')) {
      const dish = getRandomDish('breakfast');
      return `Your breakfast recommendation: ${dish}! Perfect way to start your day at SRM! 🌅`;
    } else if (message.includes('lunch')) {
      const dish = getRandomDish('lunch');
      return `Your lunch recommendation: ${dish}! A hearty meal to fuel your afternoon studies! 🍛`;
    } else if (message.includes('snacks') || message.includes('evening')) {
      const dish = getRandomDish('snacks');
      return `Your snack recommendation: ${dish}! Perfect for your study break! ☕`;
    } else if (message.includes('dinner')) {
      const dish = getRandomDish('dinner');
      return `Your dinner recommendation: ${dish}! A delicious way to end your day! 🌙`;
    } else if (message.includes('menu') || message.includes('all')) {
      return `Here are my recommendations for you:\n🌅 Breakfast: ${getRandomDish('breakfast')}\n🍛 Lunch: ${getRandomDish('lunch')}\n☕ Snacks: ${getRandomDish('snacks')}\n🌙 Dinner: ${getRandomDish('dinner')}`;
    } else if (message.includes('hello') || message.includes('hi')) {
      return "Hello there! Welcome to Tirupati Mess! What meal would you like to know about? 😊";
    } else if (message.includes('thanks') || message.includes('thank')) {
      return "You're welcome! Enjoy your meal at Tirupati Mess! Don't forget to rate us! ⭐";
    } else {
      return "I can help you with breakfast, lunch, snacks, or dinner recommendations! Just ask about any meal time! 🍽️";
    }
  };

  const sendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate bot typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: getBotResponse(inputValue),
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <div className={`rounded-xl shadow-2xl overflow-hidden max-w-md w-full h-96 flex flex-col transition-colors duration-300 ${
      isDarkMode ? 'bg-gray-800' : 'bg-white'
    }`}>
      {/* Chat Header */}
      <div className={`p-4 flex items-center space-x-3 transition-colors duration-300 ${
        isDarkMode 
          ? 'bg-gradient-to-r from-gray-700 to-gray-800' 
          : 'bg-gradient-to-r from-blue-600 to-blue-700'
      }`}>
        <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center animate-bounce">
          <Bot className="w-6 h-6 text-white" />
        </div>
        <div>
          <h3 className="text-white font-semibold">Chef Bot</h3>
          <p className={`text-sm transition-colors duration-300 ${
            isDarkMode ? 'text-gray-300' : 'text-blue-100'
          }`}>Tirupati Mess Assistant</p>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
          >
            <div
              className={`max-w-xs px-4 py-2 rounded-lg ${
                message.isBot
                  ? isDarkMode 
                    ? 'bg-gray-700 text-gray-200' 
                    : 'bg-gray-100 text-gray-800'
                  : 'bg-blue-600 text-white'
              } whitespace-pre-line`}
            >
              <div className="flex items-start space-x-2">
                {message.isBot && (
                  <Bot className="w-4 h-4 mt-1 text-orange-500 flex-shrink-0" />
                )}
                <span className="text-sm">{message.text}</span>
                {!message.isBot && (
                  <User className="w-4 h-4 mt-1 text-blue-200 flex-shrink-0" />
                )}
              </div>
            </div>
          </div>
        ))}
        
        {isTyping && (
          <div className="flex justify-start">
            <div className={`px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors duration-300 ${
              isDarkMode ? 'bg-gray-700' : 'bg-gray-100'
            }`}>
              <Bot className="w-4 h-4 text-orange-500" />
              <div className="flex space-x-1">
                <div className={`w-2 h-2 rounded-full animate-pulse transition-colors duration-300 ${
                  isDarkMode ? 'bg-gray-500' : 'bg-gray-400'
                }`}></div>
                <div className={`w-2 h-2 rounded-full animate-pulse transition-colors duration-300 ${
                  isDarkMode ? 'bg-gray-500' : 'bg-gray-400'
                }`} style={{animationDelay: '0.2s'}}></div>
                <div className={`w-2 h-2 rounded-full animate-pulse transition-colors duration-300 ${
                  isDarkMode ? 'bg-gray-500' : 'bg-gray-400'
                }`} style={{animationDelay: '0.4s'}}></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className={`p-4 border-t transition-colors duration-300 ${
        isDarkMode ? 'border-gray-700' : 'border-gray-200'
      }`}>
        <div className="flex space-x-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask about meals..."
            className={`flex-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm transition-colors duration-300 ${
              isDarkMode 
                ? 'border-gray-600 bg-gray-700 text-white placeholder-gray-400' 
                : 'border-gray-300 bg-white text-gray-900 placeholder-gray-500'
            }`}
          />
          <button
            onClick={sendMessage}
            disabled={!inputValue.trim()}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;