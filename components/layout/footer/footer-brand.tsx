import { footer } from "@/data/footer";
import { Logo } from "@/components/layout/logo";

export function FooterBrand() {
  return (
    <div className="max-w-md text-center lg:text-left">
      <Logo className="-mt-1 mx-auto block w-[140px] lg:mx-0" />

      <p className="mt-2 max-w-sm text-base leading-7 text-muted-foreground">
        {footer.description}
      </p>
    </div>
  );
}