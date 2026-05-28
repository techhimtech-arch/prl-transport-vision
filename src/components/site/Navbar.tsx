import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/fleet", label: "Fleet" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { location } = useRouterState();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 inset-x-0 z-50 px-4 pt-4"
    >
      <div
        className={`mx-auto max-w-7xl rounded-2xl transition-all duration-500 ${
          scrolled ? "glass-strong shadow-2xl" : "glass"
        }`}
      >
        <div className="flex items-center justify-between px-5 py-3">
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="relative h-9 w-9 rounded-xl bg-gradient-to-br from-emerald to-royal grid place-items-center font-display font-bold text-primary-foreground glow-emerald">
              P
              <span className="absolute inset-0 rounded-xl ring-1 ring-white/20" />
            </div>
            <div className="leading-tight">
              <div className="font-display font-semibold tracking-wide">PRL</div>
              <div className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">Transport · Solan</div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => {
              const active = location.pathname === l.to;
              return (
                <Link
                  key={l.to}
                  to={l.to}
                  className={`relative px-3.5 py-2 text-sm rounded-lg transition-colors ${
                    active ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 rounded-lg bg-white/5"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative">{l.label}</span>
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="tel:08091750972"
              className="hidden sm:inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald to-deep px-4 py-2 text-sm font-medium text-primary-foreground glow-emerald hover:brightness-110 transition"
            >
              <Phone className="h-4 w-4" /> Book Now
            </a>
            <button
              onClick={() => setOpen((v) => !v)}
              className="md:hidden h-10 w-10 grid place-items-center rounded-xl glass"
              aria-label="Menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="md:hidden border-t border-white/10 px-4 py-3 grid gap-1"
          >
            {links.map((l) => (
              <Link key={l.to} to={l.to} className="px-3 py-2 rounded-lg hover:bg-white/5 text-sm">
                {l.label}
              </Link>
            ))}
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}
