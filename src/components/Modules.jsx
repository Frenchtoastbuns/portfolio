import { BookOpen, GraduationCap } from "lucide-react";
import { education, moduleYears } from "../data/portfolio.js";
import SectionHeading from "./SectionHeading.jsx";

function Modules() {
  return (
    <section id="modules" className="border-y border-ink/10 bg-panel2/60 py-20 sm:py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Education"
          title="Academic Background & University Modules"
          description="Core study areas across electronics, embedded systems, FPGA design, communications, AI, control, and engineering practice."
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {education.map((item) => (
            <article
              key={item.qualification}
              className="rounded-lg border border-ink/10 bg-panel/95 p-6 shadow-line backdrop-blur transition hover:border-circuit/30 hover:shadow-soft"
            >
              <div className="flex items-start gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-circuit/10 text-circuit">
                  <GraduationCap aria-hidden="true" size={22} />
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-ink">{item.qualification}</h3>
                  <p className="mt-1 text-sm font-semibold text-circuit">{item.institution}</p>
                  <p className="mt-3 text-sm leading-6 text-steel">{item.result}</p>
                </div>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {item.subjects.map((subject) => (
                  <span
                    key={subject}
                    className="rounded-md border border-ink/10 bg-paper px-2.5 py-1.5 text-xs font-semibold text-graphite"
                  >
                    {subject}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 grid gap-5 xl:grid-cols-3">
          {moduleYears.map((year) => (
            <article
              key={year.year}
              className="rounded-lg border border-ink/10 bg-panel/95 p-5 shadow-line backdrop-blur transition hover:border-circuit/30 hover:shadow-soft"
            >
              <div className="flex items-center justify-between gap-4 border-b border-ink/10 pb-4">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-lg bg-circuit/10 text-circuit">
                    <BookOpen aria-hidden="true" size={20} />
                  </span>
                  <h3 className="text-lg font-semibold text-ink">{year.year}</h3>
                </div>
                <span className="rounded-md border border-circuit/20 bg-circuit/10 px-2.5 py-1 text-xs font-semibold uppercase text-circuit">
                  {year.standing}
                </span>
              </div>

              <ul className="mt-5 grid gap-3">
                {year.modules.map((module) => (
                  <li key={module.name} className="flex items-start justify-between gap-4">
                    <span className="text-sm leading-6 text-graphite">{module.name}</span>
                    <span className="shrink-0 rounded-md bg-paper px-2 py-1 font-mono text-xs font-semibold text-steel">
                      {module.credits}
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Modules;
