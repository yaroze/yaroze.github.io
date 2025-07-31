import { GraduationCap, Award, ExternalLink, Calendar } from 'lucide-react';
import { certifications, education } from '../utils/data';

export const Education = () => {
  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Education & Certifications
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Continuous learning and professional development in cloud technologies and DevOps practices
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <div className="flex items-center mb-8">
              <GraduationCap className="w-8 h-8 text-blue-500 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Education</h3>
            </div>

            <div className="space-y-6">
              {education.map((edu) => (
                <div
                  key={edu.id}
                  className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                        {edu.degree}
                      </h4>
                      <p className="text-blue-600 dark:text-blue-400 font-medium">
                        {edu.institution}
                      </p>
                    </div>
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <Calendar className="w-4 h-4 mr-1" />
                      {edu.year}
                    </div>
                  </div>
                  {edu.field && (
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Specialization: {edu.field}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <div className="flex items-center mb-8">
              <Award className="w-8 h-8 text-green-500 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Certifications</h3>
            </div>

            <div className="space-y-6">
              {certifications.map((cert) => (
                <div
                  key={cert.id}
                  className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                        {cert.name}
                      </h4>
                      <p className="text-green-600 dark:text-green-400 font-medium mb-2">
                        {cert.issuer}
                      </p>
                      {cert.credentialId && (
                        <p className="text-gray-500 dark:text-gray-400 text-xs font-mono">
                          ID: {cert.credentialId}
                        </p>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <Calendar className="w-4 h-4 mr-1" />
                        {cert.date}
                      </div>
                      {cert.link && (
                        <a
                          href={cert.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Certification Stats */}
            <div className="mt-8 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg p-6 text-white">
              <h4 className="text-lg font-semibold mb-4">Certification Journey</h4>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold mb-1">{certifications.length}</div>
                  <div className="text-green-100 text-sm">Active Certifications</div>
                </div>
                <div>
                  <div className="text-2xl font-bold mb-1">100%</div>
                  <div className="text-green-100 text-sm">Current & Valid</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Development Timeline */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
            Continuous Learning Path
          </h3>
          <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Academic Foundation
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Strong computer science foundation from University of Coimbra
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-green-600 dark:text-green-400" />
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Industry Certifications
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Cloud and DevOps certifications from top technology vendors
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ExternalLink className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Ongoing Development
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Continuous learning in emerging technologies and best practices
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};