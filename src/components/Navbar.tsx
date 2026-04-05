import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Home", path: "/" },
  { label: "Capabilities", path: "/capabilities" },
  { label: "Work", path: "/work" },
  { label: "Insights", path: "/insights" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-border/40 bg-background/70 backdrop-blur-2xl"
          : "bg-transparent"
      }`}
    >
      <div className="container flex h-18 md:h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="font-display text-xl md:text-2xl font-bold tracking-tighter text-foreground">
            Synex
          </span>
          <span className="font-display text-xl md:text-2xl font-bold tracking-tighter bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent group-hover:from-primary group-hover:to-primary/50 transition-all">
            Innovations
          </span>
          <span className="text-2xl md:text-3xl font-bold text-primary">.</span>
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <Link
              key={l.path}
              to={l.path}
              className={`relative px-4 py-2 text-base font-semibold rounded-lg transition-all duration-300 ${
                location.pathname === l.path
                  ? "text-foreground bg-secondary/50"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary/30"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link to="/contact" className="ml-4">
            <Button variant="hero" size="sm" className="group gap-1.5">
              Start Building
            </Button>
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground p-2 rounded-lg hover:bg-secondary/30 transition-colors"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-out ${
          open ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="border-t border-border/30 bg-background/95 backdrop-blur-2xl">
          <div className="container flex flex-col gap-1 py-4">
            {links.map((l) => (
              <Link
                key={l.path}
                to={l.path}
                className={`px-4 py-3 text-sm rounded-lg transition-colors ${
                  location.pathname === l.path
                    ? "text-foreground bg-secondary/40"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/20"
                }`}
              >
                {l.label}
              </Link>
            ))}
            <Link to="/contact" className="mt-2 px-4">
              <Button variant="hero" size="sm" className="w-full">
                Start Building
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
