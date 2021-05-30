import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";

import { SearchBar } from "../../components/SearchBar";
import { Sidebar } from "../../components/Sidebar";

export const MainLayout = ({ children }: { children: any }) => {
  return (
    <div className="flex bg-black sm:flex-col md:flex-row ">
      <Sidebar />
      <div className="sm:w-full md:w-10/12 flex flex-col">
        <SearchBar />
        {children}
      </div>
      <ReactNotification />
    </div>
  );
};
