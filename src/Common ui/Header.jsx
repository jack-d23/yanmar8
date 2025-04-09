import { Users } from "lucide-react";
import React from "react";

const Header = () => {
  const data = ["Visitor", "Material", "Health", "Safety", "Waste"];
  return (
    <div>
      <div className="flex justify-center mt-5">
        <img src="/main_logo.avif" width={200} alt="" />
      </div>
      <nav className="flex gap-20 justify-center mt-5 bg-red-300 py-2">
        {data.map((v, i) => {
          return (
            <ul key={i}>
              <li className="hover:font-medium hover:text-lg transition-all cursor-pointer">
                {v}
              </li>
            </ul>
          );
        })}
      </nav>
    </div>
  );
};

export default Header;
