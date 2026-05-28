import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { Fleet } from "@/components/site/Fleet";
import { Office } from "@/components/site/Office";
import { Features } from "@/components/site/Features";
import { Stats } from "@/components/site/Stats";
import { Testimonials } from "@/components/site/Testimonials";
import { Contact } from "@/components/site/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PRL Transport Solan — Premium Bus & Travel Services" },
      { name: "description", content: "Driven by trust, powered by comfort. 24/7 premium transport across Himachal & all India." },
      { property: "og:title", content: "PRL Transport Solan" },
      { property: "og:description", content: "Driven by trust, powered by comfort. 24/7 premium transport across Himachal & all India." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <Services />
      <Fleet />
      <Stats />
      <Features />
      <Office />
      <Testimonials />
      <Contact />
    </>
  );
}
