import { motion } from "framer-motion";
import {
  Bus, Mountain, Users, Briefcase, Heart, GraduationCap, Route, Globe2,
} from "lucide-react";
import { SectionHeading } from "./Section";

const services = [
  { icon: Bus, title: "Tourist Bus Service", desc: "Premium coaches built for unforgettable journeys." },
  { icon: Mountain, title: "Himachal Tours", desc: "Curated mountain routes with expert drivers." },
  { icon: Users, title: "Group Travel", desc: "Seamless logistics for groups of any size." },
  { icon: Briefcase, title: "Corporate Transport", desc: "Reliable executive transport, on schedule." },
  { icon: Heart, title: "Wedding Transport", desc: "Elegant fleets for your special day." },
  { icon: GraduationCap, title: "School & College Trips", desc: "Safe, supervised trips for students." },
  { icon: Route, title: "Long Route Services", desc: "Cross-state comfort with onboard amenities." },
  { icon: Globe2, title: "All India Transport", desc: "Nationwide coverage, anywhere you need." },
];

export function Services() {
  return (
    <section id="services" className="relative py-28 px-6">
      <SectionHeading
        eyebrow="Services"
        title="A fleet for every journey"
        description="From mountain getaways to nationwide corporate runs — every service is engineered around comfort, safety, and trust."
      />

      <div className="mx-auto mt-16 grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            whileHover={{ y: -6 }}
            className="group relative rounded-2xl glass gradient-border p-6 overflow-hidden"
          >
            <div className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{ background: "radial-gradient(400px circle at var(--x,50%) var(--y,50%), oklch(0.72 0.18 155 / 0.15), transparent 60%)" }}
            />
            <div className="relative">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-emerald/20 to-royal/20 grid place-items-center group-hover:glow-emerald transition">
                <s.icon className="h-6 w-6 text-emerald" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              <div className="mt-5 h-px bg-gradient-to-r from-emerald/40 via-royal/40 to-transparent" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
