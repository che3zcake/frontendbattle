import React, { useEffect, useState } from 'react';
import { Menu, X, Sun, Moon, Eye } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Features', 'About', 'Portfolio', 'Contact'];

  return (
    <nav className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-40 transition-all duration-500 ${
      isScrolled ? 'top-2 scale-95' : 'top-4 scale-100'
    }`}>
      <div className={`backdrop-blur-xl transition-all duration-300 rounded-2xl shadow-2xl border ${
        isDark 
          ? 'bg-gray-900/20 border-gray-700/30 shadow-black/20' 
          : 'bg-white/20 border-white/30 shadow-black/10'
      } ${isScrolled ? 'shadow-3xl' : 'shadow-2xl'}`}>
        <div className="px-6 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className={`p-2 rounded-xl transition-all duration-300 ${
                isDark 
                  ? 'bg-blue-500/20 shadow-blue-500/20 shadow-lg' 
                  : 'bg-blue-500/10 shadow-blue-500/10 shadow-md'
              }`}>
                <Eye className={`w-5 h-5 transition-colors duration-300 ${
                  isDark ? 'text-blue-400' : 'text-blue-600'
                }`} />
              </div>
              <span className={`text-lg font-bold transition-colors duration-300 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                Vision
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`font-medium transition-all duration-300 hover:scale-105 ${
                    isDark 
                      ? 'text-gray-300 hover:text-blue-400 hover:shadow-blue-400/20' 
                      : 'text-gray-700 hover:text-blue-600 hover:shadow-blue-600/20'
                  } hover:shadow-lg`}
                >
                  {item}
                </a>
              ))}
              
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-xl transition-all duration-300 hover:scale-110 ${
                  isDark 
                    ? 'bg-gray-800/30 border-gray-700/30 hover:bg-gray-700/40 hover:shadow-yellow-400/20' 
                    : 'bg-white/30 border-white/30 hover:bg-white/40 hover:shadow-blue-600/20'
                } border backdrop-blur-sm hover:shadow-lg`}
              >
                {isDark ? (
                  <Sun className="w-4 h-4 text-yellow-400" />
                ) : (
                  <Moon className="w-4 h-4 text-blue-600" />
                )}
              </button>
              
              <button className={`px-6 py-2 rounded-xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                isDark 
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-blue-500/30' 
                  : 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:shadow-blue-500/30'
              }`}>
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-2">
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-xl transition-all duration-300 ${
                  isDark 
                    ? 'bg-gray-800/30 border-gray-700/30' 
                    : 'bg-white/30 border-white/30'
                } border backdrop-blur-sm`}
              >
                {isDark ? (
                  <Sun className="w-4 h-4 text-yellow-400" />
                ) : (
                  <Moon className="w-4 h-4 text-blue-600" />
                )}
              </button>
              
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`p-2 rounded-xl transition-all duration-300 ${
                  isDark 
                    ? 'bg-gray-800/30 border-gray-700/30' 
                    : 'bg-white/30 border-white/30'
                } border backdrop-blur-sm`}
              >
                {isMobileMenuOpen ? (
                  <X className={`w-5 h-5 ${isDark ? 'text-white' : 'text-gray-900'}`} />
                ) : (
                  <Menu className={`w-5 h-5 ${isDark ? 'text-white' : 'text-gray-900'}`} />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className={`md:hidden mt-4 pt-4 border-t transition-all duration-300 ${
              isDark ? 'border-gray-700/30' : 'border-white/30'
            }`}>
              <div className="flex flex-col space-y-3">
                {navItems.map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className={`font-medium transition-colors duration-300 ${
                      isDark 
                        ? 'text-gray-300 hover:text-blue-400' 
                        : 'text-gray-700 hover:text-blue-600'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
                <button className={`px-6 py-2 rounded-xl font-medium transition-all duration-300 text-left ${
                  isDark 
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white' 
                    : 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                }`}>
                  Get Started
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;