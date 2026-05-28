import { Link } from "@tanstack/react-router";
import { Facebook, Phone, MapPin, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-white/10">
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-emerald/60 to-transparent" />
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2.5">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-emerald to-royal grid place-items-center font-display font-bold text-primary-foreground glow-emerald">
              P
            </div>
            <div>
              <div className="font-display font-semibold text-lg">PRL Transport</div>
              <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Solan · Himachal</div>
            </div>
          </div>
          <p className="mt-5 max-w-md text-sm text-muted-foreground leading-relaxed">
            Driven by trust, powered by comfort. A new generation transport brand delivering premium travel
            across Himachal and all over India — 24 hours a day.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold tracking-wider uppercase text-muted-foreground">Explore</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {[
              ["/about", "About"],
              ["/services", "Services"],
              ["/fleet", "Fleet"],
              ["/gallery", "Gallery"],
              ["/contact", "Contact"],
            ].map(([to, label]) => (
              <li key={to}>
                <Link to={to} className="hover:text-emerald transition-colors">{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold tracking-wider uppercase text-muted-foreground">Reach Us</h4>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 text-emerald" /> Deoghat, Solan, Himachal Pradesh 173211</li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-emerald" /> <a href="tel:08091750972" className="hover:text-foreground">080917 50972</a></li>
            <li className="flex items-center gap-2"><Clock className="h-4 w-4 text-emerald" /> Open 24 Hours</li>
            <li>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 mt-2 px-3 py-1.5 rounded-lg glass hover:bg-white/10 transition">
                <Facebook className="h-4 w-4" /> Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} PRL Transport Solan. All rights reserved.
      </div>
    </footer>
  );
}
