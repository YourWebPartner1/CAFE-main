import { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: 'Hello! Welcome to Star Café. How can I help you today?', sender: 'bot' }
  ]);
  const [input, setInput] = useState('');

  const quickReplies = [
    'View Menu',
    'Book a Table',
    'Opening Hours',
    'Location'
  ];

  const handleSend = () => {
    if (!input.trim()) return;

    setMessages([...messages, { text: input, sender: 'user' }]);

    setTimeout(() => {
      let response = '';
      const lowerInput = input.toLowerCase();

      if (lowerInput.includes('menu')) {
        response = 'You can explore our full menu above! We offer premium coffee, beverages, snacks, and desserts. Would you like to know about any specific item?';
      } else if (lowerInput.includes('book') || lowerInput.includes('reservation')) {
        response = 'Great! You can book a table using our reservation form above, or call us at +91 9876 543 210. What time would you prefer?';
      } else if (lowerInput.includes('hour') || lowerInput.includes('time')) {
        response = 'We are open Mon-Fri: 8:00 AM - 11:00 PM and Sat-Sun: 9:00 AM - 12:00 AM. Looking forward to serving you!';
      } else if (lowerInput.includes('location') || lowerInput.includes('address')) {
        response = 'We are located at Banjara Hills, Road No. 12, Hyderabad, Telangana 500034. Check out the map in our contact section!';
      } else {
        response = 'Thank you for your message! For immediate assistance, please call us at +91 9876 543 210 or use the quick options below.';
      }

      setMessages(prev => [...prev, { text: response, sender: 'bot' }]);
    }, 500);

    setInput('');
  };

  const handleQuickReply = (reply: string) => {
    setInput(reply);
    setTimeout(() => handleSend(), 100);
  };

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 bg-gradient-to-r from-amber-500 to-orange-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 z-50 animate-bounce"
        >
          <MessageCircle className="w-7 h-7" />
        </button>
      )}

      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 bg-white rounded-2xl shadow-2xl z-50 overflow-hidden flex flex-col" style={{ height: '550px' }}>
          <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white p-5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-white/20 p-2 rounded-full">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Star Café Assistant</h3>
                <p className="text-xs text-amber-100">Online now</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-white/20 p-2 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-amber-50">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-2xl ${
                    msg.sender === 'user'
                      ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-br-none'
                      : 'bg-white text-gray-800 rounded-bl-none shadow-md'
                  }`}
                >
                  <p className="text-sm">{msg.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-3 border-t border-gray-200 bg-white">
            <div className="flex flex-wrap gap-2 mb-3">
              {quickReplies.map((reply) => (
                <button
                  key={reply}
                  onClick={() => handleQuickReply(reply)}
                  className="px-3 py-1 bg-amber-100 hover:bg-amber-200 text-amber-900 text-xs rounded-full transition-colors"
                >
                  {reply}
                </button>
              ))}
            </div>

            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type your message..."
                className="flex-1 px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-amber-500 focus:outline-none text-sm"
              />
              <button
                onClick={handleSend}
                className="bg-gradient-to-r from-amber-500 to-orange-500 text-white p-3 rounded-xl hover:scale-105 transition-transform"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
