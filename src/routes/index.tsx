import { createFileRoute } from "@tanstack/react-router";
import {
  Code2,
  Workflow,
  ShieldCheck,
  Smartphone,
  ArrowRight,
  Quote,
  Sparkles,
  Zap,
  Lock,
  Rocket,
  Github,
  Linkedin,
  Twitter,
  Mail,
  MapPin,
  Phone,
  Check,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Nav } from "@/components/site/Nav";
import { Reveal } from "@/components/site/Reveal";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";
import { WhatsAppQR, WHATSAPP_URL } from "@/components/site/WhatsAppQR";
import logo from "@/assets/tech-qho-logo.png";

const SITE_URL = "https://techqho.co.za";
const OG_IMAGE = `${SITE_URL}/og-image.jpg`;
const PAGE_TITLE = "Tech Qho | IT Solutions & Web Development, Johannesburg";
const PAGE_DESC =
  "Tech Qho builds custom websites, business process automation, secure IT networks, and mobile apps for South African businesses. Free scoped quote in 48 hours.";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: PAGE_TITLE },
      { name: "description", content: PAGE_DESC },
      { property: "og:title", content: PAGE_TITLE },
      { property: "og:description", content: PAGE_DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL + "/" },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:site_name", content: "Tech Qho" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: PAGE_TITLE },
      { name: "twitter:description", content: PAGE_DESC },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: SITE_URL + "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "Tech Qho",
          description: PAGE_DESC,
          url: SITE_URL,
          image: OG_IMAGE,
          email: "info@techqho.co.ca",
          telephone: "+27789139800",
          areaServed: "ZA",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Johannesburg",
            addressCountry: "ZA",
          },
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "IT Services",
            itemListElement: [
              "Custom Website Development",
              "Business Process Automation",
              "IT Network Solutions",
              "Mobile & Web App Design",
            ].map((s) => ({
              "@type": "Offer",
              itemOffered: { "@type": "Service", name: s },
            })),
          },
        }),
      },
    ],
  }),
});

const services = [
  {
    icon: Code2,
    title: "Custom Website Development",
    desc: "Blazing-fast, SEO-first sites engineered around your brand and conversion goals.",
    points: ["Headless architecture", "Edge-rendered performance", "CMS integrations"],
  },
  {
    icon: Workflow,
    title: "Business Process Automation",
    desc: "Replace manual busywork with intelligent workflows that scale with your team.",
    points: ["Zapier & n8n pipelines", "AI-assisted routing", "Custom internal tools"],
  },
  {
    icon: ShieldCheck,
    title: "IT Network Solutions",
    desc: "Zero-trust security and resilient infrastructure your business can rely on.",
    points: ["Firewall & VPN design", "24/7 threat monitoring", "Cloud + on-prem hybrids"],
  },
  {
    icon: Smartphone,
    title: "Mobile & Web App Design",
    desc: "Product design and development that ships — from wireframe to app store.",
    points: ["iOS, Android, PWA", "Design systems", "Delightful micro-interactions"],
  },
];

const projects = [
  {
    name: "TQsupport",
    tag: "Level 1 Tech Support",
    result: "Dependable first-line IT support for businesses",
    color: "from-cyan-electric to-cyber",
  },
  {
    name: "Debt Less",
    tag: "Secure Network Overhaul",
    result: "Zero breaches in 24 months",
    color: "from-cyber to-navy",
  },
  {
    name: "amagiga",
    tag: "Gig Finder for Artists",
    result: "Connecting artists with live gig opportunities",
    color: "from-cyan-electric to-navy",
  },
  {
    name: "Zondi Tribal Authority",
    tag: "Custom Website",
    result: "A live community website for Nkandla",
    color: "from-cyber to-cyan-electric",
  },
];

