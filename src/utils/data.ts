import type { Experience, Project, Skill, Certification, Education, SocialLink } from '../types';

export const personalInfo = {
  name: 'Pedro Farinha',
  title: 'Platform/DevOps Engineer',
  location: 'Canada',
  email: 'plfarinha@gmail.com',
  phone: '+1 (306) 251-2611',
  summary: 'Throughout my professional career, I had the opportunity to experience several roles and technologies, most of them as Systems and Database Administration, DevOps engineering and development. This heterogeneity provided me with valuable knowledge of working in large environments and different teams, and has provided me valuable skills and knowledge to improve important collaborations between the infrastructures and development teams.',
  availability: 'Available for consulting',
};

export const socialLinks: SocialLink[] = [
  {
    id: 'linkedin',
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/plfarinha',
    icon: 'FaLinkedin',
  },
  {
    id: 'github',
    name: 'GitHub',
    url: 'https://github.com/pedrofarinha',
    icon: 'FaGithub',
  },
  {
    id: 'email',
    name: 'Email',
    url: 'mailto:plfarinha@gmail.com',
    icon: 'FaEnvelope',
  },
];

export const skills: Skill[] = [
  // Cloud Platforms
  { id: 'aws', name: 'AWS', category: 'cloud', icon: 'FaAws', proficiency: 95 },
  { id: 'oracle', name: 'Oracle Cloud', category: 'cloud', icon: 'SiOracle', proficiency: 85 },
  { id: 'gcp', name: 'Google Cloud', category: 'cloud', icon: 'FaGoogle', proficiency: 80 },
  
  // Containers & Orchestration
  { id: 'kubernetes', name: 'Kubernetes', category: 'containers', icon: 'SiKubernetes', proficiency: 90 },
  { id: 'docker', name: 'Docker', category: 'containers', icon: 'FaDocker', proficiency: 95 },
  { id: 'helm', name: 'Helm', category: 'containers', icon: 'SiHelm', proficiency: 85 },
  { id: 'proxmox', name: 'Proxmox', category: 'containers', icon: 'SiProxmox', proficiency: 85 },
  { id: 'kvm', name: 'KVM', category: 'containers', icon: 'SiKvm', proficiency: 80 },
  
  // Infrastructure as Code
  { id: 'opentofu', name: 'OpenTofu', category: 'iac', icon: 'SiOpentofu', proficiency: 85 },
  { id: 'ansible', name: 'Ansible', category: 'iac', icon: 'SiAnsible', proficiency: 80 },
  
  // Databases
  { id: 'postgresql', name: 'PostgreSQL', category: 'databases', icon: 'SiPostgresql', proficiency: 95 },
  { id: 'oracle-db', name: 'Oracle Database', category: 'databases', icon: 'SiOracle', proficiency: 85 },
  { id: 'sqlserver', name: 'SQL Server', category: 'databases', icon: 'SiMicrosoftsqlserver', proficiency: 90 },
  
  // Monitoring & Observability
  { id: 'prometheus', name: 'Prometheus', category: 'monitoring', icon: 'SiPrometheus', proficiency: 90 },
  { id: 'grafana', name: 'Grafana', category: 'monitoring', icon: 'SiGrafana', proficiency: 85 },
  { id: 'alertmanager', name: 'Alertmanager', category: 'monitoring', icon: 'SiAlertmanager', proficiency: 80 },
  { id: 'zabbix', name: 'Zabbix', category: 'monitoring', icon: 'SiZabbix', proficiency: 75 },
  
  // Languages & Tools
  { id: 'java', name: 'Java', category: 'languages', icon: 'FaJava', proficiency: 90 },
  { id: 'python', name: 'Python', category: 'languages', icon: 'FaPython', proficiency: 85 },
  { id: 'plsql', name: 'PL/SQL', category: 'languages', icon: 'SiPlsql', proficiency: 90 },
  { id: 'sql', name: 'SQL', category: 'languages', icon: 'SiMysql', proficiency: 95 },
  { id: 'bash', name: 'Bash/Shell', category: 'languages', icon: 'SiBashscript', proficiency: 95 },
  { id: 'go', name: 'Go', category: 'languages', icon: 'FaGolang', proficiency: 75 },
  { id: 'git', name: 'Git', category: 'tools', icon: 'FaGit', proficiency: 95 },
  { id: 'jenkins', name: 'Jenkins', category: 'tools', icon: 'SiJenkins', proficiency: 85 },
  { id: 'gitlab', name: 'GitLab CI', category: 'tools', icon: 'FaGitlab', proficiency: 90 },
  { id: 'github-actions', name: 'GitHub Actions', category: 'tools', icon: 'FaGithub', proficiency: 88 },
];

