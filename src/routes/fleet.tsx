import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Fleet } from "@/components/site/Fleet";
import { Features } from "@/components/site/Features";

export const Route = createFileRoute("/fleet")({
  head: () => ({
    meta: [
      { title: "Fleet — PRL Transport Solan" },
      { name: "description", content: "Explore PRL’s luxury coach fleet — meticulously maintained, ready for the road." },
      { property: "og:title", content: "PRL Fleet" },
      { property: "og:description", content: "Explore PRL’s luxury coach fleet — meticulously maintained, ready for the road." },
    ],
  }),
  component: () => (
    <>
      <PageHero eyebrow="Fleet" title="Engineered for the open road" description="Premium coaches, panoramic windows, plush seating, and drivers who know every turn." />
      <Fleet />
      <Features />
    </>
  ),
});
