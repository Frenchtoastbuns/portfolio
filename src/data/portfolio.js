export const owner = {
  name: "Aaron B. George",
  headline: "Electronics & Computer Engineering Student",
  degree: "BEng (Hons) Electronics & Computer Engineering",
  university: "University of Leeds",
  academicStanding: "First Class in Year 1 and Year 2",
  email: "aarongeorge243@gmail.com",
  github: "https://github.com/Frenchtoastbuns",
  linkedin: "https://www.linkedin.com/in/aarong243",
  cv: "/Aaron_B_George_CV.pdf",
  summary:
    "Electronics & Computer Engineering student at the University of Leeds with experience in embedded systems, FPGA design, PCB development, hardware design, hardware integration, and technical research. Open to internships and graduate opportunities in semiconductor, hardware, and advanced technology roles.",
};

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Modules", href: "#modules" },
  { label: "Skills", href: "#skills" },
  { label: "Publications", href: "#publications" },
  { label: "Contact", href: "#contact" },
];

export const filters = [
  "All",
  "Hardware",
  "FPGA",
  "Embedded",
  "AI/ML",
  "Software",
  "Control",
  "Research",
];

export const projects = [
  {
    title: "PCB-Based Audio Spectrum Visualiser",
    featured: true,
    visual: "pcb",
    summary:
      "Designed and assembled a PCB-based audio spectrum visualiser with analogue signal conditioning, embedded sampling, and visual output stages. Work included schematic capture, PCB layout, soldering, bring-up, and signal-level validation.",
    technologies: ["KiCad", "PCB design", "Analogue circuits", "Soldering", "Hardware bring-up"],
    tags: ["Hardware", "Embedded"],
    role: "Hardware design, assembly, and validation",
    status: "Completed",
    details: [
      "Designed the hardware around analogue audio conditioning, sampling, and display-driving constraints.",
      "Produced the PCB layout, assembled the board, and debugged bring-up issues at circuit and system level.",
      "Validated signal behaviour through iterative measurement, firmware adjustment, and hardware inspection.",
    ],
    links: [],
  },
  {
    title: "FPGA-Based Real-Time Control System",
    featured: true,
    visual: "fpga",
    summary:
      "Implemented deterministic control logic on a DE10-Lite FPGA using Verilog RTL. The system focused on timing-aware I/O handling, simulation-led verification, and predictable real-time behaviour.",
    technologies: ["Verilog", "DE10-Lite", "ModelSim", "RTL design", "Real-time control"],
    tags: ["FPGA", "Control", "Hardware"],
    role: "RTL design and verification",
    status: "Completed",
    details: [
      "Built timing-aware control logic in Verilog for deterministic I/O response.",
      "Used ModelSim simulation to validate logic behaviour before FPGA deployment.",
      "Focused on real-time constraints, predictable state transitions, and clear module boundaries.",
    ],
    links: [],
  },
  {
    title: "Embedded Systems Game Console Project",
    featured: true,
    visual: "embedded",
    summary:
      "Built a microcontroller-based game console with display output, button input, and firmware for real-time interaction. The project emphasized constrained-resource programming, peripheral integration, and iterative debugging.",
    technologies: ["C/C++", "Embedded firmware", "GPIO", "Display interfaces", "Debugging"],
    tags: ["Embedded", "Software"],
    role: "Embedded firmware and peripheral integration",
    status: "Completed",
    details: [
      "Developed firmware for responsive input handling, rendering, and game-state updates.",
      "Integrated display and button interfaces while managing limited embedded resources.",
      "Debugged hardware-software interaction through incremental testing and firmware refinement.",
    ],
    links: [],
  },
  {
    title: "TinyML / ESP32-S3 Research Work",
    featured: true,
    visual: "research",
    summary:
      "Explored embedded machine learning workflows targeting ESP32-S3-class hardware. Work covered model preparation, on-device inference constraints, latency measurement, and deployment trade-offs for edge AI systems.",
    technologies: ["ESP32-S3", "TensorFlow Lite Micro", "PyTorch", "TinyML", "Validation"],
    tags: ["AI/ML", "Embedded", "Research"],
    role: "TinyML research and benchmarking",
    status: "Research manuscript",
    details: [
      "Benchmarked TinyML execution behaviour on edge-class embedded hardware.",
      "Evaluated practical deployment constraints including latency, model preparation, and on-device inference trade-offs.",
      "Prepared the work as a technical manuscript with emphasis on repeatable benchmarking and edge-network relevance.",
    ],
    links: [
      {
        label: "View Paper",
        href: "/documents/Execution_Aware_TinyML_Benchmarking_for_Next_Gen_AI_Native_Edge_Networks.pdf",
        type: "paper",
      },
    ],
  },
  {
    title: "Incoming KAIST Research Internship - OSD Decoder on FPGA Hardware",
    visual: "research",
    summary:
      "Incoming research work focused on implementing an ordered statistics decoding (OSD) decoder on FPGA hardware. Listed as upcoming implementation work, not as a completed publication.",
    technologies: ["Digital communications", "OSD decoding", "FPGA", "Hardware implementation"],
    tags: ["Research", "FPGA", "Hardware"],
    role: "Incoming research intern",
    status: "Incoming",
    details: [
      "Planned work will implement an OSD decoder on FPGA hardware.",
      "Expected focus areas include hardware architecture, RTL implementation, integration constraints, and FPGA validation.",
      "This entry represents future internship work and is not presented as a published paper.",
    ],
    links: [],
  },
  {
    title: "High-Performance Stochastic Risk Engine",
    visual: "software",
    summary:
      "Developed a computation-focused risk engine using stochastic simulation techniques. The work emphasized numerical methods, performance-aware implementation, and clear validation of outputs.",
    technologies: ["Python", "Numerical methods", "Simulation", "Performance analysis"],
    tags: ["Software"],
    role: "Software engineering and numerical simulation",
    status: "Completed",
    details: [
      "Implemented stochastic simulation workflows with attention to correctness and repeatability.",
      "Structured the engine around performance-aware computation and clear output validation.",
      "Used numerical testing to check behaviour across representative input conditions.",
    ],
    links: [],
  },
  {
    title: "Leeds Gryphon Racing Control Work",
    visual: "control",
    summary:
      "Contributed to Formula Student control engineering work with attention to system requirements, testability, and reliable integration across electrical and mechanical interfaces.",
    technologies: ["Control systems", "MATLAB", "Simulink", "Testing", "Documentation"],
    tags: ["Control", "Hardware"],
    role: "Control engineering and system integration",
    status: "Current",
    details: [
      "Supported control engineering work in a multidisciplinary Formula Student environment.",
      "Worked with modelling, requirements, testability, and integration considerations across system interfaces.",
      "Produced documentation to support debugging, validation, and team handover.",
    ],
    links: [],
  },
  {
    title: "Deployment State Verification",
    visual: "research",
    summary:
      "Prepared a technical manuscript focused on deployment state verification, with emphasis on validation, technical structure, and clear engineering communication.",
    technologies: ["Technical writing", "Verification", "Validation", "Documentation"],
    tags: ["Research", "Software"],
    role: "Technical manuscript and verification-focused research",
    status: "Submitted manuscript",
    details: [
      "Developed the work as a formal technical document with a focus on deployment-state verification.",
      "Emphasized validation reasoning, documentation quality, and reproducible technical communication.",
      "Included as a research-writing output, separate from the incoming KAIST OSD decoder FPGA implementation work.",
    ],
    links: [
      {
        label: "View Paper",
        href: "/documents/Deployment_State_Verification.pdf",
        type: "paper",
      },
    ],
  },
];

