import { Cpu, Dumbbell, Mountain, Trophy } from "lucide-react";
import { hobbies } from "../data/portfolio.js";

const icons = {
  training: Dumbbell,
  basketball: Trophy,
  hiking: Mountain,
  hardware: Cpu,
};

function OutsideLab() {
  return (
    <section className="py-14 sm:py-16">
      <div className="section-shell">
        <div className="rounded-lg border border-ink/10 bg-panel/90 p-5 shadow-line backdrop-blur sm:p-6">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-mono text-xs font-semibold uppercase text-circuit">Beyond Engineering</p>
              <h2 className="mt-2 text-2xl font-semibold text-ink">Outside the Lab</h2>
            </div>
            <p className="max-w-2xl text-sm leading-6 text-steel">
              A brief snapshot of interests that support discipline, teamwork, and hands-on curiosity.
            </p>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {hobbies.map((hobby) => {
              const Icon = icons[hobby.icon] ?? Cpu;

              return (
                <article
                  key={hobby.title}
                  className="rounded-lg border border-ink/10 bg-paper p-4 transition hover:border-circuit/30 hover:bg-panel2"
                >
                  <span className="grid h-10 w-10 place-items-center rounded-lg bg-circuit/10 text-circuit">
                    <Icon aria-hidden="true" size={20} />
                  </span>
                  <h3 className="mt-4 text-sm font-semibold text-ink">{hobby.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-steel">{hobby.summary}</p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default OutsideLab;
