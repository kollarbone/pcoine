import { useState, useEffect } from "react";
import Coin from "./Coin";
import { useCoins } from "../hooks/coins";

export default function List() {
  const { coins } = useCoins();
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemPerPage] = useState(9);
  useEffect(() => {
    setData(coins.data);
  }, [coins.data]);
  const lastItemIndex = currentPage * itemPerPage;
  const firstItemIndex = lastItemIndex - itemPerPage;
  const currentItem = data && data.slice(firstItemIndex, lastItemIndex);

  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(data && data.length / itemPerPage); i++) {
    pageNumber.push(i);
  }
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="m-5 mt-40">
      <p className="text-4xl text-left m-7 text-white  w-fit">Hot Coins New</p>
      <div className="flex flex-col m-3">
        <div className="sm:flex hidden flex-row items-center text-orange-300 justify-between p-5">
          <p className="text-base">Coin</p>
          <p className="text-base">Full Name</p>
          <p className="text-base">Price</p>
          <p className="text-base">24h Change</p>
          <p className="text-base">Market Cap</p>
        </div>
        {currentItem &&
          currentItem.map((item, key) => <Coin key={key} data={item} />)}
      </div>
      <div className="flex flex-row justify-evently flex-wrap">
        {data &&
          data.length > 9 &&
          pageNumber.map((number) => (
            <button
              className={
                currentPage === number
                  ? "border-orange-400  border m-2 rounded h-10 w-10 "
                  : "bg-orange-400 rounded duration-300 m-2 h-10 w-10 hover:bg-gray-900 hover:border-orange-400 hover:border"
              }
              key={number}
              onClick={() => paginate(number)}
            >
              {number}
            </button>
          ))}
      </div>
    </div>
  );
}