export const experience = [
  {
    role: "Incoming Research Intern",
    organization: "KAIST",
    period: "Incoming",
    summary:
      "Incoming research role focused on implementing an ordered statistics decoding (OSD) decoder on FPGA hardware for advanced communication systems.",
    highlights: [
      "Expected to work on OSD decoder hardware architecture, RTL implementation, FPGA integration, and validation.",
      "Research aligned with semiconductor, digital systems, and hardware acceleration interests.",
    ],
  },
  {
    role: "Control Engineer",
    organization: "Leeds Gryphon Racing",
    period: "Current",
    summary:
      "Control systems contributor within a Formula Student engineering team, supporting vehicle-focused modelling, testing, and integration work.",
    highlights: [
      "Applied control engineering methods in a multidisciplinary team environment.",
      "Produced technical documentation to support debugging, validation, and handover.",
    ],
  },
  {
    role: "Facilities Cleaning Assistant",
    organization: "University Union",
    period: "Part-time",
    summary:
      "Part-time facilities role supporting clean, safe, and reliable shared spaces within the university union environment.",
    highlights: [
      "Maintained high standards of cleanliness, reliability, and attention to detail in a public-facing setting.",
      "Balanced part-time work with engineering studies, technical projects, and society responsibilities.",
    ],
  },
  {
    role: "Secretary",
    organization: "ShockSoc",
    period: "Current",
    summary:
      "Committee role supporting society operations, communication, records, and coordination for an electronics and electrical engineering community.",
    highlights: [
      "Managed communication and administrative records for society activity.",
      "Supported planning and coordination across technical and student-facing events.",
    ],
  },
];

