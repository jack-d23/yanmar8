import {
  BoxesIcon,
  CalendarCheck,
  FileBoxIcon,
  LayoutDashboard,
  LogOut,
  User,
  Users2,
} from "lucide-react";
import React, { useState } from "react";

import VisitorDetails from "@/components/VisitorDetails";

const AdminPage = () => {
  const [active, setActive] = useState("visitors");

  const click = (name) => {
    setActive(name);
  };

  return (
    <div className="flex">
      <div className=" min-w-[250px] shadow-sm">
        <div className="w-full">
          <img src="/main_logo.avif" className="my-5 mx-5" width={200} alt="" />
          <div className="w-full h-[0.5px] bg-black/50"></div>
        </div>
        <div className="my-5 font-semibold text-sm ">
          <div
            className={`${
              active === "visitors" ? "bg-[#dd2034] text-white" : ""
            } cursor-pointer flex items-center gap-5 py-5 pl-5`}
            onClick={() => click("visitors")}
          >
            <Users2 />
            <p>Visitors</p>
          </div>
          <div
            className={`${
              active === "materials" ? "bg-[#dd2034] text-white" : ""
            } cursor-pointer flex items-center gap-5 py-5 pl-5`}
            onClick={() => click("materials")}
          >
            <BoxesIcon />
            <p>Materials</p>
          </div>
          <div
            className={`${
              active === "dashboard" ? "bg-[#dd2034] text-white" : ""
            } cursor-pointer flex items-center gap-5 py-5 pl-5`}
            onClick={() => click("dashboard")}
          >
            <LayoutDashboard />
            <p>Dashboard</p>
          </div>
        </div>
      </div>
      <div className="p-10">
        <VisitorDetails />
      </div>
    </div>
  );
};

export default AdminPage;
