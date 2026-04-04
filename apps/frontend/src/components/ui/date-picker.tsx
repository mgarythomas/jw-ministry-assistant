"use client";

import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export interface DatePickerProps {
  date?: Date;
  defaultDate?: Date;
  onSelect?: (date: Date | undefined) => void;
  className?: string;
  disabled?: boolean;
  icon?: React.ReactNode;
}

export function DatePicker({
  date,
  defaultDate,
  onSelect,
  className,
  disabled,
  icon,
}: DatePickerProps) {
  const [internalDate, setInternalDate] = React.useState<Date | undefined>(
    defaultDate
  );

  const selectedDate = date !== undefined ? date : internalDate;
  const setDate = onSelect || setInternalDate;

  return (
    <Popover>
      <PopoverTrigger>
        <Button
          variant={"outline"}
          disabled={disabled}
          className={cn(
            "w-[280px] justify-start text-left font-normal",
            !selectedDate && "text-muted-foreground",
            className
          )}
        >
          {icon !== undefined ? icon : <CalendarIcon className="mr-3 h-4 w-4" />}
          {selectedDate ? format(selectedDate, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={selectedDate}
          onSelect={setDate}
          initialFocus
          disabled={disabled}
        />
      </PopoverContent>
    </Popover>
  );
}
