import { ReactNode } from "react";

interface IconContainerProps {
  children: ReactNode;
}

export function IconContainer({
  children,
}: IconContainerProps) {
  return (
    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary/10 text-secondary">
      {children}
    </div>
  );
}