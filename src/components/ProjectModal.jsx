import { ExternalLink, FileText, X } from "lucide-react";
import { useEffect } from "react";

function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  if (!project) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[90] flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm"
      role="presentation"
      onMouseDown={onClose}
    >
      <section
        aria-modal="true"
        aria-labelledby="project-modal-title"
        role="dialog"
        className="max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-lg border border-ink/10 bg-panel shadow-soft"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className={`project-accent accent-${project.visual} h-2`} aria-hidden="true" />
        <div className="p-5 sm:p-7">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="font-mono text-xs font-semibold uppercase text-circuit">
                {project.status}
              </p>
              <h2 id="project-modal-title" className="mt-2 text-2xl font-semibold leading-tight text-ink">
                {project.title}
              </h2>
              {project.role ? (
                <p className="mt-2 text-sm font-semibold text-graphite">{project.role}</p>
              ) : null}
            </div>
            <button
              type="button"
              aria-label="Close project details"
              onClick={onClose}
              className="focus-ring grid h-10 w-10 shrink-0 place-items-center rounded-md border border-ink/10 bg-paper text-ink transition hover:border-circuit/30 hover:text-circuit"
            >
              <X aria-hidden="true" size={20} />
            </button>
          </div>

          <p className="mt-5 text-sm leading-7 text-steel sm:text-base">{project.summary}</p>

          {project.details?.length ? (
            <div className="mt-6">
              <h3 className="text-sm font-semibold uppercase text-ink">Engineering Focus</h3>
              <ul className="mt-3 grid gap-3">
                {project.details.map((detail) => (
                  <li key={detail} className="flex gap-3 text-sm leading-6 text-graphite">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-circuit" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          <div className="mt-6 grid gap-5 md:grid-cols-[1fr_0.85fr]">
            <div>
              <h3 className="text-sm font-semibold uppercase text-ink">Technologies</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-md border border-ink/10 bg-paper px-2.5 py-1.5 text-xs font-semibold text-graphite"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase text-ink">Tags</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-circuit/20 bg-circuit/10 px-2.5 py-1.5 text-xs font-semibold text-circuit"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {project.links?.length ? (
            <div className="mt-7 border-t border-ink/10 pt-5">
              <h3 className="text-sm font-semibold uppercase text-ink">Supporting Documents</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="focus-ring inline-flex items-center gap-2 rounded-md bg-circuit px-4 py-2.5 text-sm font-semibold text-paper transition hover:-translate-y-0.5 hover:bg-circuit/80"
                  >
                    {link.type === "paper" ? (
                      <FileText aria-hidden="true" size={17} />
                    ) : (
                      <ExternalLink aria-hidden="true" size={17} />
                    )}
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </section>
    </div>
  );
}

export default ProjectModal;
