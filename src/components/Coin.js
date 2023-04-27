export default function Product_card(props) {
  const data = props.data;
  return (
    <>
      {data ? (
        <>
          <div className="flex flex-row items-center justify-between border-t  p-5 hover:text-orange-300 hover:scale-105 border-top-white cursor-pointer">
            <p className="text-xl text-orange-300">{data.symbol}</p>
            <p className="text-base">{data.name}</p>
            <p className="text-base">{data.price_usd} USD</p>
            <p className="text-base text-orange-300">
              {data.percent_change_24h} %
            </p>
            <p className="text-base">{data.market_cap_usd} USD</p>
          </div>
        </>
      ) : (
        <div>no data</div>
      )}
    </>
  );
}
