import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface FormInputProps extends React.ComponentProps<"input"> {
  label: string;
  containerClass?: string;
  required?: boolean;
  type: string;
  className?: string;
}

export const FormInput = ({
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
    <Input className={cn("w-full", className)} {...props} />
  </div>
);