import { useHistory } from "react-router-dom";

export const MenuItem = ({ icon: Icon, title, target }: any) => {
  const history = useHistory();

  return (
    <div
      className="flex flex-row place-items-center pl-8 pr-8 pt-5 pb-5 justify-start hover:bg-black cursor-pointer"
      onClick={() => {
        history.push(target);
      }}
    >
      <Icon className="mr-4 text-white" />
      <span className="text-white font-bold text-xl">{title}</span>
    </div>
  );
};
