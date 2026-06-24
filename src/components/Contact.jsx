import { Github, Linkedin, Mail } from "lucide-react";
import { useMemo, useState } from "react";
import { owner } from "../data/portfolio.js";
import SectionHeading from "./SectionHeading.jsx";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const mailtoHref = useMemo(() => {
    const subject = form.name
      ? `Portfolio enquiry from ${form.name}`
      : "Portfolio enquiry";
    const body = [
      form.message,
      "",
      form.email ? `Reply email: ${form.email}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    return `mailto:${owner.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }, [form]);

  const updateField = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    window.location.href = mailtoHref;
  };

  return (
    <section id="contact" className="border-t border-ink/10 bg-panel2/60 py-20 sm:py-24">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading
              eyebrow="Contact"
              title="Available for internships and graduate opportunities."
              description="Best suited for roles involving embedded systems, FPGA or RTL design, semiconductor technology, electronics, hardware design, hardware integration, and technical research."
            />

            <div className="mt-8 grid gap-3">
              <a
                href={`mailto:${owner.email}`}
                className="focus-ring inline-flex items-center gap-3 rounded-lg border border-ink/10 bg-panel p-4 text-sm font-semibold text-ink shadow-line transition hover:border-circuit/30 hover:text-circuit"
              >
                <Mail aria-hidden="true" size={20} />
                {owner.email}
              </a>
              <a
                href={owner.linkedin}
                target="_blank"
                rel="noreferrer"
                className="focus-ring inline-flex items-center gap-3 rounded-lg border border-ink/10 bg-panel p-4 text-sm font-semibold text-ink shadow-line transition hover:border-circuit/30 hover:text-circuit"
              >
                <Linkedin aria-hidden="true" size={20} />
                LinkedIn
              </a>
              <a
                href={owner.github}
                target="_blank"
                rel="noreferrer"
                className="focus-ring inline-flex items-center gap-3 rounded-lg border border-ink/10 bg-panel p-4 text-sm font-semibold text-ink shadow-line transition hover:border-circuit/30 hover:text-circuit"
              >
                <Github aria-hidden="true" size={20} />
                GitHub
              </a>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-lg border border-ink/10 bg-panel p-5 shadow-soft sm:p-6"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="text-sm font-semibold text-ink">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={updateField}
                  autoComplete="name"
                  className="focus-ring mt-2 w-full rounded-md border border-ink/10 bg-paper px-3 py-3 text-sm text-ink shadow-line"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-sm font-semibold text-ink">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={updateField}
                  autoComplete="email"
                  className="focus-ring mt-2 w-full rounded-md border border-ink/10 bg-paper px-3 py-3 text-sm text-ink shadow-line"
                />
              </div>
            </div>

            <div className="mt-5">
              <label htmlFor="message" className="text-sm font-semibold text-ink">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="6"
                value={form.message}
                onChange={updateField}
                className="focus-ring mt-2 w-full resize-y rounded-md border border-ink/10 bg-paper px-3 py-3 text-sm leading-6 text-ink shadow-line"
              />
            </div>

            <button
              type="submit"
              className="focus-ring mt-5 inline-flex w-full items-center justify-center gap-2 rounded-md bg-circuit px-5 py-3 text-sm font-semibold text-paper shadow-soft transition hover:-translate-y-0.5 hover:bg-circuit/80 sm:w-auto"
            >
              <Mail aria-hidden="true" size={18} />
              Send Email
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
