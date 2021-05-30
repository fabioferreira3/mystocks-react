import { Fragment, useEffect, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { FiBox } from "react-icons/fi";

interface ModalProps {
  setVisibility: Function;
  defaultOpen: boolean;
  title: string;
  children: any;
}

export default function Modal({
  setVisibility,
  defaultOpen,
  title,
  children,
}: ModalProps) {
  const [open, setOpen] = useState(defaultOpen);

  const cancelButtonRef = useRef(null);

  useEffect(() => {
    setVisibility(open);
  }, [open, setVisibility]);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        static
        className="fixed z-10 inset-0 overflow-y-auto"
        initialFocus={cancelButtonRef}
        open={open}
        onClose={setOpen}
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="border-2 border-lightGray inline-block align-bottom bg-black text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-black px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start flex-col">
                  <div className="flex justify-start items-center w-full mt-3 text-center sm:mt-0 sm:text-left">
                    <FiBox
                      className="h-8 w-8 text-white mr-4"
                      aria-hidden="true"
                    />
                    <Dialog.Title
                      as="h3"
                      className="text-xl leading-6 font-bold text-white"
                    >
                      {title}
                    </Dialog.Title>
                  </div>
                  <div className="mt-2 w-full">{children}</div>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
