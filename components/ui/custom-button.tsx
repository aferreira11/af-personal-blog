import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ButtonHTMLAttributes, forwardRef } from "react"

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
  className?: string
  children: React.ReactNode
  asChild?: boolean
}

const CustomButton = forwardRef<HTMLButtonElement, CustomButtonProps>(
  ({ variant = 'primary', className, children, ...props }, ref) => {
    return (
      <Button
        ref={ref}
        className={cn(
          "w-full sm:w-44 h-12 text-base font-medium rounded-md transition-all duration-200",
          variant === 'primary' && "bg-[#004CFF] hover:bg-[#0039CC] text-white shadow-sm",
          variant === 'secondary' && "bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800/70 text-zinc-900 dark:text-white shadow-sm backdrop-blur-sm",
          className
        )}
        {...props}
      >
        {children}
      </Button>
    )
  }
)

CustomButton.displayName = 'CustomButton'

export { CustomButton } 