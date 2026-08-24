import { Container } from "./container";
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionWrapper({
  children,
  className,
}: SectionWrapperProps) {
  return (
    <section className={cn("py-24 lg:py-32", className)}>
      <Container>{children}</Container>
    </section>
  );
}