import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { SectionHeading } from "./Section";

const testimonials = [
  { name: "Ananya Sharma", role: "Solo Traveller, Delhi", text: "Booked a Manali trip with PRL — the bus was spotless, the driver expert, and the ride smoother than anything I’ve taken in the hills." },
  { name: "Rohit Verma", role: "HR Lead, Infotech Solan", text: "We use PRL for all our corporate transfers. On time, every time. Their team treats us like family." },
  { name: "Priya & Aakash", role: "Wedding, Shimla", text: "PRL handled transport for 200+ guests across three days. Flawless coordination — guests are still talking about it." },
  { name: "Mr. Negi", role: "Principal, Solan", text: "Safest school transport in the region. The GPS tracking and trained drivers give parents real peace of mind." },
];

export function Testimonials() {
  return (
    <section className="relative py-28 px-6 overflow-hidden">
      <SectionHeading eyebrow="Testimonials" title="Loved by travellers across India" description="Real stories from real journeys." />

      <div className="mx-auto mt-16 max-w-7xl grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {testimonials.map((t, i) => (
          <motion.figure
            key={t.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            whileHover={{ y: -6 }}
            className="relative rounded-3xl glass-strong gradient-border p-6"
          >
            <Quote className="absolute -top-4 left-6 h-10 w-10 text-emerald drop-shadow-[0_0_18px_oklch(0.72_0.18_155/0.7)]" />
            <div className="flex gap-1 text-emerald">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-current" />
              ))}
            </div>
            <blockquote className="mt-4 text-sm text-foreground/90 leading-relaxed">“{t.text}”</blockquote>
            <figcaption className="mt-5 pt-5 border-t border-white/10">
              <div className="font-semibold">{t.name}</div>
              <div className="text-xs text-muted-foreground mt-0.5">{t.role}</div>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}
