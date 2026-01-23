import {
  Experience as ExperienceType,
  Education as EducationType,
  Project as ProjectType,
} from '../types';

const caculateWorkLength = (startMonth: Date, endMonth: Date): number => {
  let months = (endMonth.getFullYear() - startMonth.getFullYear()) * 12;
  months -= startMonth.getMonth() + 1;
  months += endMonth.getMonth();
  return months <= 0 ? 0 : months;
};

const projects: Array<ProjectType> = [
  {
    img: 'img/pbl-rks517.png',
    title: 'Vulnerability Assessment and Penetration Testing (VAPT) | Polibatam\'s Project Based Learning',
    duration: 'Sep 2025 - Jan 2026',
    description:
      'Vulnerability Assessment and Penetration Testing (VAPT) is ​a Project Based Learning (PBL) that focus on conducting a comprehensive security assessment of web applications under Diskominfo Bintan. The objective is to identify critical security weaknesses, evaluate their potential impact, and provide strategic mitigation plans to strengthen the overall security posture of the digital infrastructure.',
    showcaseLink: 'https://pbl.polibatam.ac.id/pamerin/detail.php?title=vulnerability-assesment-dan-penetration-testing-18&id=NDM1Ng==&ta=Nw==&id_tim=NTc0Mg==',
    techstack: ['Penetration Testing', 'Vuln. Assessment', 'Burp Suite', 'Nikto', 'Nmap', 'OWASP ZAP', 'Wireshark', 'Kali Linux'],
  },
  {
    img: 'img/pesxplorer.png',
    title: 'PESXplorer',
    duration: 'Jul 2025 - Sep 2025',
    description:
      'A fast, client-side desktop web application for searching, filtering, and comparing player. Designed to help users find the perfect player using both general criteria and deep attribute analysis.',
    codeLink: 'https://github.com/xyzsteven/PESXplorer',
    liveLink: 'https://pesxplorer.xyz/',
    techstack: ['JavaScript', 'HTML', 'CSS', 'Cloudflare'],
  },
  {
    img: 'img/pbl-rks413.png',
    title: 'SIEM Development Attack and Defense | Polibatam\'s Project Based Learning',
    duration: 'Feb 2025 - Aug 2025',
    association: 'State Polytechnic of Batam',
    description:
      'SIEM Development Attack and Defense is ​a Project Based Learning (PBL) that focus is on building a Security Information and Event Management (SIEM) system and hardening servers, forming the foundation for a Red Team will simulate cyberattacks to uncover vulnerabilities, while the Blue Team will be tasked with defending the system, detecting threats, and responding to incidents.',
    showcaseLink: 'https://pbl.polibatam.ac.id/pamerin/detail.php?title=pengembangan-siem-dan-attack-and-defense--rks413&id=Mzc3OA==&ta=Ng==&id_tim=NDMxOQ==',
    techstack: ['Ubuntu Server', 'Wazuh', 'Grafana', 'Prometheus', 'TheHive', 'Cortex', 'MISP', 'ModSecurity', 'Cloudflare'],
  },
  {
    img: 'img/arch-crack.png',
    title: 'ArchCrack',
    duration: 'Jun 2025 - Jun 2025',
    description:
      'A lightweight Bash script designed to automate the process of finding the password for a protected archive file using a dictionary attack.',
    codeLink: 'https://github.com/xyzsteven/ArchCrack',
    liveLink: '',
    techstack: ['Shell'],
  },
  {
    img: 'img/pbl-rks307.png',
    title: 'Well Architect SIEM Implementation | Polibatam\'s Project Based Learning',
    duration: 'Aug 2024 - Jan 2025',
    association: 'State Polytechnic of Batam',
    description:
      'Well Architect SIEM Implementation is ​a Project Based Learning (PBL) that applies Security Information and Event Management (SIEM) a system that collects, monitors, and analyzes security data from various sources within the IT infrastructure simulate in Virtual Machines.',
    showcaseLink: 'https://pbl.polibatam.ac.id/pamerin/detail.php?title=well-architect-siem-implementation---soc-7&id=MjUzMQ==&ta=NQ==&id_tim=Mjk5NA==',
    techstack: ['Ubuntu Server', 'Wazuh', 'Grafana', 'Prometheus', 'DFIR-IRIS', 'OpenCTI', 'TrueNAS', 'OpenVPN'],
  },
  {
    img: 'img/pbl-rks213.png',
    title: 'DDoS Defend Matrix | Polibatam\'s Mini Project Based Learning',
    duration: 'Feb 2024 - Jul 2024',
    association: 'State Polytechnic of Batam',
    description:
      'DDoS Defend Matrix is ​a Mini Project Based Learning (PBL) that applies Security Scripts with Data Structure Algorithms to Simulate DDoS Attacks on GNS3.',
    showcaseLink: 'https://pbl.polibatam.ac.id/pamerin/detail.php?title=ddosdefend-matrix-skrip-keamanan-dengan-algoritma-struktur-data-untuk-simulasi-serangan-ddos-di-gns3-purple-version-&id=MTc5Nw==&ta=NA==&id_tim=MjE1OQ==',
    techstack: ['Ubuntu', 'Debian','GNS3', 'Python'],
  },
  {
    img: 'img/pbl-rks112.png',
    title: 'Classic Cryptography Application Development | Polibatam\'s Mini Project Based Learning',
    duration: 'Aug 2023 - Jan 2024',
    association: 'State Polytechnic of Batam',
    description:
      'Classic Cryptography Application Development is ​​a Mini Project Based Learning (PBL) aims to develop a classic cryptography application that allows users to secure text messages with the cryptography method.',
    showcaseLink: 'https://pbl.polibatam.ac.id/pamerin/detail.php?title=pengembangan-aplikasi-kriptografi-klasik-&id=MTEzOQ==&ta=Mw==&id_tim=MTU0NA==',
    techstack: ['Python', 'Tkinter', 'MySQL'],
  },
];

