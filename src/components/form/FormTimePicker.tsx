import { Label } from "@/components/ui/label";

import { cn } from "@/lib/utils";
import { TimePicker } from "./TimePicker";

interface FormTimePickerProps {
  label: string;
  containerClass?: string;
  required?: boolean;
  time: string;
  onTimeChange: (time:string) => void;
  className?: string;
}

export const FormTimePicker = ({
  label,
  containerClass,
  required = false,
  time,
  onTimeChange
}: FormTimePickerProps) => (
  <div className={cn("space-y-2", containerClass)}>
    <Label className="text-lg">
      {label}
      {required && <span className="text-red-500 ml-1">*</span>}
    </Label>
    <div className="flex flex-col sm:flex-row gap-4 w-full">
      <div className="flex-1">
        <TimePicker value={time} onChange={onTimeChange} />
      </div>
    </div>
  </div>
);
