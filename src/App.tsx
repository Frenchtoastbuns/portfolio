"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type Project = {
  id: string;
  number: string;
  title: string;
  kicker: string;
  status: string;
  categories: string[];
  summary: string;
  detail: string;
  bullets: string[];
  tech: string[];
  accent: "teal" | "blue" | "amber" | "slate";
  links?: { label: string; href: string }[];
};

const projects: Project[] = [
  {
    id: "osd-fpga",
    number: "01",
    title: "Hardware-Accelerated OSD Decoder",
    kicker: "KAIST research internship",
    status: "Active research",
    categories: ["FPGA", "Research", "Hardware"],
    summary:
      "Re-architecting ordered statistics decoding for FPGA implementation, with the goal of reducing repeated candidate-generation work while preserving decoder correctness.",
    detail:
      "This work moves OSD from a software-first algorithm toward a synthesizable hardware dataflow. The current design exploration focuses on how candidate test-error patterns are generated, updated, and scored without rebuilding each vector from scratch.",
    bullets: [
      "Implementing and validating decoder components in Verilog RTL.",
      "Exploring paged vectorisation and parity-delta caching to reuse work between candidates.",
      "Balancing throughput, on-chip memory, control complexity, and decoding behaviour.",
    ],
    tech: ["Verilog", "FPGA", "OSD", "Digital communications", "RTL verification"],
    accent: "teal",
  },
  {
    id: "tinyml",
    number: "02",
    title: "Execution-Aware TinyML Benchmarking",
    kicker: "ESP32-S3 research",
    status: "Research manuscript",
    categories: ["Research", "Embedded", "AI/ML"],
    summary:
      "A measurement-led study of how model architecture, tensor-arena pressure, and runtime configuration shape inference latency on resource-constrained edge hardware.",
    detail:
      "Rather than treating MAC count as a complete performance predictor, this study profiles real on-device execution across a boundary-spanning model set. It examines memory allocation, latency variance, and deployment-state effects on ESP32-S3 hardware.",
    bullets: [
      "Built a repeatable on-device benchmarking workflow for TensorFlow Lite Micro.",
      "Compared architectural features against latency and within-model variance.",
      "Investigated Wi-Fi configuration, contiguous memory recovery, and tensor-arena feasibility.",
    ],
    tech: ["ESP32-S3", "TensorFlow Lite Micro", "Python", "TinyML", "Benchmarking"],
    accent: "blue",
    links: [
      {
        label: "View manuscript",
        href: "https://aarong243.vercel.app/documents/Execution_Aware_TinyML_Benchmarking_for_Next_Gen_AI_Native_Edge_Networks.pdf",
      },
      {
        label: "GitHub repository",
        href: "https://github.com/Frenchtoastbuns/tinyml-exec-aware",
      },
    ],
  },
  {
    id: "audio-pcb",
    number: "03",
    title: "PCB Audio Spectrum Visualiser",
    kicker: "Personal hardware project",
    status: "Completed",
    categories: ["Hardware", "Embedded"],
    summary:
      "Designed, assembled, and brought up a custom PCB combining analogue audio conditioning, embedded sampling, and visual output stages.",
    detail:
      "A full hardware build spanning schematic capture through bench validation. The project required analogue and digital sections to behave as one system, making bring-up and signal-level debugging as important as the initial design.",
    bullets: [
      "Created the schematic and routed the PCB in KiCad.",
      "Assembled and debugged the board at circuit and system level.",
      "Validated the signal path through measurement and iterative firmware adjustment.",
    ],
    tech: ["KiCad", "PCB design", "Analogue circuits", "Soldering", "Hardware bring-up"],
    accent: "amber",
  },
  {
    id: "fpga-control",
    number: "04",
    title: "FPGA Real-Time Control System",
    kicker: "Digital design project",
    status: "Completed",
    categories: ["FPGA", "Control", "Hardware"],
    summary:
      "A deterministic controller implemented on the DE10-Lite, built around explicit state transitions, timing-aware I/O, and simulation-led verification.",
    detail:
      "This project translated a real-time control specification into modular Verilog. A clocking layer, finite-state controller, and display logic were verified in ModelSim before deployment to the FPGA.",
    bullets: [
      "Designed modular RTL for predictable control and I/O response.",
      "Verified state transitions and edge cases in ModelSim.",
      "Deployed the complete system to a DE10-Lite FPGA board.",
    ],
    tech: ["Verilog", "DE10-Lite", "ModelSim", "FSM design", "Real-time control"],
    accent: "blue",
    links: [
      {
        label: "GitHub repository",
        href: "https://github.com/Frenchtoastbuns/FPGA_Traffic",
      },
    ],
  },
  {
    id: "game-console",
    number: "05",
    title: "Embedded Game Console",
    kicker: "Hardware–software integration",
    status: "Completed",
    categories: ["Embedded", "Software", "Hardware"],
    summary:
      "A microcontroller-based console integrating real-time input, display output, and resource-conscious firmware in a complete interactive system.",
    detail:
      "The console combines peripheral integration with a compact real-time software loop. Development focused on responsive controls, predictable rendering, and incremental debugging across the hardware–software boundary.",
    bullets: [
      "Implemented input handling, rendering, and game-state updates in C/C++.",
      "Integrated the display and physical controls under embedded resource constraints.",
      "Debugged firmware and wiring through incremental subsystem tests.",
    ],
    tech: ["C/C++", "Embedded firmware", "GPIO", "Display interfaces", "Debugging"],
    accent: "slate",
  },
];

