import {
  Activity,
  Handshake,
  HeartPulse,
  Microscope,
  MonitorSmartphone,
  Users,
} from "lucide-react";

const icons = {
  platform: MonitorSmartphone,
  clinical: HeartPulse,
  research: Microscope,
  partnership: Handshake,
  community: Users,
  analytics: Activity,
};

interface BuildCardProps {
  icon: keyof typeof icons;
  title: string;
  description: string;
}

export function BuildCard({
  icon,
  title,
  description,
}: BuildCardProps) {
  const Icon = icons[icon];

  return (
    <article className="group rounded-3xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/5 text-primary">
        <Icon className="h-8 w-8" />
      </div>

      <h3 className="text-2xl font-semibold tracking-tight">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-muted-foreground">
        {description}
      </p>
    </article>
  );
}