export const experiences: Experience[] = [
  {
    id: 'freelance',
    company: 'Freelance DevOps/Platform Engineering',
    position: 'Independent Consultant',
    duration: 'Current',
    startDate: 'May 2024',
    endDate: 'Present',
    location: 'Remote',
    description: [
      'Providing DevOps and platform engineering consulting services',
      'Working with various clients on infrastructure automation and optimization',
      'Specializing in cloud platforms, CI/CD, and system architecture',
    ],
    technologies: ['AWS', 'Kubernetes', 'Docker', 'Terraform', 'Ansible', 'GitLab CI', 'Prometheus', 'Grafana'],
    achievements: [
      'Delivering tailored DevOps solutions for multiple clients',
      'Implementing automated deployment pipelines and monitoring solutions',
      'Optimizing cloud infrastructure costs and performance',
    ],
  },
  {
    id: 'smartex',
    company: 'Smartex.ai',
    position: 'Principal DevOps Engineer',
    duration: '10 months',
    startDate: 'August 2023',
    endDate: 'May 2024',
    location: 'Remote',
    description: [
      'Member of Smartex.AI\'s DevOps team improving stability, performance, and cost of existing infrastructure',
      'Leading and mentoring technical teams',
      'Managing infrastructure for textile manufacturing intelligence platform',
    ],
    technologies: ['Ansible', 'ArgoCD', 'Argo Workflows', 'AWS', 'Elasticsearch', 'GitLab CI', 'Grafana', 'Kubernetes', 'Helm Charts', 'PostgreSQL', 'Prometheus', 'Proxmox', 'Terraform', 'Zabbix'],
    achievements: [
      'Improved security and performance by replacing OpenVPN with Zero Trust solution for 1,300+ IoT devices',
      'Migrated GitLab runners to on-premises hardware, reducing build times by 70% and costs by 80%',
      'Implemented hybrid Elasticsearch solution for centralized log management',
      'Deployed Stackgres on EKS for migrating RDS databases to TimescaleDB',
      'Enhanced observability with Zabbix 7, Prometheus, and Grafana',
    ],
  },
  {
    id: 'siemens',
    company: 'Siemens',
    position: 'DevOps Engineer for Cybersecurity',
    duration: '2 years 6 months',
    startDate: 'January 2021',
    endDate: 'June 2023',
    location: 'Lisboa, Portugal',
    description: [
      'Member of the Cybersecurity department of Siemens',
      'Participated in several projects related to vulnerability management on a DevOps perspective',
      'Implemented CI/CD processes with strict security requirements',
    ],
    technologies: ['RHEL', 'Ansible', 'Docker', 'GitLab', 'Oracle Database', 'F5 Load Balancers', 'Digital Certificates (PKI)', 'Python', 'Liquibase'],
    achievements: [
      'Implemented CI/CD process with GitLab and Ansible improving deployment reliability',
      'Delivered vulnerability management application PoC running on OpenShift',
      'Improved performance in Oracle SQL and PL/SQL batch processes',
      'Managed productive and non-productive Apache Web Servers and Oracle databases',
    ],
  },
  {
    id: 'prozis',
    company: 'Prozis',
    position: 'DevOps/DataOps/DBA',
    duration: '1 year 3 months',
    startDate: 'October 2019',
    endDate: 'December 2020',
    location: 'Porto Area, Portugal',
    description: [
      'Managed Prozis\' MSSQL database infrastructure and GitLab-CI pipelines',
      'Implemented PostgreSQL and automated deployments',
      'Provided 24/7 on-call support for Databases and DevOps infrastructure',
    ],
    technologies: ['Ansible', 'Docker', 'GitLab', 'F5 Load Balancers', 'Python', 'Bash', 'Cloudera', 'Kubernetes', 'PostgreSQL', 'Microsoft SQL Server'],
    achievements: [
      'Introduced PostgreSQL with custom automation for HA clusters using Docker',
      'Deployed 9 node Cloudera CDH cluster for production',
      'Containerized legacy apps and automated deployments with GitLab-CI',
      'Managed monitoring platform based on Grafana, Prometheus and ELK',
    ],
  },
  {
    id: 'optimizer',
    company: 'OPTIMIZER - Serviços e Consultadoria Informática Lda',
    position: 'Oracle Consultant',
    duration: '8 years 3 months',
    startDate: 'August 2011',
    endDate: 'October 2019',
    location: 'Porto Area, Portugal',
    description: [
      'Participated as contractor in several projects related to Oracle technologies',
      'Worked with large enterprises on Oracle Database, Retail, WebLogic, and GoldenGate solutions',
      'Provided technical consulting across multiple Oracle technology stacks',
    ],
    technologies: ['Oracle Database', 'Oracle Retail', 'Oracle WebLogic', 'Oracle GoldenGate', 'Oracle Linux'],
    achievements: [
      'Successfully delivered Oracle technology solutions for large enterprise clients',
      'Gained extensive experience across the full Oracle technology stack',
      'Built long-term consulting relationships with major organizations',
    ],
  },
];

