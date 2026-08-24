export function HeroBackground() {
  return (
    <>
      <div
        aria-hidden
        className="absolute inset-0 -z-20 bg-gradient-to-br from-white via-brand-surface to-brand-surface-alt"
      />

      <div
        aria-hidden
        className="absolute left-0 top-0 -z-10 h-full w-2/3 bg-gradient-to-r from-white via-white/95 to-transparent"
      />

      <div
        aria-hidden
        className="absolute right-[-10rem] top-24 -z-10 h-[36rem] w-[36rem] rounded-full bg-brand-blue/10 blur-[160px]"
      />

      <div
        aria-hidden
        className="absolute left-[-8rem] bottom-0 -z-10 h-96 w-96 rounded-full bg-brand-red/5 blur-[140px]"
      />
    </>
  );
}
