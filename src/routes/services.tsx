import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Services } from "@/components/site/Services";
import { Contact } from "@/components/site/Contact";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — PRL Transport Solan" },
      { name: "description", content: "Tourist coaches, Himachal tours, corporate transport, wedding fleets & all-India services." },
      { property: "og:title", content: "PRL Services" },
      { property: "og:description", content: "Tourist coaches, Himachal tours, corporate transport, wedding fleets & all-India services." },
    ],
  }),
  component: () => (
    <>
      <PageHero eyebrow="Services" title="Eight ways to travel premium" description="Pick a service — we’ll handle the rest, end to end." />
      <Services />
      <Contact />
    </>
  ),
});
