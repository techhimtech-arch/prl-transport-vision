import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { MouseGlow } from "@/components/site/MouseGlow";
import { MessageCircle } from "lucide-react";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="max-w-md text-center glass-strong gradient-border rounded-3xl p-10">
        <h1 className="text-7xl font-display font-bold text-gradient">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Off the route</h2>
        <p className="mt-2 text-sm text-muted-foreground">The page you’re looking for has taken a detour.</p>
        <a href="/" className="mt-6 inline-flex items-center rounded-xl bg-gradient-to-r from-emerald to-royal px-4 py-2 text-sm font-medium text-primary-foreground glow-emerald">Go home</a>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="max-w-md text-center glass-strong gradient-border rounded-3xl p-10">
        <h1 className="text-xl font-semibold">Something went off-road</h1>
        <p className="mt-2 text-sm text-muted-foreground">Try refreshing or head back home.</p>
        <div className="mt-6 flex justify-center gap-2">
          <button onClick={() => { router.invalidate(); reset(); }} className="rounded-xl bg-gradient-to-r from-emerald to-royal px-4 py-2 text-sm font-medium text-primary-foreground">Try again</button>
          <a href="/" className="rounded-xl glass px-4 py-2 text-sm">Go home</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "PRL Transport Solan — Premium Bus & Travel Services" },
      { name: "description", content: "PRL Transport Solan: 24/7 premium tourist buses, Himachal tours, corporate & wedding transport across India." },
      { name: "theme-color", content: "#0a0a12" },
      { property: "og:title", content: "PRL Transport Solan — Driven By Trust, Powered By Comfort" },
      { property: "og:description", content: "Premium tourist buses, Himachal tours, corporate & wedding transport across India." },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Space+Grotesk:wght@400;500;600;700&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <MouseGlow />
      <Navbar />
      <main className="relative z-[2]"><Outlet /></main>
      <Footer />
      <a
        href="https://wa.me/918091750972"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-gradient-to-br from-emerald to-deep grid place-items-center glow-emerald hover:scale-110 transition"
        aria-label="WhatsApp"
      >
        <MessageCircle className="h-6 w-6 text-primary-foreground" />
      </a>
    </QueryClientProvider>
  );
}
