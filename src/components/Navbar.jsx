import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navItems, owner } from "../data/portfolio.js";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper/90 shadow-line backdrop-blur-xl">
      <nav className="section-shell flex h-16 items-center justify-between" aria-label="Primary">
        <a
          href="#home"
          onClick={closeMenu}
          className="focus-ring flex items-center gap-3 rounded-md"
          aria-label={`${owner.name} home`}
        >
          <span className="grid h-9 w-9 place-items-center rounded-lg border border-ink/10 bg-panel font-mono text-sm font-semibold text-circuit shadow-line">
            ABG
          </span>
          <span className="hidden text-sm font-semibold text-ink sm:inline">{owner.name}</span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="focus-ring rounded-md px-3 py-2 text-sm font-medium text-graphite transition hover:bg-panel2 hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-md border border-ink/10 bg-panel text-ink lg:hidden"
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <X aria-hidden="true" size={20} /> : <Menu aria-hidden="true" size={20} />}
        </button>
      </nav>

      {isOpen ? (
        <div className="border-t border-ink/10 bg-paper lg:hidden">
          <div className="section-shell py-3">
            <div className="grid gap-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className="focus-ring rounded-md px-3 py-3 text-sm font-medium text-graphite transition hover:bg-panel2 hover:text-ink"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}

export default Navbar;
