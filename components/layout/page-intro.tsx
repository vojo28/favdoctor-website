import { cn } from "@/lib/utils";

interface PageIntroProps {
  title: string;
  description: string;
  centered?: boolean;
}

export function PageIntro({
  title,
  description,
  centered = false,
}: PageIntroProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        centered && "mx-auto text-center"
      )}
    >
      <h2 className="text-4xl font-bold tracking-tight lg:text-5xl">
        {title}
      </h2>

      <p className="mt-6 text-lg leading-8 text-muted-foreground">
        {description}
      </p>
    </div>
  );
}