import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Contact } from "@/components/site/Contact";
import { Office } from "@/components/site/Office";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — PRL Transport Solan" },
      { name: "description", content: "Call, WhatsApp, or visit PRL Transport at Deoghat, Solan. Open 24 hours." },
      { property: "og:title", content: "Contact PRL Transport Solan" },
      { property: "og:description", content: "Call, WhatsApp, or visit PRL Transport at Deoghat, Solan. Open 24 hours." },
    ],
  }),
  component: () => (
    <>
      <PageHero eyebrow="Contact" title="We’re open, 24 hours a day" description="Reach the PRL team any time — by call, WhatsApp, or in person at Deoghat, Solan." />
      <Contact />
      <Office />
    </>
  ),
});
