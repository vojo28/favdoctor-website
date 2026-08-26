import Image from "next/image";

import { hero } from "@/data/homepage";

export function HeroImage() {
  return (
    <div className="relative hidden lg:block w-full">
      {/* Ambient glow */}
      <div className="absolute right-8 top-16 h-[520px] w-[520px] rounded-full bg-brand-blue/10 blur-3xl" />

      <div className="relative ml-auto w-full max-w-[760px] overflow-hidden rounded-[36px]">
        <Image
          src={hero.image.src}
          alt={hero.image.alt}
          width={760}
          height={760}
          priority
          quality={85}
          className="h-auto w-full object-contain"
        />
      </div>
    </div>
  );
}