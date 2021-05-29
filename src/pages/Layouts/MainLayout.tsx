import { SearchBar } from "../../components/SearchBar";
import { Sidebar } from "../../components/Sidebar";

export const MainLayout = ({ children }: { children: any }) => {
  return (
    <div className="flex h-screen bg-black">
      <Sidebar />
      <div className="w-4/5 flex flex-col">
        <SearchBar />
        {children}
      </div>
    </div>
  );
};
