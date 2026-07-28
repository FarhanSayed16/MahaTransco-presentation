import * as React from "react"

export interface ChipProps extends React.HTMLAttributes<HTMLDivElement> {
  active?: boolean
  variant?: "default" | "warn" | "good" | "bad"
}

export const Chip = React.forwardRef<HTMLDivElement, ChipProps>(
  ({ className = "", active = false, variant = "default", ...props }, ref) => {
    const baseStyles = "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold transition-colors border"
    
    const variants = {
      default: active ? "bg-accent text-surface border-accent" : "bg-surface text-ink-muted border-line hover:border-ink-muted",
      warn: "bg-warn-soft text-warn border-warn/20",
      good: "bg-accent-soft text-good border-good/20",
      bad: "bg-warn-soft text-bad border-bad/20",
    }

    return (
      <div
        ref={ref}
        className={`${baseStyles} ${variants[variant]} ${className}`}
        {...props}
      />
    )
  }
)
Chip.displayName = "Chip"
