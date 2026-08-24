import { Container } from "@/components/layout/container";

interface PageHeaderProps {
  title: string;
  description: string;
}

export function PageHeader({
  title,
  description,
}: PageHeaderProps) {
  return (
    <section className="border-b bg-background py-24">
      <Container>
        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold tracking-tight">
            {title}
          </h1>

          <p className="mt-6 text-xl leading-8 text-muted-foreground">
            {description}
          </p>
        </div>
      </Container>
    </section>
  );
}