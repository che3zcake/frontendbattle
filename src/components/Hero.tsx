import React from 'react';
import { ArrowRight, Play, Sparkles, Zap, Shield } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useParallax';
import ParallaxSection from './ParallaxSection';
import { useTheme } from '../contexts/ThemeContext';

const Hero: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { isDark } = useTheme();

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Layers */}
      <ParallaxSection speed={0.1} className="absolute inset-0">
        <div className={`w-full h-full transition-all duration-300 ${
          isDark 
            ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-black' 
            : 'bg-gradient-to-br from-blue-50 via-white to-purple-50'
        }`}></div>
      </ParallaxSection>

      <ParallaxSection speed={0.3} className="absolute inset-0">
        <div className="absolute inset-0">
          {/* Floating Elements */}
          <div className={`absolute top-20 left-10 w-32 h-32 rounded-full opacity-20 animate-float transition-colors duration-300 ${
            isDark ? 'bg-blue-500' : 'bg-blue-300'
          }`}></div>
          <div className={`absolute top-40 right-20 w-24 h-24 rounded-full opacity-20 animate-float-delayed transition-colors duration-300 ${
            isDark ? 'bg-purple-500' : 'bg-purple-300'
          }`}></div>
          <div className={`absolute bottom-20 left-1/4 w-40 h-40 rounded-full opacity-20 animate-float-slow transition-colors duration-300 ${
            isDark ? 'bg-pink-500' : 'bg-pink-300'
          }`}></div>
        </div>
      </ParallaxSection>

      <ParallaxSection speed={0.5} className="absolute inset-0">
        <div className="absolute inset-0 opacity-30">
          <div className={`absolute top-1/4 right-1/3 w-64 h-64 rounded-full blur-3xl transition-colors duration-300 ${
            isDark ? 'bg-blue-600/30' : 'bg-blue-400/30'
          }`}></div>
          <div className={`absolute bottom-1/4 left-1/3 w-80 h-80 rounded-full blur-3xl transition-colors duration-300 ${
            isDark ? 'bg-purple-600/30' : 'bg-purple-400/30'
          }`}></div>
        </div>
      </ParallaxSection>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Badge */}
          <div className={`inline-flex items-center space-x-2 backdrop-blur-xl rounded-full px-6 py-3 mb-8 border transition-all duration-300 ${
            isDark 
              ? 'bg-gray-800/20 border-gray-700/30 shadow-lg shadow-blue-500/10' 
              : 'bg-white/20 border-white/30 shadow-lg shadow-blue-500/10'
          }`}>
            <Sparkles className={`w-5 h-5 transition-colors duration-300 ${
              isDark ? 'text-yellow-400' : 'text-yellow-500'
            }`} />
            <span className={`text-sm font-medium transition-colors duration-300 ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Revolutionary Experience
            </span>
          </div>

          {/* Main Heading */}
          <h1 className={`text-6xl md:text-8xl font-bold mb-8 leading-tight transition-colors duration-300 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            See Beyond
            <span className={`block bg-gradient-to-r bg-clip-text text-transparent transition-all duration-300 ${
              isDark 
                ? 'from-blue-400 via-purple-400 to-pink-400' 
                : 'from-blue-600 via-purple-600 to-pink-600'
            }`}>
              The Ordinary
            </span>
          </h1>

          {/* Subtitle */}
          <p className={`text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed transition-colors duration-300 ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Experience a new dimension of digital interaction with our revolutionary platform that transforms how you see, feel, and engage with technology.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
            <button className={`group px-8 py-4 rounded-2xl font-semibold flex items-center space-x-3 transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
              isDark 
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-blue-500/30' 
                : 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:shadow-blue-500/30'
            }`}>
              <span>Start Your Journey</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            
            <button className={`group px-8 py-4 rounded-2xl font-semibold flex items-center space-x-3 backdrop-blur-xl border transition-all duration-300 hover:scale-105 hover:shadow-xl ${
              isDark 
                ? 'bg-gray-800/20 border-gray-700/30 text-white hover:bg-gray-700/30 hover:shadow-white/10' 
                : 'bg-white/20 border-white/30 text-gray-900 hover:bg-white/30 hover:shadow-black/10'
            }`}>
              <Play className="w-5 h-5" />
              <span>Watch Vision</span>
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {[
              { icon: Zap, value: '10M+', label: 'Experiences Created' },
              { icon: Shield, value: '99.9%', label: 'Reliability' },
              { icon: Sparkles, value: '24/7', label: 'Innovation' }
            ].map((stat, index) => (
              <div key={index} className={`text-center p-6 rounded-2xl backdrop-blur-xl border transition-all duration-300 hover:scale-105 ${
                isDark 
                  ? 'bg-gray-800/10 border-gray-700/20 hover:bg-gray-700/20' 
                  : 'bg-white/10 border-white/20 hover:bg-white/20'
              }`}>
                <div className={`w-12 h-12 mx-auto mb-4 rounded-xl flex items-center justify-center transition-all duration-300 ${
                  isDark 
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg shadow-blue-500/20' 
                    : 'bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg shadow-blue-500/20'
                }`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className={`text-3xl font-bold mb-2 transition-colors duration-300 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  {stat.value}
                </div>
                <div className={`text-sm transition-colors duration-300 ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className={`w-6 h-10 border-2 rounded-full flex justify-center transition-colors duration-300 ${
          isDark ? 'border-gray-600' : 'border-gray-400'
        }`}>
          <div className={`w-1 h-3 rounded-full mt-2 animate-bounce transition-colors duration-300 ${
            isDark ? 'bg-gray-400' : 'bg-gray-600'
          }`}></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;