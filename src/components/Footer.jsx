import { owner } from "../data/portfolio.js";

function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-ink py-8 text-white">
      <div className="section-shell flex flex-col gap-3 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p className="font-semibold">{owner.name}</p>
        <p className="text-white/72">
          &copy; {new Date().getFullYear()} {owner.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
