"use client"

import * as React from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"

interface FormFileInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  description?: string
}

const FormFileInput = React.forwardRef<HTMLInputElement, FormFileInputProps>(
  ({ className, label, description, id, ...props }, ref) => {
    return (
      <div className="grid w-full items-center gap-1.5">
        {label && <Label className="text-lg" htmlFor={id}>{label}</Label>}
        <div className="relative">
          <Input 
            id={id}
            type="file" 
            ref={ref}
            className={cn(
              "file:border-0 file:rounded-md file:px-4 file:py-2 file:mr-4 ",
              "hover:file:bg-[#343435]/90",
              "cursor-pointer h-20 border-white dark:border-gray-700 md:pt-5 md:pl-45 ", 
              className
            )}
            {...props}
          />

         
        </div>
        
        {description && (
          <p className=" text-gray-400">{description}</p>
        )}
      </div>
    )
  }
)

FormFileInput.displayName = "FormFileInput"

export { FormFileInput }