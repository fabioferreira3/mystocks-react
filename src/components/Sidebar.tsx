import { FiBox } from "react-icons/fi";
import { MenuItem } from "./MenuItem";

export const Sidebar = () => {
  return (
    <div className="sm:w-full md:w-1/6 min-w-min bg-gray h-screen">
      <div className="logo h-20 pl-8 flex items-stretch">
        <div className="self-center text-2xl text-white font-bold">
          MyStocks
        </div>
      </div>
      <div>
        <MenuItem title="Positions" icon={FiBox} target="/positions" />
        <MenuItem title="Transactions" icon={FiBox} target="/transactions" />
      </div>
    </div>
  );
};