const experience: Array<ExperienceType> = [
  {
    img: 'img/self-employed.png',
    jobTitle: 'Computer Technician (Freelance)',
    company: 'Self-employed',
    date: 'Sep 2017 - Present',
    workLength: `${caculateWorkLength(new Date(2017, 9, 1), new Date())} mos`,
    location: 'Batam, Indonesia',
    tasks: [
      'Operating system reinstallation and setup (primarily Windows),',
      "Driver installation and software configuration,",
      "Diagnosed and resolved software and system-level errors,",
      'System backup and restore implementation,',
      'Operating system optimization for performance and stability,',
      'Storage migration from HDD to SSD, including data transfer,',
      'On-site and remote technical support for end users.',
    ],
    techstack: ['OS Installation & Configuration', 'System Recovery', 'System Diagnostics', 'Data Recovery & Migration', 'On-Site/Remote Support'],
  },
  {
    img: 'img/pid.jpg',
    jobTitle: 'Operator',
    company: 'Panasonic Industrial Devices Batam (PIDSG-BT)',
    date: 'Jan 2022 - Jan 2023',
    workLength: `${caculateWorkLength(new Date(2022, 1, 17), new Date(2023, 2, 16))} mos`,
    location: 'Batam, Indonesia',
    tasks: [
      'Operated production machines according to SOP and safety standards,',
      "Conducted machine condition and basic checks,",
      "Monitored production processes and recorded results on check sheets,",
      'Performed quality control through product sampling and inspection,',
      'Maintained a clean, safe, and organized work environment.',
    ],
    techstack: ['EHS', 'SOP Compliance', 'Quality Control', 'Machine Operation,', 'Process Monitoring', 'Communication'],
  },
  {
    img: 'img/hln.jpg',
    jobTitle: 'Student Internship',
    company: 'HLN Batam',
    date: 'Sep 2020 - Apr 2021',
    workLength: `${caculateWorkLength(new Date(2020, 9, 1), new Date(2021, 6, 1))} mos`,
    location: 'Batam, Indonesia',
    tasks: [
      'Assisted technicians in daily machine inspection and maintenance checks,',
      "Supported daily production activities following SOP guidelines,",
      "Prepared daily production and internship reports,",
      'Applied workplace safety and environmental standards.',
    ],
    techstack: ['EHS', 'SOP Compliance', 'Technical Assistance', 'Reporting', 'Equipment Operation', 'Communication'],
  },
];

const education: Array<EducationType> = [
  {
    img: 'img/poli.png',
    school: 'State Polytechnic of Batam',
    study: 'Cybersecurity Engineering',
    date: '2023 - Present',
  },
  {
    img: 'img/stm.png',
    school: 'Vocational High School 1 Batam',
    study: 'Industrial Automation Engineering ',
    date: '2017 - 2021',
  },
];

export { experience, projects, education };
