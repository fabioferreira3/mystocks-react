import { useState } from "react";

interface PopoverProps {
  title: string;
  children: any;
  icon?: any;
  button?: any;
}

const Popover = ({
  title,
  children,
  icon: Icon,
  button: Button,
}: PopoverProps) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="flex flex-col h-full relative">
        <div onClick={() => setShow(!show)} className="p-4 cursor-pointer">
          {Icon && <Icon className="" />}
          {Button && <Button />}
        </div>

        <div
          id="popover"
          className={`mt-10 p-2 max-w-full object-bottom z-10 absolute bg-gray border border-lightGray ${
            show ? "block" : "hidden"
          }`}
        >
          {children}
        </div>
      </div>
    </>
  );
};

export default Popover;
