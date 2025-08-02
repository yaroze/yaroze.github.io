import { useState } from 'react';
import { Hero } from './sections/Hero';
import { Skills } from './sections/Skills';
import { Projects } from './sections/Projects';
import { Experience } from './sections/Experience';
import { Education } from './sections/Education';
import { Contact } from './sections/Contact';
import { BlogModal } from './components/BlogModal';

type TabType = 'overview' | 'experience' | 'projects' | 'blog' | 'contact';

function App() {
  const [activeTab, setActiveTab] = useState<TabType>('overview');
  const [showBlogModal, setShowBlogModal] = useState(false);

  const tabs = [
    { id: 'overview' as const, label: 'Overview' },
    { id: 'experience' as const, label: 'Experience' },
    { id: 'projects' as const, label: 'Projects' },
    { id: 'blog' as const, label: 'Blog' },
    { id: 'contact' as const, label: 'Contact' },
  ];

  const scrollToContent = () => {
    const contentSection = document.querySelector('main');
    contentSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleTabClick = (tabId: TabType) => {
    if (tabId === 'blog') {
      setShowBlogModal(true);
    } else {
      setActiveTab(tabId);
      scrollToContent();
    }
  };

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
        return null;
      case 'contact':
        return <Contact />;
      default:
        return <Skills />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900 transition-colors duration-200">
      {/* Enhanced Tab Navigation */}
      <div className="sticky top-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200/50 dark:border-gray-700/50 shadow-lg">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex justify-center space-x-2 overflow-x-auto">
            <div className="flex space-x-2 p-2 bg-gradient-to-r from-gray-100 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl shadow-xl border border-white/50 dark:border-gray-600/50">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => handleTabClick(tab.id)}
                  className={`px-6 py-3 rounded-xl font-semibold whitespace-nowrap transition-all duration-300 transform hover:scale-105 ${
                    activeTab === tab.id && tab.id !== 'blog'
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-xl'
                      : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-gray-600/50'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </nav>
        </div>
      </div>
      
      <Hero />

      {/* Tab Content */}
      <main className="py-12">
        {renderContent()}
      </main>
      
      {/* Enhanced Footer */}
      <footer className="bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 dark:from-gray-800 dark:via-slate-800 dark:to-indigo-900 py-12">
        <div className="container mx-auto px-6 text-center">
          <div className="mb-6">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-700 flex items-center justify-center text-white text-2xl font-bold shadow-xl">
              PF
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Pedro Lucas Farinha</h3>
            <p className="text-blue-200">Senior Platform/DevOps Engineer</p>
          </div>
          <div className="border-t border-white/20 pt-6">
            <p className="text-blue-100">
              © 2024 Pedro Lucas Farinha. Built with React, TypeScript, and Tailwind CSS.
            </p>
            <p className="text-blue-200 text-sm mt-2">
              Built with the help of <a href="https://claude.ai" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-100 underline">Claude</a> and <a href="https://devin.ai" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-100 underline">Devin</a>
            </p>
          </div>
        </div>
      </footer>

      <BlogModal 
        isOpen={showBlogModal} 
        onClose={() => setShowBlogModal(false)} 
      />
    </div>
  );
}

export default App;
