import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium transition-all duration-200",
  {
    variants: {
      variant: {
        cyan: "bg-cyan-glow border border-cyan-border text-cyan-300",
        violet: "bg-violet-glow border border-[rgba(167,139,250,0.2)] text-violet-300",
        emerald: "bg-emerald-glow border border-[rgba(52,211,153,0.2)] text-emerald-300",
        subtle: "bg-white/5 border border-border-subtle text-text-secondary",
        outline: "border border-border-subtle text-text-secondary",
      },
    },
    defaultVariants: { variant: "subtle" },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
