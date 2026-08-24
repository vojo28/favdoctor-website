interface TrustLogosProps {
  children: React.ReactNode;
}

export function TrustLogos({
  children,
}: TrustLogosProps) {
  return (
    <div className="mt-12">
      <p className="mb-6 text-sm uppercase tracking-[0.25em] text-muted-foreground">
        Trusted by partners and collaborators
      </p>

      <div className="flex flex-wrap items-center gap-10 opacity-70">
        {children}
      </div>
    </div>
  );
}