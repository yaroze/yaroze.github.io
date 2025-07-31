import { 
  FaAws, 
  FaGoogle, 
  FaDocker, 
  FaJava, 
  FaPython,
  FaGit, 
  FaGitlab,
  FaGithub
} from 'react-icons/fa';
import {
  SiKubernetes,
  SiHelm,
  SiProxmox,
  SiOpentofu,
  SiAnsible,
  SiPostgresql,
  SiOracle,
  SiMysql,
  SiPrometheus,
  SiGrafana,
  SiGnubash,
  SiJenkins,
  SiGo
} from 'react-icons/si';
import { skills } from '../utils/data';

export const Skills = () => {
  const getIcon = (iconName: string) => {
    const iconMap: Record<string, React.JSX.Element> = {
      FaAws: <FaAws className="w-8 h-8" />,
      SiOracle: <SiOracle className="w-8 h-8" />,
      FaGoogle: <FaGoogle className="w-8 h-8" />,
      SiKubernetes: <SiKubernetes className="w-8 h-8" />,
      FaDocker: <FaDocker className="w-8 h-8" />,
      SiHelm: <SiHelm className="w-8 h-8" />,
      SiProxmox: <SiProxmox className="w-8 h-8" />,
      SiKvm: <div className="w-8 h-8 bg-orange-600 rounded flex items-center justify-center text-white text-xs font-bold">KVM</div>,
      SiOpentofu: <SiOpentofu className="w-8 h-8" />,
      SiAnsible: <SiAnsible className="w-8 h-8" />,
      SiPostgresql: <SiPostgresql className="w-8 h-8" />,
      SiMicrosoftsqlserver: <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center text-white text-xs font-bold">SQL</div>,
      SiPrometheus: <SiPrometheus className="w-8 h-8" />,
      SiGrafana: <SiGrafana className="w-8 h-8" />,
      FaJava: <FaJava className="w-8 h-8" />,
      FaPython: <FaPython className="w-8 h-8" />,
      SiPlsql: <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center text-white text-xs font-bold">PL</div>,
      SiMysql: <SiMysql className="w-8 h-8" />,
      SiBashscript: <SiGnubash className="w-8 h-8" />,
      FaGolang: <SiGo className="w-8 h-8" />,
      SiAlertmanager: <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center text-white text-xs font-bold">AM</div>,
      SiZabbix: <div className="w-8 h-8 bg-red-700 rounded flex items-center justify-center text-white text-xs font-bold">ZBX</div>,
      FaGit: <FaGit className="w-8 h-8" />,
      SiJenkins: <SiJenkins className="w-8 h-8" />,
      FaGitlab: <FaGitlab className="w-8 h-8" />,
      FaGithub: <FaGithub className="w-8 h-8" />,
    };
    return iconMap[iconName] || <div className="w-8 h-8 bg-gray-300 rounded" />;
  };

  const getIconColor = (category: string) => {
    const colorMap: Record<string, string> = {
      cloud: 'text-blue-500',
      containers: 'text-cyan-500',
      iac: 'text-purple-500',
      databases: 'text-green-500',
      monitoring: 'text-orange-500',
      languages: 'text-indigo-500',
      tools: 'text-gray-600',
    };
    return colorMap[category] || 'text-gray-500';
  };

  const getCategoryTitle = (category: string) => {
    const titleMap: Record<string, string> = {
      cloud: 'Cloud Platforms',
      containers: 'Containers & Orchestration',
      iac: 'Infrastructure as Code',
      databases: 'Databases',
      monitoring: 'Monitoring & Observability',
      languages: 'Programming Languages',
      tools: 'DevOps Tools',
    };
    return titleMap[category] || category;
  };

  const categories = Array.from(new Set(skills.map(skill => skill.category)));

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Comprehensive technical expertise across cloud platforms, DevOps tools, and modern infrastructure technologies
          </p>
        </div>

        <div className="space-y-12">
          {categories.map((category) => {
            const categorySkills = skills.filter(skill => skill.category === category);
            
            return (
              <div key={category} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
                  {getCategoryTitle(category)}
                </h3>
                
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                  {categorySkills.map((skill) => (
                    <div
                      key={skill.id}
                      className="group bg-white dark:bg-gray-700 rounded-lg p-4 shadow-sm hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1"
                    >
                      <div className="text-center">
                        <div className={`flex justify-center mb-3 ${getIconColor(skill.category)} group-hover:scale-110 transition-transform duration-200`}>
                          {getIcon(skill.icon)}
                        </div>
                        <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                          {skill.name}
                        </h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Skills Summary */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">13+</div>
              <div className="text-gray-700 dark:text-gray-300">Years of Experience</div>
            </div>
            <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">Multi</div>
              <div className="text-gray-700 dark:text-gray-300">Technology Stack</div>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-6">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">1300+</div>
              <div className="text-gray-700 dark:text-gray-300">IoT Devices Managed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};