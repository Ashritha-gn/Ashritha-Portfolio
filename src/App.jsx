import { useState } from "react";
import { motion } from "framer-motion";

const skills = [
  {
    title: "AI & Machine Learning",
    items: [
      "Artificial Intelligence",
      "AI Fundamentals",
      "Machine Learning",
      "Data Analysis",
    ],
  },
  {
    title: "Generative & Agentic AI",
    items: [
      "Generative AI Basics",
      "Agentic AI Basics",
      "Currently Learning",
    ],
  },
  {
    title: "NLP & Deep Learning",
    items: [
      "NLP Basics",
      "Deep Learning Fundamentals",
      "Multilingual Text-to-Speech",
    ],
  },
  {
    title: "Computer Vision",
    items: [
      "Object Detection",
      "Image Processing",
      "Image Recognition",
    ],
  },
  {
    title: "Programming",
    items: ["Python", "C"],
  },
  {
    title: "Web & Database",
    items: ["HTML", "CSS", "SQL"],
  },
  {
    title: "Data & Tools",
    items: [
      "Pandas",
      "NumPy",
      "Power BI",
      "Excel",
      "Jupyter Notebook",
      "Google Colab",
    ],
  },
  {
    title: "Version Control",
    items: ["Git", "GitHub"],
  },
];

const projects = [
  {
    number: "01",
    title: "Blind Assist",
    category: "AI • COMPUTER VISION • ACCESSIBILITY",
    description:
      "An AI-based application designed to support visually impaired users through currency recognition, obstacle detection, bus number/route recognition, and text-to-speech voice guidance.",
    tags: [
      "Python",
      "AI",
      "Computer Vision",
      "Image Recognition",
      "TTS",
    ],
  },
  {
    number: "02",
    title: "Multilingual Text-to-Speech System",
    category: "NLP • MULTILINGUAL AI",
    description:
      "A multilingual text-to-speech system combining keyword extraction with context-aware information retrieval and display.",
    tags: ["Python", "NLP", "TTS", "Keyword Extraction"],
  },
  {
    number: "03",
    title: "Crime Data Analysis",
    category: "DATA ANALYSIS • WOMEN SAFETY",
    description:
      "Crime-data analysis focused on identifying trends, unsafe regions, and high-risk areas using visualization and basic machine-learning techniques.",
    tags: [
      "Python",
      "Pandas",
      "Visualization",
      "Machine Learning",
    ],
  },
  {
    number: "04",
    title: "Team Task Manager",
    category: "ACADEMIC PROJECT • COLLABORATION",
    description:
      "A team-based academic project focused on organizing, tracking, and managing tasks efficiently.",
    tags: ["Team Project", "Task Management", "Collaboration"],
  },
];

const certifications = [
  "SAP Code Unnati – Advanced Course in Emerging Technologies: AI & ML, Deep Learning, Edge Computing, SAP Analytics Cloud, SAP ABAP on BTP.",
  "SAP Code Unnati Innovation Marathon 2025–26 – Participated and presented a project.",
  "Explore Machine Learning using Python – Infosys Springboard.",
  "Ethical Hacking Workshop (2025) – Cybersecurity tools and basic penetration-testing exposure.",
  "EF SET English Certificate – C1 Advanced, 68/100.",
];

const education = [
  [
    "B.E. – Artificial Intelligence & Machine Learning",
    "Sri Krishna Institute of Technology, Bangalore",
    "2022–2026",
  ],
  [
    "PUC / 12th",
    "Hoysala PU College",
    "65% • State Board",
  ],
  [
    "SSLC / 10th",
    "New Century School",
    "79.89% • State Board",
  ],
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: "easeOut",
    },
  },
};

