import { Filter } from "lucide-react";
import { useMemo, useState } from "react";
import { filters, projects } from "../data/portfolio.js";
import ProjectCard from "./ProjectCard.jsx";
import ProjectModal from "./ProjectModal.jsx";
import SectionHeading from "./SectionHeading.jsx";

function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const featuredProjects = projects.filter((project) => project.featured);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") {
      return projects;
    }

    return projects.filter((project) => project.tags.includes(activeFilter));
  }, [activeFilter]);

  return (
    <section id="projects" className="border-y border-ink/10 bg-panel2/60 py-20 sm:py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Selected Work"
          title="Featured Projects"
          description="A short list of the strongest engineering projects for quick recruiter review."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
              featured
              onSelect={setSelectedProject}
            />
          ))}
        </div>

        <div className="mt-20">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="All Projects"
              title="Project Index"
              description="A compact view for quickly scanning technical focus areas, tools, and project context. Select a card to view details."
            />

            <div className="flex flex-wrap gap-2" aria-label="Project filters">
              {filters.map((filter) => {
                const isActive = filter === activeFilter;

                return (
                  <button
                    key={filter}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => setActiveFilter(filter)}
                    className={`focus-ring inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm font-semibold transition ${
                      isActive
                        ? "border-circuit bg-circuit text-paper"
                        : "border-ink/10 bg-panel text-graphite hover:border-circuit/30 hover:text-circuit"
                    }`}
                  >
                    {filter === "All" ? <Filter aria-hidden="true" size={15} /> : null}
                    {filter}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.title} project={project} onSelect={setSelectedProject} />
            ))}
          </div>
        </div>
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}

export default Projects;
