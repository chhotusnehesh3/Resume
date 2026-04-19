"use client";

import { useState, useEffect } from "react";
import styles from "./page.module.css";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Code2, 
  Database, 
  Cloud, 
  Terminal, 
  Layers, 
  Activity, 
  Settings, 
  BookOpen, 
  Sun, 
  Moon,
  Award
} from "lucide-react";

// Brand icons
const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

const HackerRankIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 4h10M7 12h10M7 20h10M7 4v16M17 4v16M10 8h4M10 16h4"/></svg>
);

const HackerEarthIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16v16H4z"/><path d="M8 8v8M16 8v8M8 12h8"/></svg>
);

// Terminal Wrapper Component
const TerminalFrame = ({ children, title = "bash — 80×24" }: { children: React.ReactNode, title?: string }) => (
  <div className={styles.terminal}>
    <div className={styles.terminalHeader}>
      <div className={styles.dots}>
        <span className={styles.dot} style={{ backgroundColor: '#ff5f56' }}></span>
        <span className={styles.dot} style={{ backgroundColor: '#ffbd2e' }}></span>
        <span className={styles.dot} style={{ backgroundColor: '#27c93f' }}></span>
      </div>
      <div className={styles.terminalTitle}>{title}</div>
    </div>
    <div className={styles.terminalBody}>
      {children}
    </div>
  </div>
);

