import * as React from "react"

export const Divider = React.forwardRef<HTMLHRElement, React.HTMLAttributes<HTMLHRElement>>(
  ({ className = "", ...props }, ref) => {
    return (
      <hr
        ref={ref}
        className={`border-t border-line w-full my-4 ${className}`}
        {...props}
      />
    )
  }
)
Divider.displayName = "Divider"
