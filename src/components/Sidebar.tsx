import { FiBox } from "react-icons/fi";
import { MenuItem } from "./MenuItem";

export const Sidebar = () => {
  return (
    <div className="w-1/4 bg-gray">
      <div className="logo h-20 pl-8 flex items-stretch">
        <div className="self-center text-2xl text-white font-bold">
          MyStocks
        </div>
      </div>
      <div>
        <MenuItem title="Positions" icon={FiBox} target="/positions" />
      </div>
    </div>
  );
};