export const education = [
  {
    qualification: "BEng (Hons) Electronics & Computer Engineering",
    institution: "University of Leeds",
    result: "First Class in Year 1 and Year 2",
    subjects: [
      "Embedded systems",
      "FPGA and programmable logic",
      "Analogue and digital electronics",
      "Communications",
      "Machine learning",
      "Control systems",
    ],
  },
  {
    qualification: "High School",
    institution: "Maths, Chemistry, Physics, Biology, and English",
    result: "92% overall",
    subjects: ["Mathematics", "Chemistry", "Physics", "Biology", "English"],
  },
];

export const moduleYears = [
  {
    year: "Year 1",
    standing: "Completed",
    modules: [
      { name: "Circuit Analysis and Design", credits: 20 },
      { name: "Computational Foundations of Artificial Intelligence", credits: 20 },
      { name: "Introduction to Communication Systems", credits: 20 },
      { name: "Digital Electronics and Microcontrollers", credits: 20 },
      { name: "Introduction to Engineering Mathematics", credits: 20 },
      { name: "Algorithms and Numerical Mathematics", credits: 10 },
      { name: "Electronic Design Project", credits: 10 },
    ],
  },
  {
    year: "Year 2",
    standing: "Completed",
    modules: [
      { name: "Electronic Circuit and Systems Design", credits: 20 },
      { name: "Machine Learning", credits: 20 },
      { name: "Communications Theory", credits: 20 },
      { name: "Embedded Systems Project", credits: 20 },
      { name: "Microprocessors and Programmable Logic", credits: 20 },
      { name: "IoT and Edge Computing", credits: 20 },
    ],
  },
  {
    year: "Year 3",
    standing: "Planned / current",
    modules: [
      { name: "Control Systems", credits: 20 },
      { name: "Artificial Intelligence", credits: 20 },
      { name: "Audio Signal Processing", credits: 20 },
      { name: "Individual Engineering Project", credits: 40 },
      { name: "Digital Media Engineering", credits: 10 },
      { name: "Professional Studies", credits: 10 },
    ],
  },
];

export const skillGroups = [
  {
    title: "Embedded Systems",
    skills: ["C/C++", "STM32", "ESP32-S3", "Embedded firmware", "Peripheral integration"],
  },
  {
    title: "FPGA / Digital Design",
    skills: ["Verilog", "DE10-Lite FPGA", "ModelSim", "RTL design", "Timing-aware logic"],
  },
  {
    title: "Electronics / Hardware",
    skills: ["PCB design", "Hardware design", "Soldering", "Analogue circuits", "Hardware bring-up", "Circuit validation"],
  },
  {
    title: "Software / Tools",
    skills: ["Python", "MATLAB", "Simulink", "KiCad", "PyTorch", "TensorFlow Lite Micro"],
  },
  {
    title: "Engineering Practice",
    skills: [
      "Testing",
      "Debugging",
      "Validation",
      "Documentation",
      "Root-cause analysis",
      "Teamwork",
    ],
  },
];

export const publications = [
  {
    title: "Execution-Aware TinyML Benchmarking for Next-Gen AI-Native Edge Networks",
    venue: "IEEE IMAS Conference",
    year: "2026",
    status: "Submitted",
    href: "/documents/Execution_Aware_TinyML_Benchmarking_for_Next_Gen_AI_Native_Edge_Networks.pdf",
  },
  {
    title: "Deployment State Verification",
    venue: "IEEE GLOBECOM Workshop",
    year: "2026",
    status: "Submitted",
    href: "/documents/Deployment_State_Verification.pdf",
  },
];

export const hobbies = [
  {
    title: "Kickboxing / Brazilian Jiu Jitsu",
    summary: "Regular combat-sports training with a focus on discipline, consistency, and technical improvement.",
    icon: "training",
  },
  {
    title: "Basketball",
    summary: "Team sport interest that supports communication, pace, and competitive focus.",
    icon: "basketball",
  },
  {
    title: "Hiking",
    summary: "Outdoor activity for endurance, reset time, and staying active outside academic work.",
    icon: "hiking",
  },
  {
    title: "Hardware Tinkering",
    summary: "Independent hardware projects, debugging, and practical electronics exploration outside coursework.",
    icon: "hardware",
  },
];
