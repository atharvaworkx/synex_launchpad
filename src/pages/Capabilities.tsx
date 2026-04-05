import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowUpRight, Bot, BarChart3, Settings2, Layers, Workflow, Monitor, Database, Shield, Zap } from "lucide-react";

const services = [
  {
    icon: Workflow,
    title: "Intelligent Automation",
    points: ["Workflow orchestration", "Event-driven systems", "Self-healing pipelines", "Process mining & optimization"],
  },
  {
    icon: Layers,
    title: "AI Infrastructure",
    points: ["Model serving & deployment", "Vector databases & RAG", "Training pipeline architecture", "Multi-model orchestration"],
  },
  {
    icon: Settings2,
    title: "Custom Systems",
    points: ["Domain-specific platforms", "Internal tooling", "Real-time data systems", "API architecture"],
  },
  {
    icon: Bot,
    title: "AI Agents",
    points: ["Autonomous task execution", "Multi-agent coordination", "Tool-use frameworks", "Human-in-the-loop design"],
  },
  {
    icon: Monitor,
    title: "SaaS Platforms",
    points: ["Multi-tenant architecture", "Usage-based billing", "Role-based access", "Analytics & reporting"],
  },
  {
    icon: Database,
    title: "Data Engineering",
    points: ["ETL/ELT pipelines", "Data lake architecture", "Stream processing", "Data quality frameworks"],
  },
];

const principles = [
  { icon: Shield, title: "Resilient by design", description: "Every system is built with failure modes, fallbacks, and observability from the start." },
  { icon: Zap, title: "Performance-first", description: "We optimize at the architecture level — not as an afterthought." },
  { icon: BarChart3, title: "Measurable outcomes", description: "If we can't measure the improvement, we haven't finished the work." },
];

const CapabilitiesPage = () => (
  <Layout>
    <section className="pt-36 md:pt-48 pb-20">
      <div className="container">
        <Reveal>
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary mb-4 block">Capabilities</span>
        </Reveal>
        <Reveal delay={100}>
          <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight max-w-3xl leading-[1.05]">
            What we
            <br />
            <span className="text-gradient">engineer.</span>
          </h1>
        </Reveal>
        <Reveal delay={200}>
          <p className="mt-6 text-muted-foreground max-w-xl text-base md:text-lg leading-relaxed">
            We build the infrastructure, automation, and intelligence layers that power modern products.
          </p>
        </Reveal>
      </div>
    </section>

    <section className="pb-28 md:pb-36">
      <div className="container">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 80}>
              <div className="rounded-2xl border border-border/40 bg-card/30 p-8 space-y-6 card-hover h-full group transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-primary/10 border border-primary/10">
                  <s.icon className="h-5 w-5 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-lg font-semibold">{s.title}</h3>
                <ul className="space-y-2.5">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-center gap-3 text-sm text-muted-foreground">
                      <span className="h-px w-4 bg-border group-hover:bg-primary/40 transition-colors" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    <section className="py-28 md:py-36 bg-noise relative">
      <div className="container relative z-10">
        <Reveal>
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary mb-4 block">Principles</span>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-16">
            How we <span className="text-muted-foreground">work.</span>
          </h2>
        </Reveal>
        <div className="grid gap-px md:grid-cols-3 bg-border/30 rounded-2xl overflow-hidden border border-border/30">
          {principles.map((p, i) => (
            <Reveal key={p.title} delay={i * 100}>
              <div className="bg-card/40 p-8 md:p-10 h-full space-y-4 hover:bg-card/60 transition-colors">
                <p.icon className="h-6 w-6 text-primary/70" strokeWidth={1.5} />
                <h3 className="font-display text-base font-semibold">{p.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{p.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    <section className="py-28 md:py-36">
      <div className="container">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center space-y-8">
            <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight">
              Have a system <span className="text-gradient">in mind?</span>
            </h2>
            <p className="text-muted-foreground">Tell us about the problem. We'll map the architecture.</p>
            <Link to="/contact">
              <Button variant="hero" size="lg" className="gap-2 group mt-4">
                Get in Touch
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  </Layout>
);

export default CapabilitiesPage;
