import { useEffect, useState } from "react";
import { getPositions } from "./services/stock";

interface StockPosition {
  id: string;
  name: string;
  current_position: string;
  current_invested_value: string;
}

const App = () => {
  const [stockPositions, setStockPositions] = useState<StockPosition[]>([]);

  useEffect(() => {
    const fetchPositions = async () => {
      const response = await getPositions();
      setStockPositions(response.data);
    };
    fetchPositions();
  }, []);

  return (
    <>
      <div className="flex h-screen bg-black">
        <div className="w-1/5">
          <div className="logo h-20 bg-gray pl-4 flex items-stretch">
            <div className="self-center text-2xl text-white font-bold">
              MyStocks
            </div>
          </div>
        </div>
        <div className="w-4/5 flex flex-col">
          <div className="h-20 bg-black">Fabio Ferreira</div>
          <div className="h-16 pl-6 bg-lightGray flex">
            <div className="self-center">
              <h2 className="font-bold text-xl text-white">
                Current Positions
              </h2>
            </div>
          </div>
          <div className="p-6">
            <div>
              <div className="flex grid grid-cols-3 gap-4 p-6">
                <span className="text-blueGray text-xl font-bold">Stock</span>
                <span className="text-blueGray text-xl font-bold">
                  Position
                </span>
                <span className="text-blueGray text-xl font-bold">
                  Current Value Invested
                </span>
              </div>
              <div className="">
                {stockPositions.length > 0 &&
                  stockPositions.map((position) => {
                    return (
                      <div
                        key={position.id}
                        className="flex grid grid-cols-3 gap-4 p-6 bg-gray"
                      >
                        <div className="text-blueGray font-bold">
                          {position.name}
                        </div>
                        <div className="text-blueGray font-bold">
                          {position.current_position}
                        </div>
                        <div className="text-red font-bold">
                          {position.current_invested_value}
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