function SectionTitle({ episode, title, accent }) {
  return (
    <div className="section-heading">
      <div className="episode">
        <span /> {episode}
      </div>

      <h2>
        {title} <em>{accent}</em>
      </h2>
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const nav = [
    ["About", "about"],
    ["Skills", "skills"],
    ["Projects", "projects"],
    ["Education", "education"],
    ["Contact", "contact"],
  ];

  /*
    GitHub Pages fix:
    BASE_URL automatically becomes /Ashritha-Portfolio/
    when deployed to:
    https://ashritha-gn.github.io/Ashritha-Portfolio/
  */
  const resumeUrl = `${import.meta.env.BASE_URL}Ashritha-GN-Resume.pdf`;
  const profileImageUrl = `${import.meta.env.BASE_URL}ashritha-profile.jpeg`;

  return (
    <main className="site">
      <div className="noise" />

      {/* NAVIGATION */}
      <header className="nav">
        <a
          className="brand"
          href="#home"
          onClick={() => setMenuOpen(false)}
        >
          <b>A</b>
          <span>ASHRITHA</span>
        </a>

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? "CLOSE" : "MENU"}
        </button>

        <nav
          className={
            menuOpen ? "nav-links open" : "nav-links"
          }
        >
          {nav.map(([label, id]) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}

          {/* CORRECTED RESUME PATH */}
          <a
            className="nav-cta"
            href={resumeUrl}
            target="_blank"
            rel="noreferrer"
          >
            RESUME ↗
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section id="home" className="hero">
        <div className="hero-watermark">ORIGINAL</div>
        <div className="hero-glow" />

        <div className="hero-copy">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="episode"
          >
            <span /> EPISODE 01 • AI / ML PORTFOLIO
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            ASHRITHA <strong>G N</strong>
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="hero-role"
          >
            ASPIRING IT PROFESSIONAL <i>•</i> AI &amp; ML GRADUATE
          </motion.p>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="hero-summary"
          >
            Building practical technology through{" "}
            <b>
              AI, machine learning, NLP, computer vision and Python.
            </b>{" "}
            Currently exploring Generative AI and Agentic AI.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="hero-actions"
          >
            <a className="primary-btn" href="#projects">
              VIEW MY WORK <span>▶</span>
            </a>

            {/* CORRECTED RESUME PATH */}
            <a
              className="ghost-btn"
              href={resumeUrl}
              target="_blank"
              rel="noreferrer"
            >
              OPEN RESUME ↗
            </a>
          </motion.div>

          <div className="hero-meta">
            <span>BANGALORE, INDIA</span>
            <span>•</span>
            <span>FRESHER</span>
            <span>•</span>
            <span>OPEN TO IT / TECH ROLES</span>
          </div>
        </div>

        {/* PROFILE PHOTO */}
        <motion.div
          className="hero-portrait-wrap"
          initial={{
            opacity: 0,
            scale: 0.92,
            x: 30,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            x: 0,
          }}
          transition={{
            duration: 0.9,
            delay: 0.15,
          }}
        >
          <div className="portrait-frame">
            {/* CORRECTED IMAGE PATH */}
            <img
              src={profileImageUrl}
              alt="Ashritha G N"
            />

            <div className="portrait-overlay" />

            <div className="portrait-label">
              PROFILE // 2026
            </div>
          </div>

          <div className="portrait-card">
            <b>AI / ML</b>
            <span>PYTHON • DATA • NLP • VISION</span>
          </div>
        </motion.div>

        <a className="scroll-cue" href="#about">
          SCROLL TO EXPLORE <span>↓</span>
        </a>
      </section>

      {/* ABOUT */}
      <section id="about" className="section about">
        <SectionTitle
          episode="EPISODE 02 • THE PERSON"
          title="ABOUT"
          accent="ME."
        />

        <motion.div
          className="about-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.15,
          }}
          variants={fadeUp}
        >
          <article className="about-main card">
            <div className="card-number">01</div>

            <div className="card-kicker">
              THE STORY
            </div>

            <h3>
              Curious mind. <span>Practical builder.</span>
            </h3>

            <p>
              I am an aspiring IT professional and B.E. graduate
              in Artificial Intelligence &amp; Machine Learning.
              My academic work has given me hands-on exposure to
              AI, machine learning, NLP, computer vision, data
              analysis, and Python-based development.
            </p>

            <p>
              I enjoy learning by building. I am currently
              expanding my knowledge of Generative AI and
              Agentic AI while looking for an entry-level
              opportunity where I can learn, contribute, and
              grow practical technical skills.
            </p>
          </article>

          <article className="card stat-card">
            <div className="card-number">02</div>

            <div className="card-kicker">
              FOCUS
            </div>

            <strong>
              AI +<br />
              DATA
            </strong>

            <p>
              Turning ideas into useful, understandable
              technology.
            </p>
          </article>

          <article className="card availability">
            <div className="card-kicker">
              CURRENT STATUS
            </div>

            <div className="live">
              <span /> AVAILABLE
            </div>

            <p>Fresher • Immediate Joiner</p>

            <p>
              Open to software, QA, support, analyst, data,
              and AI/ML roles.
            </p>
          </article>

          <article className="card languages">
            <div className="card-kicker">
              LANGUAGES
            </div>

            <div className="language-list">
              <span>English</span>
              <span>Kannada</span>
              <span>Hindi</span>
            </div>
          </article>
        </motion.div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="section skills-section">
        <SectionTitle
          episode="EPISODE 03 • TOOLKIT"
          title="TECHNICAL"
          accent="SKILLS."
        />

        <div className="skills-grid">
          {skills.map((group, i) => (
            <motion.article
              className="skill-card"
              key={group.title}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.15,
              }}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 22,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: i * 0.04,
                    duration: 0.5,
                  },
                },
              }}
            >
              <div className="skill-index">
                0{i + 1}
              </div>

              <h3>{group.title}</h3>

              <div className="chips">
                {group.items.map((item) => (
                  <span key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="section projects-section"
      >
        <div className="projects-watermark">
          PROJECTS
        </div>

        <SectionTitle
          episode="EPISODE 04 • SELECTED WORK"
          title="MY"
          accent="PROJECTS."
        />

        <div className="projects-grid">
          {projects.map((project, i) => (
            <motion.article
              className="project-card"
              key={project.title}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.12,
              }}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 30,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.55,
                    delay: i * 0.06,
                  },
                },
              }}
            >
              <div className="project-top">
                <span>
                  S01 E{project.number}
                </span>

                <b>AI / ML</b>
              </div>

              <div className="project-number">
                {project.number}
              </div>

              <div className="project-body">
                <small>
                  {project.category}
                </small>

                <h3>{project.title}</h3>

                <p>
                  {project.description}
                </p>
              </div>

              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* EDUCATION */}
      <section
        id="education"
        className="section education-section"
      >
        <SectionTitle
          episode="EPISODE 05 • JOURNEY"
          title="EDUCATION &"
          accent="CERTIFICATIONS."
        />

        <div className="education-grid">
          <div>
            {education.map(
              ([degree, school, years], i) => (
                <motion.article
                  className="timeline-item"
                  key={degree}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{
                    once: true,
                  }}
                  variants={fadeUp}
                >
                  <div className="timeline-dot">
                    {String(i + 1).padStart(2, "0")}
                  </div>

                  <div>
                    <span>{years}</span>

                    <h3>{degree}</h3>

                    <p>{school}</p>
                  </div>
                </motion.article>
              )
            )}
          </div>

          <div className="cert-panel">
            <div className="card-kicker">
              TRAINING / CERTIFICATIONS
            </div>

            <ul>
              {certifications.map((cert) => (
                <li key={cert}>
                  <span>✦</span>
                  {cert}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* OPPORTUNITIES */}
      <section className="section opportunities-section">
        <SectionTitle
          episode="EPISODE 05.5 • NEXT CHAPTER"
          title="EXPERIENCE &"
          accent="OPPORTUNITY."
        />

        <div className="opportunity-grid">
          <motion.article
            className="card opportunity-card"
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
            }}
            variants={fadeUp}
          >
            <div className="card-kicker">
              OPPORTUNITIES / TRAINING
            </div>

            <h3>
              Learning through real-world exposure.
            </h3>

            <p>
              <b>
                Instawork — QA Intern Opportunity:
              </b>{" "}
              QA internship opportunity related to software
              testing and quality-assurance exposure.
            </p>

            <p>
              <b>
                Mind Matrix — Web App Development using
                Generative AI:
              </b>{" "}
              Training/exposure in web application
              development using Generative AI.
            </p>
          </motion.article>

          <motion.article
            className="card opportunity-card"
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
            }}
            variants={fadeUp}
          >
            <div className="card-kicker">
              CAREER PREFERENCES
            </div>

            <h3>
              Ready for the next challenge.
            </h3>

            <p>
              Fresher • Immediate Joiner • Open to IT/Tech
              roles across software, QA, support, analyst,
              data, and AI/ML domains.
            </p>

            <p>
              Willing to relocate anywhere in India or
              internationally.
            </p>
          </motion.article>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="contact-section"
      >
        <div className="contact-watermark">
          CONTACT
        </div>

        <div className="contact-inner">
          <SectionTitle
            episode="EPISODE 06 • FINAL SCENE"
            title="LET'S"
            accent="CONNECT."
          />

          <p className="contact-intro">
            Ready to learn, contribute, and build. If you
            have an entry-level opportunity, project, or
            collaboration, I would love to hear from you.
          </p>

          <div className="contact-links">
            <a href="mailto:ashrithagn08@gmail.com">
              <small>EMAIL</small>
              <b>ashrithagn08@gmail.com</b>
              <span>↗</span>
            </a>

            <a href="tel:+919480059454">
              <small>PHONE</small>
              <b>+91 94800 59454</b>
              <span>↗</span>
            </a>

            <a
              href="https://www.linkedin.com/in/ashritha-gn-772069404/"
              target="_blank"
              rel="noreferrer"
            >
              <small>LINKEDIN</small>
              <b>
                ashritha-gn-772069404
              </b>
              <span>↗</span>
            </a>

            <a
              href="https://github.com/Ashritha-gn"
              target="_blank"
              rel="noreferrer"
            >
              <small>GITHUB</small>
              <b>
                github.com/Ashritha-gn
              </b>
              <span>↗</span>
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="brand">
          <b>A</b>
          <span>ASHRITHA G N</span>
        </div>

        <p>
          AI &amp; ML GRADUATE • ASPIRING IT PROFESSIONAL
        </p>

        <span>
          © {new Date().getFullYear()} ASHRITHA G N
        </span>
      </footer>
    </main>
  );
}

export default App;