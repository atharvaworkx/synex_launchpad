import { useState } from "react";
import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, Mail, MapPin, CheckCircle2, AlertCircle } from "lucide-react";

const API_BASE_URL = "https://synex-launchpad-backend.onrender.com/api/contact";

interface FormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

interface FormErrors {
  [key: string]: string[];
}

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: [],
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setErrors({});

    try {
      const response = await fetch(`${API_BASE_URL}/submit/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      let data;
      try {
        data = await response.json();
      } catch (parseError) {
        console.error("Failed to parse JSON response:", await response.text());
        setError("Server returned an invalid response. Check backend logs.");
        setLoading(false);
        return;
      }

      if (response.ok && data.success) {
        setSubmitted(true);
        setFormData({
          name: "",
          email: "",
          company: "",
          message: "",
        });
      } else {
        // Handle validation errors
        if (data.errors) {
          setErrors(data.errors);
        }
        setError(data.message || "Failed to submit form. Please try again.");
      }
    } catch (err) {
      setError(
        "Network error. Please check your connection and try again."
      );
      console.error("Error submitting form:", err);
    } finally {
      setLoading(false);
    }
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
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setSubmitted(false)}
                      className="mt-4"
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {error && (
                      <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-4 flex gap-3">
                        <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm text-red-600 font-medium">Error</p>
                          <p className="text-sm text-red-500">{error}</p>
                        </div>
                      </div>
                    )}

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <label className="text-sm text-muted-foreground">
                          Name <span className="text-red-500">*</span>
                        </label>
                        <Input
                          name="name"
                          required
                          placeholder="Your name"
                          value={formData.name}
                          onChange={handleChange}
                          disabled={loading}
                          className={`bg-card/40 border-border/40 h-12 rounded-xl focus:border-primary/40 transition-colors ${
                            errors.name ? "border-red-500" : ""
                          }`}
                        />
                        {errors.name && (
                          <p className="text-xs text-red-500">{errors.name[0]}</p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm text-muted-foreground">
                          Email <span className="text-red-500">*</span>
                        </label>
                        <Input
                          name="email"
                          required
                          type="email"
                          placeholder="you@company.com"
                          value={formData.email}
                          onChange={handleChange}
                          disabled={loading}
                          className={`bg-card/40 border-border/40 h-12 rounded-xl focus:border-primary/40 transition-colors ${
                            errors.email ? "border-red-500" : ""
                          }`}
                        />
                        {errors.email && (
                          <p className="text-xs text-red-500">{errors.email[0]}</p>
                        )}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm text-muted-foreground">Company</label>
                      <Input
                        name="company"
                        placeholder="Company name"
                        value={formData.company}
                        onChange={handleChange}
                        disabled={loading}
                        className="bg-card/40 border-border/40 h-12 rounded-xl focus:border-primary/40 transition-colors"
                      />
                      {errors.company && (
                        <p className="text-xs text-red-500">{errors.company[0]}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm text-muted-foreground">
                        Tell us about the project <span className="text-red-500">*</span>
                      </label>
                      <Textarea
                        name="message"
                        required
                        rows={6}
                        placeholder="What are you building? What problem are you solving?"
                        value={formData.message}
                        onChange={handleChange}
                        disabled={loading}
                        className={`bg-card/40 border-border/40 rounded-xl resize-none focus:border-primary/40 transition-colors ${
                          errors.message ? "border-red-500" : ""
                        }`}
                      />
                      {errors.message && (
                        <p className="text-xs text-red-500">{errors.message[0]}</p>
                      )}
                    </div>

                    <Button
                      variant="hero"
                      size="lg"
                      type="submit"
                      disabled={loading}
                      className="gap-2 group"
                    >
                      {loading ? "Sending..." : "Send Message"}
                      <ArrowRight
                        size={16}
                        className="transition-transform group-hover:translate-x-1"
                      />
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
                      <span className="text-sm text-muted-foreground">synexinnovation@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
                        <MapPin className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-sm text-muted-foreground"> Pune, Maharashtra, India</span>
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
