import { motion } from "framer-motion";
import { Phone, MessageCircle, MapPin, Facebook, Mail, Send } from "lucide-react";
import { useState } from "react";
import { SectionHeading } from "./Section";

export function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="relative py-28 px-6">
      <SectionHeading eyebrow="Get in touch" title="Plan your next journey" description="Reach out 24/7 — our team replies fast." />

      <div className="mx-auto mt-16 max-w-7xl grid gap-6 lg:grid-cols-5">
        <motion.form
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="lg:col-span-3 rounded-3xl glass-strong gradient-border p-7"
        >
          <div className="grid gap-4 md:grid-cols-2">
            <Field label="Name" name="name" placeholder="Your full name" />
            <Field label="Phone" name="phone" placeholder="+91" />
            <Field label="Email" name="email" placeholder="you@example.com" className="md:col-span-2" />
            <Field label="From" name="from" placeholder="e.g. Solan" />
            <Field label="To" name="to" placeholder="e.g. Manali" />
          </div>
          <label className="block mt-4">
            <span className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Message</span>
            <textarea name="message" rows={4} placeholder="Tell us about your trip…" className="mt-2 w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-emerald transition resize-none" />
          </label>
          <button type="submit" className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-emerald via-deep to-royal px-6 py-3 font-medium text-primary-foreground glow-emerald hover:brightness-110 transition">
            {sent ? "Sent ✓" : <>Send Enquiry <Send className="h-4 w-4" /></>}
          </button>
        </motion.form>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:col-span-2 grid gap-4"
        >
          <a href="tel:08091750972" className="rounded-2xl glass gradient-border p-5 flex items-center gap-4 hover:bg-white/10 transition">
            <span className="h-11 w-11 rounded-xl bg-gradient-to-br from-emerald to-deep grid place-items-center glow-emerald"><Phone className="h-5 w-5" /></span>
            <div><div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Call now</div><div className="font-semibold">080917 50972</div></div>
          </a>
          <a href="https://wa.me/918091750972" target="_blank" rel="noreferrer" className="rounded-2xl glass gradient-border p-5 flex items-center gap-4 hover:bg-white/10 transition">
            <span className="h-11 w-11 rounded-xl bg-gradient-to-br from-emerald to-royal grid place-items-center"><MessageCircle className="h-5 w-5" /></span>
            <div><div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">WhatsApp</div><div className="font-semibold">Chat instantly</div></div>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer" className="rounded-2xl glass gradient-border p-5 flex items-center gap-4 hover:bg-white/10 transition">
            <span className="h-11 w-11 rounded-xl bg-gradient-to-br from-deep to-royal grid place-items-center"><Facebook className="h-5 w-5" /></span>
            <div><div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Facebook</div><div className="font-semibold">Follow us</div></div>
          </a>
          <div className="rounded-2xl glass gradient-border p-5 flex items-center gap-4">
            <span className="h-11 w-11 rounded-xl bg-gradient-to-br from-emerald/20 to-royal/20 grid place-items-center"><MapPin className="h-5 w-5 text-emerald" /></span>
            <div><div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Visit</div><div className="font-semibold text-sm">Deoghat, Solan, HP 173211</div></div>
          </div>
        </motion.div>
      </div>

      <div className="mx-auto mt-8 max-w-7xl rounded-3xl overflow-hidden gradient-border glass">
        <iframe
          title="PRL Transport location"
          src="https://www.google.com/maps?q=Deoghat,Solan,Himachal+Pradesh+173211&output=embed"
          width="100%"
          height="380"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="block w-full grayscale-[35%] contrast-110"
          style={{ border: 0, filter: "invert(0.9) hue-rotate(180deg) saturate(0.9)" }}
        />
      </div>
    </section>
  );
}

function Field({ label, name, placeholder, className = "" }: { label: string; name: string; placeholder?: string; className?: string }) {
  return (
    <label className={`block ${className}`}>
      <span className="text-xs uppercase tracking-[0.22em] text-muted-foreground">{label}</span>
      <input name={name} placeholder={placeholder} className="mt-2 w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-emerald transition" />
    </label>
  );
}
