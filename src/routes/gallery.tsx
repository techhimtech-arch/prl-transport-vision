import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { motion } from "framer-motion";
import f1 from "@/assets/fleet-1.png";
import f2 from "@/assets/fleet-2.png";
import f3 from "@/assets/fleet-3.png";
import f4 from "@/assets/fleet-4.png";
import office from "@/assets/office-1.png";

const images = [
  { src: f1, label: "On the mountain pass" },
  { src: f3, label: "Premium coach lineup" },
  { src: f2, label: "Tourist express" },
  { src: f4, label: "Long route fleet" },
  { src: office, label: "Inside the office" },
];

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — PRL Transport Solan" },
      { name: "description", content: "Real photographs of the PRL fleet and offices across Himachal." },
      { property: "og:title", content: "PRL Gallery" },
      { property: "og:description", content: "Real photographs of the PRL fleet and offices across Himachal." },
    ],
  }),
  component: Gallery,
});

function Gallery() {
  return (
    <>
      <PageHero eyebrow="Gallery" title="Moments from the road" description="A glimpse of our fleet, our team, and the routes we love." />
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-7xl columns-1 sm:columns-2 lg:columns-3 gap-5 [column-fill:_balance]">
          {images.concat(images).map((it, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: (i % 5) * 0.05 }}
              className="mb-5 break-inside-avoid relative group rounded-3xl overflow-hidden glass gradient-border"
            >
              <img src={it.src} alt={it.label} loading="lazy" className="w-full transition-transform duration-[1200ms] group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />
              <figcaption className="absolute bottom-3 left-3 right-3 text-xs uppercase tracking-[0.22em] text-muted-foreground opacity-0 group-hover:opacity-100 transition">{it.label}</figcaption>
            </motion.figure>
          ))}
        </div>
      </section>
    </>
  );
}
