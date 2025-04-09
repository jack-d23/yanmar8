import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const Edit = () => {
  const [open, setOpen] = useState(false);
  const [hallNumber, setHallNumber] = useState("3");
  const [checkIn, setCheckIn] = useState("10:00 pm");
  const [checkOut, setCheckOut] = useState("11:00 pm");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ hallNumber, checkIn, checkOut });
    setOpen(false);
  };

  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger>
          <Button
            size={"sm"}
            variant={"outline"}
            className={
              "text-xs border-gray-500 cursor-pointer hover:bg-gray-100"
            }
          >
            Edit
          </Button>
        </DialogTrigger>
        <DialogContent className={"max-h-[80vh] overflow-y-auto"}>
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="p-4 space-y-4 text-sm">
            <div className="space-y-2">
              <p className="text-sm font-medium">Visitor Details</p>
              <div className="h-[1px] bg-red-500" />

              <div className="border p-3 rounded space-y-2">
                <p className="text-base font-semibold">Person 1</p>

                <div className="flex gap-2">
                  <div className="flex-1">
                    <label className="block text-xs">First Name</label>
                    <input
                      type="text"
                      value="Alice"
                      readOnly
                      className="border p-1 rounded w-full bg-gray-100 text-gray-600"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block text-xs">Last Name</label>
                    <input
                      type="text"
                      value="Johnson"
                      readOnly
                      className="border p-1 rounded w-full bg-gray-100 text-gray-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs">Email</label>
                  <input
                    type="email"
                    value="alice@example.com"
                    readOnly
                    className="border p-1 rounded w-full bg-gray-100 text-gray-600"
                  />
                </div>

                <div className="flex gap-2">
                  <div className="flex-1">
                    <label className="block text-xs">Phone</label>
                    <input
                      type="tel"
                      value="+919876543210"
                      readOnly
                      className="border p-1 rounded w-full bg-gray-100 text-gray-600"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block text-xs">Organization</label>
                    <input
                      type="text"
                      value="TechCorp"
                      readOnly
                      className="border p-1 rounded w-full bg-gray-100 text-gray-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs">Address</label>
                  <input
                    type="text"
                    value="123 Tech Street, Bangalore"
                    readOnly
                    className="border p-1 rounded w-full bg-gray-100 text-gray-600"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <p className="text-sm font-medium">Device Details</p>
              <div className="h-px bg-red-500" />
              <div className="space-y-2">
                <div className="flex gap-2">
                  <div className="flex-1">
                    <label className="block text-xs">Device Name</label>
                    <input
                      type="text"
                      value="Laptop"
                      readOnly
                      className="border p-1 rounded w-full bg-gray-100 text-gray-600"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block text-xs">Device Model</label>
                    <input
                      type="text"
                      value="Dell XPS 13"
                      readOnly
                      className="border p-1 rounded w-full bg-gray-100 text-gray-600"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs">Device Type</label>
                  <input
                    type="text"
                    value="Laptop"
                    readOnly
                    className="border p-1 rounded w-full bg-gray-100 text-gray-600"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <p className="text-sm font-medium">Vehicle Details</p>
              <div className="h-px bg-red-500" />
              <div className="space-y-2">
                <div className="flex gap-2">
                  <div className="flex-1">
                    <label className="block text-xs">Vehicle Number</label>
                    <input
                      type="text"
                      value="KA01AB1234"
                      readOnly
                      className="border p-1 rounded w-full bg-gray-100 text-gray-600"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block text-xs">Vehicle Model</label>
                    <input
                      type="text"
                      value="Hyundai i20"
                      readOnly
                      className="border p-1 rounded w-full bg-gray-100 text-gray-600"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs">Vehicle Type</label>
                  <input
                    type="text"
                    value="Car"
                    readOnly
                    className="border p-1 rounded w-full bg-gray-100 text-gray-600"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <p className="text-sm font-medium">Other Details</p>
              <div className="h-px bg-red-500" />
              <div className="space-y-2">
                <div className="flex gap-2">
                  <div className="flex-1">
                    <label className="block text-xs">Hall Number</label>
                    <input
                      type="text"
                      value={hallNumber}
                      onChange={(e) => setHallNumber(e.target.value)}
                      className="border p-1 rounded w-full bg-white"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block text-xs">Check In</label>
                    <input
                      type="text"
                      value={checkIn}
                      onChange={(e) => setCheckIn(e.target.value)}
                      className="border p-1 rounded w-full bg-white"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs">Check Out</label>
                  <input
                    type="text"
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    className="border p-1 rounded w-full bg-white"
                  />
                </div>
              </div>
            </div>

            <div className="pt-2">
              <DialogFooter>
                <Button type="submit">Save changes</Button>
              </DialogFooter>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Edit;
