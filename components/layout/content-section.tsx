import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { cn } from "@/lib/utils";

interface ContentSectionProps {
  children: React.ReactNode;
  className?: string;
  surface?: "default" | "muted" | "primary";
}

export function ContentSection({
  children,
  className,
  surface = "default",
}: ContentSectionProps) {
  return (
    <Section
      className={cn(
        surface === "muted" && "bg-muted",
        surface === "primary" && "bg-primary text-primary-foreground",
        className
      )}
    >
      <Container>{children}</Container>
    </Section>
  );
}