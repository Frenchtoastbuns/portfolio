import { BookOpen, GraduationCap } from "lucide-react";
import { education, moduleHighlights } from "../data/portfolio.js";
import SectionHeading from "./SectionHeading.jsx";

function Modules() {
  return (
    <section id="modules" className="border-y border-ink/10 bg-panel2/60 py-20 sm:py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Education"
          title="Academic Background"
          description="Core study areas across electronics, embedded systems, FPGA design, communications, AI, and control."
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

        <div className="mt-14">
          <SectionHeading
            eyebrow="Relevant Modules"
            title="Module Highlights"
            description="Selected modules most relevant to semiconductor, embedded systems, FPGA, electronics, and hardware engineering roles."
          />
        </div>

        <div className="mt-8 grid gap-5 xl:grid-cols-3">
          {moduleHighlights.map((group) => (
            <article
              key={group.title}
              className="rounded-lg border border-ink/10 bg-panel/95 p-5 shadow-line backdrop-blur transition hover:border-circuit/30 hover:shadow-soft"
            >
              <div className="flex items-center gap-3 border-b border-ink/10 pb-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-circuit/10 text-circuit">
                  <BookOpen aria-hidden="true" size={20} />
                </span>
                <div className="flex items-center gap-3">
                  <h3 className="text-lg font-semibold text-ink">{group.title}</h3>
                </div>
              </div>

              <ul className="mt-5 grid gap-3">
                {group.modules.map((module) => (
                  <li key={module} className="flex gap-3 text-sm leading-6 text-graphite">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-circuit" />
                    <span>{module}</span>
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
