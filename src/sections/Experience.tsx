import { MapPin, Calendar, ChevronRight } from 'lucide-react';
import { experiences } from '../utils/data';

export const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50 dark:from-gray-900 dark:via-slate-800 dark:to-indigo-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-900 dark:from-white dark:via-blue-200 dark:to-indigo-200 bg-clip-text text-transparent mb-6">
            Professional Experience
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            13+ years of progressive leadership in Platform and DevOps Engineering, cloud infrastructure, and enterprise-scale system engineering
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid gap-10">
            {experiences.map((experience, index) => (
              <div key={experience.id} className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-1 border border-white/50 dark:border-gray-700/50">
                {/* Enhanced Header */}
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"></div>
                      <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                        Position #{experiences.length - index}
                      </span>
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                      {experience.position}
                    </h3>
                    <h4 className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-3">
                      {experience.company}
                    </h4>
                  </div>
                  <div className="flex flex-col lg:items-end text-gray-600 dark:text-gray-300 lg:ml-6">
                    <div className="flex items-center mb-2 bg-blue-50 dark:bg-blue-900/30 px-4 py-2 rounded-full">
                      <Calendar className="w-5 h-5 mr-2 text-blue-600" />
                      <span className="font-semibold">{experience.duration}</span>
                    </div>
                    <div className="flex items-center bg-gray-50 dark:bg-gray-700/50 px-4 py-2 rounded-full">
                      <MapPin className="w-5 h-5 mr-2 text-gray-600" />
                      <span className="font-semibold">{experience.location}</span>
                    </div>
                  </div>
                </div>

                {/* Enhanced Content Layout */}
                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Left Column - Description & Achievements */}
                  <div className="space-y-6">
                    {/* Description */}
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-6">
                      <h5 className="font-bold text-gray-900 dark:text-white mb-4 text-lg flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        Role & Responsibilities
                      </h5>
                      <ul className="space-y-3">
                        {experience.description.slice(0, 3).map((desc, descIndex) => (
                          <li
                            key={descIndex}
                            className="text-gray-700 dark:text-gray-300 flex items-start text-base"
                          >
                            <ChevronRight className="w-4 h-4 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                            {desc}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Key Achievements */}
                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl p-6">
                      <h5 className="font-bold text-gray-900 dark:text-white mb-4 text-lg flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                        Key Achievements
                      </h5>
                      <ul className="space-y-3">
                        {experience.achievements.slice(0, 3).map((achievement, achIndex) => (
                          <li
                            key={achIndex}
                            className="text-gray-700 dark:text-gray-300 flex items-start text-base"
                          >
                            <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full mr-3 mt-1.5 flex-shrink-0"></div>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Right Column - Technologies */}
                  <div className="bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 rounded-2xl p-6">
                    <h5 className="font-bold text-gray-900 dark:text-white mb-4 text-lg flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                      Technologies Used
                    </h5>
                    <div className="flex flex-wrap gap-3">
                      {experience.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-sm font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Career Highlights */}
        <div className="mt-16 bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 dark:from-gray-800/50 dark:via-blue-900/30 dark:to-indigo-900/30 rounded-3xl p-10 shadow-2xl border border-white/50 dark:border-gray-700/50">
          <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-900 dark:from-white dark:via-blue-200 dark:to-indigo-200 bg-clip-text text-transparent mb-10 text-center">
            Career Highlights
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-3">13+</div>
              <div className="text-base font-semibold text-gray-700 dark:text-gray-300">Years Experience</div>
              <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">Senior Leadership</div>
            </div>
            <div className="text-center bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
              <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-3">5+</div>
              <div className="text-base font-semibold text-gray-700 dark:text-gray-300">Teams Led</div>
              <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">Cross-functional</div>
            </div>
            <div className="text-center bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
              <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-3">$2M+</div>
              <div className="text-base font-semibold text-gray-700 dark:text-gray-300">Cost Savings</div>
              <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">Infrastructure Optimization</div>
            </div>
            <div className="text-center bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
              <div className="text-4xl font-bold text-orange-600 dark:text-orange-400 mb-3">50+</div>
              <div className="text-base font-semibold text-gray-700 dark:text-gray-300">Projects Delivered</div>
              <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">Enterprise Scale</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
