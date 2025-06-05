import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

interface FormSelectProps {
  label: string;
  options: string[];
  value?: string;
  onValueChange?: (value: string) => void;
  placeholder?: string;
  required?: boolean;
  containerClass?: string;
}

export const FormSelect = ({
  label,
  options,
  value,
  onValueChange,
  placeholder = "Select...",
  required = false,
  containerClass,
}: FormSelectProps) => (
  <div className={cn("space-y-2", containerClass)}>
    <Label className="text-lg">
      {label}
      {required && <span className="text-red-500 ml-1">*</span>}
    </Label>
    <Select value={value} onValueChange={onValueChange}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {options.map((option) => (
          <SelectItem key={option} value={option}>
            {option}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  </div>
);