import { GrCloudlinux as SpinnerIcon } from "react-icons/gr";
import classNames from "classnames/bind";

export const Button = (props: any) => {
  const {
    children,
    loading = false,
    disabled = false,
    background = "bg-black",
    ...rest
  } = props;

  const classes = classNames(
    "w-full",
    "inline-flex",
    "justify-center",
    "border",
    "border-lightGray",
    "shadow-sm",
    "px-8",
    "py-2",
    `${background}`,
    "text-white",
    "font-medium",
    "sm:w-auto",
    "hover:bg-gray"
  );

  return (
    <button disabled={disabled} type="submit" className={classes} {...rest}>
      <>
        {loading && (
          <SpinnerIcon
            className="animate-spin h-6 w-6 text-white"
            aria-hidden="true"
          />
        )}
        {!loading && children}
      </>
    </button>
  );
};
