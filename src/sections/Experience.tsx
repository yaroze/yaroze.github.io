import { MapPin, Calendar, ChevronRight } from 'lucide-react';
import { experiences } from '../utils/data';

export const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Professional Experience
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            13+ years of progressive experience in DevOps, cloud infrastructure, and database engineering
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((experience, index) => (
            <div key={experience.id} className="relative">
              {/* Timeline Line */}
              {index < experiences.length - 1 && (
                <div className="absolute left-6 top-24 w-0.5 h-full bg-gradient-to-b from-blue-500 to-transparent"></div>
              )}

              {/* Experience Card */}
              <div className="flex items-start mb-12">
                {/* Timeline Dot */}
                <div className="flex-shrink-0 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-6 shadow-lg">
                  {experience.startDate.slice(-2)}
                </div>

                {/* Content */}
                <div className="flex-1 bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  {/* Header */}
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                        {experience.position}
                      </h3>
                      <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2">
                        {experience.company}
                      </h4>
                    </div>
                    <div className="flex flex-col lg:items-end text-sm text-gray-600 dark:text-gray-300">
                      <div className="flex items-center mb-1">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span>{experience.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span>{experience.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="mb-4">
                    <ul className="space-y-2">
                      {experience.description.map((desc, descIndex) => (
                        <li
                          key={descIndex}
                          className="text-gray-700 dark:text-gray-300 flex items-start"
                        >
                          <ChevronRight className="w-4 h-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                          {desc}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Key Achievements */}
                  <div className="mb-4">
                    <h5 className="font-semibold text-gray-900 dark:text-white mb-2">
                      Key Achievements:
                    </h5>
                    <ul className="space-y-2">
                      {experience.achievements.map((achievement, achIndex) => (
                        <li
                          key={achIndex}
                          className="text-gray-700 dark:text-gray-300 flex items-start"
                        >
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h5 className="font-semibold text-gray-900 dark:text-white mb-3">
                      Technologies Used:
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-sm font-medium rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Career Highlights */}
        <div className="mt-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl p-8 text-white">
          <h3 className="text-2xl font-bold text-center mb-8">Career Highlights</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">13+</div>
              <div className="text-blue-100">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">5</div>
              <div className="text-blue-100">Teams Led</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">$2M+</div>
              <div className="text-blue-100">Cost Savings</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">100+</div>
              <div className="text-blue-100">Projects Delivered</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};