export default function Home() {
  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
      setIsLightMode(true);
    }
  }, []);

  useEffect(() => {
    if (isLightMode) {
      document.body.classList.add('light-mode');
    } else {
      document.body.classList.remove('light-mode');
    }
  }, [isLightMode]);

  const toggleTheme = () => setIsLightMode(!isLightMode);

  return (
    <main className={styles.main}>
      <button 
        onClick={toggleTheme} 
        className="theme-toggle" 
        aria-label="Toggle Theme"
      >
        {isLightMode ? <Moon size={20} /> : <Sun size={20} />}
      </button>

      {/* Hero Section */}
      <section className={`${styles.hero} reveal`}>
        <div className={styles.heroContent}>
           <p className={`${styles.greeting} mono`}>&gt; whoami</p>
           <h1 className={styles.name}>SNEHESH MUNDALE</h1>
           <p className={`${styles.role} mono`}>Software_Engineer.exe</p>
           
           <div className={styles.contactInfo}>
             <a href="tel:+918483869326" className={styles.contactItem}>
               <Phone size={14} /> <span>8483869326</span>
             </a>
             <a href="mailto:mundale.snehesh@gmail.com" className={styles.contactItem}>
               <Mail size={14} /> <span>mundale.snehesh@gmail.com</span>
             </a>
             <div className={styles.contactItem}>
               <MapPin size={14} /> <span>Navi Mumbai, IN</span>
             </div>
           </div>
        </div>
      </section>

      {/* Profile Section */}
      <section id="profile" className={`${styles.section} reveal`}>
        <h2 className={`${styles.sectionTitle} mono`}>// 01. Profile</h2>
        <TerminalFrame title="profile_summary.log">
          <div className={styles.profileContent}>
            <p>
              Software Engineer with 2+ years of experience in software engineering, full-stack development, backend development, 
              and enterprise application development. Extensive experience in <strong>Golang</strong>, <strong>REST API development</strong>, <strong>relational database design</strong>, 
              <strong>SQL</strong>, <strong>React JS</strong>, <strong>microservices</strong>, and <strong>scalable system design</strong>. Hands-on experience building CRM, ERP, CPaaS, workflow automation, 
              KPI dashboards, secure document management systems, and analytics platforms. Proven ability to improve process efficiency, automate operations, 
              optimize performance, maintain data integrity, and collaborate with cross-functional teams in Agile environments. 
              Seeking Software Engineer, Backend Engineer, or Full-Stack Engineer roles focused on high-scale systems, backend services, APIs, 
              cloud infrastructure, and business-critical platforms.
            </p>
          </div>
        </TerminalFrame>
      </section>

      {/* Core Skills */}
      <section id="skills" className={`${styles.section} reveal`}>
        <h2 className={`${styles.sectionTitle} mono`}>// 02. Core_Skills</h2>
        <div className={styles.skillsGrid}>
          <div className={styles.skillCategoryCard}>
            <div className={styles.categoryHeader}>
              <Code2 size={18} className={styles.categoryIcon} />
              <h3 className="mono">Programming</h3>
            </div>
            <div className={styles.skillTags}>
              <span className="mono">Go (Golang)</span>
              <span className="mono">Java</span>
              <span className="mono">JavaScript</span>
              <span className="mono">C++</span>
              <span className="mono">SQL</span>
              <span className="mono">PL/SQL</span>
            </div>
          </div>

          <div className={styles.skillCategoryCard}>
            <div className={styles.categoryHeader}>
              <Layers size={18} className={styles.categoryIcon} />
              <h3 className="mono">Backend</h3>
            </div>
            <div className={styles.skillTags}>
              <span className="mono">Microservices</span>
              <span className="mono">Node.js</span>
              <span className="mono">REST APIs</span>
              <span className="mono">Goroutines</span>
              <span className="mono">Auth (JWT/OAuth2)</span>
              <span className="mono">Clean Architecture</span>
            </div>
          </div>

          <div className={styles.skillCategoryCard}>
            <div className={styles.categoryHeader}>
              <Database size={18} className={styles.categoryIcon} />
              <h3 className="mono">Databases</h3>
            </div>
            <div className={styles.skillTags}>
              <span className="mono">MySQL</span>
              <span className="mono">PostgreSQL</span>
              <span className="mono">Oracle SQL</span>
              <span className="mono">RDBMS</span>
              <span className="mono">MongoDB</span>
              <span className="mono">VectorDB</span>
              <span className="mono">Redis</span>
            </div>
          </div>

          <div className={styles.skillCategoryCard}>
            <div className={styles.categoryHeader}>
              <Cloud size={18} className={styles.categoryIcon} />
              <h3 className="mono">Cloud_DevOps</h3>
            </div>
            <div className={styles.skillTags}>
              <span className="mono">Docker</span>
              <span className="mono">K8s</span>
              <span className="mono">CI/CD</span>
              <span className="mono">Git/Azure</span>
              <span className="mono">AWS</span>
              <span className="mono">GCS</span>
              <span className="mono">Linux</span>
            </div>
          </div>

          <div className={styles.skillCategoryCard}>
            <div className={styles.categoryHeader}>
              <Terminal size={18} className={styles.categoryIcon} />
              <h3 className="mono">AI_Productivity</h3>
            </div>
            <div className={styles.skillTags}>
              <span className="mono">ChatGPT/Claude</span>
              <span className="mono">Copilot</span>
              <span className="mono">n8n</span>
              <span className="mono">GoogleFlow</span>
              <span className="mono">Figma</span>
            </div>
          </div>

          <div className={styles.skillCategoryCard}>
            <div className={styles.categoryHeader}>
              <Activity size={18} className={styles.categoryIcon} />
              <h3 className="mono">Monitoring</h3>
            </div>
            <div className={styles.skillTags}>
              <span className="mono">ELK Stack</span>
              <span className="mono">Grafana</span>
              <span className="mono">Log Analysis</span>
              <span className="mono">App Monitoring</span>
            </div>
          </div>

          <div className={styles.skillCategoryCard}>
            <div className={styles.categoryHeader}>
              <Settings size={18} className={styles.categoryIcon} />
              <h3 className="mono">Tools</h3>
            </div>
            <div className={styles.skillTags}>
              <span className="mono">Postman</span>
              <span className="mono">Antigravity</span>
              <span className="mono">VS Code</span>
              <span className="mono">Eclipse</span>
              <span className="mono">IntelliJ</span>
            </div>
          </div>

          <div className={styles.skillCategoryCard}>
            <div className={styles.categoryHeader}>
              <BookOpen size={18} className={styles.categoryIcon} />
              <h3 className="mono">Fundamentals</h3>
            </div>
            <div className={styles.skillTags}>
              <span className="mono">DSA</span>
              <span className="mono">OOPs</span>
              <span className="mono">DBMS</span>
              <span className="mono">OS</span>
            </div>
          </div>
        </div>
      </section>

      {/* Work Experience */}
      <section id="experience" className={`${styles.section} reveal`}>
        <h2 className={`${styles.sectionTitle} mono`}>// 03. Experience</h2>
        <TerminalFrame title="work_history.sh">
          <div className={styles.experienceCard}>
            <div className={styles.cardHeader}>
              <h3 className={`${styles.company} mono`}>Jio Platforms Limited</h3>
              <span className={`${styles.date} mono`}>2024 - PRESENT</span>
            </div>
            <p className={`${styles.jobTitle} mono`}>Software Development Engineer-1</p>
            <ul className={styles.bulletList}>
              <li>Built and delivered internal <strong>CPaaS enterprise platforms</strong>, including <strong>JioCX CoreOps</strong>, supporting SMS, RCS, WhatsApp, EasyPhone, and Voice services, improving <strong>data visibility by 45%</strong> and <strong>operational efficiency by 20%</strong>.</li>
              <li>Worked across frontend and backend to build <strong>scalable, high-availability applications</strong> using Golang and React, leveraging <strong>profiling (pprof)</strong> and benchmarking to identify bottlenecks.</li>
              <li>Architected and refined <strong>relational data models</strong> and database schemas, improving query performance by <strong>25%</strong> while ensuring data integrity and consistency.</li>
              <li>Constructed and optimized <strong>RESTful APIs</strong> and backend services for system integrations and analytics pipelines, improving response times by <strong>20%</strong>.</li>
              <li>Established a secure <strong>document management system</strong> using GCS with encryption, <strong>RBAC</strong>, watermarking, and audit logging, leveraging WebSockets for real-time updates.</li>
              <li>Streamlined and automated <strong>internal workflows, alerts, and support processes</strong>, reducing manual effort by <strong>40%</strong> and improving turnaround time.</li>
              <li>Collaborated with cross-functional teams to resolve issues, reducing customer onboarding time to <strong>&lt;1 day</strong>.</li>
            </ul>
          </div>
        </TerminalFrame>
      </section>

      {/* Projects */}
      <section id="projects" className={`${styles.section} reveal`}>
        <h2 className={`${styles.sectionTitle} mono`}>// 04. Projects</h2>
        <div className={styles.projectGrid}>
          <TerminalFrame title="jiocx_coreops.go">
            <div className={styles.projectCard}>
              <div className={styles.projectHeader}>
                <h3 className={`${styles.projectTitle} mono`}>JIOCX - CoreOps Platform</h3>
                <span className={`${styles.projectBadge} mono`}>FEATURED</span>
              </div>
              <p className={styles.tagline}>SMS, RCS, WhatsApp, EasyPhone, Voice</p>
              <ul className={styles.projectBullets}>
                <li className={styles.bulletList}>Built a full-scale <strong>CRM platform</strong> for CPaaS services to streamline the customer lifecycle from onboarding to revenue realization.</li>
                <li className={styles.bulletList}>Formulated a <strong>modular backend system in Go</strong> for account management, proposals, legal workflows, sales orders, billing, and revenue recognition.</li>
                <li className={styles.bulletList}>Architected relational client master data models and established secure document storage on <strong>GCS with encryption and RBAC</strong>.</li>
                <li className={styles.bulletList}>Integrated financial records including <strong>Tally data</strong>, purchase orders, and billing documents to maintain auditable transactions.</li>
                <li className={styles.bulletList}>Enabled internal collaboration through <strong>Notes, Chat, Audit Logs</strong>, and automated email alerts.</li>
              </ul>
              <div className={styles.techStack}>
                <span className={`${styles.tag} mono`}>Golang</span>
                <span className={`${styles.tag} mono`}>GCS</span>
                <span className={`${styles.tag} mono`}>PostgreSQL</span>
                <span className={`${styles.tag} mono`}>RBAC</span>
              </div>
            </div>
          </TerminalFrame>

          <TerminalFrame title="kpi_portal.go">
            <div className={styles.projectCard}>
              <div className={styles.projectHeader}>
                <h3 className={`${styles.projectTitle} mono`}>KPI Dashboard Portal</h3>
              </div>
              <p className={styles.tagline}>Performance and Analytics for CPaaS</p>
              <ul className={styles.projectBullets}>
                <li className={styles.bulletList}>Built a real-time KPI dashboard leveraging <strong>Concurrency (Goroutines, Channels)</strong> and <strong>Redis</strong> to track sophisticated metrics including <strong>Revenue Projections, Revenue Outstanding, and deep-dive Analytics</strong>.</li>
                <li className={styles.bulletList}>Developed multi-factor <strong>Traffic Analysis</strong> engines supporting all product lines, each with unique parameters and specialized feature sets.</li>
                <li className={styles.bulletList}>Engineered <strong>Automated Alerting systems and Auto-Emailers</strong> that trigger based on intelligently detected traffic reductions or anomalies, ensuring proactive support.</li>
                <li className={styles.bulletList}>Enabled business leaders to analyze client engagement and performance trends through centralized real-time traffic analytics across the entire CPaaS ecosystem.</li>
              </ul>
              <div className={styles.techStack}>
                <span className={`${styles.tag} mono`}>Go</span>
                <span className={`${styles.tag} mono`}>SQL</span>
                <span className={`${styles.tag} mono`}>Redis</span>
                <span className={`${styles.tag} mono`}>Analytics</span>
                <span className={`${styles.tag} mono`}>Automation</span>
              </div>
            </div>
          </TerminalFrame>

          <TerminalFrame title="prism_engine.go">
            <div className={styles.projectCard}>
              <div className={styles.projectHeader}>
                <h3 className={`${styles.projectTitle} mono`}>Jio Prism</h3>
              </div>
              <p className={styles.tagline}>Examination and Proctoring Platform</p>
              <ul className={styles.projectBullets}>
                <li className={styles.bulletList}>Built a <strong>multi-tenant online examination platform</strong> with tenant isolation, role-based access control, and scalable architecture.</li>
                <li className={styles.bulletList}>Delivered backend services in <strong>Golang</strong> and a responsive frontend using <strong>React JS</strong>.</li>
                <li className={styles.bulletList}>Integrated <strong>MediaPipe</strong> for advanced proctoring and <strong>Judge0</strong> for secure, scalable coding compilers.</li>
                <li className={styles.bulletList}>Implemented <strong>unit and integration tests</strong> to validate business logic and ensure API reliability.</li>
                <li className={styles.bulletList}>Optimized system performance integrating <strong>Redis caching</strong> to support concurrent exam sessions and scalability.</li>
              </ul>
              <div className={styles.techStack}>
                <span className={`${styles.tag} mono`}>Golang</span>
                <span className={`${styles.tag} mono`}>React JS</span>
                <span className={`${styles.tag} mono`}>MediaPipe</span>
                <span className={`${styles.tag} mono`}>Judge0</span>
                <span className={`${styles.tag} mono`}>Redis</span>
              </div>
            </div>
          </TerminalFrame>
        </div>
      </section>

      {/* Education & Certs */}
      <section id="education" className={`${styles.section} reveal`}>
        <div className={styles.dualGrid}>
          <div>
            <h2 className={`${styles.sectionTitle} mono`}>// 05. Education</h2>
            <div className={styles.eduTimeline}>
              <div className={styles.eduNode}>
                <div className={styles.eduHeader}>
                  <span className={styles.eduSchool}>C-DAC Kharghar, Navi Mumbai</span>
                  <h3 className={styles.eduTitle}>PG Diploma - DAC</h3>
                  <span className={styles.eduDate}>2023 – 2024</span>
                </div>
              </div>
              <div className={styles.eduNode}>
                <div className={styles.eduHeader}>
                  <span className={styles.eduSchool}>G.H. Raisoni College of Engineering, Nagpur</span>
                  <h3 className={styles.eduTitle}>B.E. Mechanical Engineering</h3>
                  <span className={styles.eduDate}>2018 – 2022</span>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.certsColumn}>
            <h2 className={`${styles.sectionTitle} mono`}>// 06. Certificates</h2>
            <div className={styles.skillList}>
              <span className={`${styles.skillItem} mono`}><Award size={14} style={{ marginRight: '8px' }}/>Java</span>
              <span className={`${styles.skillItem} mono`}><Award size={14} style={{ marginRight: '8px' }}/>React</span>
              <span className={`${styles.skillItem} mono`}><Award size={14} style={{ marginRight: '8px' }}/>Oracle SQL</span>
            </div>
          </div>
        </div>
      </section>

      {/* Profiles */}
      <section id="socials" className={`${styles.section} reveal`}>
        <h2 className={`${styles.sectionTitle} mono`}>// 07. Socials</h2>
        <div className={styles.profilesRow}>
           <a href="https://github.com/chhotusnehesh3" target="_blank" className={`${styles.profileBox} glass`}>
             <GithubIcon />
             <span className="mono">GITHUB</span>
           </a>
           <a href="https://www.linkedin.com/in/snehesh-mundale" target="_blank" className={`${styles.profileBox} glass`}>
             <LinkedinIcon />
             <span className="mono">LINKEDIN</span>
           </a>
           <a href="https://www.hackerrank.com/profile/Snehesh_06" target="_blank" className={`${styles.profileBox} glass`}>
             <HackerRankIcon />
             <span className="mono">HACKERRANK</span>
           </a>
           <a href="https://www.hackerearth.com/@mundale_snehesh.me" target="_blank" className={`${styles.profileBox} glass`}>
             <HackerEarthIcon />
             <span className="mono">HACKEREARTH</span>
           </a>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <p className="mono">terminate --session=now</p>
        <p className="mono" style={{ opacity: 0.5, fontSize: '0.8rem' }}>© {new Date().getFullYear()} Snehesh Mundale | built_with_next_v15</p>
      </footer>
    </main>
  );
}
