import { Cpu, Settings, Terminal, Wrench } from "lucide-react";
import { skillGroups } from "../data/portfolio.js";
import SectionHeading from "./SectionHeading.jsx";

const icons = [Cpu, Settings, Wrench, Terminal, Settings];

function Skills() {
  return (
    <section id="skills" className="border-y border-ink/10 bg-panel2/60 py-20 sm:py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Skills"
          title="Core engineering capabilities."
          description="A practical skill set across embedded development, digital design, electronics, tools, and engineering process."
        />

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {skillGroups.map((group, index) => {
            const Icon = icons[index] ?? Settings;

            return (
              <section
                key={group.title}
                className="rounded-lg border border-ink/10 bg-panel p-5 shadow-line transition hover:border-circuit/30 hover:shadow-soft"
                aria-labelledby={`${group.title.replaceAll(" ", "-").toLowerCase()}-heading`}
              >
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-lg bg-circuit/10 text-circuit">
                    <Icon aria-hidden="true" size={20} />
                  </span>
                  <h3
                    id={`${group.title.replaceAll(" ", "-").toLowerCase()}-heading`}
                    className="text-base font-semibold text-ink"
                  >
                    {group.title}
                  </h3>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md border border-ink/10 bg-paper px-2.5 py-1.5 text-xs font-semibold text-graphite"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;
