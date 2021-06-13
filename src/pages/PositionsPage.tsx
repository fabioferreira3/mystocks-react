import { useCallback, useEffect, useState } from "react";

import { getPositions } from "../services/stock";
import { BRL } from "../components/Currency";
import { PageHeader } from "../components/PageHeader";

interface StockPosition {
  id: string;
  name: string;
  current_position: string;
  current_invested_value: string;
}

interface StockPositionsPayload {
  positions: StockPosition[];
  total_units: string;
  total_invested_value: string;
}

const PositionsPage = () => {
  const [stockPositions, setStockPositions] = useState<StockPositionsPayload>({
    positions: [],
    total_units: "0",
    total_invested_value: "0",
  });

  const fetchPositions = useCallback(async () => {
    const response = await getPositions();
    setStockPositions(response.data);
  }, []);

  useEffect(() => {
    fetchPositions();
  }, []);

  return (
    <>
      <PageHeader title="Current Positions" />
      <div className="p-6">
        <div className="flex grid grid-cols-3 gap-4 p-6">
          <span className="text-blueGray text-xl font-bold">Stock</span>
          <span className="text-blueGray text-xl font-bold">Position</span>
          <span className="text-blueGray text-xl font-bold">
            Value Invested
          </span>
        </div>
        <div>
          {stockPositions.positions.length > 0 &&
            stockPositions.positions.map((position) => {
              return (
                <div
                  key={position.id}
                  className="flex grid grid-cols-3 gap-4 p-6 bg-gray mt-4"
                >
                  <div className="text-blueGray font-bold">{position.name}</div>
                  <div className="text-blueGray font-bold">
                    {position.current_position}
                  </div>
                  <div className="text-green font-bold">
                    <BRL value={position.current_invested_value} />
                  </div>
                </div>
              );
            })}
        </div>
        <div className="flex flex-col p-6 mt-8">
          <span className="text-blueGray text-xl font-bold">Summary</span>
          <div className="flex grid grid-cols-2">
            <span className="text-blueGray text-xl font-bold mt-2 p-4">
              <div className="bg-gray p-4">
                {stockPositions.positions.length} stocks
              </div>
            </span>
            <span className="text-blueGray text-xl font-bold mt-2 p-4">
              <div className="bg-gray p-4">
                <span className="text-green font-bold">
                  <BRL value={stockPositions.total_invested_value} />
                </span>{" "}
                total invested
              </div>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default PositionsPage;
