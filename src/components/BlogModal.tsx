import { useState } from 'react';
import { Calendar, Clock, Tag, Code, ChevronDown, ChevronUp, X } from 'lucide-react';
import { blogPosts } from '../utils/data';

interface BlogModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BlogModal = ({ isOpen, onClose }: BlogModalProps) => {
  const [expandedPost, setExpandedPost] = useState<string | null>(null);

  if (!isOpen) return null;

  const togglePostExpansion = (postId: string) => {
    setExpandedPost(expandedPost === postId ? null : postId);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div className="relative bg-white dark:bg-gray-900 rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          <div className="sticky top-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 p-6 flex items-center justify-between rounded-t-xl">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Technical Blog
            </h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
              aria-label="Close blog modal"
            >
              <X className="w-6 h-6 text-gray-500 dark:text-gray-400" />
            </button>
          </div>
          
          <div className="p-6">
            <div className="mb-8">
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl">
                Technical articles and guides covering Linux system administration, DevOps practices, and infrastructure management
              </p>
            </div>

            <div className="space-y-8">
              {blogPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-gray-50 dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
                >
                  <div className="p-8">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 md:mb-0">
                        {post.title}
                      </h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {formatDate(post.date)}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {post.readTime}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200"
                        >
                          <Tag className="w-3 h-3 mr-1" />
                          {tag}
                        </span>
                      ))}
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                      {post.summary}
                    </p>

                    <button
                      onClick={() => togglePostExpansion(post.id)}
                      className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-200 mb-4"
                    >
                      {expandedPost === post.id ? (
                        <>
                          <ChevronUp className="w-4 h-4 mr-1" />
                          Show Less
                        </>
                      ) : (
                        <>
                          <ChevronDown className="w-4 h-4 mr-1" />
                          Show Details
                        </>
                      )}
                    </button>

                    {expandedPost === post.id && (
                      <div className="border-t border-gray-200 dark:border-gray-700 pt-6 space-y-6">
                        <div className="prose dark:prose-invert max-w-none">
                          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                            {post.content}
                          </p>
                        </div>

                        {post.codeExamples && post.codeExamples.length > 0 && (
                          <div className="space-y-4">
                            <h4 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
                              <Code className="w-5 h-5 mr-2" />
                              Code Examples
                            </h4>
                            {post.codeExamples.map((example, index) => (
                              <div key={index} className="space-y-2">
                                {example.description && (
                                  <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                                    {example.description}:
                                  </p>
                                )}
                                <div className="relative">
                                  <div className="absolute top-3 right-3 text-xs text-gray-400 font-mono bg-gray-800 dark:bg-gray-600 px-2 py-1 rounded">
                                    {example.language}
                                  </div>
                                  <pre className="bg-gray-900 dark:bg-gray-800 text-gray-100 dark:text-gray-200 p-4 rounded-lg overflow-x-auto text-sm font-mono leading-relaxed">
                                    <code>{example.code}</code>
                                  </pre>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </article>
              ))}
            </div>

            <div className="text-center mt-16">
              <div className="inline-flex items-center px-6 py-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
                <div className="text-blue-800 dark:text-blue-200">
                  <strong>{blogPosts.length}</strong> technical articles covering Linux, DevOps, and system administration
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
