import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";
import { ArrowRight, ArrowUpRight, Bot, BarChart3, Settings2, Layers, Workflow, Monitor } from "lucide-react";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import type { Container, Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";

/* ─── Hero ─── */
const Hero = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    await console.log(container);
  }, []);

  return (
    <section className="relative min-h-[100vh] flex items-center overflow-hidden">
      {/* Premium gradient background */}
      <div className="absolute inset-0 premium-gradient" />
      
      {/* Animated gradient orbs */}
      <div className="absolute top-20 right-1/4 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-primary/[0.08] to-transparent blur-[80px] animate-float" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-primary/[0.06] to-transparent blur-[100px]" style={{ animationDelay: "2s" }} />
      
      {/* Particle animation */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "grab",
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 200,
                line_linked: {
                  opacity: 0.6,
                },
              },
            },
          },
          particles: {
            color: {
              value: ["#221b85", "#3366ff", "#5588ff", "#7799ff"],
            },
            links: {
              color: "#3366ff",
              distance: 200,
              enable: true,
              opacity: 0.35,
              width: 1.5,
            },
            collisions: {
              enable: false,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "out",
              },
              random: true,
              speed: 1.5,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 1000,
              },
              value: 120,
            },
            opacity: {
              value: { min: 0.3, max: 0.7 },
              animation: {
                enable: true,
                minimumValue: 0.2,
                speed: 1,
                sync: false,
              },
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1.5, max: 4 },
              animation: {
                enable: true,
                minimumValue: 1,
                speed: 2,
                sync: false,
              },
            },
          },
          detectRetina: true,
        }}
      />
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-8">
            <Reveal>
              <h1 className="font-display text-[clamp(2.5rem,8vw,6rem)] font-bold leading-[1.1] tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-foreground via-primary to-foreground animate-fade-in">
                Automate What Matters
              </h1>
            </Reveal>

            <Reveal delay={200}>
              <p className="max-w-lg text-lg text-foreground/70 leading-relaxed md:text-xl font-light">
                We architect intelligent platforms, automation pipelines, and AI infrastructure that run behind the product.
              </p>
            </Reveal>

            <Reveal delay={300}>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link to="/contact">
                  <Button variant="hero" size="lg" className="gap-2 group">
                    Start Building
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link to="/capabilities">
                  <Button variant="hero-outline" size="lg" className="gap-2">
                    View Capabilities
                  </Button>
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ─── Marquee strip ─── */
const MarqueeStrip = () => {
  const items = ["AI Agents", "Automation Pipelines", "Data Systems", "SaaS Platforms", "Internal Tools", "Dashboards", "AI Infrastructure", "Custom Systems"];
  return (
    <div className="border-y border-border/40 bg-card/30 py-5 overflow-hidden">
      <div className="marquee">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="flex items-center gap-3 text-sm font-medium text-muted-foreground whitespace-nowrap">
            <span className="h-1.5 w-1.5 rounded-full bg-primary/50" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

/* ─── What We Build — Bento Grid ─── */
const whatWeBuild = [
  {
    icon: Workflow,
    title: "Intelligent Automation",
    description: "End-to-end workflow automation that eliminates manual processes. Systems that learn, adapt, and operate autonomously.",
    span: "md:col-span-2 md:row-span-2",
    featured: true,
  },
  {
    icon: Layers,
    title: "AI Infrastructure",
    description: "Production-grade AI pipelines, model serving, and data architecture.",
    span: "md:col-span-1",
    featured: false,
  },
  {
    icon: Settings2,
    title: "Custom Systems",
    description: "Purpose-built platforms tailored to your operational logic.",
    span: "md:col-span-1",
    featured: false,
  },
];

const WhatWeBuild = () => (
  <section className="py-28 md:py-36 bg-noise">
    <div className="container relative z-10">
      <Reveal>
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary mb-4 block">
          01 — What We Build
        </span>
      </Reveal>
      <Reveal delay={100}>
        <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-6">
          Engineering that operates
          <br />
          <span className="text-muted-foreground">at scale.</span>
        </h2>
      </Reveal>
      <Reveal delay={200}>
        <p className="text-muted-foreground max-w-xl mb-16">
          We don't build features. We build the systems that power them.
        </p>
      </Reveal>

      <div className="grid gap-4 md:grid-cols-3 md:grid-rows-2">
        {whatWeBuild.map((item, i) => (
          <Reveal key={item.title} delay={i * 100}>
            <div
              className={`relative rounded-2xl glass-card p-8 card-hover shine h-full ${item.span} ${
                item.featured ? "flex flex-col justify-between" : ""
              }`}
            >
              <div>
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-primary/10 border border-primary/10 mb-6">
                  <item.icon className="h-5 w-5 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
              {item.featured && (
                <Link to="/capabilities" className="inline-flex items-center gap-2 text-sm text-primary mt-8 group">
                  Explore capabilities
                  <ArrowUpRight size={14} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

/* ─── Capabilities Grid ─── */
const capabilities = [
  { icon: Bot, label: "AI Agents", desc: "Autonomous task execution" },
  { icon: BarChart3, label: "Dashboards", desc: "Real-time analytics" },
  { icon: Settings2, label: "Internal Tools", desc: "Custom workflows" },
  { icon: Workflow, label: "Pipelines", desc: "Data orchestration" },
  { icon: Monitor, label: "SaaS Platforms", desc: "Multi-tenant systems" },
  { icon: Layers, label: "Data Systems", desc: "Stream processing" },
];

const CapabilitiesSection = () => (
  <section className="py-28 md:py-36 relative">
    <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
    <div className="container relative z-10">
      <Reveal>
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary mb-4 block">
          02 — Capabilities
        </span>
      </Reveal>
      <Reveal delay={100}>
        <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-16">
          From concept to
          <br />
          <span className="text-gradient">production.</span>
        </h2>
      </Reveal>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {capabilities.map((c, i) => (
          <Reveal key={c.label} delay={i * 80}>
            <div className="group relative rounded-2xl glass-card p-6 md:p-8 card-hover cursor-default h-full">
              <c.icon className="h-6 w-6 text-primary/70 mb-4 transition-colors group-hover:text-primary" strokeWidth={1.5} />
              <h3 className="font-display text-sm md:text-base font-semibold mb-1">{c.label}</h3>
              <p className="text-xs text-muted-foreground">{c.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

/* ─── Selected Work ─── */
const projects = [
  {
    title: "Autonomous Ops Platform",
    category: "Automation",
    stat: "87%",
    statLabel: "less manual work",
    description: "Self-healing infrastructure management for a logistics company processing 2M+ events/day.",
  },
  {
    title: "AI Document Pipeline",
    category: "AI Infrastructure",
    stat: "94%",
    statLabel: "faster processing",
    description: "Multi-model extraction system reducing document processing time with 99.2% accuracy.",
  },
  {
    title: "Real-time Analytics Engine",
    category: "Custom Systems",
    stat: "50K",
    statLabel: "concurrent users",
    description: "Sub-second analytics dashboard across 3 regions with 99.99% uptime.",
  },
];

const SelectedWork = () => (
  <section className="py-28 md:py-36 bg-noise">
    <div className="container relative z-10">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
        <div>
          <Reveal>
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary mb-4 block">
              03 — Selected Work
            </span>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight">
              Systems in
              <br />
              <span className="text-muted-foreground">production.</span>
            </h2>
          </Reveal>
        </div>
        <Reveal delay={200}>
          <Link to="/work" className="inline-flex items-center gap-2 text-sm text-primary group">
            View all projects
            <ArrowUpRight size={14} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </Reveal>
      </div>

      <div className="space-y-4">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={i * 100}>
            <div className="group rounded-2xl glass-card p-8 md:p-10 card-hover">
              <div className="grid md:grid-cols-12 gap-6 items-center">
                <div className="md:col-span-2">
                  <span className="text-xs font-medium uppercase tracking-wider text-primary">{p.category}</span>
                </div>
                <div className="md:col-span-5">
                  <h3 className="font-display text-xl md:text-2xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>
                </div>
                <div className="md:col-span-3 md:text-center">
                  <span className="font-display text-3xl md:text-4xl font-bold text-gradient">{p.stat}</span>
                  <span className="block text-xs text-muted-foreground mt-1">{p.statLabel}</span>
                </div>
                <div className="md:col-span-2 md:text-right">
                  <ArrowUpRight size={20} className="text-muted-foreground transition-all group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

/* ─── Stats Bar ─── */
const StatsBar = () => {
  const stats = [
    { value: 40, suffix: "+", label: "Systems delivered" },
    { value: 99, suffix: ".9%", label: "Uptime average" },
    { value: 12, suffix: "M+", label: "Events processed daily" },
    { value: 3, suffix: "x", label: "Avg. efficiency gain" },
  ];

  return (
    <section className="py-20">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 100}>
              <div className="glass-card p-6 md:p-8 h-full flex flex-col items-center justify-center text-center space-y-3">
                <span className="font-display text-4xl md:text-5xl font-bold text-primary">
                  {s.value}<span className="text-2xl">{s.suffix}</span>
                </span>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─── Why Synex ─── */
const whySynex = [
  {
    num: "01",
    title: "Systems-first thinking",
    description: "We start with architecture, not UI. Every decision is informed by how the system will behave under load.",
  },
  {
    num: "02",
    title: "Production-grade from day one",
    description: "No prototypes disguised as products. Everything we ship is built for real operations.",
  },
  {
    num: "03",
    title: "Engineering depth",
    description: "We go deep on infrastructure, data pipelines, and AI — the layers most teams skip.",
  },
];

const WhySynex = () => (
  <section className="py-28 md:py-36 relative overflow-hidden">
    <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-accent/[0.03] blur-[120px]" />
    <div className="container relative z-10">
      <Reveal>
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary mb-4 block">
          04 — Why Synex
        </span>
      </Reveal>
      <Reveal delay={100}>
        <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-16 max-w-2xl">
          We build what others
          <br />
          <span className="text-muted-foreground">can't maintain.</span>
        </h2>
      </Reveal>

      <div className="grid md:grid-cols-3 gap-px bg-border/30 rounded-2xl overflow-hidden border border-border/30">
        {whySynex.map((item, i) => (
          <Reveal key={item.num} delay={i * 100}>
            <div className="glass-card p-8 md:p-10 h-full space-y-6 group transition-colors">
              <span className="font-display text-3xl font-bold text-primary/20 group-hover:text-primary/40 transition-colors">
                {item.num}
              </span>
              <h3 className="font-display text-lg font-semibold">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

/* ─── CTA ─── */
const CTA = () => (
  <section className="py-28 md:py-40 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/[0.02] to-background" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/[0.04] blur-[100px]" />

    <div className="container relative z-10">
      <Reveal>
        <div className="mx-auto max-w-3xl text-center space-y-8">
          <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]">
            Let's Build Something
            <br />
            <span className="text-gradient">That Scales</span>
          </h2>
          <p className="text-base text-muted-foreground md:text-lg max-w-lg mx-auto">
            Ready to move past prototypes? We'll architect the system your product needs.
          </p>
          <Link to="/contact">
            <Button variant="hero" size="lg" className="gap-2 group mt-4">
              Start a Conversation
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </Reveal>
    </div>
  </section>
);

/* ─── Page ─── */
const Index = () => (
  <Layout>
    <Hero />
    <MarqueeStrip />
    <WhatWeBuild />
    <CapabilitiesSection />
    <SelectedWork />
    <StatsBar />
    <WhySynex />
    <CTA />
  </Layout>
);

export default Index;
