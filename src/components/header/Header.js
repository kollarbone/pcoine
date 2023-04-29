import logo from "../../assets/img/logo.png";
import Navigation from "./Navigation";
import { BsTwitter, BsDiscord, BsTelegram } from "react-icons/bs";
export default function Header() {
  return (
    <div className="flex p-5 justify-between items-center max-w-7xl m-auto">
      <div className="flex items-center ">
        <img
          src={logo}
          alt="logo"
          style={{ width: "100px", height: "fit-content" }}
        />
        <div className="flex ml-10 ">
          <BsTwitter className="ml-3 mr-3 hover:text-orange-400 cursor-pointer" />
          <BsDiscord className="ml-3 mr-3 hover:text-orange-400 cursor-pointer" />
          <BsTelegram className="ml-3 mr-3 hover:text-orange-400 cursor-pointer" />
        </div>
      </div>
      <Navigation />
    </div>
  );
}
