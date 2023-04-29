function Navigation() {
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const goToMarket = () => {
    window.scrollTo({
      top: 900,
      behavior: "smooth",
    });
  };
  const goToChoose = () => {
    window.scrollTo({
      top: 1800,
      behavior: "smooth",
    });
  };
  const goToJoin = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };
  return (
    <div className="sm:flex sm:flex-row sm:w-1/2 sm:justify-between hidden">
      <p onClick={goToTop} className="hover:text-orange-400 cursor-pointer">
        Home
      </p>
      <p onClick={goToMarket} className="hover:text-orange-400 cursor-pointer">
        Market
      </p>
      <p onClick={goToChoose} className="hover:text-orange-400 cursor-pointer">
        Choose Us
      </p>
      <p onClick={goToJoin} className="hover:text-orange-400 cursor-pointer">
        Join
      </p>
    </div>
  );
}

export default Navigation;
