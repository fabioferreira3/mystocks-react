import { useRef, useEffect } from "react";
import ReactSelect, {
  OptionTypeBase,
  Props as SelectProps,
} from "react-select";
import { useField } from "@unform/core";

interface Props extends SelectProps<OptionTypeBase> {
  name: string;
}

const selectStyles = {
  control: (provided: any) => ({
    ...provided,
    backgroundColor: "#32363F",
    borderRadius: 0,
    borderColor: "#6b7280",
    height: "100%",
    color: "white",
  }),
  option: (provided: any, state: any) => ({
    ...provided,
    backgroundColor: "#32363F",
    color: "white",
    padding: 8,
  }),
  singleValue: (provided: any) => ({
    ...provided,
    color: "white",
  }),
  menuList: (provided: any) => ({
    ...provided,
    backgroundColor: "#32363F",
    border: "1px solid #6b7280",
  }),
  input: (provided: any) => ({
    ...provided,
    color: "white",
  }),
  placeholder: (provided: any) => ({
    ...provided,
    color: "#6b7280",
  }),
};

export default function Select({ name, ...rest }: Props) {
  const selectRef = useRef(null);
  const { fieldName, defaultValue, registerField } = useField(name);
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      getValue: (ref: any) => {
        if (rest.isMulti) {
          if (!ref.state.value) {
            return [];
          }
          return ref.state.value.map((option: OptionTypeBase) => option.value);
        }
        if (!ref.state.value) {
          return "";
        }
        return ref.state.value.value;
      },
    });
  }, [fieldName, registerField, rest.isMulti]);
  return (
    <ReactSelect
      styles={selectStyles}
      defaultValue={defaultValue}
      ref={selectRef}
      classNamePrefix="react-select"
      {...rest}
    />
  );
}