const testimonials = [
  {
    quote: "As a small business, we don't have a dedicated IT department. TQsupport acts as our first line of defense. They handle all the 'my printer won't connect' and 'I forgot my password' calls so my operations manager can actually focus on operations.",
    name: "Mark De Villiers",
    role: "Operations Manager, TQsupport",
    company: "TQsupport",
    initials: "TQ",
    gradient: "from-cyber to-cyan-electric",
  },
  {
    quote: "Before Amagiga, finding weekend gigs felt like a full-time job. I was spending hours scrolling through social media and cold calling bars with no luck. Now, I just set my availability and genre, and the gigs come to me. I've gone from singing one weekend a month to being booked solid every Friday and Saturday. It’s been a game changer for my confidence and my wallet.",
    name: "Sandile Mkhize",
    role: "Musician, amagiga",
    company: "amagiga",
    initials: "AG",
    gradient: "from-cyan-electric to-cyber",
  },
  {
    quote: "The custom website developed for Zondi Tribal Authority has transformed our online presence. It's not only visually appealing but also highly functional, making it easy for our community to access information and engage with us.",
    name: "Nomsa Dlamini",
    role: "Community Liaison, Zondi Tribal Authority",
    company: "Zondi Tribal Authority",
    initials: "ZT",
    gradient: "from-cyber via-cyan-electric to-cyber",
  },
];

