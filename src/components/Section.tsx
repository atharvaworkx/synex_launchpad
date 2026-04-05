import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const Section = ({ children, className, id }: SectionProps) => (
  <section id={id} className={cn("py-24 md:py-32", className)}>
    <div className="container">{children}</div>
  </section>
);

export const SectionHeader = ({
  label,
  title,
  description,
  className,
}: {
  label?: string;
  title: string;
  description?: string;
  className?: string;
}) => (
  <div className={cn("max-w-2xl space-y-4", className)}>
    {label && (
      <span className="text-xs font-medium uppercase tracking-widest text-primary">
        {label}
      </span>
    )}
    <h2 className="font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
      {title}
    </h2>
    {description && (
      <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
        {description}
      </p>
    )}
  </div>
);

export default Section;
