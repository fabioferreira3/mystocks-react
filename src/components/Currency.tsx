import NumberFormat from "react-number-format";

interface CurrencyInputProps {
  value: string;
  placeholder: string;
}

export const BRL = ({ value }: { value: string }) => {
  return (
    <NumberFormat
      thousandSeparator={"."}
      decimalSeparator={","}
      prefix={"R$ "}
      decimalScale={2}
      displayType="text"
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
      prefix={"$ "}
      displayType="text"
      value={value}
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
      className="w-1/2 bg-gray mt-4 text-white font-bold"
      {...rest}
    />
  );
};
