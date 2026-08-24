import { Button } from "@/components/ui/button";

export function CtaBanner() {
  return (
    <div className="rounded-[2rem] bg-brand-gradient p-12 text-white">

      <h2 className="text-4xl font-bold">
        Ready to strengthen healthcare together?
      </h2>

      <p className="mt-6 max-w-2xl text-white/80">
        Partner with FavDoctor to build
        scalable healthcare systems.
      </p>

      <div className="mt-10 flex gap-4">
        <Button variant="glass">
          Partner With Us
        </Button>

        <Button variant="outline">
          Contact Us
        </Button>
      </div>

    </div>
  );
}