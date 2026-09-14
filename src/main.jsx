import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight, Github, Linkedin, Mail, Phone, Download, Menu, X,
  Cloud, Server, ShieldCheck, Terminal, Code2, Database, Layers3,
  GraduationCap, BriefcaseBusiness, Award, ExternalLink, ChevronRight
} from "lucide-react";
import "./styles.css";

const cv = {
  name: "Ahmed Mossad Nawar",
  title: "Cloud & DevOps Engineer | AI",
  location: "Egypt, Cairo",
  email: "ahmed.mossad.nawar@gmail.com",
  phone: "+201096671676",
  linkedin: "https://www.linkedin.com/in/ahmed-mossad-nawar",
  githubLabel: "GitHub",
  summary:
    "Cloud & DevOps Engineer with a Bachelor's degree in Computer Science and a strong foundation in programming, networking, and Linux administration. Completed professional training through MCIT (ITI), Telecom Egypt (WE), and NTI in AWS Cloud and Web Development. Currently working as an AI Technical Reviewer while expanding expertise in DevOps technologies and scalable cloud-native solutions.",
};

const skills = [
  ["AWS", "EC2 · S3 · IAM · Lambda · CloudFormation · Route53 · RDS", Cloud],
  ["DevOps", "Git · GitHub · Docker · Kubernetes · Bash · YAML · CI/CD", Layers3],
  ["Networking & Security", "CCNA · VPC · Load Balancer · VPN · IAM Policies", ShieldCheck],
  ["Linux & Servers", "Red Hat · Ubuntu · CentOS · Windows Server", Server],
  ["Programming", "Python · C++ · C# · SQL", Code2],
  ["Cloud Architecture", "Virtualization · Serverless · IaC · Scalable Applications", Cloud],
];

const experience = [
  {
    role: "AI Technical Reviewer",
    org: "EYouth",
    meta: "Hybrid · Part-Time · June 2026 – Present",
    bullets: [
      "Reviewed and evaluated AI-generated technical content for accuracy and quality.",
      "Validated technical responses related to programming, cloud computing, Linux, and DevOps.",
      "Identified technical issues and provided feedback to improve AI-generated content.",
      "Collaborated with AI and technical teams to maintain high-quality documentation and responses."
    ]
  },
  {
    role: "Cloud Architect (AWS)",
    org: "Telecom Egypt (WE) — Summer Training",
    meta: "Cairo, Egypt · On-Site · July 2025 – September 2025 · 70 Hours",
    bullets: [
      "Covered Cloud Architecture, Virtualization, and AWS core services.",
      "Gained hands-on experience with Containers, Serverless Computing, and CI/CD pipelines.",
      "Learned Cloud Security, Identity Management, and Infrastructure as Code.",
      "Worked on mini projects in Cloud-Native Databases, Event Streaming, and Scalable App Design."
    ]
  },
  {
    role: "Cloud Practitioner & Solutions Architect (AWS)",
    org: "National Telecommunication Institute (NTI)",
    meta: "Online Training · August 2025 – September 2025 · 120 Hours",
    bullets: [
      "Gained knowledge in Cloud Architecture, Virtualization, and Core AWS Services.",
      "Learned Cost Optimization, Resource Management, and Cloud Design Principles.",
      "Covered Cloud Security, Identity Management, and Infrastructure as Code.",
      "Worked on concepts of Scalable Applications and AWS deployment best practices."
    ]
  },
  {
    role: "Computer Science — Summer Internship",
    org: "MCIT Summer Internship 2025",
    meta: "Online Training · July 2025 – August 2025 · 120 Hours",
    bullets: [
      "Data Analytics with Power BI and Web Development Training Program.",
      "Practical experience with data modeling, dashboards, and visualization.",
      "Applied Descriptive Statistics & Regression for analysis and insights.",
      "Explored AI & Prompt Engineering and fundamentals of Business Analysis and Web Development."
    ]
  }
];

const certifications = [
  "AWS Academy Graduate — AWS Academy Cloud Foundations",
  "AWS Academy Graduate — AWS Academy Cloud Architecting",
  "Telecom Egypt (WE) — AWS Cloud Architect Training (70 Hours)",
  "National Telecommunication Institute (NTI) — AWS Cloud Practitioner & Solutions Architect (120 Hours)",
  "MCIT Summer Internship — Data Analytics & Web Development (120 Hours)"
];

const education = {
  degree: "Bachelor's Degree in Computer Science and Information Systems",
  institution: "Akhbar El Yom Academy",
  period: "2022–2026",
  major: "Computer Science",
  gpa: "3.08 / 4.00"
};

