import { motion } from "framer-motion";
import { SectionHeading } from "./Section";
import f1 from "@/assets/fleet-1.png";
import f2 from "@/assets/fleet-2.png";
import f3 from "@/assets/fleet-3.png";
import f4 from "@/assets/fleet-4.png";

const items = [
  { src: f1, label: "Luxury Bus", tag: "Himalayan Edition" },
  { src: f3, label: "Premium Fleet", tag: "Mercedes Coach" },
  { src: f2, label: "Safe Journey", tag: "Tourist Express" },
  { src: f4, label: "Comfortable Travel", tag: "Long Route" },
];

export function Fleet() {
  return (
    <section className="relative py-28 px-6">
      <SectionHeading
        eyebrow="Fleet"
        title="Built for the road, designed for you"
        description="Every vehicle in the PRL fleet is meticulously maintained and ready for your next journey."
      />

      <div className="mx-auto mt-16 max-w-7xl grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {items.map((it, i) => (
          <motion.div
            key={it.label}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            whileHover={{ y: -8, rotateX: 2, rotateY: -2 }}
            style={{ transformPerspective: 1000 }}
            className="group relative aspect-[4/5] rounded-3xl overflow-hidden glass gradient-border"
          >
            <img
              src={it.src}
              alt={it.label}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-tr from-emerald/20 via-transparent to-royal/20" />
            <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full glass-strong px-3 py-1 text-[10px] uppercase tracking-[0.2em]">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald glow-emerald" /> {it.tag}
            </div>
            <div className="absolute inset-x-0 bottom-0 p-5">
              <div className="text-lg font-display font-semibold">{it.label}</div>
              <div className="mt-1 text-xs text-muted-foreground">PRL Premium Fleet</div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
