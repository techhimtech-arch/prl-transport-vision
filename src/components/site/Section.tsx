import { motion } from "framer-motion";
import { type ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  align?: "center" | "left";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      {eyebrow && (
        <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald glow-emerald" />
          {eyebrow}
        </div>
      )}
      <h2 className="mt-4 text-3xl md:text-5xl font-semibold text-gradient">{title}</h2>
      {description && <p className="mt-4 text-muted-foreground leading-relaxed">{description}</p>}
    </motion.div>
  );
}