function SectionTitle({ eyebrow, title, text }) {
  return (
    <div className="section-title">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

function App() {
  const [menu, setMenu] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      const ids = ["home","about","skills","experience","project","education","contact"];
      const y = window.scrollY + 180;
      let current = "home";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= y) current = id;
      }
      setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) => {
    setMenu(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="app">
      <div className="grid-bg" />
      <nav className="nav">
        <button className="brand" onClick={() => go("home")} aria-label="Home">
          <span className="brand-mark">&lt;/&gt;</span>
          <span>AMN<span className="dot">.</span></span>
        </button>

        <div className={`nav-links ${menu ? "open" : ""}`}>
          {["home","about","skills","experience","project","education","contact"].map(id => (
            <button key={id} className={active === id ? "active" : ""} onClick={() => go(id)}>
              {id === "project" ? "Project" : id[0].toUpperCase() + id.slice(1)}
            </button>
          ))}
        </div>

        <a className="nav-cta" href={`mailto:${cv.email}`}>Let's connect <ArrowUpRight size={16}/></a>
        <button className="menu-btn" onClick={() => setMenu(!menu)} aria-label="Toggle menu">
          {menu ? <X/> : <Menu/>}
        </button>
      </nav>

      <main>
        <section id="home" className="hero section">
          <div className="hero-copy reveal">
            <div className="status"><span/> Available for opportunities</div>
            <p className="kicker">CLOUD / DEVOPS / AI</p>
            <h1>Building <span>scalable</span><br/>cloud experiences.</h1>
            <p className="hero-text">
              I'm <strong>{cv.name}</strong>, a {cv.title.toLowerCase()} focused on AWS, Linux,
              networking, and cloud-native solutions.
            </p>
            <div className="hero-actions">
              <button className="primary" onClick={() => go("project")}>Explore my work <ArrowUpRight size={18}/></button>
              <a className="secondary" href={`mailto:${cv.email}`}>Contact me <Mail size={17}/></a>
            </div>
            <div className="quick-links">
              <a href={cv.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17}/> LinkedIn</a>
              <span/>
              <a href={`mailto:${cv.email}`}><Mail size={17}/> Email</a>
              <span/>
              <a href={`tel:${cv.phone}`}><Phone size={17}/> Phone</a>
            </div>
          </div>

          <div className="hero-visual reveal">
            <div className="orb orb1"/>
            <div className="orb orb2"/>
            <div className="profile-glow"/>
            <div className="profile-wrap">
              <div className="profile-frame">
                <img src="/ahmed-profile.jpg" alt="Ahmed Mossad Nawar" className="profile-image" />
                <div className="profile-caption"><span>01</span><b>Cloud &amp; DevOps Engineer</b></div>
              </div>
            </div>
            <div className="terminal compact">
              <div className="terminal-bar"><span/><span/><span/><b>cloud-stack.sh</b></div>
              <div className="terminal-body">
                <p><i>$</i> status</p>
                <p className="success">● Cloud-native mode</p>
              </div>
            </div>
            <div className="floating-card fc1"><Cloud size={19}/><div><b>AWS Cloud</b><small>Architecture</small></div></div>
            <div className="floating-card fc2"><Terminal size={19}/><div><b>DevOps</b><small>CI / CD</small></div></div>
          </div>
        </section>

        <section id="about" className="section about">
          <SectionTitle eyebrow="01 / ABOUT" title="Engineering with a cloud-first mindset." text="A concise view of the professional profile presented in the CV."/>
          <div className="about-grid">
            <div className="about-card">
              <div className="quote-mark">“</div>
              <p>{cv.summary}</p>
            </div>
            <div className="facts">
              <div><span>01</span><b>Computer Science</b><small>Bachelor's Degree · 2022–2026</small></div>
              <div><span>02</span><b>AWS & Cloud</b><small>Architecture · Security · IaC</small></div>
              <div><span>03</span><b>AI Technical Review</b><small>Accuracy · Quality · Technical validation</small></div>
            </div>
          </div>
        </section>

        <section id="skills" className="section">
          <SectionTitle eyebrow="02 / TOOLKIT" title="Technical toolkit." text="Technologies and capabilities explicitly listed in the CV."/>
          <div className="skills-grid">
            {skills.map(([name, desc, Icon]) => (
              <article className="skill-card" key={name}>
                <div className="icon-box"><Icon size={22}/></div>
                <h3>{name}</h3>
                <p>{desc}</p>
                <ChevronRight className="arrow" size={18}/>
              </article>
            ))}
          </div>
          <div className="soft-skills">
            <span>Communication</span><span>Presentation</span><span>Teamwork</span><span>Decision Making</span>
            <span>Problem Solving</span><span>Time Management</span><span>Continuous Learning</span><span>Adaptability</span>
            <span>Leadership</span><span>Critical Thinking</span>
          </div>
        </section>

        <section id="experience" className="section">
          <SectionTitle eyebrow="03 / EXPERIENCE" title="Experience & training."/>
          <div className="timeline">
            {experience.map((item, i) => (
              <article className="timeline-item" key={item.org}>
                <div className="timeline-index">0{i + 1}</div>
                <div className="timeline-line"><span/></div>
                <div className="timeline-content">
                  <div className="timeline-head">
                    <div><p className="role">{item.role}</p><h3>{item.org}</h3></div>
                    <span className="meta">{item.meta}</span>
                  </div>
                  <ul>{item.bullets.map(b => <li key={b}>{b}</li>)}</ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="project" className="section project-section">
          <SectionTitle eyebrow="04 / FEATURED PROJECT" title="AWS Cloud Infrastructure for AYA University Information System" text="A production-style cloud architecture described in the CV."/>
          <div className="project-card">
            <div className="project-top">
              <div className="project-icon"><Cloud size={28}/></div>
              <span className="project-label">CLOUD INFRASTRUCTURE</span>
            </div>
            <div className="architecture">
              <div className="arch-row"><span>Users</span><ArrowUpRight size={15}/><b>ALB</b><ArrowUpRight size={15}/><b>EC2 + Nginx</b></div>
              <div className="arch-row"><span>Traffic</span><ArrowUpRight size={15}/><b>AWS WAF</b><ArrowUpRight size={15}/><b>Auto Scaling</b></div>
              <div className="arch-row"><span>Data</span><ArrowUpRight size={15}/><b>Private Subnet</b><ArrowUpRight size={15}/><b>SQL Server 2022</b></div>
            </div>
            <div className="project-details">
              <ul>
                <li>Designed a secure, highly available AWS infrastructure using VPC, EC2, ALB, Auto Scaling, and AWS WAF.</li>
                <li>Deployed ASP.NET Core 8, React, and FastAPI on Ubuntu EC2 with Nginx.</li>
                <li>Configured SQL Server 2022 in a private subnet with secure networking.</li>
                <li>Implemented monitoring and logging using CloudWatch, CloudTrail, SNS, and S3.</li>
                <li>Applied AWS networking, security, monitoring, and high-availability best practices.</li>
              </ul>
            </div>
            <div className="tech-strip">
              {["AWS","VPC","EC2","ALB","Auto Scaling","WAF","Nginx","CloudWatch","CloudTrail","S3","SNS"].map(x => <span key={x}>{x}</span>)}
            </div>
          </div>
        </section>

        <section id="education" className="section split-section">
          <div>
            <SectionTitle eyebrow="05 / EDUCATION" title="Academic foundation."/>
            <div className="education-card">
              <div className="icon-box"><GraduationCap size={25}/></div>
              <div>
                <h3>{education.degree}</h3>
                <p>{education.institution}</p>
                <small>{education.major} · {education.period}</small>
              </div>
              <strong>{education.gpa}<small>GPA</small></strong>
            </div>
          </div>
          <div>
            <SectionTitle eyebrow="06 / CERTIFICATIONS" title="Credentials."/>
            <div className="cert-list">
              {certifications.map((c, i) => <div className="cert" key={c}><Award size={18}/><span>{c}</span><b>0{i+1}</b></div>)}
            </div>
          </div>
        </section>

        <section id="contact" className="section contact">
          <div className="contact-inner">
            <span className="eyebrow">07 / CONTACT</span>
            <h2>Let's build something<br/><span>scalable.</span></h2>
            <p>For professional opportunities, collaboration, or technical discussions.</p>
            <a className="primary big" href={`mailto:${cv.email}`}>Get in touch <ArrowUpRight size={19}/></a>
            <div className="contact-info">
              <a href={`mailto:${cv.email}`}><Mail size={17}/>{cv.email}</a>
              <a href={cv.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17}/>LinkedIn</a>
              <a href={`tel:${cv.phone}`}><Phone size={17}/>{cv.phone}</a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <span>© 2026 {cv.name}</span>
        <span>{cv.title}</span>
        <a href="#home">Back to top ↑</a>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);