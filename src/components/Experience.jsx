import { Briefcase, CheckCircle2 } from "lucide-react";
import { experience } from "../data/portfolio.js";
import SectionHeading from "./SectionHeading.jsx";

function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Experience"
          title="Technical and leadership experience."
          description="Roles spanning research, control engineering, and engineering society coordination."
        />

        <div className="mt-10 grid gap-5">
          {experience.map((item) => (
            <article
              key={`${item.role}-${item.organization}`}
              className="rounded-lg border border-ink/10 bg-panel p-6 shadow-line transition hover:border-circuit/30 hover:shadow-soft"
            >
              <div className="grid gap-6 lg:grid-cols-[0.7fr_1.3fr]">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-lg bg-circuit/10 text-circuit">
                      <Briefcase aria-hidden="true" size={20} />
                    </span>
                    <span className="rounded-md border border-ink/10 px-2.5 py-1 text-xs font-semibold uppercase text-steel">
                      {item.period}
                    </span>
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-ink">{item.role}</h3>
                  <p className="mt-1 text-base font-medium text-circuit">{item.organization}</p>
                </div>

                <div>
                  <p className="text-sm leading-7 text-steel">{item.summary}</p>
                  <ul className="mt-5 grid gap-3">
                    {item.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-3 text-sm leading-6 text-graphite">
                        <CheckCircle2
                          aria-hidden="true"
                          className="mt-0.5 shrink-0 text-circuit"
                          size={18}
                        />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
