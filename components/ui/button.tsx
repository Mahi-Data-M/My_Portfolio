"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050911] disabled:pointer-events-none disabled:opacity-50 select-none",
  {
    variants: {
      variant: {
        // Primary — cyan gradient fill
        primary:
          "bg-gradient-to-r from-cyan-500 to-sky-500 text-white shadow-cyan-glow-sm hover:shadow-cyan-glow hover:brightness-110 active:scale-95",
        // Secondary — glass outline
        secondary:
          "border border-cyan-border bg-transparent text-cyan-400 hover:bg-cyan-glow hover:border-cyan-400 active:scale-95",
        // Ghost
        ghost:
          "text-text-secondary hover:text-text-primary hover:bg-white/5 active:scale-95",
        // Outline white
        outline:
          "border border-border-subtle text-text-primary hover:border-border-accent hover:bg-white/5 active:scale-95",
        // Violet accent
        violet:
          "bg-gradient-to-r from-violet-600 to-purple-600 text-white hover:brightness-110 active:scale-95",
        // Destructive
        destructive:
          "bg-red-600 text-white hover:bg-red-700 active:scale-95",
      },
      size: {
        sm: "h-8 px-4 text-xs",
        md: "h-10 px-5 text-sm",
        lg: "h-12 px-7 text-base",
        xl: "h-14 px-8 text-base font-semibold",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
