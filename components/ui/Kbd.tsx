import * as React from "react"

export const Kbd = React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  ({ className = "", ...props }, ref) => {
    return (
      <kbd
        ref={ref}
        className={`inline-flex items-center justify-center rounded bg-surface-muted px-1.5 py-0.5 text-xs font-mono font-medium text-ink-muted border border-line ${className}`}
        {...props}
      />
    )
  }
)
Kbd.displayName = "Kbd"
