import coin1 from "../assets/img/card3.png";
import coin2 from "../assets/img/card107.png";
import coin3 from "../assets/img/card121.png";
import coin4 from "../assets/img/card146.png";
import { useCoins } from "../hooks/coins";

export default function MainBlock() {
  const { coins } = useCoins();
  let popCoin = [];
  if (coins.data) {
    while (popCoin.length < 4) {
      let rand = coins.data[Math.floor(Math.random() * coins.data.length)];
      if (!popCoin.find((rnd) => rnd === rand)) {
        popCoin.push(rand);
      }
    }
  }
  return (
    <>
      <div className="sm:h-[700px] h-[500px] m-auto flex justify-center relative flex-col items-center">
        <p className="sm:text-8xl text-7xl relative flex flex-row items-center">
          <img
            src={coin2}
            alt="coin"
            className="w-20 mb-40 coin left-full hidden sm:flex"
          />
          <img
            src={coin3}
            alt="coin"
            className="w-20 mt-40 coin right-full hidden sm:flex"
          />
          Buy & Sell Cripto Instantly
          <img
            src={coin1}
            alt="coin"
            className="w-20 mt-40 coin right-3/4 hidden sm:flex"
          />
          <img
            src={coin4}
            alt="coin"
            className="w-20 mb-40 coin left-3/4 hidden sm:flex"
          />
        </p>
        <p className="mt-6 text-xl relative">
          The most trusted cryptocurrency platform
        </p>
      </div>
      {popCoin && (
        <div className="flex flex-row flex-wrap justify-evenly">
          {popCoin.map((item, id) => (
            <div
              key={id}
              className="border duration-300 rounded p-3 m-1 sm:w-1/5 w-full hover:bg-white hover:text-gray-800 cursor-pointer"
            >
              <p className="text-2xl text-orange-300">{item.symbol}</p>
              <p className="text-xl truncate ">{item.name}</p>
              <p className="text-xl ">{item.price_usd} USD</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
