import { motion } from "framer-motion";
import { type ReactNode } from "react";

export function PageHero({ eyebrow, title, description, children }: { eyebrow?: string; title: ReactNode; description?: string; children?: ReactNode }) {
  return (
    <section className="relative pt-40 pb-20 px-6 overflow-hidden">
      <div className="absolute -top-32 left-1/4 h-96 w-96 rounded-full bg-emerald/20 blur-3xl animate-blob" />
      <div className="absolute top-10 right-10 h-80 w-80 rounded-full bg-royal/20 blur-3xl animate-blob" style={{ animationDelay: "-6s" }} />
      <div className="absolute inset-0 bg-grid opacity-20 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative mx-auto max-w-4xl text-center"
      >
        {eyebrow && (
          <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald glow-emerald" /> {eyebrow}
          </div>
        )}
        <h1 className="mt-5 text-5xl md:text-7xl font-semibold text-gradient leading-[1.05]">{title}</h1>
        {description && <p className="mt-5 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">{description}</p>}
        {children && <div className="mt-8">{children}</div>}
      </motion.div>
    </section>
  );
}
