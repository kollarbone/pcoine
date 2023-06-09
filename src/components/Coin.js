import { useState } from "react";

export default function Product_card(props) {
  const data = props.data;
  const [showDet, setShowDet] = useState(false);
  return (
    <>
      {data ? (
        <>
          <div
            onClick={() => setShowDet(!showDet)}
            className="flex duration-300 flex-row fle items-center justify-between border-t  p-5 hover:text-orange-300 hover:scale-105 border-top-white cursor-pointer"
          >
            <p className="text-xl text-orange-300">{data.symbol}</p>
            <p className="text-base sm:flex hidden">{data.name}</p>
            <p className="text-base">{data.price_usd} USD</p>
            <p className="text-base text-orange-300">
              {data.percent_change_24h} %
            </p>
            <p className="text-base sm:flex hidden">
              {data.market_cap_usd} USD
            </p>
          </div>
          <div
            className={
              showDet
                ? "duration-300 transition ease-in-out flex flex-row flex-wrap items-center justify-between p-5"
                : "hidden"
            }
          >
            <p className="text-base">Rank: {data.rank}</p>
            <p className="text-base">1h Change: {data.percent_change_1h}</p>
            <p className="text-base">Price BTC: {data.price_btc}</p>
            <p className="text-base">7d Change: {data.percent_change_7d}</p>
          </div>
        </>
      ) : (
        <div>no data</div>
      )}
    </>
  );
}
