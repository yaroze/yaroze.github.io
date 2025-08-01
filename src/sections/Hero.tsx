import { ChevronDown, MapPin } from 'lucide-react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { ThemeToggle } from '../components/ThemeToggle';
import { personalInfo, socialLinks } from '../utils/data';

export const Hero = () => {
  const scrollToNextSection = () => {
    const nextSection = document.getElementById('skills');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case 'FaLinkedin':
        return <FaLinkedin className="w-5 h-5" />;
      case 'FaGithub':
        return <FaGithub className="w-5 h-5" />;
      case 'FaEnvelope':
        return <FaEnvelope className="w-5 h-5" />;
      default:
        return null;
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900">
      {/* Theme Toggle */}
      <div className="absolute top-6 right-6 z-10">
        <ThemeToggle />
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 dark:bg-blue-800 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-xl opacity-70 animate-bounce-subtle"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-200 dark:bg-indigo-800 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-xl opacity-70 animate-bounce-subtle" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image Placeholder */}
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center text-white text-4xl font-bold shadow-lg">
            PF
          </div>

          {/* Name and Title */}
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4 animate-fade-in">
            {personalInfo.name}
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-blue-600 dark:text-blue-400 font-semibold mb-6 animate-slide-up">
            {personalInfo.title}
          </h2>

          {/* Location and Availability */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 text-gray-600 dark:text-gray-300">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>{personalInfo.location}</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-gray-400 rounded-full"></div>
            <div className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-full text-sm font-medium">
              {personalInfo.availability}
            </div>
          </div>

          {/* Summary */}
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed animate-slide-up">
            {personalInfo.summary}
          </p>

          {/* Social Links */}
          <div className="flex justify-center gap-4 mb-12">
            {socialLinks.map((link) => (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              >
                {getSocialIcon(link.icon)}
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <a
              href="#contact"
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
            >
              Get In Touch
            </a>
            <a
              href="#projects"
              className="px-8 py-4 bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 border border-blue-600 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-gray-700"
            >
              View My Work
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToNextSection}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 animate-bounce"
          aria-label="Scroll to next section"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </div>
    </section>
  );
};