import { ExternalLink, FileText } from "lucide-react";
import { publications } from "../data/portfolio.js";
import SectionHeading from "./SectionHeading.jsx";

function Publications() {
  return (
    <section id="publications" className="py-20 sm:py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Publications"
          title="Submitted papers and technical writing."
          description="Research outputs are listed with venue information, status, and viewable PDF files."
        />

        <div className="mt-10 overflow-hidden rounded-lg border border-ink/10 bg-panel/95 shadow-line backdrop-blur">
          <div className="hidden grid-cols-[1.45fr_0.65fr_0.3fr_0.35fr_0.35fr] gap-4 border-b border-ink/10 bg-paper px-5 py-3 text-xs font-semibold uppercase text-steel md:grid">
            <span>Title</span>
            <span>Venue</span>
            <span>Year</span>
            <span>Status</span>
            <span>File</span>
          </div>
          <div className="divide-y divide-ink/10">
            {publications.map((publication) => (
              <article
                key={publication.title}
                className="grid gap-4 px-5 py-5 md:grid-cols-[1.45fr_0.65fr_0.3fr_0.35fr_0.35fr] md:items-center"
              >
                <div className="flex gap-3">
                  <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-circuit/10 text-circuit">
                    <FileText aria-hidden="true" size={18} />
                  </span>
                  <h3 className="text-base font-semibold leading-6 text-ink">{publication.title}</h3>
                </div>
                <p className="text-sm text-graphite">
                  <span className="font-semibold text-steel md:hidden">Venue: </span>
                  {publication.venue}
                </p>
                <p className="text-sm text-graphite">
                  <span className="font-semibold text-steel md:hidden">Year: </span>
                  {publication.year}
                </p>
                <p>
                  <span className="inline-flex rounded-md border border-circuit/20 bg-circuit/10 px-2.5 py-1 text-xs font-semibold uppercase text-circuit">
                    {publication.status}
                  </span>
                </p>
                <p>
                  <a
                    href={publication.href}
                    target="_blank"
                    rel="noreferrer"
                    className="focus-ring inline-flex items-center gap-1 rounded-md text-sm font-semibold text-ink transition hover:text-circuit"
                  >
                    View
                    <ExternalLink aria-hidden="true" size={15} />
                  </a>
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Publications;
