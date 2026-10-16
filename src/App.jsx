import React, { useEffect, useState } from "react";
import {
  article,
  navigation,
  profile,
  projects,
  skillGroups,
} from "./data/portfolio.js";

function ArrowIcon({ diagonal = false }) {
  return (
    <svg
      aria-hidden="true"
      className="arrow-icon"
      viewBox="0 0 20 20"
      fill="none"
    >
      {diagonal ? (
        <path d="M5 15 15 5M6 5h9v9" />
      ) : (
        <path d="M3 10h13m-5-5 5 5-5 5" />
      )}
    </svg>
  );
}

function gmailComposeUrl(email) {
  return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`;
}

function SectionHeading({ index, eyebrow, title, children }) {
  return (
    <div className="section-heading">
      <div className="section-heading__meta">
        <span className="section-index">{index}</span>
        <span className="eyebrow">{eyebrow}</span>
      </div>
      <div>
        <h2>{title}</h2>
        {children && <p className="section-intro">{children}</p>}
      </div>
    </div>
  );
}

function ProjectVisual({ type }) {
  if (type === "knowledge") {
    return (
      <div className="workflow-visual" aria-label="Conceptual AskHR workflow">
        <div className="workflow-visual__top">
          <span>ASKHR / WORKFLOW SKETCH</span>
          <span className="visual-dot" aria-hidden="true" />
        </div>
        <div className="workflow-steps">
          <div className="workflow-step">
            <span className="workflow-step__number">01</span>
            <span className="workflow-step__label">Company documents</span>
            <span className="workflow-step__detail">Upload · parse · chunk</span>
          </div>
          <div className="workflow-connector" aria-hidden="true">
            <span />
          </div>
          <div className="workflow-step">
            <span className="workflow-step__number">02</span>
            <span className="workflow-step__label">Relevant sources</span>
            <span className="workflow-step__detail">Embed · retrieve · rank</span>
          </div>
          <div className="workflow-connector" aria-hidden="true">
            <span />
          </div>
          <div className="workflow-step workflow-step--answer">
            <span className="workflow-step__number">03</span>
            <span className="workflow-step__label">Grounded answer</span>
            <span className="workflow-step__detail">Citations · or no answer</span>
          </div>
        </div>
        <p className="visual-caption">Conceptual diagram · not a product screenshot</p>
      </div>
    );
  }

  if (type === "scaffold") {
    return (
      <div className="code-visual" aria-label="Example generated server layout">
        <div className="code-visual__top">
          <span className="code-dots" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
          <span>EXPRESS / STARTER STRUCTURE</span>
        </div>
        <pre>
          <code>
            <span className="code-muted">project/</span>
            {"\n"}├─ <span className="code-accent">config/</span>
            {"\n"}├─ <span className="code-accent">controllers/</span>
            {"\n"}├─ <span className="code-accent">middlewares/</span>
            {"\n"}├─ <span className="code-accent">routes/</span>
            {"\n"}└─ <span className="code-accent">services/</span>
          </code>
        </pre>
        <span className="code-visual__command">npx express-code-gen</span>
      </div>
    );
  }

  return (
    <div className="package-visual" aria-label="DSA Ninja package structure">
      <div className="package-visual__top">
        <span>DSA NINJA / MONOREPO</span>
        <span>TS</span>
      </div>
      <div className="package-list">
        {["searchy", "sortify", "structify"].map((name, index) => (
          <div className="package-row" key={name}>
            <span className="package-row__number">0{index + 1}</span>
            <span className="package-row__name">{name}</span>
            <span className="package-row__type">package</span>
            <span aria-hidden="true">↗</span>
          </div>
        ))}
      </div>
      <p className="visual-caption">Independent packages · shared workspace</p>
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <article
      className={`project-card${project.featured ? " project-card--featured" : ""}`}
    >
      <div className="project-card__visual">
        <ProjectVisual type={project.visual} />
      </div>
      <div className="project-card__content">
        <div className="project-card__meta">
          <span>{project.category}</span>
          <span>{project.number}</span>
        </div>
        <h3>{project.name}</h3>
        <p className="project-card__summary">{project.summary}</p>
        <details className="project-details">
          <summary>
            More about the work <span aria-hidden="true">+</span>
          </summary>
          <div className="project-details__body">
            <p>{project.detail}</p>
            <p>
              <strong>Documented role:</strong> {project.role}
            </p>
          </div>
        </details>
        <div className="project-tags" aria-label="Technologies">
          {project.stack.map((item) => (
            <span className="tag" key={item}>
              {item}
            </span>
          ))}
        </div>
        <div className="project-card__bottom">
          <span className="project-status">{project.status}</span>
          <a
            className="text-link"
            href={project.href}
            target="_blank"
            rel="noreferrer"
            aria-label={`View ${project.name} on GitHub (opens in a new tab)`}
          >
            Repository <ArrowIcon diagonal />
          </a>
        </div>
      </div>
    </article>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function closeOnEscape(event) {
      if (event.key === "Escape") setMenuOpen(false);
    }

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <header className="site-header">
        <div className="header-inner">
          <a className="wordmark" href="#top" aria-label={`${profile.name}, home`}>
            <span className="wordmark__mark">JA</span>
            <span className="wordmark__name">{profile.shortName}</span>
          </a>
          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
          </button>
          <nav
            className={`primary-nav${menuOpen ? " primary-nav--open" : ""}`}
            id="primary-navigation"
            aria-label="Main navigation"
          >
            {navigation.map((item) => (
              <a href={item.href} key={item.href} onClick={closeMenu}>
                {item.label}
              </a>
            ))}
            <a className="nav-contact" href="#contact" onClick={closeMenu}>
              Let’s talk <ArrowIcon diagonal />
            </a>
          </nav>
        </div>
      </header>

      <main id="main">
        <section className="hero section-shell" id="top" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow hero-kicker">
              <span className="kicker-mark" aria-hidden="true" />
              SOFTWARE ENGINEER · SYSTEMS &amp; TOOLS
            </p>
            <h1 id="hero-title">
              I build software
              <br />
              that makes
              <br />
              <span className="hero-accent">sense.</span>
            </h1>
            <p className="hero-summary">
              Backend systems, developer tools, and AI-assisted products—with
              careful attention to how the pieces work together.
            </p>
            <div className="hero-actions">
              <a className="button button--dark" href="#projects">
                Explore selected work <ArrowIcon />
              </a>
              <a className="button button--quiet" href="#contact">
                Get in touch <ArrowIcon diagonal />
              </a>
            </div>
            <div className="hero-footnote">
              <span>SELECTED WORK</span>
              <span>Projects, with sources and context</span>
            </div>
          </div>

          <aside className="hero-visual" aria-label="A visual sketch of an AI workflow">
            <div className="hero-visual__frame">
              <div className="hero-visual__header">
                <span>FIELD NOTE / 001</span>
                <span>ASKHR</span>
              </div>
              <div className="orbit-diagram" aria-hidden="true">
                <div className="orbit orbit--outer" />
                <div className="orbit orbit--inner" />
                <div className="orbit-core">
                  <span>USEFUL</span>
                  <span>CONTEXT</span>
                </div>
                <span className="orbit-node orbit-node--one">DOCS</span>
                <span className="orbit-node orbit-node--two">SEARCH</span>
                <span className="orbit-node orbit-node--three">ANSWER</span>
                <span className="orbit-cross orbit-cross--one">+</span>
                <span className="orbit-cross orbit-cross--two">+</span>
              </div>
              <div className="hero-visual__footer">
                <span>RETRIEVAL</span>
                <span>→</span>
                <span>REASONING</span>
                <span>→</span>
                <span>REFERENCE</span>
              </div>
            </div>
            <p className="hero-visual__caption">
              A conceptual motif inspired by a documented project.
            </p>
          </aside>
        </section>

        <section className="about section-shell section-block" id="about">
          <SectionHeading index="01" eyebrow="A LITTLE CONTEXT" title="Built around the work.">
            A practical engineering perspective shaped by tools, systems, and the
            details that make software useful.
          </SectionHeading>
          <div className="about-grid">
            <p className="about-lead">
              I’m Joshua, a software engineer interested in what happens behind
              a useful product: the APIs, data paths, and small decisions that
              help it behave clearly.
            </p>
            <div className="about-copy">
              <p>
                My public work ranges from an Express project generator to
                AskHR, a document-grounded knowledge assistant. The projects
                are different in scale, but each starts with a concrete
                problem: make a server easier to start, or make answers easier
                to trace back to their source.
              </p>
              <p>
                In AskHR’s project notes, the implementation is intentionally
                described as a readable pipeline rather than a black-box
                framework. That preference for explainable, inspectable
                software is a useful thread through the work shown here.
              </p>
            </div>
          </div>
        </section>

        <section
          className="experience section-shell section-block"
          id="experience"
          aria-labelledby="experience-title"
        >
          <SectionHeading
            index="02"
            eyebrow="CAREER TIMELINE"
            title="Details, not guesses."
          >
            Only verified roles belong here.
          </SectionHeading>
          <div className="experience-note">
            <span className="experience-note__marker" aria-hidden="true">
              —
            </span>
            <div>
              <h3 id="experience-title">Work history is being confirmed</h3>
              <p>
                The public profile’s employment details could not be accessed
                during research. Employer names, titles, and dates are left out
                rather than inferred from projects. The public work below is a
                more reliable view of the engineering practice available today.
              </p>
            </div>
            <a
              className="text-link"
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              View LinkedIn <ArrowIcon diagonal />
            </a>
          </div>
        </section>

        <section className="projects section-shell section-block" id="projects">
          <SectionHeading
            index="03"
            eyebrow="SELECTED PROJECTS"
            title="Useful things, built with intent."
          >
            A few public projects with enough documentation to explain what
            they do—and what is still unknown.
          </SectionHeading>
          <div className="project-list">
            {projects.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
        </section>

        <section className="skills section-shell section-block" id="skills">
          <SectionHeading
            index="04"
            eyebrow="TOOLS & PRACTICE"
            title="A toolkit with receipts."
          >
            Technologies are grouped by where they appear in the public work,
            not by an arbitrary proficiency score.
          </SectionHeading>
          <div className="skill-grid">
            {skillGroups.map((group, index) => (
              <article className="skill-group" key={group.label}>
                <div className="skill-group__top">
                  <span>0{index + 1}</span>
                  <span>{group.source}</span>
                </div>
                <h3>{group.label}</h3>
                <ul className="skill-list">
                  {group.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <p className="skills-note">
            These are project-backed technologies, not a complete inventory of
            Joshua’s experience. The GitHub profile also self-reports Go, Rust,
            TypeScript, and Python; they are not all represented as project
            evidence here.
          </p>
        </section>

        <section className="writing section-shell section-block" id="writing">
          <SectionHeading
            index="05"
            eyebrow="NOTES & IDEAS"
            title="Writing about data choices."
          >
            One article is linked from Joshua’s public profile. Its publication
            date and full text were not independently accessible during research.
          </SectionHeading>
          <a
            className="article-card"
            href={article.href}
            target="_blank"
            rel="noreferrer"
          >
            <span className="article-card__label">MONGODB · DATA MODELLING</span>
            <span className="article-card__title">{article.title}</span>
            <span className="article-card__source">{article.source}</span>
            <span className="article-card__arrow" aria-hidden="true">
              <ArrowIcon diagonal />
            </span>
          </a>
        </section>

        <section className="contact section-shell" id="contact">
          <div className="contact__top">
            <span className="eyebrow">HAVE A GOOD PROBLEM?</span>
            <span className="contact__index">06 / CONTACT</span>
          </div>
          <div className="contact__main">
            <h2>
              Let’s make
              <br />
              something <span>useful.</span>
            </h2>
            <div className="contact__aside">
              <p>
                For engineering opportunities, product ideas, or a thoughtful
                conversation about how something should work.
              </p>
              <a
                className="contact-email"
                href={gmailComposeUrl(profile.email)}
                target="_blank"
                rel="noreferrer"
              >
                {profile.email} <ArrowIcon diagonal />
              </a>
            </div>
          </div>
          <div className="contact__links">
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn <ArrowIcon diagonal />
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer">
              GitHub <ArrowIcon diagonal />
            </a>
            <a
              href={gmailComposeUrl(profile.email)}
              target="_blank"
              rel="noreferrer"
            >
              Email <ArrowIcon diagonal />
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer section-shell">
        <a className="footer-wordmark" href="#top">
          JA <span>· {profile.name}</span>
        </a>
        <span>© {new Date().getFullYear()} · Built with care.</span>
        <a className="back-to-top" href="#top">
          Back to top <ArrowIcon diagonal />
        </a>
      </footer>
    </>
  );
}

export default App;
