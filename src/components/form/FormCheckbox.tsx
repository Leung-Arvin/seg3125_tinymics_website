import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils";

interface FormCheckboxProps {
  label: string;
  containerClass?: string;
  required?: boolean;
}
export function FormCheckbox(
  {
    label,
    containerClass,
    required = false
  }: FormCheckboxProps
) {
  return (
    <div className={cn("space-y-2", containerClass)}>
      <div className="flex items-center space-x-2">
        <Checkbox required={required} id="terms" />
        <Label className="text-lg" htmlFor="terms">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
        </Label>
      </div>
    </div>
  )
}
