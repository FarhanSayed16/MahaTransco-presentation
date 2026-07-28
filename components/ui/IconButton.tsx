import * as React from "react"

export interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ className = "", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={`inline-flex items-center justify-center rounded-full p-2 text-ink-muted hover:bg-surface-muted hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent transition-colors ${className}`}
        {...props}
      />
    )
  }
)
IconButton.displayName = "IconButton"
