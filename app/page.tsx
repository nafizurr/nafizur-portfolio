'use client';

import Image from 'next/image';
import { useMemo, useState } from 'react';

type QA = {
  question: string;
  answer: string;
};

type Project = {
  title: string;
  subtitle: string;
  description: string;
  stack: string[];
  image: string;
  imageAlt: string;
  liveUrl?: string;
  statusLabel?: string;
};

const navigation = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' },
];

const skills = [
  'Next.js',
  'React',
  'TypeScript',
  'Python',
  'Java',
  'AI Workflows',
  'REST APIs',
  'UI Design',
  'Full-Stack Development',
];

const projects: Project[] = [
  {
    title: 'Resumind',
    subtitle: 'AI-assisted resume review and application tracking platform',
    description:
      'A polished web experience for tracking job applications and surfacing AI-powered feedback on resume quality, helping users stay organized while improving each submission.',
    stack: ['Next.js', 'React', 'TypeScript', 'AI Feedback UX'],
    image: '/resumind-showcase.png',
    imageAlt: 'Resumind project screenshot showing application tracking and resume ratings',
    liveUrl: 'https://puter.com/app/Resu-Mind',
  },
  {
    title: 'Travel Planner',
    subtitle: 'Interactive travel journal with geographic exploration',
    description:
      'A visual travel planning experience that maps visited locations and turns trip history into something more personal, interactive, and easy to understand at a glance.',
    stack: ['React', 'JavaScript', 'Maps', 'Interactive UI'],
    image: '/travel-planner-showcase.png',
    imageAlt: 'Travel planner project screenshot showing a 3D globe and countries visited panel',
    statusLabel: 'Private Project',
  },
];

const qas: QA[] = [
  {
    question: 'Tell me about Nafizur.',
    answer:
      'Nafizur Rahman is a computer science student who enjoys building software that feels both technically capable and easy for people to use. His work consistently leans toward AI-enabled workflows, product-minded interfaces, and practical full-stack systems.',
  },
  {
    question: 'What projects stand out most?',
    answer:
      'Resumind and Travel Planner are strong examples. Resumind shows product thinking around AI feedback and structured workflows, while Travel Planner shows a more visual, interactive side with spatial UI and user-friendly presentation.',
  },
  {
    question: 'What kind of engineer is he becoming?',
    answer:
      'He is growing into a product-focused software engineer who cares about both implementation and experience. The pattern across his work is building things that are not just functional, but clear, polished, and useful.',
  },
  {
    question: 'How does he work with other people?',
    answer:
      'He comes across as collaborative and product-aware. He is interested in understanding the problem first, aligning on what matters most, and then building something that is both technically sound and easy for others to work with or use.',
  },
  {
    question: 'What are his strengths in an interview?',
    answer:
      'He presents well when talking about product thinking, front-end polish, usability, and how AI can improve a workflow without making it more confusing. A strong theme in his work is combining technical execution with user clarity.',
  },
  {
    question: 'How does he approach building products?',
    answer:
      'He tends to think from the user backward. That means shaping interfaces around clarity, lowering friction, and making sure the experience feels understandable instead of technically impressive but hard to use.',
  },
  {
    question: 'What should I ask in an interview?',
    answer:
      'Good questions would be: how do you decide when AI adds real value, how do you balance building fast with polishing the experience, and how do you turn a rough concept into something people can actually navigate and trust?',
  },
  {
    question: 'How does he handle challenges?',
    answer:
      'A good way to describe his approach is steady and iterative. He seems comfortable refining ideas, improving UX details, and working through ambiguity until the product feels more coherent and useful.',
  },
  {
    question: 'What technical choices define his work?',
    answer:
      'His projects point toward modern front-end and full-stack tooling, especially React and Next.js style development, with an emphasis on interfaces, structured workflows, and practical AI-assisted features rather than novelty alone.',
  },
  {
    question: 'Why is Resumind a strong project?',
    answer:
      'Resumind is strong because it combines a real user problem with AI-assisted feedback in a clear workflow. It shows that Nafizur is not just interested in AI as a feature, but in how AI can support decision-making in a practical product.',
  },
  {
    question: 'Why is Travel Planner a strong project?',
    answer:
      'Travel Planner highlights a different strength: visual communication. It shows comfort with interactive front-end experiences, spatial thinking, and presenting information in a way that feels engaging instead of static.',
  },
  {
    question: 'How can I reach him?',
    answer:
      'You can contact Nafizur directly at nafizurr75@gmail.com, connect on LinkedIn, or review and download his resume from the portfolio page.',
  },
];

export default function Home() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [activeQuestion, setActiveQuestion] = useState(qas[0].question);

  const activeAnswer = useMemo(
    () => qas.find((item) => item.question === activeQuestion)?.answer ?? qas[0].answer,
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
          Nafizur Rahman
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
          <p className="eyebrow">CS Student · AI-Enabled Builder · Thoughtful Systems Designer</p>
          <h1>Designing calm, capable software under a midnight sky.</h1>
          <p className="lede">
            I build elegant digital experiences, AI-enabled workflows, and scalable applications with a focus on clarity,
            usefulness, and quiet craft.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              View Projects
            </a>
            <a className="button button-secondary" href="#contact">
              Contact Me
            </a>
          </div>

          <div className="hero-links" aria-label="quick links">
            <a className="hero-link-pill" href="mailto:nafizurr75@gmail.com">
              Email
            </a>
            <a
              className="hero-link-pill"
              href="https://www.linkedin.com/in/nafizur-rahman-603b01292"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a className="hero-link-pill" href="/nafizur-rahman-resume.pdf" target="_blank" rel="noreferrer">
              Resume
            </a>
          </div>

          <ul className="stat-row" aria-label="quick highlights">
            <li>
              <strong>Focus</strong>
              <span>AI workflows and usable systems</span>
            </li>
            <li>
              <strong>Style</strong>
              <span>Minimal, elegant, quietly expressive</span>
            </li>
            <li>
              <strong>Goal</strong>
              <span>Internships, projects, thoughtful collaboration</span>
            </li>
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
                  src="/nafizur-headshot.png"
                  alt="Portrait of Nafizur Rahman"
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
          <h2>A computer science student building technology people can actually use.</h2>
          <p>
            I&apos;m a passionate computer science student focused on building innovative AI-enabled workflows and scalable
            applications that are clear, useful, and thoughtfully designed for real people.
          </p>
          <p>
            I care about software that does more than function. It should guide, support, and feel intuitive from the
            first interaction to the last.
          </p>
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
          <a className="button button-secondary" href="/nafizur-rahman-resume.pdf" download>
            Download Resume
          </a>
        </div>

        <div className="resume-panel panel">
          <object aria-label="Resume preview" data="/nafizur-rahman-resume.pdf" type="application/pdf">
            <p>
              Your browser couldn&apos;t display the PDF preview. You can still{' '}
              <a href="/nafizur-rahman-resume.pdf" download>
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
          <h2>Let&apos;s build something thoughtful.</h2>
          <p>
            If you&apos;re interested in internships, collaboration, or conversations about software and AI-enabled products,
            I&apos;d love to connect.
          </p>

          <div className="contact-links">
            <a href="mailto:nafizurr75@gmail.com">nafizurr75@gmail.com</a>
            <a href="https://www.linkedin.com/in/nafizur-rahman-603b01292" target="_blank" rel="noreferrer">
              linkedin.com/in/nafizur-rahman-603b01292
            </a>
            <a href="/nafizur-rahman-resume.pdf" target="_blank" rel="noreferrer">
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
              {qas.map((item) => (
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
