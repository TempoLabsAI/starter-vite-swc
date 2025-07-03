import React from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { CalendarIcon } from "lucide-react";

interface AttendanceSelectorProps {
  value?: string;
  onChange?: (value: string) => void;
}

const AttendanceSelector = ({
  value = "both",
  onChange,
}: AttendanceSelectorProps) => {
  const handleValueChange = (newValue: string) => {
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <div className="w-full bg-white p-4 rounded-lg">
      <h3 className="text-lg font-medium mb-3 text-center">
        Which ceremony will you attend?
      </h3>

      <RadioGroup
        value={value}
        onValueChange={handleValueChange}
        className="flex flex-col space-y-3 md:flex-row md:space-y-0 md:space-x-3 md:justify-between"
      >
        <div className="flex-1">
          <RadioGroupItem value="bride" id="bride" className="peer sr-only" />
          <Label
            htmlFor="bride"
            className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer"
          >
            <div className="mb-2 rounded-full bg-primary/10 p-2 text-primary">
              <CalendarIcon className="h-5 w-5" />
            </div>
            <div className="text-center">
              <p className="font-medium">Bride's Home</p>
              <p className="text-sm text-muted-foreground">October 11, 2025</p>
            </div>
          </Label>
        </div>

        <div className="flex-1">
          <RadioGroupItem value="groom" id="groom" className="peer sr-only" />
          <Label
            htmlFor="groom"
            className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer"
          >
            <div className="mb-2 rounded-full bg-primary/10 p-2 text-primary">
              <CalendarIcon className="h-5 w-5" />
            </div>
            <div className="text-center">
              <p className="font-medium">Groom's Home</p>
              <p className="text-sm text-muted-foreground">October 12, 2025</p>
            </div>
          </Label>
        </div>

        <div className="flex-1">
          <RadioGroupItem value="both" id="both" className="peer sr-only" />
          <Label
            htmlFor="both"
            className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer"
          >
            <div className="mb-2 rounded-full bg-primary/10 p-2 text-primary">
              <CalendarIcon className="h-5 w-5" />
            </div>
            <div className="text-center">
              <p className="font-medium">Both Events</p>
              <p className="text-sm text-muted-foreground">
                October 11-12, 2025
              </p>
            </div>
          </Label>
        </div>
      </RadioGroup>
    </div>
  );
};

export default AttendanceSelector;
