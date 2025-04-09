import React, { useState } from "react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "./ui/dialog";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Calendar } from "./ui/calendar";
import { Link } from "react-router-dom";
import Visitors from "./Visitors";

const VisitorDetails = () => {
  const [date, setDate] = useState(null);
  return (
    <div>
      <div className="flex items-center w-[70rem] justify-between">
        <h1 className="font-medium text-3xl">Visitor Appoinments</h1>
        <div className="flex items-end">
          <Dialog>
            <DialogTrigger>
              <Button
                className={" cursor-pointer bg-red-500 rounded-full text-xs"}
                size={"sm"}
              >
                Create
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <h1 className="font-semibold">Appoinment Request</h1>
              </DialogHeader>
              <div className="py-5 px-2 border mt-2">
                <div className="flex flex-col gap- px-4">
                  <div>
                    <label className="text-xs my-2 mx-1">Type</label>
                    <Select>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select the type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="guest">Guest</SelectItem>
                        <SelectItem value="client">Client</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="text-xs my-2 mx-1">Duration</label>
                    <Select>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select duration" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 hrs</SelectItem>
                        <SelectItem value="2">2 hrs</SelectItem>
                        <SelectItem value="3">3+ hrs</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <p className="text-xs my-2 mx-1">Date</p>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-[240px] justify-start text-left font-normal",
                            !date && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon />
                          {date ? (
                            format(date, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>
                <div className="px-4 py-5 flex">
                  <div>
                    <label className="text-xs my-2 mx-1">Visitor's Email</label>
                    <Input
                      type={"email"}
                      placeholder="Enter Email"
                      className="w-[400px]"
                    />
                  </div>
                </div>
                <div className="px-4">
                  <label className="text-xs my-2 mx-1">Visitor's Purpose</label>
                  <Textarea placeholder="Enter the purpose briefly..." />
                </div>
              </div>
              <DialogFooter>
                <Link to="/visitor/form">
                  <Button
                    type="submit"
                    className="text-sm cursor-pointer ml-auto"
                  >
                    Send Request
                  </Button>
                </Link>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <div className="h-[1px] mt-2  bg-red-500"></div>
      <div>
        <Visitors />
      </div>
    </div>
  );
};

export default VisitorDetails;
