import coin1 from "../assets/img/card3.png";
import coin3 from "../assets/img/card121.png";

export default function JoinBlock() {
  return (
    <div className="h-[700px] flex justify-center relative flex-col items-center">
      <p className="sm:text-8xl text-7xl relative flex flex-row items-center">
        <img
          src={coin3}
          alt="coin"
          className="w-20 mt-40 coin right-full sm:flex hidden"
        />
        Get Started now
        <img
          src={coin1}
          alt="coin"
          className="w-20 mt-40 coin right-3/4 sm:flex hidden"
        />
      </p>
      <p className="text-xl relative">Join us in social networks</p>
      <button className="text-orange-400 whitespace-nowrap text-lg border duration-300 rounded p-3 m-12 sm:w-1/5 w-1/4 hover:bg-white hover:text-gray-800">
        Join us
      </button>
    </div>
  );
}
