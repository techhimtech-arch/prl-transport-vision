import { motion } from "framer-motion";
import { SectionHeading } from "./Section";
import office1 from "@/assets/office-1.png";
import { MapPin, Clock, Phone } from "lucide-react";

export function Office() {
  return (
    <section className="relative py-28 px-6">
      <SectionHeading
        eyebrow="Our Office"
        title="Visit us in Deoghat, Solan"
        description="Step into our office to plan your next journey with our team."
      />

      <div className="mx-auto mt-16 grid max-w-7xl gap-8 lg:grid-cols-5">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-3 relative rounded-3xl overflow-hidden glass gradient-border aspect-[16/11]"
        >
          <img src={office1} alt="PRL Transport office" loading="lazy" className="h-full w-full object-cover transition-transform duration-[1500ms] hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-tr from-background/60 via-transparent to-transparent" />
          <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between">
            <div>
              <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Head Office</div>
              <div className="text-xl font-display font-semibold">PRL Transport · Solan</div>
            </div>
            <span className="rounded-full glass-strong px-3 py-1 text-[10px] uppercase tracking-[0.2em]">Established · Trusted</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="lg:col-span-2 grid gap-4"
        >
          {[
            { icon: MapPin, title: "Address", text: "Deoghat, Solan, Himachal Pradesh 173211" },
            { icon: Phone, title: "Phone", text: "080917 50972" },
            { icon: Clock, title: "Hours", text: "Open 24 hours · Every day" },
          ].map((c) => (
            <div key={c.title} className="glass gradient-border rounded-2xl p-6 flex gap-4 items-start">
              <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-emerald/20 to-royal/20 grid place-items-center">
                <c.icon className="h-5 w-5 text-emerald" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">{c.title}</div>
                <div className="mt-1 font-medium">{c.text}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
