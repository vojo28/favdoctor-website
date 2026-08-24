import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group/button inline-flex items-center justify-center rounded-lg font-medium whitespace-nowrap transition-all duration-200 outline-none disabled:pointer-events-none disabled:opacity-50 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 active:scale-[0.98] [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-sm hover:brightness-110 active:brightness-95",

        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:brightness-105 active:brightness-95",

        outline:
          "border border-border bg-background text-foreground hover:bg-muted",

        ghost:
          "hover:bg-muted hover:text-foreground",

        destructive:
          "bg-destructive text-white hover:brightness-110",

        link:
          "text-primary underline-offset-4 transition-colors hover:text-secondary hover:underline",

        accent:
          "bg-accent text-accent-foreground shadow-sm hover:brightness-110",

        glass:
          "border border-white/20 bg-white/10 text-white backdrop-blur-xl hover:bg-white/20",
      },

      size: {
        xs: "h-8 px-3 text-xs",

        sm: "h-9 px-4 text-sm",

        default: "h-11 px-6 text-sm",

        lg: "h-12 px-8 text-base",

        xl: "h-14 px-10 text-base font-semibold",

        pill: "h-11 rounded-full px-8 text-sm font-medium",

        icon: "size-11",

        "icon-xs": "size-8",

        "icon-sm": "size-9",

        "icon-lg": "size-12",
      },
    },

    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}

export { Button, buttonVariants };