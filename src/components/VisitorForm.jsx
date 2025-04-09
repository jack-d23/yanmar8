import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Delete, Trash2 } from "lucide-react";

const VisitorForm = () => {
  const [visitors, setVisitors] = useState([
    {
      firstName: "",
      lastName: "",
      email: "",
      phone: "+91",
      organization: "",
      address: "",
      photo: null,
    },
  ]);

  const [devices, setDevices] = useState([{ name: "", model: "", type: "" }]);
  const [vehicles, setVehicles] = useState([
    { number: "", model: "", type: "" },
  ]);

  const addVisitor = () => {
    setVisitors([
      ...visitors,
      { firstName: "", lastName: "", email: "", phone: "+91", photo: null },
    ]);
  };

  const removeVisitor = (index) => {
    if (visitors.length > 1) {
      setVisitors(visitors.filter((_, i) => i !== index));
    }
  };

  const addDevice = () => {
    setDevices([...devices, { name: "", model: "", type: "" }]);
  };

  const removeDevice = (index) => {
    if (devices.length > 1) {
      setDevices(devices.filter((_, i) => i !== index));
    }
  };

  const addVehicle = () => {
    setVehicles([...vehicles, { number: "", model: "", type: "" }]);
  };

  const removeVehicle = (index) => {
    if (vehicles.length > 1) {
      setVehicles(vehicles.filter((_, i) => i !== index));
    }
  };

  const handleChange = (index, field, value, type) => {
    if (type === "visitor") {
      const updatedVisitors = [...visitors];
      updatedVisitors[index][field] = value;
      setVisitors(updatedVisitors);
    } else if (type === "device") {
      const updatedDevices = [...devices];
      updatedDevices[index][field] = value;
      setDevices(updatedDevices);
    } else if (type === "vehicle") {
      const updatedVehicles = [...vehicles];
      updatedVehicles[index][field] = value;
      setVehicles(updatedVehicles);
    }
  };

  return (
    <div className=" p-5 my-[2rem] mx-[25rem] border shadow">
      <p className="text-3xl text-center font-medium m-2">Visitor Form</p>
      <div className="h-[1px] bg-black/50"></div>

      <div className="space-y-5">
        <div className="p-3 my-5 shadow rounded-sm border ">
          <div className="flex justify-between">
            <p className="text-sm font-medium my-2">Visitor Details</p>
            <Button
              size="sm"
              className="rounded-full bg-red-500"
              onClick={addVisitor}
            >
              Add
            </Button>
          </div>
          <div className="h-[0.5px] bg-red-500"></div>

          {visitors.map((visitor, index) => (
            <div
              key={index}
              className="mt-6 border p-4 rounded-lg relative space-y-4"
            >
              <p className="text-lg font-semibold">Person {index + 1}</p>

              {visitors.length > 1 && (
                <Button
                  size="sm"
                  className="absolute top-2 right-2 bg-red-500 rounded-full text-xs"
                  onClick={() => removeVisitor(index)}
                >
                  <Trash2 />
                </Button>
              )}

              <div className="flex flex-wrap gap-4">
                <div className="flex-1">
                  <label className="text-xs">First Name</label>
                  <Input
                    type="text"
                    value={visitor.firstName}
                    onChange={(e) =>
                      handleChange(
                        index,
                        "firstName",
                        e.target.value,
                        "visitor"
                      )
                    }
                  />
                </div>
                <div className="flex-1">
                  <label className="text-xs">Last Name</label>
                  <Input
                    type="text"
                    value={visitor.lastName}
                    onChange={(e) =>
                      handleChange(index, "lastName", e.target.value, "visitor")
                    }
                  />
                </div>
                <div className="flex-1">
                  <label className="text-xs">Email address</label>
                  <Input
                    type="email"
                    value={visitor.email}
                    onChange={(e) =>
                      handleChange(index, "email", e.target.value, "visitor")
                    }
                  />
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <div className="flex-1">
                  <label className="text-xs">Phone Number</label>
                  <Input
                    type="tel"
                    value={visitor.phone}
                    onChange={(e) =>
                      handleChange(index, "phone", e.target.value, "visitor")
                    }
                    placeholder="+91XXXXXXXXXX"
                  />
                </div>

                {index === 0 && (
                  <>
                    <div className="flex-1">
                      <label className="text-xs">Organization Name</label>
                      <Input
                        type="text"
                        value={visitor.organization}
                        onChange={(e) =>
                          handleChange(
                            index,
                            "organization",
                            e.target.value,
                            "visitor"
                          )
                        }
                      />
                    </div>
                    <div className="flex-1">
                      <label className="text-xs">Organization's Address</label>
                      <Input
                        type="text"
                        value={visitor.address}
                        onChange={(e) =>
                          handleChange(
                            index,
                            "address",
                            e.target.value,
                            "visitor"
                          )
                        }
                      />
                    </div>
                  </>
                )}
              </div>

              <div>
                <label className="text-xs">Upload Visitor's Photo</label>
                <Input
                  type="file"
                  accept="image/*"
                  className="cursor-pointer"
                />
                {visitor.photo && (
                  <img
                    src={visitor.photo}
                    alt="Visitor"
                    className="mt-2 h-20 w-20 object-cover rounded-md"
                  />
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="border shadow p-3 rounded-sm">
          <div className="flex justify-between">
            <p className="text-sm font-medium my-2">Device Details</p>
            <Button
              size="sm"
              className="rounded-full bg-red-500"
              onClick={addDevice}
            >
              Add
            </Button>
          </div>
          <div className="h-[0.5px] bg-red-500"></div>

          {devices.map((device, index) => (
            <div key={index} className="mt-4 flex gap-4">
              <Input
                type="text"
                placeholder="Device Name"
                value={device.name}
                onChange={(e) =>
                  handleChange(index, "name", e.target.value, "device")
                }
              />
              <Input
                type="text"
                placeholder="Device Model"
                value={device.model}
                onChange={(e) =>
                  handleChange(index, "model", e.target.value, "device")
                }
              />
              <Input
                type="text"
                placeholder="Device Type"
                value={device.type}
                onChange={(e) =>
                  handleChange(index, "type", e.target.value, "device")
                }
              />
              {devices.length > 1 && (
                <Button
                  size="sm"
                  className="bg-red-500 rounded-full text-xs"
                  onClick={() => removeDevice(index)}
                >
                  <Trash2 />
                </Button>
              )}
            </div>
          ))}
        </div>
        <div className="border shadow p-3 rounded-sm">
          <div className="flex justify-between ">
            <p className="text-sm font-medium my-2">Vehicle Details</p>
            <Button
              size="sm"
              className="rounded-full bg-red-500"
              onClick={addVehicle}
            >
              Add
            </Button>
          </div>
          <div className="h-[0.5px] bg-red-500"></div>

          {vehicles.map((vehicle, index) => (
            <div key={index} className="mt-4 flex gap-4">
              <Input
                type="text"
                placeholder="Vehicle Number"
                value={vehicle.number}
                onChange={(e) =>
                  handleChange(index, "number", e.target.value, "vehicle")
                }
              />
              <Input
                type="text"
                placeholder="Vehicle Model"
                value={vehicle.model}
                onChange={(e) =>
                  handleChange(index, "model", e.target.value, "vehicle")
                }
              />
              <Input
                type="text"
                placeholder="Vehicle Type"
                value={vehicle.type}
                onChange={(e) =>
                  handleChange(index, "type", e.target.value, "vehicle")
                }
              />
              {vehicles.length > 1 && (
                <Button
                  size="sm"
                  className="bg-red-500 cursor-pointer rounded-full text-xs"
                  onClick={() => removeVehicle(index)}
                >
                  <Trash2 />
                </Button>
              )}
            </div>
          ))}
        </div>

        <div className="flex">
          <Button
            size={"lg"}
            className="text-xs cursor-pointer bg-red-500 ml-auto mt-4"
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default VisitorForm;
