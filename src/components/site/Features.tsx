import { motion } from "framer-motion";
import { Clock, ShieldCheck, UserCheck, Sofa, MapPin, Headset, Zap, Globe } from "lucide-react";
import { SectionHeading } from "./Section";

const features = [
  { icon: Clock, title: "24/7 Service" },
  { icon: ShieldCheck, title: "Safe Travel" },
  { icon: UserCheck, title: "Experienced Drivers" },
  { icon: Sofa, title: "Comfortable Seating" },
  { icon: MapPin, title: "GPS Tracking" },
  { icon: Headset, title: "Professional Staff" },
  { icon: Zap, title: "Fast Booking" },
  { icon: Globe, title: "All India Service" },
];

export function Features() {
  return (
    <section className="relative py-28 px-6">
      <SectionHeading eyebrow="Why PRL" title="The premium standard" description="Eight reasons travellers choose PRL Transport — again and again." />
      <div className="mx-auto mt-16 grid max-w-7xl gap-4 sm:grid-cols-2 md:grid-cols-4">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.05 }}
            whileHover={{ y: -4 }}
            className="group relative rounded-2xl p-6 glass gradient-border overflow-hidden"
          >
            <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-emerald/20 blur-2xl opacity-0 group-hover:opacity-100 transition" />
            <f.icon className="h-7 w-7 text-emerald group-hover:scale-110 transition" />
            <div className="mt-4 font-semibold">{f.title}</div>
            <div className="mt-1 text-xs text-muted-foreground">Premium guaranteed</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