const filters = ["All", "FPGA", "Research", "Hardware", "Embedded", "AI/ML"];

const publications = [
  {
    title: "Execution-Aware TinyML Benchmarking for Next-Gen AI-Native Edge Networks",
    venue: "IEEE IMAS Conference",
    year: "2026",
    status: "Submitted",
    href: "https://aarong243.vercel.app/documents/Execution_Aware_TinyML_Benchmarking_for_Next_Gen_AI_Native_Edge_Networks.pdf",
  },
  {
    title: "Deployment State Verification",
    venue: "IEEE GLOBECOM Workshop",
    year: "2026",
    status: "Submitted",
    href: "https://aarong243.vercel.app/documents/Deployment_State_Verification.pdf",
  },
];

function ArrowIcon() {
  return <span aria-hidden="true">↗</span>;
}

function MenuIcon({ open }: { open: boolean }) {
  return <span aria-hidden="true" className="menu-icon">{open ? "×" : "☰"}</span>;
}

function ProjectCard({ project, onSelect }: { project: Project; onSelect: (project: Project) => void }) {
  return (
    <button
      type="button"
      className={`project-card accent-${project.accent}`}
      onClick={() => onSelect(project)}
      aria-label={`Open details for ${project.title}`}
    >
      <span className="card-trace" aria-hidden="true" />
      <span className="card-topline">
        <span className="project-number">{project.number}</span>
        <span className="project-status"><i aria-hidden="true" />{project.status}</span>
      </span>
      <span className="project-kicker">{project.kicker}</span>
      <span className="project-title-row">
        <strong>{project.title}</strong>
        <span className="project-arrow"><ArrowIcon /></span>
      </span>
      <span className="project-summary">{project.summary}</span>
      <span className="project-tech" aria-label="Technologies">
        {project.tech.slice(0, 4).map((item) => <span key={item}>{item}</span>)}
      </span>
      <span className="card-footer">
        <span>{project.categories.slice(0, 3).join(" · ")}</span>
        <span>Read case study</span>
      </span>
    </button>
  );
}

