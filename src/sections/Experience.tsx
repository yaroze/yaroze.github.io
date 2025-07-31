import { MapPin, Calendar, ChevronRight } from 'lucide-react';
import { experiences } from '../utils/data';

export const Experience = () => {
  return (
    <section id="experience" className="py-12 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Professional Experience
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            13+ years of progressive experience in DevOps, cloud infrastructure, and database engineering
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid gap-6">
            {experiences.map((experience) => (
              <div key={experience.id} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                      {experience.position}
                    </h3>
                    <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2">
                      {experience.company}
                    </h4>
                  </div>
                  <div className="flex flex-col lg:items-end text-sm text-gray-600 dark:text-gray-300 lg:ml-4">
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

                {/* Content in two columns */}
                <div className="grid lg:grid-cols-2 gap-6">
                  {/* Left Column - Description & Achievements */}
                  <div className="space-y-4">
                    {/* Description */}
                    <div>
                      <h5 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">
                        Role & Responsibilities:
                      </h5>
                      <ul className="space-y-1">
                        {experience.description.slice(0, 3).map((desc, descIndex) => (
                          <li
                            key={descIndex}
                            className="text-gray-700 dark:text-gray-300 flex items-start text-sm"
                          >
                            <ChevronRight className="w-3 h-3 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                            {desc}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Key Achievements */}
                    <div>
                      <h5 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">
                        Key Achievements:
                      </h5>
                      <ul className="space-y-1">
                        {experience.achievements.slice(0, 3).map((achievement, achIndex) => (
                          <li
                            key={achIndex}
                            className="text-gray-700 dark:text-gray-300 flex items-start text-sm"
                          >
                            <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-1.5 flex-shrink-0"></div>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Right Column - Technologies */}
                  <div>
                    <h5 className="font-semibold text-gray-900 dark:text-white mb-3 text-sm">
                      Technologies Used:
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs font-medium rounded-full"
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

        {/* Career Highlights */}
        <div className="mt-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl p-6 text-white">
          <h3 className="text-xl font-bold text-center mb-6">Career Highlights</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold mb-1">13+</div>
              <div className="text-blue-100 text-sm">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold mb-1">5</div>
              <div className="text-blue-100 text-sm">Teams Led</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold mb-1">$2M+</div>
              <div className="text-blue-100 text-sm">Cost Savings</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold mb-1">100+</div>
              <div className="text-blue-100 text-sm">Projects Delivered</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};