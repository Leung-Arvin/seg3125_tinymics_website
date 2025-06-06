import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

interface FormTextareaProps extends React.ComponentProps<"textarea"> {
  label: string;
  containerClass?: string;
  className?: string;
  required?: boolean;
}

export const FormTextArea = ({
  label,
  containerClass,
  className,
  required = false,
  ...props
}: FormTextareaProps) => (
  <div className={cn("space-y-2", containerClass)}>
    <Label className="text-lg">
      {label}
      {required && <span className="text-red-500">*</span>}
    </Label>
    <Textarea className={cn("w-full min-h-[120px]", className)} {...props} />
  </div>
);