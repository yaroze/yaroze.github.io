import type { Experience, Project, Skill, Certification, Education, SocialLink, BlogPost } from '../types';

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

export const blogPosts: BlogPost[] = [
  {
    id: 'userspace-logrotate',
    title: 'Userspace logrotate',
    date: 'February 14, 2023',
    readTime: 'Less than 1 minute',
    summary: 'How to set up logrotate in a user\'s home directory with custom configuration for managing log files without root access.',
    content: 'Setting up logrotate in userspace allows you to manage log rotation without root privileges. This guide covers the essential configuration files and scripts needed.',
    tags: ['linux', 'logrotate', 'userspace', 'system-administration'],
    category: 'tech',
    codeExamples: [
      {
        language: 'bash',
        code: '# Global settings\nweekly          # Run when\nrotate 4        # Keep only the last 4 rotated log files\ncreate          # Creates a new file\ninclude /etc/logrotate.d\n\n# Settings specific to a directory\n/var/log/wtmp {\n    monthly    # Run when\n    minsize 1M # File must be at least 1M to be rotated\n    create 0664 root utmp # Creates a new file with specific permissions&ownership\n    rotate 1 # Keep only the last rotated log file\n}',
        description: 'Sample logrotate configuration'
      },
      {
        language: 'bash',
        code: '#!/bin/sh\n\n/usr/sbin/logrotate --state /home/user/logrotate/logrotate.state /home/user/logrotate/logrotate.conf\nEXITVALUE=$?\nif [ $EXITVALUE != 0 ]; then\n    /usr/bin/logger -t logrotate "ALERT exited abnormally with [$EXITVALUE]"\nfi\nexit 0',
        description: 'Shell script to trigger logrotate'
      }
    ]
  },
  {
    id: 'shrinking-pv-lvm',
    title: 'Shrinking LVM PV partitions',
    date: 'February 14, 2023',
    readTime: '3 minutes',
    summary: 'Step-by-step guide for safely shrinking LVM physical volume partitions, including filesystem checks and data movement.',
    content: 'Shrinking LVM partitions requires careful planning and execution. This guide provides a comprehensive walkthrough with explicit commands and safety warnings.',
    tags: ['linux', 'lvm', 'storage', 'partitions', 'system-administration'],
    category: 'tech',
    codeExamples: [
      {
        language: 'bash',
        code: '# ⚠️ Always backup your data before proceeding!\n# ⚠️ Confirm commands before issuing them!\n\n# 1. Check filesystem\n# 2. Shrink the filesystem\n# 3. Resize the logical volume\n# 4. Resize the physical volume\n# 5. Move LVM segments if needed\n# 6. Resize partition using fdisk',
        description: 'High-level steps for shrinking LVM partitions'
      }
    ]
  },
  {
    id: 'sata-hotplug',
    title: 'SATA hot plug/unplug',
    date: 'February 14, 2023',
    readTime: 'Less than 1 minute',
    summary: 'Quick guide for safely hot-plugging and unplugging SATA devices in Linux systems without system restart.',
    content: 'Hot-plugging SATA devices in Linux requires proper device management to avoid data loss or system instability.',
    tags: ['ahci', 'linux', 'sata', 'storage', 'hardware'],
    category: 'tech',
    codeExamples: [
      {
        language: 'bash',
        code: '# Unplug process:\n# 1. Unmount all filesystems\n# 2. Delete device\necho 1 > /sys/block/(device)/device/delete\n# 3. Physically remove device',
        description: 'Safely unplugging a SATA device'
      },
      {
        language: 'bash',
        code: '# Hotplug - if host is known:\necho "- - -" > /sys/class/scsi_host/<hostN>/scan\n\n# If host is unknown, scan all:\ncd /sys/class/scsi_host/\nfor i in `ls -1`\ndo \n  echo "- - -" > $i/scan\ndone',
        description: 'Hot-plugging a SATA device'
      }
    ]
  },
  {
    id: 'recording-terminal-sessions',
    title: 'Recording terminal sessions',
    date: 'February 14, 2023',
    readTime: '1 minute',
    summary: 'How to record and playback terminal sessions using ttyrec, script, and other tools for documentation and troubleshooting.',
    content: 'Recording terminal sessions is essential for documentation, training, and troubleshooting. This guide covers multiple tools and playback options.',
    tags: ['linux', 'recording', 'screen', 'shell', 'documentation'],
    category: 'tech',
    codeExamples: [
      {
        language: 'bash',
        code: '# Installation\nsudo apt install ttyrec\nsudo apt install script\nsudo apt install its-playback-time  # for rewinding',
        description: 'Installing recording tools'
      },
      {
        language: 'bash',
        code: '# Playback commands\nttyplay <scriptfile>\nscriptreplay <scriptfile>\nipbt <scriptfile>  # for ttyrec with advanced features',
        description: 'Playing back recorded sessions'
      }
    ]
  }
];