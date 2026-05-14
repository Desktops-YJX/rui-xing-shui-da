import * as React from "react"
import { ArrowRight } from "lucide-react"
import { Button, type ButtonProps } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface ContactButtonProps extends ButtonProps {
  text?: string;
}

export const ContactButton = React.forwardRef<HTMLButtonElement, ContactButtonProps>(
  ({ className, text = "预约咨询", ...props }, ref) => {
    return (
      <Button 
        ref={ref}
        className={cn(
          "bg-brand-red text-white hover:bg-brand-red/90 px-6 py-6 rounded-[16px] text-base group transition-all",
          className
        )}
        {...props}
      >
        {text}
        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </Button>
    )
  }
)
ContactButton.displayName = "ContactButton"
