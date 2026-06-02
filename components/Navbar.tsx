"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#animals", label: "Animals" },
  { href: "#facts", label: "Fun Facts" },
  { href: "#quiz", label: "Quiz" },
  { href: "#videos", label: "Videos" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav className={`navbar${scrolled ? " scrolled" : ""}`}>
        <div className="nav-logo">
          <span className="logo-icon">🦊</span>
          <span className="logo-text">FoxKids</span>
        </div>
        <ul className="nav-links">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href}>{l.label}</a>
            </li>
          ))}
        </ul>
        <button className="nav-cta">Start Learning 🌟</button>
        <button
          className="hamburger"
          aria-label="Menu"
          onClick={() => setOpen((o) => !o)}
        >
          ☰
        </button>
      </nav>

      {open && (
        <div className="mobile-menu">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
        </div>
      )}
    </>
  );
}
