import { ExternalLink, X } from "lucide-react";
import { useEffect } from "react";
import { owner } from "../data/portfolio.js";

function CvModal({ isOpen, onClose }) {
  useEffect(() => {
    if (!isOpen) {
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
  }, [isOpen, onClose]);

  if (!isOpen) {
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
        aria-labelledby="cv-modal-title"
        role="dialog"
        className="flex max-h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-lg border border-ink/10 bg-panel shadow-soft"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-4 border-b border-ink/10 px-5 py-4">
          <div>
            <p className="font-mono text-xs font-semibold uppercase text-circuit">Curriculum Vitae</p>
            <h2 id="cv-modal-title" className="mt-1 text-lg font-semibold text-ink">
              {owner.name}
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <a
              href={owner.cv}
              target="_blank"
              rel="noreferrer"
              className="focus-ring inline-flex items-center gap-2 rounded-md border border-ink/10 bg-paper px-3 py-2 text-sm font-semibold text-ink transition hover:border-circuit/30 hover:text-circuit"
            >
              <ExternalLink aria-hidden="true" size={16} />
              Open PDF
            </a>
            <button
              type="button"
              aria-label="Close CV viewer"
              onClick={onClose}
              className="focus-ring grid h-10 w-10 place-items-center rounded-md border border-ink/10 bg-paper text-ink transition hover:border-circuit/30 hover:text-circuit"
            >
              <X aria-hidden="true" size={20} />
            </button>
          </div>
        </div>
        <iframe
          src={owner.cv}
          title={`${owner.name} CV`}
          className="h-[72vh] w-full bg-paper"
        />
      </section>
    </div>
  );
}

export default CvModal;
