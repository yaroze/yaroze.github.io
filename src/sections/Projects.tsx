import { ExternalLink, Code, Zap, TrendingUp } from 'lucide-react';
import { projects } from '../utils/data';

export const Projects = () => {
  const getProjectIcon = (projectId: string) => {
    switch (projectId) {
      case 'iot-migration':
        return <Zap className="w-8 h-8" />;
      case 'ci-optimization':
        return <Code className="w-8 h-8" />;
      case 'cost-optimization':
        return <TrendingUp className="w-8 h-8" />;
      default:
        return <Code className="w-8 h-8" />;
    }
  };

  const getGradientClass = (index: number) => {
    const gradients = [
      'from-blue-500 to-cyan-500',
      'from-purple-500 to-pink-500',
      'from-green-500 to-teal-500',
    ];
    return gradients[index % gradients.length];
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Key projects showcasing technical expertise, leadership, and measurable business impact
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              {/* Project Header */}
              <div className={`bg-gradient-to-r ${getGradientClass(index)} p-6 text-white`}>
                <div className="flex items-start justify-between mb-4">
                  <div className="bg-white/20 rounded-lg p-3">
                    {getProjectIcon(project.id)}
                  </div>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/80 hover:text-white transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-white/90 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Project Content */}
              <div className="p-6">
                {/* Impact */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
                    <TrendingUp className="w-4 h-4 mr-2 text-green-500" />
                    Impact
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {project.impact}
                  </p>
                </div>

                {/* Technical Details */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                    Key Achievements
                  </h4>
                  <ul className="space-y-2">
                    {project.details.slice(0, 3).map((detail, detailIndex) => (
                      <li
                        key={detailIndex}
                        className="text-sm text-gray-600 dark:text-gray-300 flex items-start"
                      >
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Architecture Diagram Placeholder */}
              <div className="px-6 pb-6">
                <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 text-center">
                  <div className="text-gray-500 dark:text-gray-400 text-sm mb-2">
                    Architecture Overview
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {project.technologies.slice(0, 6).map((tech, techIndex) => (
                      <div
                        key={techIndex}
                        className="bg-white dark:bg-gray-600 rounded p-2 text-xs text-gray-600 dark:text-gray-300"
                      >
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">1,300+</div>
            <div className="text-gray-600 dark:text-gray-300 text-sm">IoT Devices Migrated</div>
          </div>
          <div className="text-center bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">70%</div>
            <div className="text-gray-600 dark:text-gray-300 text-sm">Build Time Reduction</div>
          </div>
          <div className="text-center bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg">
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">20%</div>
            <div className="text-gray-600 dark:text-gray-300 text-sm">Cost Reduction</div>
          </div>
          <div className="text-center bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg">
            <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">99.9%</div>
            <div className="text-gray-600 dark:text-gray-300 text-sm">System Uptime</div>
          </div>
        </div>
      </div>
    </section>
  );
};