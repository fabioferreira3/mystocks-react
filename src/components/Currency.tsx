import NumberFormat from "react-number-format";

import { Input } from "./Input";

export const BRL = ({ value }: { value: string }) => {
  const locale = Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  return <>{locale.format(parseFloat(value))}</>;
};

export const USD = ({ value }: { value: string }) => {
  const locale = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  return <>{locale.format(parseFloat(value))}</>;
};

export const CurrencyInput = ({ placeholder, defaultValue, ...rest }: any) => {
  const locale = Intl.NumberFormat("pt-BR");
  return (
    <NumberFormat
      thousandSeparator={"."}
      decimalSeparator={","}
      displayType="input"
      decimalScale={2}
      placeholder={placeholder}
      defaultValue={
        defaultValue ? locale.format(parseFloat(defaultValue)) : null
      }
      customInput={Input}
      className="w-1/2 bg-gray mt-4 text-white font-bold"
      {...rest}
    />
  );
};
