"use client"
 
import * as React from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
 
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
 
interface DatePickerProps {
  selected?: Date
  onChange: (date?: Date) => void
}
export function DatePicker(
  {selected,
  onChange}: DatePickerProps
) {
 
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"calendar"}
          className={cn(
            "w-full justify-start text-left font-normal",
            !selected && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4 text-white" />
          {selected ? format(selected, "PPP") : <span className="text-white">Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0 text-white">
        <Calendar
          mode="single"
          selected={selected}
          onSelect={onChange}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  )
}