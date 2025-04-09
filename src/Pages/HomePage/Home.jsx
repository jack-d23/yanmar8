import Header from "@/Common ui/Header";
import {
  Biohazard,
  BoxIcon,
  ChevronRightIcon,
  ChevronsLeftRightIcon,
  HardHat,
  HeartPulse,
  Users,
} from "lucide-react";

import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="">
      <Header />
      <div className="my-10">
        <div className="flex justify-center gap-5">
          <Link
            to={"/visitor/admin"}
            className="w-[300px] h-[200px]  cursor-pointer hover:scale-105 transition-all hover:bg-red-200 p-5 bg-red-100"
          >
            <Users size={30} />
            <p className="text-center mt-10 text-xl font-semibold">Visitors</p>
            <ChevronRightIcon className="ml-auto mt-10" />
          </Link>
          <div className="w-[300px] h-[200px] cursor-pointer hover:scale-105 transition-all hover:bg-red-200 p-5 bg-red-100">
            <BoxIcon size={30} />
            <p className="text-center mt-10 text-xl font-semibold">Materials</p>
            <ChevronRightIcon className="ml-auto mt-10" />
          </div>
          <div className="w-[300px] h-[200px] cursor-pointer hover:scale-105 transition-all hover:bg-red-200 p-5 bg-red-100">
            <HeartPulse size={30} />
            <p className="text-center mt-10 text-xl font-semibold">health</p>
            <ChevronRightIcon className="ml-auto mt-10" />
          </div>
        </div>
        <div className="flex justify-center gap-10 mt-10">
          <div className="w-[300px] h-[200px] cursor-pointer hover:scale-105 transition-all hover:bg-red-200 p-5 bg-red-100">
            <HardHat size={30} />
            <p className="text-center mt-10 text-xl font-semibold">Safety</p>
            <ChevronRightIcon className="ml-auto mt-10" />
          </div>
          <div className="w-[300px] h-[200px] cursor-pointer hover:scale-105 transition-all hover:bg-red-200 p-5 bg-red-100">
            <Biohazard size={30} />
            <p className="text-center mt-10 text-xl font-semibold">Waste</p>
            <ChevronRightIcon className="ml-auto mt-10" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
