import {
  Baby,
  Building2,
  Heart,
  MessageSquare,
  Microscope,
  MonitorSmartphone,
  Pill,
  ShieldCheck,
  UserRoundCheck,
  Users,
} from "lucide-react";

const icons = {
  baby: Baby,
  monitor: MonitorSmartphone,
  heart: Heart,
  message: MessageSquare,
  pill: Pill,
  users: Users,
  shield: ShieldCheck,
  "user-check": UserRoundCheck,
  microscope: Microscope,
  building: Building2,
};

interface ImpactCardProps {
  icon: keyof typeof icons;
  title: string;
}

export function ImpactCard({
  icon,
  title,
}: ImpactCardProps) {
  const Icon = icons[icon];

  return (
    <article className="rounded-2xl border border-border bg-background p-6 text-center transition-colors hover:border-primary/30">
      <div className="mb-5 flex justify-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/5 text-primary">
          <Icon className="h-7 w-7" />
        </div>
      </div>

      <h3 className="text-base font-semibold leading-snug">
        {title}
      </h3>
    </article>
  );
}