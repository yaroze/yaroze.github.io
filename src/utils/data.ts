import type { Experience, Project, Skill, Certification, Education, SocialLink, BlogPost } from '../types';

export const personalInfo = {
  name: 'Pedro Farinha',
  title: 'Senior Platform/DevOps Engineer',
  location: 'Canada',
  email: 'plfarinha@gmail.com',
  phone: '+1 (306) 251-2611',
  summary: 'Senior Platform and DevOps Engineer with extensive experience in cloud infrastructure, system administration, and database management. Specialized in building scalable, secure, and automated solutions across diverse enterprise environments. Proven track record of leading technical teams, optimizing infrastructure costs, and implementing robust CI/CD pipelines that enhance collaboration between development and operations teams.',
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
    technologies: ['AWS', 'GCP', 'Kubernetes', 'Docker', 'Terraform', 'Ansible', 'GitLab CI', 'Prometheus', 'Grafana'],
    achievements: [
      'Delivering tailored DevOps solutions for multiple clients',
      'Implementing automated deployment pipelines and monitoring solutions',
      'Optimizing cloud infrastructure costs and performance',
      'Designed and implemented PoC for major retailer involving Oracle Database administration and CDC using Apache Kafka, Debezium, and Solace on Oracle Cloud',
    ],
  },
  {
    id: 'smartex',
    company: 'Smartex',
    position: 'Principal DevOps Engineer',
    duration: '10 months',
    startDate: 'August 2023',
    endDate: 'May 2024',
    location: 'Remote',
    description: [
      'Member of Smartex\'s DevOps team improving stability, performance, and cost of existing infrastructure',
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
  },
  {
    id: 'n8n-workflow-automation',
    title: 'n8n: Building Enterprise Workflow Automation Infrastructure',
    date: 'January 15, 2025',
    readTime: '8 minutes',
    summary: 'Complete guide to deploying and scaling n8n workflow automation platform in enterprise environments with Kubernetes, high availability, and security best practices.',
    content: 'n8n is a powerful open-source workflow automation tool that enables teams to connect applications and automate processes without extensive coding. This comprehensive guide covers enterprise deployment patterns, infrastructure design, and operational best practices for running n8n at scale.',
    tags: ['n8n', 'workflow-automation', 'kubernetes', 'devops', 'enterprise', 'infrastructure'],
    category: 'tech',
    codeExamples: [
      {
        language: 'yaml',
        code: `# n8n Kubernetes Deployment with High Availability
apiVersion: apps/v1
kind: Deployment
metadata:
  name: n8n-deployment
  namespace: automation
spec:
  replicas: 3
  selector:
    matchLabels:
      app: n8n
  template:
    metadata:
      labels:
        app: n8n
    spec:
      containers:
      - name: n8n
        image: n8nio/n8n:latest
        ports:
        - containerPort: 5678
        env:
        - name: N8N_BASIC_AUTH_ACTIVE
          value: "true"
        - name: N8N_BASIC_AUTH_USER
          valueFrom:
            secretKeyRef:
              name: n8n-secrets
              key: basic-auth-user
        - name: N8N_BASIC_AUTH_PASSWORD
          valueFrom:
            secretKeyRef:
              name: n8n-secrets
              key: basic-auth-password
        - name: DB_TYPE
          value: "postgresdb"
        - name: DB_POSTGRESDB_HOST
          value: "postgresql-primary"
        - name: DB_POSTGRESDB_DATABASE
          value: "n8n"
        - name: N8N_ENCRYPTION_KEY
          valueFrom:
            secretKeyRef:
              name: n8n-secrets
              key: encryption-key
        - name: EXECUTIONS_MODE
          value: "queue"
        - name: QUEUE_BULL_REDIS_HOST
          value: "redis-primary"
        volumeMounts:
        - name: n8n-data
          mountPath: /home/node/.n8n
        resources:
          requests:
            memory: "512Mi"
            cpu: "500m"
          limits:
            memory: "2Gi"
            cpu: "2000m"
      volumes:
      - name: n8n-data
        persistentVolumeClaim:
          claimName: n8n-pvc`,
        description: 'High-availability n8n deployment on Kubernetes'
      },
      {
        language: 'yaml',
        code: `# PostgreSQL StatefulSet for n8n
apiVersion: apps/v1
kind: StatefulSet
metadata:
  name: postgresql
  namespace: automation
spec:
  serviceName: postgresql
  replicas: 2
  selector:
    matchLabels:
      app: postgresql
  template:
    metadata:
      labels:
        app: postgresql
    spec:
      containers:
      - name: postgresql
        image: postgres:15-alpine
        ports:
        - containerPort: 5432
        env:
        - name: POSTGRES_DB
          value: "n8n"
        - name: POSTGRES_USER
          value: "n8n_user"
        - name: POSTGRES_PASSWORD
          valueFrom:
            secretKeyRef:
              name: postgresql-secret
              key: password
        - name: POSTGRES_REPLICATION_MODE
          value: master
        - name: POSTGRES_REPLICATION_USER
          value: replicator
        - name: POSTGRES_REPLICATION_PASSWORD
          valueFrom:
            secretKeyRef:
              name: postgresql-secret
              key: replication-password
        volumeMounts:
        - name: postgresql-data
          mountPath: /var/lib/postgresql/data
        resources:
          requests:
            memory: "1Gi"
            cpu: "500m"
          limits:
            memory: "4Gi"
            cpu: "2000m"
  volumeClaimTemplates:
  - metadata:
      name: postgresql-data
    spec:
      accessModes: ["ReadWriteOnce"]
      resources:
        requests:
          storage: 50Gi`,
        description: 'PostgreSQL StatefulSet for n8n data persistence'
      },
      {
        language: 'yaml',
        code: `# Redis StatefulSet for Queue Management
apiVersion: apps/v1
kind: StatefulSet
metadata:
  name: redis
  namespace: automation
spec:
  serviceName: redis
  replicas: 1
  selector:
    matchLabels:
      app: redis
  template:
    metadata:
      labels:
        app: redis
    spec:
      containers:
      - name: redis
        image: redis:7-alpine
        ports:
        - containerPort: 6379
        command:
        - redis-server
        - /etc/redis/redis.conf
        volumeMounts:
        - name: redis-config
          mountPath: /etc/redis
        - name: redis-data
          mountPath: /data
        resources:
          requests:
            memory: "256Mi"
            cpu: "250m"
          limits:
            memory: "1Gi"
            cpu: "1000m"
      volumes:
      - name: redis-config
        configMap:
          name: redis-config
  volumeClaimTemplates:
  - metadata:
      name: redis-data
    spec:
      accessModes: ["ReadWriteOnce"]
      resources:
        requests:
          storage: 10Gi`,
        description: 'Redis deployment for n8n queue management'
      },
      {
        language: 'mermaid',
        code: `graph TB
    subgraph "External Systems"
        A[Users/APIs] --> LB[Load Balancer]
        EXT1[Slack API]
        EXT2[GitHub API]
        EXT3[AWS Services]
        EXT4[Email Services]
    end

    subgraph "Kubernetes Cluster"
        LB --> IG[Ingress Controller]
        IG --> N8N[n8n Pods x3]
        
        subgraph "Data Layer"
            PG[(PostgreSQL Primary)]
            PGR[(PostgreSQL Replica)]
            RED[(Redis)]
        end
        
        subgraph "Queue System"
            N8N --> RED
            RED --> WQ[Worker Queue]
            WQ --> WP[Worker Pods x5]
        end
        
        N8N --> PG
        WP --> PG
        PG --> PGR
        
        subgraph "Monitoring"
            PROM[Prometheus]
            GRAF[Grafana]
            AM[AlertManager]
        end
        
        N8N --> PROM
        PG --> PROM
        RED --> PROM
        PROM --> GRAF
        PROM --> AM
    end

    subgraph "Storage"
        PVC[Persistent Volumes]
        S3[S3 Compatible Storage]
    end

    PG --> PVC
    PGR --> PVC
    RED --> PVC
    N8N --> S3
    
    WP --> EXT1
    WP --> EXT2
    WP --> EXT3
    WP --> EXT4

    classDef primary fill:#e1f5fe
    classDef secondary fill:#f3e5f5
    classDef storage fill:#e8f5e8
    classDef external fill:#fff3e0

    class N8N,WP primary
    class PG,PGR,RED secondary
    class PVC,S3 storage
    class EXT1,EXT2,EXT3,EXT4,A external`,
        description: 'n8n Enterprise Infrastructure Architecture'
      }
    ]
  },
  {
    id: 'argocd-gitops-platform',
    title: 'ArgoCD: Building a Robust GitOps Platform for Kubernetes',
    date: 'January 10, 2025',
    readTime: '10 minutes',
    summary: 'Comprehensive guide to implementing ArgoCD as the foundation of a GitOps platform, covering multi-cluster management, security, monitoring, and enterprise patterns.',
    content: 'ArgoCD is the leading GitOps operator for Kubernetes, enabling declarative deployments and continuous delivery. This guide explores enterprise-grade ArgoCD deployments, including multi-cluster management, RBAC, application patterns, and operational best practices for scaling GitOps across organizations.',
    tags: ['argocd', 'gitops', 'kubernetes', 'devops', 'ci-cd', 'enterprise'],
    category: 'tech',
    codeExamples: [
      {
        language: 'yaml',
        code: `# ArgoCD High Availability Installation
apiVersion: argoproj.io/v1alpha1
kind: ArgoCD
metadata:
  name: argocd-ha
  namespace: argocd
spec:
  ha:
    enabled: true
    replicas: 3
  
  server:
    replicas: 2
    ingress:
      enabled: true
      ingressClassName: nginx
      hosts:
      - argocd.company.com
      tls:
      - secretName: argocd-tls
        hosts:
        - argocd.company.com
    
    config:
      url: https://argocd.company.com
      application.instanceLabelKey: argocd.argoproj.io/instance
      
      # OIDC Configuration
      oidc.config: |
        name: Company SSO
        issuer: https://sso.company.com
        clientId: argocd
        clientSecret: $oidc.clientSecret
        requestedScopes: ["openid", "profile", "email", "groups"]
        requestedIDTokenClaims: {"groups": {"essential": true}}

  controller:
    replicas: 2
    resources:
      limits:
        cpu: 2000m
        memory: 4Gi
      requests:
        cpu: 1000m
        memory: 2Gi

  repo:
    replicas: 2
    resources:
      limits:
        cpu: 1000m
        memory: 2Gi
      requests:
        cpu: 500m
        memory: 1Gi

  redis:
    enabled: true
    
  dex:
    enabled: false  # Using external OIDC

  applicationSet:
    enabled: true
    replicas: 2`,
        description: 'High Availability ArgoCD deployment configuration'
      },
      {
        language: 'yaml',
        code: `# Redis HA for ArgoCD
apiVersion: apps/v1
kind: StatefulSet
metadata:
  name: argocd-redis-ha-server
  namespace: argocd
spec:
  serviceName: argocd-redis-ha
  replicas: 3
  selector:
    matchLabels:
      app: argocd-redis-ha
  template:
    metadata:
      labels:
        app: argocd-redis-ha
    spec:
      containers:
      - name: redis
        image: redis:6.2-alpine
        ports:
        - containerPort: 6379
        - containerPort: 26379
        command:
        - redis-server
        - /etc/redis/redis.conf
        - --sentinel
        volumeMounts:
        - name: redis-config
          mountPath: /etc/redis
        - name: redis-data
          mountPath: /data
        resources:
          requests:
            memory: "200Mi"
            cpu: "100m"
          limits:
            memory: "500Mi"
            cpu: "500m"
      volumes:
      - name: redis-config
        configMap:
          name: argocd-redis-config
  volumeClaimTemplates:
  - metadata:
      name: redis-data
    spec:
      accessModes: ["ReadWriteOnce"]
      resources:
        requests:
          storage: 5Gi`,
        description: 'Redis HA configuration for ArgoCD'
      },
      {
        language: 'yaml',
        code: `# Multi-Cluster ApplicationSet
apiVersion: argoproj.io/v1alpha1
kind: ApplicationSet
metadata:
  name: microservices-apps
  namespace: argocd
spec:
  generators:
  - clusters:
      selector:
        matchLabels:
          environment: production
  - list:
      elements:
      - cluster: prod-us-east
        url: https://prod-us-east.k8s.company.com
        environment: production
        region: us-east-1
      - cluster: prod-eu-west
        url: https://prod-eu-west.k8s.company.com
        environment: production
        region: eu-west-1
  template:
    metadata:
      name: '{{cluster}}-microservices'
    spec:
      project: microservices
      source:
        repoURL: https://github.com/company/microservices-manifests
        targetRevision: main
        path: 'environments/{{environment}}/{{region}}'
      destination:
        server: '{{url}}'
        namespace: microservices
      syncPolicy:
        automated:
          prune: true
          selfHeal: true
          allowEmpty: false
        syncOptions:
        - CreateNamespace=true
        - RespectIgnoreDifferences=true`,
        description: 'ApplicationSet for multi-cluster deployments'
      },
      {
        language: 'mermaid',
        code: `graph TB
    subgraph "Git Repositories"
        GR1[Application Manifests]
        GR2[Helm Charts]
        GR3[Config Repository]
        GR4[ApplicationSets]
    end

    subgraph "ArgoCD Control Plane"
        subgraph "ArgoCD Components"
            AS[ArgoCD Server x2]
            AC[ArgoCD Controller x2]
            AR[Repo Server x2]
            ARS[Redis HA x3]
            ASET[ApplicationSet Controller]
        end
        
        subgraph "ArgoCD UI & API"
            WEB[Web UI]
            API[REST API]
            CLI[ArgoCD CLI]
        end
        
        AS --> WEB
        AS --> API
        CLI --> API
    end

    subgraph "Target Clusters"
        subgraph "Production US-East"
            K1[Kubernetes API]
            NS1[Application Namespaces]
            AG1[ArgoCD Agent]
        end
        
        subgraph "Production EU-West"
            K2[Kubernetes API]
            NS2[Application Namespaces]
            AG2[ArgoCD Agent]
        end
        
        subgraph "Staging Cluster"
            K3[Kubernetes API]
            NS3[Application Namespaces]
            AG3[ArgoCD Agent]
        end
    end

    subgraph "Monitoring & Observability"
        PROM[Prometheus]
        GRAF[Grafana]
        AL[AlertManager]
        NOT[Notification Channels]
    end

    subgraph "External Systems"
        OIDC[OIDC Provider]
        VAULT[HashiCorp Vault]
        REG[Container Registry]
        HOOK[Webhook Receivers]
    end

    # Git to ArgoCD
    GR1 --> AC
    GR2 --> AR
    GR3 --> AR
    GR4 --> ASET

    # ArgoCD Internal Communication
    AC --> ARS
    AS --> ARS
    AR --> ARS
    ASET --> AC

    # ArgoCD to Clusters
    AC --> K1
    AC --> K2
    AC --> K3
    AG1 --> AC
    AG2 --> AC
    AG3 --> AC

    # Applications in Clusters  
    K1 --> NS1
    K2 --> NS2
    K3 --> NS3

    # External Integrations
    AS --> OIDC
    AR --> VAULT
    NS1 --> REG
    NS2 --> REG
    NS3 --> REG

    # Monitoring
    AS --> PROM
    AC --> PROM
    AR --> PROM
    K1 --> PROM
    K2 --> PROM
    K3 --> PROM
    PROM --> GRAF
    PROM --> AL
    AL --> NOT

    # Webhooks
    HOOK --> AS
    GR1 --> HOOK
    GR2 --> HOOK

    classDef argocd fill:#326ce5,color:#fff
    classDef cluster fill:#ff6b35,color:#fff
    classDef git fill:#f05032,color:#fff
    classDef monitoring fill:#e6522c,color:#fff
    classDef external fill:#4caf50,color:#fff

    class AS,AC,AR,ARS,ASET,WEB,API,CLI argocd
    class K1,K2,K3,NS1,NS2,NS3,AG1,AG2,AG3 cluster
    class GR1,GR2,GR3,GR4 git
    class PROM,GRAF,AL,NOT monitoring
    class OIDC,VAULT,REG,HOOK external`,
        description: 'ArgoCD GitOps Platform Architecture with Multi-Cluster Management'
      }
    ]
  }
];
