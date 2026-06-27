import { Menu, X } from "lucide-react";
import { useState } from "react";
import { company, navItems } from "../data/site";

export function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="relative z-30 px-6 pt-6 md:px-12 lg:px-16">
      <nav
        aria-label="Điều hướng chính"
        className="liquid-glass mx-auto flex max-w-[1180px] items-center justify-between rounded-xl px-4 py-2 text-white"
      >
        <a className="flex min-w-0 items-center gap-3" href="#top" onClick={closeMenu}>
          <img
            src={company.logo}
            alt="DST Group"
            className="h-10 w-auto max-w-[128px] object-contain"
          />
          <span className="hidden text-sm font-medium text-white/85 sm:inline">
            {company.slogan}
          </span>
        </a>

        <div className="hidden items-center gap-8 text-sm md:flex">
          {navItems.map((item) => (
            <a
              className="text-white/85 transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          className="hidden rounded-lg bg-white px-6 py-2 text-sm font-medium text-black transition hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white md:inline-flex"
          href="#lien-he"
        >
          Nhận tư vấn
        </a>

        <button
          aria-label={open ? "Đóng menu" : "Mở menu"}
          className="inline-flex size-10 items-center justify-center rounded-lg bg-white text-black md:hidden"
          onClick={() => setOpen((value) => !value)}
          type="button"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {open ? (
        <div className="liquid-glass absolute left-6 right-6 top-24 z-40 rounded-xl p-3 text-white md:hidden">
          <div className="grid gap-1">
            {navItems.map((item) => (
              <a
                className="rounded-lg px-3 py-3 text-sm text-white/90 transition hover:bg-white/10"
                href={item.href}
                key={item.href}
                onClick={closeMenu}
              >
                {item.label}
              </a>
            ))}
            <a
              className="mt-2 rounded-lg bg-white px-3 py-3 text-center text-sm font-medium text-black"
              href="#lien-he"
              onClick={closeMenu}
            >
              Nhận tư vấn
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
