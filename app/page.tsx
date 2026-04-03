'use client';

import Image from 'next/image';
import { useMemo, useState } from 'react';
import { highlights, interviewQas, navigation, profile, projects, skills } from '@/data/site-content';

export default function Home() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [activeQuestion, setActiveQuestion] = useState(interviewQas[0].question);

  const activeAnswer = useMemo(
    () => interviewQas.find((item) => item.question === activeQuestion)?.answer ?? interviewQas[0].answer,
    [activeQuestion],
  );

  return (
    <main className="page-shell">
      <div className="sky-grid" />
      <div className="aurora aurora-left" />
      <div className="aurora aurora-right" />
      <div className="moon-glow" />

      <header className="topbar">
        <a className="brand" href="#hero">
          <span className="brand-mark" />
          {profile.name}
        </a>

        <nav>
          <ul className="nav-list">
            {navigation.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <section className="hero section" id="hero">
        <div className="hero-copy">
          <p className="eyebrow">{profile.roleLine}</p>
          <h1>{profile.heroTitle}</h1>
          <p className="lede">{profile.heroDescription}</p>

          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              View Projects
            </a>
            <a className="button button-secondary" href="#contact">
              Contact Me
            </a>
          </div>

          <div className="hero-links" aria-label="quick links">
            <a className="hero-link-pill" href={`mailto:${profile.email}`}>
              Email
            </a>
            <a className="hero-link-pill" href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a className="hero-link-pill" href={profile.resumeFile} target="_blank" rel="noreferrer">
              Resume
            </a>
          </div>

          <ul className="stat-row" aria-label="quick highlights">
            {highlights.map((item) => (
              <li key={item.label}>
                <strong>{item.label}</strong>
                <span>{item.value}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="hero-portrait-card">
          <div className="portrait-glow portrait-glow-one" />
          <div className="portrait-glow portrait-glow-two" />
          <div className="portrait-orbit portrait-orbit-outer" />
          <div className="portrait-orbit portrait-orbit-inner" />
          <div className="portrait-stage">
            <div className="portrait-frame">
              <div className="portrait-photo-wrap">
                <Image
                  src={profile.headshot}
                  alt={`Portrait of ${profile.name}`}
                  fill
                  className="portrait-photo"
                  sizes="(max-width: 980px) 100vw, 35vw"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section two-column" id="about">
        <div className="panel story-panel">
          <p className="eyebrow">About</p>
          <h2>{profile.aboutTitle}</h2>
          {profile.aboutParagraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="panel skills-panel">
          <p className="eyebrow">Skills</p>
          <h2>Core tools and interests</h2>
          <div className="pill-wrap">
            {skills.map((skill) => (
              <span className="pill" key={skill}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="projects">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Projects</p>
            <h2>Featured work</h2>
          </div>
          <p className="section-note">
            A small selection that highlights AI product thinking, interface design, and interactive front-end work.
          </p>
        </div>

        <div className="project-grid project-grid-two">
          {projects.map((project, index) => (
            <article className="project-card project-card-rich" key={project.title}>
              <div className="project-stars" />
              <div className="project-image-wrap">
                <Image src={project.image} alt={project.imageAlt} fill className="project-image" sizes="(max-width: 980px) 100vw, 50vw" />
              </div>
              <div className="project-content">
                <span className="project-number">{String(index + 1).padStart(2, '0')}</span>
                <p className="project-subtitle">{project.subtitle}</p>
                <h3>{project.title}</h3>
                {project.statusLabel ? <span className="project-badge">{project.statusLabel}</span> : null}
                <p>{project.description}</p>
                <div className="stack-row">
                  {project.stack.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
                {project.liveUrl ? (
                  <div className="project-actions">
                    <a className="button button-secondary" href={project.liveUrl} target="_blank" rel="noreferrer">
                      View Live Project
                    </a>
                  </div>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="resume">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Resume</p>
            <h2>Preview and download</h2>
          </div>
          <a className="button button-secondary" href={profile.resumeFile} download>
            Download Resume
          </a>
        </div>

        <div className="resume-panel panel">
          <object aria-label="Resume preview" data={profile.resumeFile} type="application/pdf">
            <p>
              Your browser couldn&apos;t display the PDF preview. You can still{' '}
              <a href={profile.resumeFile} download>
                download the resume here
              </a>
              .
            </p>
          </object>
        </div>
      </section>

      <section className="section contact-grid" id="contact">
        <div className="panel contact-panel">
          <p className="eyebrow">Contact</p>
          <h2>{profile.contactTitle}</h2>
          <p>{profile.contactDescription}</p>

          <div className="contact-links">
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              {profile.linkedin.replace('https://', '')}
            </a>
            <a href={profile.resumeFile} target="_blank" rel="noreferrer">
              View Resume
            </a>
          </div>
        </div>

        <div className="panel cta-panel">
          <p className="eyebrow">What visitors can do here</p>
          <ul className="action-list">
            <li>See featured projects with actual screenshots.</li>
            <li>Open or download your resume directly on the page.</li>
            <li>Use the chatbot to get personalized interview-ready answers.</li>
            <li>Reach out through your email or LinkedIn.</li>
          </ul>
        </div>
      </section>

      <div className={`chatbot ${isChatOpen ? 'open' : 'closed'}`}>
        <button
          className="chatbot-toggle"
          onClick={() => setIsChatOpen((value) => !value)}
          aria-label={isChatOpen ? 'Close interview assistant' : 'Open interview assistant'}
          aria-expanded={isChatOpen}
          aria-controls="chatbot-panel"
        >
          <span className="chatbot-toggle-inner">
            <span className="chatbot-avatar chatbot-avatar-small chatbot-avatar-launcher">
              <Image src="/chatbot-mascot.png" alt="Chatbot mascot" fill className="chatbot-avatar-image" sizes="48px" />
            </span>
            <span className="chatbot-toggle-label">Ask Nafizur AI</span>
          </span>
        </button>

        {isChatOpen ? (
          <div className="chatbot-panel panel" id="chatbot-panel">
            <div className="chatbot-header">
              <div className="chatbot-header-main">
                <span className="chatbot-avatar chatbot-avatar-large">
                  <Image src="/chatbot-mascot.png" alt="Chatbot mascot" fill className="chatbot-avatar-image" sizes="64px" />
                </span>
                <div>
                  <p className="eyebrow">Demo Chatbot</p>
                  <h3>Night Desk Assistant</h3>
                  <p className="chatbot-caption">Interview-ready highlights and quick talking points.</p>
                </div>
              </div>
              <span className="status-dot">Online</span>
            </div>

            <div className="chatbot-message user-bubble">{activeQuestion}</div>
            <div className="chatbot-message bot-bubble">{activeAnswer}</div>

            <div className="question-list">
              {interviewQas.map((item) => (
                <button
                  className={item.question === activeQuestion ? 'active' : ''}
                  key={item.question}
                  onClick={() => setActiveQuestion(item.question)}
                >
                  {item.question}
                </button>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </main>
  );
}