export const projects: Project[] = [
  {
    id: 'iot-migration',
    title: 'IoT Infrastructure Migration',
    description: 'Led the migration of industrial IoT devices to a new hybrid cloud infrastructure',
    impact: 'Improved system reliability and enabled real-time analytics capabilities',
    technologies: ['AWS', 'Kubernetes', 'PostgreSQL', 'Java', 'Ansible', 'Prometheus'],
    details: [
      'Designed fault-tolerant architecture for industrial IoT data processing',
      'Implemented automated device provisioning and configuration management',
      'Created comprehensive monitoring and alerting systems',
      'Established secure communication protocols for device-to-cloud connectivity',
    ],
  },
  {
    id: 'ci-optimization',
    title: 'CI/CD Pipeline Optimization',
    description: 'Optimization of build and deployment pipelines across multiple development teams',
    impact: 'Significantly improved build times and reduced manual testing efforts',
    technologies: ['Jenkins', 'Docker', 'Kubernetes', 'GitLab CI', 'GitHub Actions', 'Ansible'],
    details: [
      'Implemented parallel build strategies and intelligent caching mechanisms',
      'Created automated testing frameworks with comprehensive coverage',
      'Designed blue-green deployment strategies for zero-downtime releases',
      'Established infrastructure-as-code practices across development teams',
    ],
  },
  {
    id: 'cost-optimization',
    title: 'Cloud Cost Optimization',
    description: 'Strategic cost reduction initiatives across multi-cloud infrastructure',
    impact: 'Achieved substantial cost savings while maintaining system performance',
    technologies: ['AWS', 'Ansible', 'CloudWatch', 'Java', 'Grafana'],
    details: [
      'Implemented automated resource scaling based on demand patterns',
      'Optimized storage strategies and data lifecycle management',
      'Created cost monitoring dashboards and budget alerting systems',
      'Established resource tagging and cost allocation frameworks',
    ],
  },
];

export const certifications: Certification[] = [
  {
    id: 'cicd',
    name: 'Continuous Integration and Continuous Delivery (CI/CD)',
    issuer: 'Professional Certification',
    date: '2021',
    credentialId: '',
    link: '',
  },
  {
    id: 'git-version-control',
    name: 'Version Control with Git',
    issuer: 'Professional Certification',
    date: '2021',
    credentialId: '',
    link: '',
  },
  {
    id: 'devops-aws',
    name: 'DevOps on AWS: Code, Build, and Test',
    issuer: 'AWS Training',
    date: '2021',
    credentialId: '',
    link: 'https://aws.amazon.com/training/',
  },
  {
    id: 'sql-data-science',
    name: 'Databases and SQL for Data Science',
    issuer: 'Coursera',
    date: '2020',
    credentialId: '',
    link: 'https://www.coursera.org/',
  },
];

export const education: Education[] = [
  {
    id: 'minho-degree',
    degree: 'Licenciatura, Tecnologias e Sistemas de Informacao',
    institution: 'Universidade do Minho',
    year: '2007-2011',
    field: 'Technologies and Information Systems',
  },
];