function ProjectModal({ project, onClose }: { project: Project | null; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!project) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.setTimeout(() => closeRef.current?.focus(), 0);

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={onClose}>
      <section
        className={`project-modal accent-${project.accent}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-dialog-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <span className="modal-trace" aria-hidden="true" />
        <div className="modal-head">
          <div>
            <p className="eyebrow">{project.number} / {project.kicker}</p>
            <h2 id="project-dialog-title">{project.title}</h2>
          </div>
          <button ref={closeRef} className="close-button" type="button" onClick={onClose} aria-label="Close project details">×</button>
        </div>
        <p className="modal-lead">{project.detail}</p>
        <div className="modal-grid">
          <div>
            <p className="modal-label">Engineering focus</p>
            <ul className="detail-list">
              {project.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
            </ul>
          </div>
          <aside className="modal-aside">
            <div>
              <p className="modal-label">Status</p>
              <p className="status-value"><i aria-hidden="true" />{project.status}</p>
            </div>
            <div>
              <p className="modal-label">Stack</p>
              <div className="modal-tech">{project.tech.map((item) => <span key={item}>{item}</span>)}</div>
            </div>
          </aside>
        </div>
        {project.links?.length ? (
          <div className="modal-actions">
            {project.links.map((link) => (
              <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
                {link.label} <ArrowIcon />
              </a>
            ))}
          </div>
        ) : null}
      </section>
    </div>
  );
}

export default function Home() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const visibleProjects = useMemo(
    () => activeFilter === "All" ? projects : projects.filter((project) => project.categories.includes(activeFilter)),
    [activeFilter],
  );

  return (
    <main>
      <header className="site-header">
        <nav className="shell nav-inner" aria-label="Primary navigation">
          <a className="brand" href="#home" onClick={() => setMenuOpen(false)} aria-label="Aaron B. George home">
            <span className="brand-mark">ABG</span>
            <span className="brand-name">Aaron B. George</span>
          </a>
          <div className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
            <a href="#work" onClick={() => setMenuOpen(false)}>Work</a>
            <a href="#publications" onClick={() => setMenuOpen(false)}>Publications</a>
            <a href="mailto:aarongeorge243@gmail.com" onClick={() => setMenuOpen(false)}>Contact</a>
          </div>
          <button className="menu-button" type="button" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen((value) => !value)}>
            <MenuIcon open={menuOpen} />
          </button>
        </nav>
      </header>

      <section id="home" className="hero shell">
        <div className="hero-copy">
          <p className="availability"><i aria-hidden="true" />Hardware × algorithms</p>
          <h1>Building faster systems <em>from RTL to edge AI.</em></h1>
          <p className="hero-lead">
            I&apos;m Aaron, an Electronics &amp; Computer Engineering student working across FPGA acceleration, embedded ML, PCB design, and research-led hardware systems.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">Explore selected work <span aria-hidden="true">↓</span></a>
            <a className="button button-secondary" href="https://aarong243.vercel.app/Aaron_B_George_CV.pdf" target="_blank" rel="noreferrer">View CV <ArrowIcon /></a>
          </div>
          <dl className="hero-facts">
            <div><dt>Current</dt><dd>Research intern at KAIST</dd></div>
            <div><dt>Focus</dt><dd>FPGA · TinyML · hardware</dd></div>
            <div><dt>Based</dt><dd>Leeds / Daejeon</dd></div>
          </dl>
        </div>

        <div className="architecture-card" aria-label="Simplified OSD hardware pipeline">
          <div className="architecture-head">
            <div><span className="architecture-label">CURRENT RESEARCH</span><strong>OSD decoder datapath</strong></div>
            <span className="live-badge"><i aria-hidden="true" /> RTL</span>
          </div>
          <div className="signal-path">
            <div className="signal-node signal-input"><small>INPUT</small><strong>Channel LLRs</strong><span>n × soft bits</span></div>
            <span className="signal-arrow" aria-hidden="true">→</span>
            <div className="signal-node"><small>STAGE 01</small><strong>Reliability sort</strong><span>basis selection</span></div>
            <span className="signal-arrow" aria-hidden="true">↓</span>
            <div className="signal-split">
              <div className="signal-node signal-accent"><small>STAGE 02A</small><strong>Paged TEPs</strong><span>candidate stream</span></div>
              <div className="signal-node"><small>STAGE 02B</small><strong>Parity delta</strong><span>cached update</span></div>
            </div>
            <span className="signal-arrow" aria-hidden="true">↓</span>
            <div className="signal-node signal-output"><small>OUTPUT</small><strong>Candidate metric</strong><span>best codeword</span></div>
          </div>
          <div className="architecture-foot"><span>VERILOG / FPGA</span><span>ARCHITECTURE EXPLORATION · 2026</span></div>
        </div>
      </section>

      <section id="work" className="work-section">
        <div className="shell">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Selected engineering work</p>
              <h2>Research translated into <em>working systems.</em></h2>
            </div>
            <p>Open any card for the technical focus, implementation context, and supporting material.</p>
          </div>

          <div className="filter-row" aria-label="Filter projects">
            {filters.map((filter) => (
              <button
                type="button"
                key={filter}
                className={filter === activeFilter ? "active" : ""}
                aria-pressed={filter === activeFilter}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
                <span>{filter === "All" ? projects.length : projects.filter((project) => project.categories.includes(filter)).length}</span>
              </button>
            ))}
          </div>

          <div className="project-grid" aria-live="polite">
            {visibleProjects.map((project) => <ProjectCard key={project.id} project={project} onSelect={setSelectedProject} />)}
          </div>
        </div>
      </section>

      <section id="publications" className="publications-section shell">
        <div className="section-heading publication-heading">
          <div>
            <p className="eyebrow">Publications</p>
            <h2>Documenting the <em>evidence.</em></h2>
          </div>
          <p>Research outputs are listed with their current submission status.</p>
        </div>

        <div className="publication-table">
          <div className="publication-header" aria-hidden="true">
            <span>Title</span><span>Venue</span><span>Year</span><span>Status</span><span>File</span>
          </div>
          {publications.map((publication, index) => (
            <article className="publication-row" key={publication.title}>
              <div className="publication-title"><span>{String(index + 1).padStart(2, "0")}</span><strong>{publication.title}</strong></div>
              <p data-label="Venue">{publication.venue}</p>
              <p data-label="Year">{publication.year}</p>
              <p data-label="Status"><span className="submission-badge">{publication.status}</span></p>
              <a href={publication.href} target="_blank" rel="noreferrer">View <ArrowIcon /></a>
            </article>
          ))}
        </div>

        <div className="contact-strip">
          <div><p className="eyebrow">Let&apos;s build something difficult.</p><h2>Interested in hardware, systems, or research?</h2></div>
          <div className="contact-actions">
            <a className="button button-primary" href="mailto:aarongeorge243@gmail.com">Get in touch <ArrowIcon /></a>
            <a className="text-link" href="https://github.com/Frenchtoastbuns" target="_blank" rel="noreferrer">GitHub <ArrowIcon /></a>
            <a className="text-link" href="https://www.linkedin.com/in/aarong243" target="_blank" rel="noreferrer">LinkedIn <ArrowIcon /></a>
          </div>
        </div>
      </section>

      <footer>
        <div className="shell footer-inner"><span>© 2026 Aaron B. George</span><span>Designed around circuits, systems, and evidence.</span></div>
      </footer>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </main>
  );
}
