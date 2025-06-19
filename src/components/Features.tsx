import React from 'react';
import { 
  Eye, Zap, Shield, Globe, Smartphone, 
  BarChart3, Users, Clock, Star, Layers, ArrowRight 
} from 'lucide-react';
import { useScrollAnimation } from '../hooks/useParallax';
import ParallaxSection from './ParallaxSection';
import { useTheme } from '../contexts/ThemeContext';

const Features: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { isDark } = useTheme();

  const features = [
    {
      icon: Eye,
      title: 'Vision AI',
      description: 'Advanced computer vision that sees and understands your world with unprecedented clarity.',
      color: isDark ? 'from-blue-500 to-cyan-500' : 'from-blue-600 to-cyan-600'
    },
    {
      icon: Zap,
      title: 'Lightning Speed',
      description: 'Experience real-time processing with our quantum-optimized architecture.',
      color: isDark ? 'from-yellow-400 to-orange-500' : 'from-yellow-500 to-orange-600'
    },
    {
      icon: Shield,
      title: 'Quantum Security',
      description: 'Military-grade encryption with quantum-resistant security protocols.',
      color: isDark ? 'from-green-400 to-emerald-500' : 'from-green-500 to-emerald-600'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Connect across dimensions with our multi-reality infrastructure.',
      color: isDark ? 'from-purple-400 to-pink-500' : 'from-purple-500 to-pink-600'
    },
    {
      icon: Layers,
      title: 'Multi-Dimensional',
      description: 'Navigate through layers of reality with seamless transitions.',
      color: isDark ? 'from-indigo-400 to-purple-500' : 'from-indigo-500 to-purple-600'
    },
    {
      icon: BarChart3,
      title: 'Predictive Analytics',
      description: 'See into the future with AI-powered predictive modeling.',
      color: isDark ? 'from-pink-400 to-red-500' : 'from-pink-500 to-red-600'
    }
  ];

  return (
    <section id="features" className="relative py-32 overflow-hidden">
      {/* Background Layers */}
      <ParallaxSection speed={0.2} className="absolute inset-0">
        <div className={`w-full h-full transition-all duration-300 ${
          isDark 
            ? 'bg-gradient-to-b from-gray-900 to-black' 
            : 'bg-gradient-to-b from-white to-gray-50'
        }`}></div>
      </ParallaxSection>

      <ParallaxSection speed={0.4} className="absolute inset-0 opacity-30">
        <div className="absolute inset-0">
          <div className={`absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl transition-colors duration-300 ${
            isDark ? 'bg-blue-600/20' : 'bg-blue-400/20'
          }`}></div>
          <div className={`absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl transition-colors duration-300 ${
            isDark ? 'bg-purple-600/20' : 'bg-purple-400/20'
          }`}></div>
        </div>
      </ParallaxSection>

      <div className="relative z-10 container mx-auto px-4" ref={ref}>
        {/* Section Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className={`text-5xl md:text-6xl font-bold mb-6 transition-colors duration-300 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Extraordinary
            <span className={`block bg-gradient-to-r bg-clip-text text-transparent transition-all duration-300 ${
              isDark 
                ? 'from-blue-400 via-purple-400 to-pink-400' 
                : 'from-blue-600 via-purple-600 to-pink-600'
            }`}>
              Capabilities
            </span>
          </h2>
          <p className={`text-xl max-w-3xl mx-auto transition-colors duration-300 ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Discover the revolutionary features that redefine what's possible in digital experiences.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={feature.title}
                className={`group relative p-8 rounded-3xl backdrop-blur-xl border transition-all duration-700 hover:scale-105 cursor-pointer ${
                  isDark 
                    ? 'bg-gray-800/20 border-gray-700/30 hover:bg-gray-700/30 hover:shadow-2xl hover:shadow-blue-500/10' 
                    : 'bg-white/20 border-white/30 hover:bg-white/30 hover:shadow-2xl hover:shadow-blue-500/10'
                } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ 
                  transitionDelay: `${index * 150}ms`
                }}
              >
                {/* Glow Effect */}
                <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                  isDark 
                    ? 'bg-gradient-to-r from-blue-500/10 to-purple-500/10' 
                    : 'bg-gradient-to-r from-blue-500/5 to-purple-500/5'
                }`}></div>

                {/* Icon */}
                <div className={`relative w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 ${
                  isDark ? 'shadow-lg shadow-blue-500/20' : 'shadow-lg shadow-blue-500/20'
                }`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className={`text-2xl font-bold mb-4 transition-all duration-300 ${
                  isDark 
                    ? 'text-white group-hover:text-blue-400' 
                    : 'text-gray-900 group-hover:text-blue-600'
                }`}>
                  {feature.title}
                </h3>
                <p className={`leading-relaxed transition-colors duration-300 ${
                  isDark ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {feature.description}
                </p>

                {/* Hover Arrow */}
                <div className={`absolute bottom-6 right-6 w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0 ${
                  isDark 
                    ? 'bg-blue-500/20 text-blue-400' 
                    : 'bg-blue-500/10 text-blue-600'
                }`}>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-20 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <button className={`px-10 py-4 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
            isDark 
              ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-blue-500/30' 
              : 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:shadow-blue-500/30'
          }`}>
            Explore All Features
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;