import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.floor(v).toLocaleString());

  useEffect(() => {
    if (inView) animate(count, to, { duration: 2.2, ease: "easeOut" });
  }, [inView, to, count]);

  return (
    <span ref={ref} className="inline-flex items-baseline">
      <motion.span>{rounded}</motion.span>
      <span>{suffix}</span>
    </span>
  );
}

const stats = [
  { value: 50000, suffix: "+", label: "Happy Customers" },
  { value: 120000, suffix: "+", label: "Successful Trips" },
  { value: 120, suffix: "+", label: "Daily Routes" },
  { value: 15, suffix: "+", label: "Years of Experience" },
];

export function Stats() {
  return (
    <section className="relative py-24 px-6">
      <div className="mx-auto max-w-7xl relative">
        <div className="absolute -inset-10 -z-10 bg-gradient-to-r from-emerald/10 via-royal/10 to-deep/10 blur-3xl" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="rounded-3xl glass-strong gradient-border p-8 text-center relative overflow-hidden">
              <div className="absolute -top-20 left-1/2 -translate-x-1/2 h-40 w-40 rounded-full bg-emerald/20 blur-3xl" />
              <div className="relative text-5xl font-display font-semibold text-gradient">
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <div className="relative mt-2 text-xs uppercase tracking-[0.22em] text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
