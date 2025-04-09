import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

import { Check, X } from "lucide-react";
import View from "@/components/View";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import Edit from "./Edit";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

const Visitors = () => {
  const details = [
    {
      guest: "Alice",
      Host: "David",
      type: "meeting",
      checkin: "9:00 AM",
      checkout: "10:00 AM",
      accepted: false,
      rejected: false,
    },
    {
      guest: "Brian",
      Host: "Emily",
      type: "customer visit",
      checkin: "11:30 AM",
      checkout: "12:30 PM",
      accepted: false,
      rejected: false,
    },
    {
      guest: "Carla",
      Host: "James",
      type: "client",
      checkin: "2:00 PM",
      checkout: "3:00 PM",
      accepted: false,
      rejected: false,
    },
    {
      guest: "Alice",
      Host: "David",
      type: "meeting",
      checkin: "9:00 AM",
      checkout: "10:00 AM",
      accepted: false,
      rejected: false,
    },
    {
      guest: "Brian",
      Host: "Emily",
      type: "customer visit",
      checkin: "11:30 AM",
      checkout: "12:30 PM",
      accepted: false,
      rejected: false,
    },
    {
      guest: "Carla",
      Host: "James",
      type: "client",
      checkin: "2:00 PM",
      checkout: "3:00 PM",
      accepted: false,
      rejected: false,
    },
    {
      guest: "Alice",
      Host: "David",
      type: "meeting",
      checkin: "9:00 AM",
      checkout: "10:00 AM",
      accepted: false,
      rejected: false,
    },
    {
      guest: "Brian",
      Host: "Emily",
      type: "customer visit",
      checkin: "11:30 AM",
      checkout: "12:30 PM",
      accepted: false,
      rejected: false,
    },
    {
      guest: "Carla",
      Host: "James",
      type: "client",
      checkin: "2:00 PM",
      checkout: "3:00 PM",
      accepted: false,
      rejected: false,
    },
    {
      guest: "Alice",
      Host: "David",
      type: "meeting",
      checkin: "9:00 AM",
      checkout: "10:00 AM",
      accepted: false,
      rejected: false,
    },
    {
      guest: "Brian",
      Host: "Emily",
      type: "customer visit",
      checkin: "11:30 AM",
      checkout: "12:30 PM",
      accepted: false,
      rejected: false,
    },
    {
      guest: "Carla",
      Host: "James",
      type: "client",
      checkin: "2:00 PM",
      checkout: "3:00 PM",
      accepted: false,
      rejected: false,
    },
  ];

  const [open, setOpen] = useState(false);

  const [accepted, setAccepted] = useState(details);
  const [reason, setReason] = useState("");

  const accept = (index) => {
    const newDetails = [...accepted];
    newDetails[index].accepted = true;
    setAccepted(newDetails);
  };

  const reject = (index) => {
    const newDetails = [...accepted];
    newDetails[index].rejected = true;
    setAccepted(newDetails);
  };
  return (
    <Table className={"text-left mt-5 border shadow-xs"}>
      <TableHeader className={"bg-gray-100"}>
        <TableRow>
          <TableHead>Visitor</TableHead>
          <TableHead>Host</TableHead>
          <TableHead>Visit Type</TableHead>
          <TableHead>Check In</TableHead>
          <TableHead>Check Out</TableHead>
          <TableHead></TableHead>
          <TableHead></TableHead>
          <TableHead></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {accepted.map((v, i) => (
          <TableRow
            key={`${v.guest}-${i}`}
            className={`${v.rejected ? "line-through text-gray-400" : ""}`}
          >
            <TableCell className="font-medium">{v.guest}</TableCell>
            <TableCell>{v.Host}</TableCell>
            <TableCell>{v.type}</TableCell>
            <TableCell>{v.checkin}</TableCell>
            <TableCell>{v.checkout}</TableCell>

            <TableCell className={"px-0 text-center"}>
              {v.accepted ? (
                <div>
                  <View />
                </div>
              ) : (
                <Dialog>
                  <DialogTrigger>
                    <Button
                      variant="outline"
                      className={
                        "text-xs border-green-400 cursor-pointer hover:bg-green-100"
                      }
                    >
                      <Check />
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Accept</DialogTitle>
                      <div className="h-[1px] bg-red-500" />
                    </DialogHeader>
                    <div>
                      <div>
                        <label className="text-xs">Meeting Hall</label>
                        <Input className={"w-[300px]"} />
                      </div>
                      <div>
                        <label className="text-xs">
                          If you any Instructions for visitors ..Note its below{" "}
                        </label>
                        <Textarea />
                      </div>
                    </div>
                    <DialogFooter>
                      <Button
                        onClick={() => accept(i)}
                        className={"cursor-pointer bg-green-500"}
                      >
                        Accept
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              )}
            </TableCell>
            <TableCell className={"px-0 text-center"}></TableCell>
            <TableCell className={"px-0 text-center"}>
              {v.accepted ? (
                <Edit />
              ) : (
                <Dialog open={open} onOpenChange={setOpen}>
                  <DialogTrigger>
                    <Button
                      variant="outline"
                      className={
                        "text-xs border-red-400 cursor-pointer hover:bg-red-100"
                      }
                    >
                      <X />
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Reject the application</DialogTitle>
                      <div className="h-[1px] mt-2 bg-red-500" />
                    </DialogHeader>
                    <div>
                      <div>
                        <label className="text-xs">
                          Reason for the rejection:
                        </label>
                        <div className="flex flex-col gap-4">
                          <Select onValueChange={(value) => setReason(value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select the type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="duration">
                                Is the duration not suitable?
                              </SelectItem>
                              <SelectItem value="date">
                                Is the day of meeting not suitable?
                              </SelectItem>
                              <SelectItem value="room">
                                Is the meeting room not available?
                              </SelectItem>
                              <SelectItem value="others">Others</SelectItem>
                            </SelectContent>
                          </Select>

                          {reason === "duration" && (
                            <div className="flex flex-col gap-4">
                              <label className="text-xs">
                                {" "}
                                Update the timing :
                              </label>
                              <Input
                                placeholder="Check In Time"
                                className="w-[150px]"
                              />
                              <Input
                                placeholder="Check Out Time"
                                className="w-[150px]"
                              />
                            </div>
                          )}

                          {reason === "room" && (
                            <div>
                              <label className="text-xs">
                                {" "}
                                Updated Meeting Room :
                              </label>
                              <Input
                                placeholder="Meeting Room"
                                className="w-[250px]"
                              />
                            </div>
                          )}
                          {reason === "date" && (
                            <div>
                              <label className="text-xs">
                                {" "}
                                Enter the Modified date:
                              </label>
                              <Input
                                placeholder="Meeting Room"
                                className="w-[250px]"
                              />
                            </div>
                          )}

                          {reason === "others" && (
                            <Textarea
                              placeholder="Enter your reason here"
                              className="w-full min-h-[100px]"
                            />
                          )}
                        </div>
                      </div>
                    </div>
                    <DialogFooter>
                      <Button
                        onClick={() => reject(i)}
                        className={"bg-red-500 cursor-pointer"}
                      >
                        Submit
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              )}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default Visitors;
