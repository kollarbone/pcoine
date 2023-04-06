import coin1 from "../assets/img/card3.png";
import coin2 from "../assets/img/card107.png";
import coin3 from "../assets/img/card121.png";
import coin4 from "../assets/img/card146.png";

export default function MainBlock() {
  return (
    <div className="h-[700px] flex justify-center relative flex-col">
      <img src={coin2} alt="coin" className="w-20 absolute top-1/4 left-full" />
      <img src={coin1} alt="coin" className="w-20 absolute top-2/3 right-3/4" />
      <p className="text-8xl">Buy & Sell Cripto Instantly</p>
      <p>The most trusted cryptocurrency platform</p>
      <img src={coin4} alt="coin" className="w-20 absolute top-2/3 left-3/4" />
      <img
        src={coin3}
        alt="coin"
        className="w-20 absolute top-1/4 right-full"
      />
    </div>
  );
}
