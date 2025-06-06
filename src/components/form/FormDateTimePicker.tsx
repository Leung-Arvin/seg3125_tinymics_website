import { Label } from "@/components/ui/label";

import { cn } from "@/lib/utils";
import { DatePicker } from "./DatePicker";
import { TimePicker } from "./TimePicker";

interface FormDateTimePickerProps {
  label: string;
  containerClass?: string;
  required?: boolean;
  time: string;
  date?: Date;
  onDateChange: (date?: Date) => void;
  onTimeChange: (time:string) => void;
  className?: string;
}

export const FormDateTimePicker = ({
  label,
  containerClass,
  required = false,
  date,
  onDateChange,
  time,
  onTimeChange
}: FormDateTimePickerProps) => (
  <div className={cn("space-y-2", containerClass)}>
    <Label className="text-lg">
      {label}
      {required && <span className="text-red-500 ml-1">*</span>}
    </Label>
    <div className="flex flex-col sm:flex-row gap-4 w-full">
      <div className="flex-1">
        <DatePicker selected={date} onChange={onDateChange} />
      </div>
      <div className="flex-1">
        <TimePicker value={time} onChange={onTimeChange} />
      </div>
    </div>
  </div>
);
