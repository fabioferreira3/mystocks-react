import { useCallback, useEffect, useState } from "react";

import { getPositions } from "../services/stock";
import { BRL } from "../components/Currency";
import { PageHeader } from "../components/PageHeader";

interface StockPosition {
  id: string;
  stock_name: string;
  units: string;
  current_invested_value: string;
  current_total_value: string;
}

interface StockPositionsPayload {
  positions: StockPosition[];
  total_units: string;
  total_invested_value: string;
  actual_total_value: string;
}

const PositionsPage = () => {
  const [stockPositions, setStockPositions] = useState<StockPositionsPayload>({
    positions: [],
    total_units: "0",
    total_invested_value: "0",
    actual_total_value: "0",
  });

  const fetchPositions = useCallback(async () => {
    const response = await getPositions();
    setStockPositions(response.data);
  }, []);

  useEffect(() => {
    fetchPositions();
  }, [fetchPositions]);

  return (
    <>
      {console.log(stockPositions)}
      <PageHeader title="Current Positions" />
      <div className="flex flex-col p-4 mt-8">
        <span className="text-blueGray text-xl font-bold">Summary</span>
        <div className="flex mt-4 justify-center">
          <span className="text-blueGray text-xl font-bold mt-2 mr-4">
            <div className="bg-gray p-4">
              {stockPositions.positions.length} stocks
            </div>
          </span>
          <span className="text-blueGray text-xl font-bold mt-2 mr-4">
            <div className="bg-gray p-4">
              <span className="text-green font-bold">
                <BRL value={stockPositions.total_invested_value} />
              </span>{" "}
              total invested
            </div>
          </span>
          <span className="text-blueGray text-xl font-bold mt-2 mr-4">
            <div className="bg-gray p-4">
              <span className="text-green font-bold">
                <BRL value={stockPositions.actual_total_value} />
              </span>{" "}
              current total value
            </div>
          </span>
        </div>
      </div>
      <div className="p-6">
        <div className="flex grid grid-cols-4 gap-4 py-4">
          <span className="text-blueGray text-xl font-bold">Stock</span>
          <span className="text-blueGray text-xl font-bold">Position</span>
          <span className="text-blueGray text-xl font-bold">
            Value Invested
          </span>
          <span className="text-blueGray text-xl font-bold">Current value</span>
        </div>
        <div>
          {stockPositions.positions.length > 0 &&
            stockPositions.positions.map((position) => {
              return (
                <div
                  key={position.id}
                  className="flex grid grid-cols-4 gap-4 p-6 bg-gray mt-4"
                >
                  <div className="text-blueGray font-bold">
                    {position.stock_name}
                  </div>
                  <div className="text-blueGray font-bold">
                    {position.units}
                  </div>
                  <div className="text-green font-bold">
                    <BRL value={position.current_invested_value} />
                  </div>
                  <div className="text-green font-bold">
                    <BRL value={position.current_total_value} />
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default PositionsPage;
