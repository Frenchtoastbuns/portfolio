import { Eye, Github, Linkedin, Mail } from "lucide-react";
import { useState } from "react";
import { owner } from "../data/portfolio.js";
import CvModal from "./CvModal.jsx";

const actionLinks = [
  {
    label: "GitHub",
    href: owner.github,
    icon: Github,
    external: true,
  },
  {
    label: "LinkedIn",
    href: owner.linkedin,
    icon: Linkedin,
    external: true,
  },
  {
    label: "Email",
    href: `mailto:${owner.email}`,
    icon: Mail,
  },
];

function Hero() {
  const [isCvOpen, setIsCvOpen] = useState(false);

  return (
    <section id="home" className="section-shell min-h-[calc(100vh-4rem)] py-16 sm:py-20 lg:py-24">
      <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
        <div>
          <p className="mb-5 inline-flex rounded-md border border-circuit/20 bg-panel/90 px-3 py-1 font-mono text-xs font-semibold uppercase text-circuit shadow-line backdrop-blur">
            Open to internships and graduate opportunities
          </p>
          <h1 className="max-w-4xl text-4xl font-semibold leading-tight text-ink sm:text-6xl lg:text-7xl">
            {owner.name}
          </h1>
          <p className="mt-4 text-xl font-medium text-graphite sm:text-2xl">{owner.headline}</p>
          <p className="mt-6 max-w-3xl text-base leading-8 text-steel sm:text-lg">{owner.summary}</p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <button
              type="button"
              onClick={() => setIsCvOpen(true)}
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-md bg-circuit px-5 py-3 text-sm font-semibold text-paper shadow-soft transition hover:-translate-y-0.5 hover:bg-circuit/80"
            >
              <Eye aria-hidden="true" size={18} />
              View CV
            </button>
            {actionLinks.map((link) => {
              const Icon = link.icon;

              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noreferrer" : undefined}
                  className="focus-ring inline-flex items-center justify-center gap-2 rounded-md border border-ink/10 bg-panel px-5 py-3 text-sm font-semibold text-ink shadow-line transition hover:-translate-y-0.5 hover:border-circuit/30 hover:text-circuit"
                >
                  <Icon aria-hidden="true" size={18} />
                  {link.label}
                </a>
              );
            })}
          </div>

          <dl className="mt-10 grid max-w-3xl gap-3 sm:grid-cols-3">
            <div className="rounded-lg border border-ink/10 bg-panel/95 p-4 shadow-line backdrop-blur">
              <dt className="text-xs font-semibold uppercase text-steel">Degree</dt>
              <dd className="mt-2 text-sm font-semibold leading-6 text-ink">{owner.degree}</dd>
            </div>
            <div className="rounded-lg border border-ink/10 bg-panel/95 p-4 shadow-line backdrop-blur">
              <dt className="text-xs font-semibold uppercase text-steel">University</dt>
              <dd className="mt-2 text-sm font-semibold leading-6 text-ink">{owner.university}</dd>
            </div>
            <div className="rounded-lg border border-ink/10 bg-panel/95 p-4 shadow-line backdrop-blur">
              <dt className="text-xs font-semibold uppercase text-steel">Standing</dt>
              <dd className="mt-2 text-sm font-semibold leading-6 text-ink">{owner.academicStanding}</dd>
            </div>
          </dl>
        </div>

        <div className="mx-auto w-full max-w-md lg:ml-auto">
          <div className="rounded-lg border border-ink/10 bg-panel/95 p-3 shadow-soft backdrop-blur">
            <div className="relative aspect-[4/5] overflow-hidden rounded-md bg-panel2">
              <div className="absolute inset-0 bg-[url('/circuit-board-background.png')] bg-cover bg-center opacity-70" />
              <div className="absolute inset-0 bg-white/35" />
              <div className="absolute inset-x-8 top-8 h-1 rounded-full bg-circuit/70" />
              <div className="absolute left-8 top-8 h-32 w-1 rounded-full bg-circuit/70" />
              <div className="absolute bottom-10 left-8 right-8 rounded-md border border-ink/10 bg-panel/92 p-5 shadow-line backdrop-blur">
                <p className="font-mono text-xs font-semibold uppercase text-circuit">
                  Profile Image
                </p>
                <p className="mt-2 text-sm leading-6 text-steel">
                  Replace this placeholder with a professional headshot in the Hero component.
                </p>
              </div>
              <div
                className="absolute left-1/2 top-1/2 grid h-36 w-36 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-ink/10 bg-panel text-4xl font-semibold text-ink shadow-soft"
                aria-hidden="true"
              >
                ABG
              </div>
            </div>
          </div>
        </div>
      </div>

      <CvModal isOpen={isCvOpen} onClose={() => setIsCvOpen(false)} />
    </section>
  );
}

export default Hero;
