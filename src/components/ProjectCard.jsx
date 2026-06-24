import { ArrowUpRight } from "lucide-react";

function ProjectCard({ project, featured = false, onSelect }) {
  return (
    <button
      type="button"
      onClick={() => onSelect(project)}
      className={`focus-ring group flex h-full flex-col overflow-hidden rounded-lg border border-ink/10 bg-panel text-left shadow-line transition duration-300 hover:-translate-y-1 hover:border-circuit/30 hover:shadow-soft ${
        featured ? "min-h-[390px]" : "min-h-[230px]"
      }`}
      aria-label={`Open details for ${project.title}`}
    >
      <div
        className={`project-accent accent-${project.visual} ${featured ? "h-2" : "h-1.5"}`}
        aria-hidden="true"
      />
      <div className={`flex flex-1 flex-col ${featured ? "p-6" : "p-5"}`}>
        <div className="flex flex-1 flex-col">
          {project.status ? (
            <p className="mb-3 font-mono text-xs font-semibold uppercase text-circuit">
              {project.status}
            </p>
          ) : null}
          <h3 className={`${featured ? "text-xl" : "text-lg"} font-semibold leading-7 text-ink`}>
            {project.title}
          </h3>
          <p className={`${featured ? "mt-4 text-base leading-7" : "mt-3 line-clamp-2 text-sm leading-6"} text-steel`}>
            {featured ? project.summary : project.shortSummary || project.summary}
          </p>

          {featured && project.details?.length ? (
            <ul className="mt-5 grid gap-3">
              {project.details.slice(0, 3).map((detail) => (
                <li key={detail} className="flex gap-3 text-sm leading-6 text-graphite">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-circuit" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          ) : null}
        </div>

        {project.technologies?.length ? (
          <div className="mt-5 flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-md border border-ink/10 bg-paper px-2.5 py-1 text-xs font-medium text-graphite"
              >
                {technology}
              </span>
            ))}
          </div>
        ) : null}

        <div className="mt-5 flex items-center justify-between gap-4 border-t border-ink/10 pt-4">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="font-mono text-xs font-semibold text-circuit">
                {tag}
              </span>
            ))}
          </div>

          <span className="inline-flex shrink-0 items-center gap-1 text-sm font-semibold text-ink transition group-hover:text-circuit">
            Details
            <ArrowUpRight aria-hidden="true" size={15} />
          </span>
        </div>
      </div>
    </button>
  );
}

export default ProjectCard;
