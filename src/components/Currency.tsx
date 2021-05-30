import NumberFormat from "react-number-format";

import { Input } from "./Input";

export const BRL = ({ value }: { value: string }) => {
  return (
    <NumberFormat
      thousandSeparator={"."}
      decimalSeparator={","}
      decimalScale={2}
      displayType="text"
      customInput={Input}
      value={value}
      isNumericString={true}
    />
  );
};

export const USD = ({ value }: { value: string }) => {
  return (
    <NumberFormat
      thousandSeparator={","}
      decimalSeparator={"."}
      displayType="text"
      value={value}
      customInput={Input}
      isNumericString={true}
    />
  );
};

export const CurrencyInput = ({ placeholder, ...rest }: any) => {
  return (
    <NumberFormat
      thousandSeparator={"."}
      decimalSeparator={","}
      displayType="input"
      decimalScale={2}
      placeholder={placeholder}
      customInput={Input}
      className="w-1/2 bg-gray mt-4 text-white font-bold"
      {...rest}
    />
  );
};
