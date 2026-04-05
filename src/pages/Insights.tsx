import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";
import { ArrowUpRight } from "lucide-react";

const posts = [
  {
    title: "Why most AI projects fail before deployment",
    excerpt: "The gap between a working model and a production system is larger than most teams expect. Here's what we see go wrong — and how to avoid it.",
    date: "Mar 2026",
    category: "Engineering",
    readTime: "6 min",
    featured: true,
  },
  {
    title: "Designing automation that humans trust",
    excerpt: "Automation isn't just about removing steps. It's about building systems that are transparent, predictable, and easy to override when needed.",
    date: "Feb 2026",
    category: "Systems Design",
    readTime: "5 min",
    featured: false,
  },
  {
    title: "The case for boring infrastructure",
    excerpt: "The most reliable systems aren't built with the newest tools. They're built with the right ones.",
    date: "Jan 2026",
    category: "Architecture",
    readTime: "7 min",
    featured: false,
  },
  {
    title: "Multi-agent systems: patterns that work",
    excerpt: "After shipping three multi-agent platforms, here's what we've learned about coordination, failure handling, and keeping humans in the loop.",
    date: "Dec 2025",
    category: "AI Engineering",
    readTime: "8 min",
    featured: false,
  },
];

const InsightsPage = () => (
  <Layout>
    <section className="pt-36 md:pt-48 pb-20">
      <div className="container">
        <Reveal>
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary mb-4 block">Insights</span>
        </Reveal>
        <Reveal delay={100}>
          <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight max-w-3xl leading-[1.05]">
            Thinking in
            <br />
            <span className="text-gradient">public.</span>
          </h1>
        </Reveal>
        <Reveal delay={200}>
          <p className="mt-6 text-muted-foreground max-w-xl text-base md:text-lg leading-relaxed">
            Technical perspectives on systems engineering, automation architecture, and building AI that works in production.
          </p>
        </Reveal>
      </div>
    </section>

    <section className="pb-28 md:pb-36">
      <div className="container">
        {/* Featured post */}
        {posts.filter(p => p.featured).map((post, i) => (
          <Reveal key={post.title}>
            <article className="group cursor-pointer rounded-2xl border border-border/40 bg-card/30 p-10 md:p-14 mb-6 card-hover shine relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <div className="relative z-10 max-w-2xl space-y-6">
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="text-primary font-medium">{post.category}</span>
                  <span className="h-1 w-1 rounded-full bg-border" />
                  <span>{post.date}</span>
                  <span className="h-1 w-1 rounded-full bg-border" />
                  <span>{post.readTime}</span>
                </div>
                <h2 className="font-display text-2xl md:text-3xl font-semibold group-hover:text-primary transition-colors leading-tight">
                  {post.title}
                </h2>
                <p className="text-sm md:text-base leading-relaxed text-muted-foreground">{post.excerpt}</p>
                <span className="inline-flex items-center gap-2 text-sm text-primary">
                  Read article
                  <ArrowUpRight size={14} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </div>
            </article>
          </Reveal>
        ))}

        {/* Other posts */}
        <div className="grid gap-4 md:grid-cols-3">
          {posts.filter(p => !p.featured).map((post, i) => (
            <Reveal key={post.title} delay={i * 80}>
              <article className="group cursor-pointer rounded-2xl border border-border/40 bg-card/30 p-8 space-y-4 card-hover h-full transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="text-primary font-medium">{post.category}</span>
                  <span className="h-1 w-1 rounded-full bg-border" />
                  <span>{post.readTime}</span>
                </div>
                <h3 className="font-display text-lg font-semibold group-hover:text-primary transition-colors leading-snug">
                  {post.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
                <span className="inline-flex items-center gap-2 text-xs text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  Read
                  <ArrowUpRight size={12} />
                </span>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default InsightsPage;
