import logo from "../../assets/img/logo.png";
import Navigation from "./Navigation";
import { BsTwitter, BsDiscord, BsTelegram } from "react-icons/bs";
export default function Header() {
  return (
    <div className="flex p-5 justify-between items-center">
      <div className="flex items-center">
        <img
          src={logo}
          alt="logo"
          style={{ width: "100px", height: "fit-content" }}
        />
        <div className="flex ml-10">
          <BsTwitter className="ml-3 mr-3" />
          <BsDiscord className="ml-3 mr-3" />
          <BsTelegram className="ml-3 mr-3" />
        </div>
      </div>
      <Navigation />
    </div>
  );
}