function Home() {
  return (
    <div id="top" className="relative min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Marquee />
      <Services />
      <About />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-hero-gradient pt-32 pb-24 text-white sm:pt-40 sm:pb-32">
      <div className="absolute inset-0 circuit-grid opacity-60" />
      <div className="orb h-72 w-72 -top-10 -left-10 bg-cyber" />
      <div className="orb h-96 w-96 top-40 -right-20 bg-cyan-electric" />

      {/* Floating geometry */}
      <div className="pointer-events-none absolute right-[8%] top-32 hidden lg:block">
        <div className="animate-float">
          <div className="h-32 w-32 rounded-2xl border border-cyan-electric/40 bg-cyber/10 backdrop-blur-sm rotate-12 shadow-glow" />
        </div>
      </div>
      <div className="pointer-events-none absolute left-[10%] bottom-24 hidden lg:block">
        <div className="animate-spin-slow">
          <div className="h-20 w-20 rounded-full border-2 border-dashed border-cyan-electric/50" />
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-electric/30 bg-white/5 px-4 py-1.5 text-xs font-medium text-cyan-electric backdrop-blur">
            <Sparkles className="h-3.5 w-3.5" /> Trusted IT partner since 2024
          </span>
        </Reveal>
        <Reveal delay={100}>
          <h1 className="mt-6 max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
            Future-Proof Your Business with{" "}
            <span className="text-cyber-gradient">Tech Qho.</span>
          </h1>
        </Reveal>
        <Reveal delay={200}>
          <p className="mt-6 max-w-2xl text-lg text-white/70 sm:text-xl">
            Custom Websites, Smart Automation, and Secure Networks —
            engineered for the businesses building tomorrow.
          </p>
        </Reveal>
        <Reveal delay={300}>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-lg bg-cyber-gradient px-7 py-3.5 text-sm font-semibold text-navy-deep shadow-glow transition-transform hover:scale-[1.03]"
            >
              Get a Free Quote
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-lg border border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:border-cyan-electric hover:text-cyan-electric"
            >
              View Our Work
            </a>
          </div>
        </Reveal>

        <Reveal delay={400}>
          <div className="mt-20 grid grid-cols-2 gap-8 border-t border-white/10 pt-10 sm:grid-cols-4">
            {[
              { k: "200+", v: "Projects shipped" },
              { k: "99.98%", v: "Network uptime" },
              { k: "48h", v: "Avg. response" },
              { k: "24/7", v: "Ops coverage" },
            ].map((s) => (
              <div key={s.v}>
                <div className="text-3xl font-bold text-cyan-electric">{s.k}</div>
                <div className="mt-1 text-xs uppercase tracking-widest text-white/50">
                  {s.v}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Marquee() {
  const logos = ["TQSUPPORT", "DEBT LESS", "AMAGIGA", "ZONDI TRIBAL AUTHORITY", "AURORA", "HELIX", "STRATOS"];
  return (
    <div className="border-y border-white/5 bg-navy-deep py-6 text-white/40">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-12 gap-y-3 px-6 text-xs font-semibold tracking-[0.3em]">
        {logos.map((l) => (
          <span key={l}>{l}</span>
        ))}
      </div>
    </div>
  );
}

function Services() {
  return (
    <section id="services" className="relative bg-surface py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-cyber">
              What we do
            </span>
            <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
              Four disciplines. <span className="text-cyber-gradient">One partner.</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Whether you're launching, scaling, or hardening — we bring the engineers,
              designers, and infrastructure to make it real.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 100}>
              <ServiceCard {...s} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  icon: Icon,
  title,
  desc,
  points,
}: {
  icon: typeof Code2;
  title: string;
  desc: string;
  points: string[];
}) {
  return (
    <div className="group relative rounded-2xl p-[1.5px] transition-transform hover:-translate-y-1">
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyber/40 via-cyan-electric/20 to-transparent opacity-70 transition-opacity group-hover:opacity-100" />
      <div className="relative h-full rounded-2xl bg-card p-8 shadow-card">
        <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl border border-cyber/20 bg-cyber/5 text-cyber transition-colors group-hover:border-cyan-electric group-hover:bg-cyan-electric/10 group-hover:text-cyan-electric">
          <Icon className="h-7 w-7" strokeWidth={1.5} />
        </div>
        <h3 className="text-xl font-bold tracking-tight">{title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{desc}</p>
        <ul className="mt-6 space-y-2">
          {points.map((p) => (
            <li key={p} className="flex items-center gap-2 text-sm text-foreground/80">
              <Check className="h-4 w-4 text-cyber" />
              {p}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function About() {
  const values = [
    { icon: Rocket, title: "Speed", desc: "Ship fast, iterate faster." },
    { icon: Lock, title: "Security", desc: "Zero-trust by default." },
    { icon: Zap, title: "Innovation", desc: "Modern stack, always." },
  ];
  return (
    <section id="about" className="relative overflow-hidden bg-navy-deep py-24 text-white sm:py-32">
      <div className="absolute inset-0 circuit-grid opacity-40" />
      <div className="orb h-96 w-96 -right-32 top-10 bg-cyber" />

      <div className="relative mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-cyan-electric">
              About Tech Qho
            </span>
            <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
              We build the systems{" "}
              <span className="text-cyber-gradient">everything else runs on.</span>
            </h2>
            <p className="mt-6 text-lg text-white/70">
              Tech Qho is a team of engineers, designers, and network architects
              obsessed with one thing: making technology quietly, reliably brilliant
              for the businesses we partner with.
            </p>
            <p className="mt-4 text-white/60">
              From startups shipping their first product to enterprises hardening
              critical infrastructure — we bring the same standard of craft. Fast
              where it matters. Careful where it counts.
            </p>

            <div className="mt-10 grid grid-cols-3 gap-6">
              {values.map((v) => (
                <div key={v.title}>
                  <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-cyber-gradient text-navy-deep">
                    <v.icon className="h-5 w-5" strokeWidth={2.2} />
                  </div>
                  <div className="text-sm font-bold">{v.title}</div>
                  <div className="text-xs text-white/50">{v.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <TechCollage />
        </Reveal>
      </div>
    </section>
  );
}

function TechCollage() {
  return (
    <div className="relative h-[520px]">
      {/* Code snippet card */}
      <div className="absolute left-0 top-4 w-[70%] rotate-[-4deg] rounded-xl border border-cyber/40 bg-navy/80 p-5 font-mono text-[11px] leading-relaxed text-cyan-electric shadow-glow backdrop-blur">
        <div className="mb-3 flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
        </div>
        <pre className="whitespace-pre-wrap">
{`export const deploy = async () => {
  const cluster = await tq.provision({
    region: "za-south",
    replicas: 3,
    zeroTrust: true,
  });
  return cluster.status; // "operational"
};`}
        </pre>
      </div>

      {/* Server rack card */}
      <div className="absolute right-0 top-32 w-[55%] rotate-[3deg] rounded-xl border border-cyan-electric/30 bg-navy/60 p-5 backdrop-blur">
        <div className="mb-3 text-[10px] font-semibold uppercase tracking-widest text-cyan-electric/80">
          Rack · 04
        </div>
        <div className="space-y-1.5">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="flex items-center gap-2 rounded border border-white/10 bg-white/5 px-2 py-1.5"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
              <div className="h-1 flex-1 rounded bg-cyber/40" />
              <span className="text-[9px] text-white/50">
                {(90 + i).toString()}%
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile wireframe */}
      <div className="absolute left-16 bottom-0 w-40 rotate-[-8deg] rounded-[28px] border-2 border-cyan-electric/40 bg-gradient-to-b from-navy to-navy-deep p-3 shadow-glow">
        <div className="mx-auto mb-2 h-1 w-10 rounded-full bg-white/20" />
        <div className="h-3 w-16 rounded bg-cyber/50" />
        <div className="mt-2 h-2 w-full rounded bg-white/10" />
        <div className="mt-1 h-2 w-3/4 rounded bg-white/10" />
        <div className="mt-4 grid grid-cols-2 gap-1.5">
          <div className="h-14 rounded bg-cyber/30" />
          <div className="h-14 rounded bg-cyan-electric/30" />
          <div className="h-14 rounded bg-white/10" />
          <div className="h-14 rounded bg-white/10" />
        </div>
        <div className="mt-3 h-6 rounded bg-cyber-gradient" />
      </div>

      {/* Floating tag */}
      <div className="absolute right-4 bottom-8 rotate-[6deg] rounded-lg border border-cyan-electric bg-cyan-electric/10 px-3 py-2 text-xs font-mono text-cyan-electric backdrop-blur">
        &lt;/ shipped /&gt;
      </div>
    </div>
  );
}

function Portfolio() {
  return (
    <section id="work" className="bg-surface py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <span className="text-xs font-semibold uppercase tracking-widest text-cyber">
                Selected work
              </span>
              <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
                Outcomes, not just <span className="text-cyber-gradient">outputs.</span>
              </h2>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-cyber hover:text-navy"
            >
              Start your project <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.name} delay={i * 80}>
              <ProjectCard p={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ p }: { p: (typeof projects)[number] }) {
  return (
    <div className="group relative aspect-[16/10] overflow-hidden rounded-2xl shadow-card">
      <div className={`absolute inset-0 bg-gradient-to-br ${p.color}`} />
      <div className="absolute inset-0 circuit-grid opacity-30 mix-blend-overlay" />
      <div className="absolute inset-0 bg-navy-deep/40 transition-opacity duration-500 group-hover:bg-navy-deep/85" />

      <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
        <div className="text-xs font-semibold uppercase tracking-widest text-cyan-electric">
          {p.tag}
        </div>
        <div className="mt-2 text-2xl font-bold sm:text-3xl">{p.name}</div>

        <div className="mt-3 max-h-24 overflow-hidden opacity-100 transition-all duration-500 sm:max-h-0 sm:opacity-0 sm:group-hover:max-h-24 sm:group-hover:opacity-100">
          <div className="text-sm text-cyan-electric">→ {p.result}</div>
        </div>
      </div>

      <div className="absolute right-6 top-6 rounded-full border border-cyan-electric/40 bg-navy-deep/40 px-3 py-1 text-[10px] font-mono uppercase tracking-widest text-cyan-electric backdrop-blur">
        Case study
      </div>
    </div>
  );
}

function Testimonials() {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => {
      setIdx((i) => (i + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(t);
  }, [paused]);
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-navy-deep py-24 text-white sm:py-32"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="orb h-96 w-96 -left-32 top-20 bg-cyber" />
      <div className="orb h-72 w-72 right-0 bottom-0 bg-cyan-electric" />

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-widest text-cyan-electric">
            Client voices
          </span>
        </Reveal>
        <Reveal delay={100}>
          <Quote className="mx-auto mt-6 h-12 w-12 text-cyan-electric" strokeWidth={1.5} />
        </Reveal>
        <Reveal delay={200}>
          <blockquote className="mt-6 min-h-[180px] text-2xl font-medium leading-relaxed sm:text-3xl">
            "{testimonials[idx].quote}"
          </blockquote>
        </Reveal>
        <Reveal delay={300}>
          <div className="mt-6 flex items-center justify-center gap-4">
            <div
              className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${testimonials[idx].gradient} text-lg font-bold text-navy-deep shadow-glow ring-2 ring-white/20`}
              aria-hidden="true"
            >
              {testimonials[idx].initials}
            </div>
            <div className="text-left">
              <div className="font-bold">{testimonials[idx].name}</div>
              <div className="text-sm text-white/50">{testimonials[idx].role}</div>
            </div>
          </div>
        </Reveal>
        <div className="mt-10 flex justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              aria-label={`Testimonial ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                i === idx ? "w-10 bg-cyan-electric" : "w-4 bg-white/20"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="bg-surface py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-3xl bg-hero-gradient p-10 shadow-card sm:p-16">
          <div className="absolute inset-0 circuit-grid opacity-50" />
          <div className="orb h-72 w-72 -right-10 -top-10 bg-cyan-electric" />

          <div className="relative grid gap-12 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <div className="text-white">
                <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                  Let's build something{" "}
                  <span className="text-cyber-gradient">unbreakable.</span>
                </h2>
                <p className="mt-4 text-white/70">
                  Tell us where you're headed. We'll come back within 48 hours with a
                  scoped, honest plan — free of charge.
                </p>
                <div className="mt-8 space-y-3 text-sm">
                  <a
                    href="mailto:info@techqho.co.za"
                    className="flex items-center gap-3 text-white/80 transition-colors hover:text-cyan-electric"
                  >
                    <Mail className="h-4 w-4 text-cyan-electric" />&nbsp; info@techqho.co.za
                  </a>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-white/80 transition-colors hover:text-cyan-electric"
                  >
                    <Phone className="h-4 w-4 text-cyan-electric" /> +27 78 913 9800
                  </a>
                  <div className="flex items-center gap-3 text-white/80">
                    <MapPin className="h-4 w-4 text-cyan-electric" /> Remote-first · HQ Johannesburg, South Africa
                  </div>
                </div>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-lg bg-whatsapp px-5 py-3 text-sm font-semibold text-whatsapp-foreground shadow-lg transition-transform hover:scale-[1.03]"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  Chat on WhatsApp
                </a>
                <div className="mt-6">
                  <WhatsAppQR />
                </div>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const form = e.currentTarget;
                  const data = new FormData(form);
                  const name = String(data.get("name") ?? "");
                  const email = String(data.get("email") ?? "");
                  const company = String(data.get("company") ?? "");
                  const details = String(data.get("details") ?? "");

                  const subject = `Free Quote Request${name ? ` — ${name}` : ""}`;
                  const bodyLines = [
                    name && `Name: ${name}`,
                    email && `Work email: ${email}`,
                    company && `Company: ${company}`,
                    details && `\nWhat they need:\n${details}`,
                  ].filter(Boolean);

                  const mailto = `mailto:info@techqho.co.za?subject=${encodeURIComponent(
                    subject,
                  )}&body=${encodeURIComponent(bodyLines.join("\n"))}`;

                  window.location.href = mailto;
                }}
                className="rounded-2xl border border-white/10 bg-navy-deep/60 p-6 backdrop-blur-xl"
              >
                <div className="space-y-4">
                  <Field id="contact-name" name="name" label="Name" placeholder="Ada Lovelace" />
                  <Field id="contact-email" name="email" label="Work email" type="email" placeholder="ada@company.com" />
                  <Field id="contact-company" name="company" label="Company" placeholder="Analytical Engines Inc." />

                  <div>
                    <label
                      htmlFor="contact-details"
                      className="text-xs font-semibold uppercase tracking-widest text-white/60"
                    >
                      What do you need?
                    </label>
                    <textarea
                      id="contact-details"
                      name="details"
                      rows={3}
                      placeholder="Tell us about the project…"
                      className="mt-2 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-white placeholder:text-white/30 focus:border-cyan-electric focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-cyber-gradient px-5 py-3 text-sm font-semibold text-navy-deep shadow-glow transition-transform hover:scale-[1.02]"
                  >
                    Request Free Quote
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  id,
  name,
  label,
  type = "text",
  placeholder,
}: {
  id: string;
  name: string;
  label: string;
  type?: string;
  placeholder: string;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="text-xs font-semibold uppercase tracking-widest text-white/60"
      >
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        className="mt-2 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-white placeholder:text-white/30 focus:border-cyan-electric focus:outline-none"
      />
    </div>
  );
}


function Footer() {
  return (
    <footer className="border-t border-white/5 bg-navy-deep text-white/70">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center">
            <img
              src={logo}
              alt="Tech Qho logo"
              className="h-11 w-auto rounded-md bg-white object-contain p-0.5"
            />
          </div>
          <p className="mt-4 max-w-sm text-sm">
            Tech Qho: Innovate. Build. Empower. We partner with ambitious teams to
            engineer the digital infrastructure of what's next.
          </p>
          <div className="mt-6 flex gap-3">
            {[
              { Icon: Linkedin, label: "Tech Qho on LinkedIn", href: "" },
              { Icon: Twitter, label: "Tech Qho on X (Twitter)", href: "" },
              { Icon: Github, label: "Tech Qho on GitHub", href: "" },
            ]
              .filter((l) => l.href)
              .map(({ Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 transition-colors hover:border-cyan-electric hover:text-cyan-electric"
                aria-label={label}
              >
                <Icon className="h-4 w-4" />
              </a>

            ))}
          </div>
        </div>

        <div>
          <div className="text-xs font-semibold uppercase tracking-widest text-white/50">
            Navigate
          </div>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="#services" className="hover:text-cyan-electric">Services</a></li>
            <li><a href="#about" className="hover:text-cyan-electric">About</a></li>
            <li><a href="#work" className="hover:text-cyan-electric">Work</a></li>
            <li><a href="#contact" className="hover:text-cyan-electric">Contact</a></li>
          </ul>
        </div>

        <div>
          <div className="text-xs font-semibold uppercase tracking-widest text-white/50">
            Contact
          </div>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a href="mailto:info@techqho.co.za" className="transition-colors hover:text-cyan-electric">
                info@techqho.co.za
              </a>
            </li>
            <li>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-cyan-electric"
              >
                +27 78 913 9800
              </a>
            </li>
            <li>Johannesburg · South Africa</li>
          </ul>
          <div className="mt-5">
            <WhatsAppQR size={96} layout="stack" />
          </div>
        </div>
      </div>
      <div className="border-t border-white/5">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-6 text-xs text-white/40 sm:flex-row">
          <span>© {new Date().getFullYear()} Tech Qho. All rights reserved.</span>
          <span className="font-mono tracking-widest">CODE · CONNECT · CREATE</span>
        </div>
      </div>
    </footer>
  );
}

function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-4 right-4 z-50 inline-flex items-center gap-2 rounded-full bg-whatsapp px-4 py-3 text-sm font-semibold text-whatsapp-foreground shadow-lg transition-transform hover:scale-105 sm:bottom-6 sm:right-6"
    >
      <WhatsAppIcon className="h-5 w-5" />
      <span className="hidden sm:inline">WhatsApp us</span>
    </a>
  );
}
