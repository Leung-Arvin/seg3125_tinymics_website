import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface FormInputProps extends React.ComponentProps<"input"> {
  id?: string;
  label: string;
  containerClass?: string;
  required?: boolean;
  type: string;
  className?: string;
}

export const FormInput = ({
  id,
  label,
  containerClass,
  required = false,
  className,
  ...props
}: FormInputProps) => (
  <div className={cn("space-y-2", containerClass)}>
    <Label className="text-lg">
      {label}
      {required && <span className="text-red-500 ml-1">*</span>}
      </Label>
    <Input id={id} className={cn("w-full", className)} {...props} required={required}/>
  </div>
);