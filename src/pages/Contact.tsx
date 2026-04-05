import { useState } from "react";
import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, Mail, MapPin, CheckCircle2 } from "lucide-react";

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Layout>
      <section className="pt-36 md:pt-48 pb-20">
        <div className="container">
          <Reveal>
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary mb-4 block">Contact</span>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight max-w-3xl leading-[1.05]">
              Let's build
              <br />
              <span className="text-gradient">together.</span>
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 text-muted-foreground max-w-xl text-base md:text-lg leading-relaxed">
              Tell us about your system, your constraints, and where you want to go.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-28 md:pb-36">
        <div className="container">
          <div className="grid gap-12 lg:gap-20 md:grid-cols-12">
            <div className="md:col-span-7">
              <Reveal>
                {submitted ? (
                  <div className="rounded-2xl border border-primary/20 bg-primary/5 p-10 space-y-4">
                    <CheckCircle2 className="h-8 w-8 text-primary" />
                    <h3 className="font-display text-xl font-semibold">Message received</h3>
                    <p className="text-sm text-muted-foreground">We'll review your inquiry and respond within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <label className="text-sm text-muted-foreground">Name</label>
                        <Input
                          required
                          placeholder="Your name"
                          className="bg-card/40 border-border/40 h-12 rounded-xl focus:border-primary/40 transition-colors"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm text-muted-foreground">Email</label>
                        <Input
                          required
                          type="email"
                          placeholder="you@company.com"
                          className="bg-card/40 border-border/40 h-12 rounded-xl focus:border-primary/40 transition-colors"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm text-muted-foreground">Company</label>
                      <Input
                        placeholder="Company name"
                        className="bg-card/40 border-border/40 h-12 rounded-xl focus:border-primary/40 transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm text-muted-foreground">Tell us about the project</label>
                      <Textarea
                        required
                        rows={6}
                        placeholder="What are you building? What problem are you solving?"
                        className="bg-card/40 border-border/40 rounded-xl resize-none focus:border-primary/40 transition-colors"
                      />
                    </div>
                    <Button variant="hero" size="lg" type="submit" className="gap-2 group">
                      Send Message
                      <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                    </Button>
                  </form>
                )}
              </Reveal>
            </div>

            <div className="md:col-span-5 space-y-8">
              <Reveal delay={200}>
                <div className="space-y-6">
                  <h3 className="text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">Direct contact</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Mail className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-sm text-muted-foreground">hello@synexinnovations.com</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
                        <MapPin className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-sm text-muted-foreground">Remote-first · Global</span>
                    </div>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={300}>
                <div className="rounded-2xl border border-border/40 bg-card/30 p-8 space-y-6">
                  <h4 className="text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">What to expect</h4>
                  <div className="space-y-4">
                    {[
                      { step: "01", text: "Response within 24 hours" },
                      { step: "02", text: "30-minute discovery call" },
                      { step: "03", text: "Architecture proposal within 1 week" },
                      { step: "04", text: "No obligation, no sales pitch" },
                    ].map((item) => (
                      <div key={item.step} className="flex items-start gap-4">
                        <span className="font-display text-sm font-bold text-primary/30">{item.step}</span>
                        <span className="text-sm text-muted-foreground">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
