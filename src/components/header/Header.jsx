import logo from "../../assets/img/logo.png";
import Navigation from "./Navigation";

export default function Header() {
    return (
      <div className="flex">
        <img src={logo} alt="logo" style={{width: "100px"}}/>
        <p className="text-red-400">1231423</p>
        <Navigation/>
      </div>
    );
  }
  
  