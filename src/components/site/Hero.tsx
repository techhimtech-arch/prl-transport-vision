import { motion } from "framer-motion";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden">
      {/* Background */}
      <motion.div
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 14, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <img
          src={heroBg}
          alt="PRL premium coach driving through the Himalayas at dusk"
          width={1920}
          height={1080}
          className="h-full w-full object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
      <div className="absolute inset-0 bg-grid opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />

      {/* Floating blobs */}
      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-emerald/30 blur-3xl animate-blob" />
      <div className="absolute top-1/3 -right-32 h-96 w-96 rounded-full bg-royal/30 blur-3xl animate-blob" style={{ animationDelay: "-6s" }} />
      <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-deep/30 blur-3xl animate-blob" style={{ animationDelay: "-12s" }} />

      {/* Particles */}
      {Array.from({ length: 18 }).map((_, i) => (
        <span
          key={i}
          className="absolute h-1 w-1 rounded-full bg-emerald/70 animate-float"
          style={{
            top: `${Math.random() * 90}%`,
            left: `${Math.random() * 95}%`,
            animationDelay: `${Math.random() * 6}s`,
            boxShadow: "0 0 12px oklch(0.72 0.18 155 / 0.9)",
          }}
        />
      ))}

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-44 pb-24 md:pt-52">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs">
            <Sparkles className="h-3.5 w-3.5 text-emerald" />
            <span className="uppercase tracking-[0.22em] text-muted-foreground">Open 24 hours · Solan, Himachal</span>
          </div>

          <h1 className="mt-6 text-5xl md:text-7xl lg:text-8xl font-semibold leading-[1.02] tracking-tight">
            <span className="block text-gradient">Driven By Trust,</span>
            <span className="block text-foreground/90">Powered By <span className="neon-text text-emerald">Comfort</span>.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed">
            24/7 premium transport and travel services across Himachal Pradesh and all over India.
            Engineered for the road. Designed for you.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="tel:08091750972"
              className="group inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-emerald via-deep to-royal px-6 py-3.5 font-medium text-primary-foreground glow-emerald hover:brightness-110 transition"
            >
              Book Now
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-2xl glass-strong px-6 py-3.5 font-medium hover:bg-white/10 transition"
            >
              <Play className="h-4 w-4 text-emerald" />
              Explore Services
            </a>
          </div>

          {/* Hero stats */}
          <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl">
            {[
              ["15+", "Years"],
              ["50K+", "Happy Riders"],
              ["120+", "Daily Routes"],
              ["24/7", "Service"],
            ].map(([v, l]) => (
              <div key={l} className="glass rounded-xl px-4 py-3">
                <div className="text-xl font-display font-semibold text-gradient">{v}</div>
                <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">{l}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-xs uppercase tracking-[0.3em] text-muted-foreground flex flex-col items-center gap-2">
        <span>Scroll</span>
        <span className="h-10 w-px bg-gradient-to-b from-emerald to-transparent" />
      </div>
    </section>
  );
}
