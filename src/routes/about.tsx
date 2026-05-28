import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Stats } from "@/components/site/Stats";
import { Features } from "@/components/site/Features";
import { motion } from "framer-motion";
import office from "@/assets/office-1.png";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — PRL Transport Solan" },
      { name: "description", content: "A new-generation transport brand from Solan, Himachal — built on trust, comfort, and reliability." },
      { property: "og:title", content: "About PRL Transport Solan" },
      { property: "og:description", content: "A new-generation transport brand from Solan, Himachal — built on trust, comfort, and reliability." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHero
        eyebrow="About PRL"
        title="A premium transport brand from the hills"
        description="Born in Solan, built for India — PRL Transport blends mountain expertise with national-scale logistics."
      />
      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl grid gap-10 lg:grid-cols-2 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="rounded-3xl overflow-hidden gradient-border glass">
            <img src={office} alt="PRL office" className="h-full w-full object-cover" />
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <h2 className="text-3xl md:text-4xl font-semibold text-gradient">Our story</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              From a single coach in the winding roads of Solan to a fleet trusted across India — PRL Transport has been built on one promise: every journey should feel like first class.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We invest deep in our drivers, our vehicles, and our service standards. The result is a transport brand that feels less like a bus operator and more like a premium hospitality company on wheels.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-3">
              {[["Mission", "Make every mile premium"], ["Vision", "India’s most trusted transport"], ["Promise", "Comfort, safety, on-time"], ["Belief", "Travellers come first"]].map(([t, d]) => (
                <div key={t} className="rounded-2xl glass gradient-border p-4">
                  <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">{t}</div>
                  <div className="mt-1 font-medium">{d}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      <Stats />
      <Features />
    </>
  );
}
