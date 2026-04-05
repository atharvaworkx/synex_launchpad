import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border/30 bg-card/20">
    <div className="container py-20">
      <div className="grid gap-12 md:grid-cols-12">
        {/* Brand */}
        <div className="md:col-span-5 space-y-6">
          <span className="font-display text-2xl font-bold text-foreground">
            Synex Innovations<span className="text-primary">.</span>
          </span>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
            Systems engineering for the automation era. We build what runs behind the product.
          </p>
          <p className="text-xs text-muted-foreground/60 italic">Automate What Matters</p>
        </div>

        {/* Nav */}
        <div className="md:col-span-2 space-y-4">
          <h4 className="text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">Navigate</h4>
          <div className="flex flex-col gap-3">
            {["Home", "Capabilities", "Work", "Insights", "Contact"].map((l) => (
              <Link
                key={l}
                to={l === "Home" ? "/" : `/${l.toLowerCase()}`}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors w-fit"
              >
                {l}
              </Link>
            ))}
          </div>
        </div>

        {/* Services */}
        <div className="md:col-span-3 space-y-4">
          <h4 className="text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">Capabilities</h4>
          <div className="flex flex-col gap-3">
            {["Intelligent Automation", "AI Infrastructure", "Custom Systems", "SaaS Platforms"].map((c) => (
              <span key={c} className="text-sm text-muted-foreground">{c}</span>
            ))}
          </div>
        </div>

        {/* Connect */}
        <div className="md:col-span-2 space-y-4">
          <h4 className="text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">Connect</h4>
          <div className="flex flex-col gap-3">
            {[
              { label: "Email", href: "mailto:synexinnovation@gmail.com" },
              { label: "LinkedIn", href: "https://www.linkedin.com/in/synex-innovations-212a62400" },
              { label: "Instagram", href: "https://www.instagram.com/synexinnovations?igsh=MTNraWQ4dTltZGdybA==" },
              { label: "Twitter / X", href: "#" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors w-fit group"
              >
                {link.label}
                <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-20 flex flex-col items-center justify-between gap-4 border-t border-border/30 pt-8 md:flex-row">
        <p className="text-xs text-muted-foreground/50">© 2026 Synex Innovations. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <a href="#" className="text-xs text-muted-foreground/50 hover:text-muted-foreground transition-colors">Privacy</a>
          <a href="#" className="text-xs text-muted-foreground/50 hover:text-muted-foreground transition-colors">Terms</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
