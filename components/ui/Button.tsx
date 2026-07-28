import * as React from "react"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "warn"
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "primary", ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent disabled:pointer-events-none disabled:opacity-50 px-4 py-2"
    
    const variants = {
      primary: "bg-accent text-surface hover:bg-accent/90",
      secondary: "bg-surface-muted text-ink hover:bg-line/50",
      ghost: "hover:bg-surface-muted text-ink",
      warn: "bg-warn text-surface hover:bg-warn/90",
    }

    const classes = `${baseStyles} ${variants[variant]} ${className}`

    return (
      <button ref={ref} className={classes} {...props} />
    )
  }
)
Button.displayName = "Button"
