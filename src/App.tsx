import { useState } from 'react';
import { Hero } from './sections/Hero';
import { Skills } from './sections/Skills';
import { Projects } from './sections/Projects';
import { Experience } from './sections/Experience';
import { Education } from './sections/Education';
import { Blog } from './sections/Blog';
import { Contact } from './sections/Contact';

type TabType = 'overview' | 'experience' | 'projects' | 'blog' | 'contact';

function App() {
  const [activeTab, setActiveTab] = useState<TabType>('overview');

  const tabs = [
    { id: 'overview' as const, label: 'Overview', icon: '👋' },
    { id: 'experience' as const, label: 'Experience', icon: '💼' },
    { id: 'projects' as const, label: 'Projects', icon: '🚀' },
    { id: 'blog' as const, label: 'Blog', icon: '📝' },
    { id: 'contact' as const, label: 'Contact', icon: '📧' },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-12">
            <Skills />
            <Education />
          </div>
        );
      case 'experience':
        return <Experience />;
      case 'projects':
        return <Projects />;
      case 'blog':
        return <Blog />;
      case 'contact':
        return <Contact />;
      default:
        return <Skills />;
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
      <Hero />
      
      {/* Tab Navigation */}
      <div className="sticky top-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-6">
          <nav className="flex space-x-8 overflow-x-auto py-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
              >
                <span className="text-lg">{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Tab Content */}
      <main className="py-8">
        {renderContent()}
      </main>
      
      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-black text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2024 Pedro Lucas Farinha. Built with React, TypeScript, and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;