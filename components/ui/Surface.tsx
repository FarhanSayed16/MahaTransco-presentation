import * as React from "react"

export const Surface = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className = "", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`bg-surface rounded-xl border border-line shadow-sm overflow-hidden ${className}`}
        {...props}
      />
    )
  }
)
Surface.displayName = "Surface"
