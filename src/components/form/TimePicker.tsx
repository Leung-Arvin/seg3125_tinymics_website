"use client";

import { Button} from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import {cn} from "@/lib/utils";
import { useState } from "react";

interface TimePickerProps {
  value?: string;
  onChange: (time:string) => void;
  className?: string;
}

export function TimePicker({value="", onChange, className}: TimePickerProps) {
  const initialTime = value ? value.split(" ") : ["", "AM"];
  const [timeValue, setTimeValue] = useState(initialTime[0]);
  const [period, setPeriod] = useState<"AM" | "PM">(
    initialTime[1] === "PM" ? "PM" : "AM"
  );

  const [TimePickerOpen, setTimePickerOpen] = useState(false);

  const updateTime = (newTime: string, newPeriod: "AM" | "PM") => {
    setTimeValue(newTime);
    setPeriod(newPeriod);
    onChange(`${newTime} ${newPeriod}`);
  };

  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    
    if (val === "") {
      updateTime("", period);
      return;
    }

    let formattedValue = val;
    if (val.length === 3 && !val.includes(":")) {
      formattedValue = `${val.slice(0,1)}:${val.slice(1)}`;
    } else if (val.length === 4 && !val.includes(":")) {
      formattedValue = `${val.slice(0,2)}:${val.slice(2)}`;
    }
    
    const [hours] = formattedValue.split(":");
    if (parseInt(hours) > 12 || parseInt(hours) < 1) return;
    
    updateTime(formattedValue, period);
  }

  const handleBlur = () => {
    if (!timeValue) {
      updateTime("12:00", period);
      return;
    }

    let [hours, minutes = "00"] = timeValue.split(":");
    hours = String(parseInt(hours)).padStart(2, "0");
    minutes = minutes.padEnd(2, "0").slice(0, 2);
    
    updateTime(`${hours}:${minutes}`, period);
  };

  const togglePeriod = () => {
    const newPeriod = period === "AM" ? "PM" : "AM";
    updateTime(timeValue || "12:00", newPeriod);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          handleBlur();
          setTimePickerOpen(false);
        }
  };

  const displayTime = value ? value : timeValue ? `${timeValue} ${period}` : "";
  
  return(
    <Popover open={TimePickerOpen} onOpenChange={setTimePickerOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            "w-full justify-start text-left font-normal text-white border-2",
            !displayTime && " border-2",
            className
          )}
        >
          {displayTime || "Select time"}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-4 bg-[#343435] border-white">
        <div className="flex items-center gap-3">
          {/* Time Input */}
          <Input
            type="text"
            onChange={handleTimeChange}
            onBlur={handleBlur}
            onKeyDown={handleKeyPress}
            placeholder="HH:MM"
            className="w-24 text-center"
            maxLength={5}
          />
        
          <Button
            variant="outline"
            onClick={togglePeriod}
            onChange={handleBlur}
            className="w-16"
          >
            {period}
          </Button>
        </div>
      
      </PopoverContent>
    </Popover>
  )
}