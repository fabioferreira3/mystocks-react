import { useState } from "react";
import { CurrencyInput } from "./Currency";

export const TransactionForm = () => {
  return (
    <form className="flex flex-col">
      <div className="flex">
        <select className="w-1/2 bg-gray mt-4 text-white font-bold">
          <option value="added">Buy</option>
          <option value="subtracted">Sell</option>
        </select>
        <select className="w-1/2 bg-gray mt-4 text-white font-bold">
          <option value="bce9f020-ac1e-4a2e-9b3f-898f2f08935e">MGLU3</option>
          <option value="fe594e19-c56d-4c1f-a91f-26e07c9884ae">SBSP3</option>
        </select>
      </div>
      <div className="flex">
        <CurrencyInput placeholder="Unit Price" prefix={"R$ "} />
        <CurrencyInput placeholder="Unit Price" prefix={"R$ "} />
      </div>
    </form>
  );
};
