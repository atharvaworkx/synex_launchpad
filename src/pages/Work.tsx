import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Autonomous Ops Platform",
    category: "Automation · Logistics",
    description: "Self-healing infrastructure management system processing 2M+ events daily. Reduced manual intervention by 87% and cut incident response time from hours to seconds.",
    metrics: ["2M+ events/day", "87% less manual work", "< 3s response time"],
    accent: "from-primary/20 to-accent/20",
  },
  {
    title: "AI Document Pipeline",
    category: "AI Infrastructure · Legal",
    description: "Multi-model extraction and classification system for a legal tech firm. Processes contracts, filings, and correspondence with 99.2% accuracy.",
    metrics: ["99.2% accuracy", "94% faster processing", "12 document types"],
    accent: "from-accent/20 to-primary/20",
  },
  {
    title: "Real-time Analytics Engine",
    category: "Custom Systems · FinTech",
    description: "Sub-second analytics dashboard serving 50K concurrent users across 3 regions with zero-downtime deployments.",
    metrics: ["50K concurrent users", "< 200ms latency", "99.99% uptime"],
    accent: "from-primary/20 to-primary/10",
  },
  {
    title: "Multi-Agent Coordination System",
    category: "AI Agents · Enterprise",
    description: "Autonomous agent framework for enterprise workflow management. Agents handle approvals, data validation, and cross-system synchronization.",
    metrics: ["15 agent types", "3M tasks/month", "40% cost reduction"],
    accent: "from-accent/10 to-primary/20",
  },
];

const WorkPage = () => (
  <Layout>
    <section className="pt-36 md:pt-48 pb-20">
      <div className="container">
        <Reveal>
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary mb-4 block">Work</span>
        </Reveal>
        <Reveal delay={100}>
          <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight max-w-3xl leading-[1.05]">
            Systems in
            <br />
            <span className="text-gradient">production.</span>
          </h1>
        </Reveal>
        <Reveal delay={200}>
          <p className="mt-6 text-muted-foreground max-w-xl text-base md:text-lg leading-relaxed">
            Real systems solving real problems at scale. A selection of platforms we've architected, built, and shipped.
          </p>
        </Reveal>
      </div>
    </section>

    <section className="pb-28 md:pb-36">
      <div className="container space-y-6">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={i * 80}>
            <div className="group rounded-2xl border border-border/40 bg-card/30 overflow-hidden card-hover transition-all duration-300 hover:scale-105 hover:shadow-lg">
              {/* Top accent gradient bar */}
              <div className={`h-1 w-full bg-gradient-to-r ${p.accent}`} />
              <div className="p-8 md:p-10">
                <div className="grid md:grid-cols-12 gap-8 items-start">
                  <div className="md:col-span-8 space-y-4">
                    <span className="text-xs font-medium uppercase tracking-wider text-primary">{p.category}</span>
                    <h3 className="font-display text-xl md:text-2xl font-semibold group-hover:text-primary transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground max-w-xl">{p.description}</p>
                  </div>
                  <div className="md:col-span-4">
                    <div className="flex flex-wrap gap-2">
                      {p.metrics.map((m) => (
                        <span
                          key={m}
                          className="rounded-full border border-border/40 bg-secondary/20 px-4 py-1.5 text-xs text-muted-foreground font-medium"
                        >
                          {m}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>

    <section className="py-28 md:py-36 bg-noise relative">
      <div className="container relative z-10">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center space-y-8">
            <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight">
              Your system could <span className="text-gradient">be next.</span>
            </h2>
            <p className="text-muted-foreground">We take on a limited number of projects to ensure depth and quality.</p>
            <Link to="/contact">
              <Button variant="hero" size="lg" className="gap-2 group mt-4">
                Start a Project
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  </Layout>
);

export default WorkPage;
