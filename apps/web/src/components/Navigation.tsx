import { Brain, Home, BookOpen, Compass, User, Mail } from 'lucide-react';

type Props = { currentView: string; setCurrentView: (v: string) => void };

const Navigation = ({ currentView, setCurrentView }: Props) => {
  const navItems = [
    { id: 'home', label: 'Home', icon: <Home className="w-4 h-4" /> },
    { id: 'about', label: 'About Labs', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'explore', label: 'Explore Labs', icon: <Compass className="w-4 h-4" /> },
    { id: 'knowme', label: 'Know Me', icon: <User className="w-4 h-4" /> },
    { id: 'contact', label: 'Contact', icon: <Mail className="w-4 h-4" /> },
  ];

  return (
    <nav className="border-b border-cyan-800/30 backdrop-blur-lg bg-black/50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Brain className="w-8 h-8 text-cyan-400" />
              <div className="absolute inset-0 animate-ping opacity-30">
                <Brain className="w-8 h-8 text-cyan-400" />
              </div>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              AIVP
            </span>
          </div>

          <div className="flex space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setCurrentView(item.id)}
                className={`px-4 py-2 rounded-lg flex items-center space-x-2 transition-all duration-200 ${
                  currentView === item.id
                    ? 'bg-gradient-to-r from-cyan-600/20 to-purple-600/20 text-cyan-400 border border-cyan-600/50'
                    : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                }`}
              >
                {item.icon}
                <span className="text-sm font-medium">{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
