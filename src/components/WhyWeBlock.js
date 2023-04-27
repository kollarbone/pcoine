import { MdSupportAgent } from "react-icons/md";
import { VscFileSubmodule } from "react-icons/vsc";
import { RiSecurePaymentLine } from "react-icons/ri";
import { BsArrowRight } from "react-icons/bs";

export default function WhyWeBlock() {
  return (
    <div className="m-5 mt-40">
      <p className="text-4xl text-left m-7 text-white  w-fit">Why Choose Us</p>
      <div className="flex flex-row mt-10 justify-between">
        <div className="relative flex flex-col w-1/3 p-5 rounded bg-orange-900 items-center m-1">
          <MdSupportAgent className="text-white mt-10 text-8xl border-2 rounded-full p-1" />
          <p className="text-3xl mt-10 mb-10">24/7 Support</p>
          <p className="text-xl  mb-20">
            Our support team is available 24/7. We are receptive to your needs
            and are always available to help you out.
          </p>
          <div className="absolute bottom-5 border-t pt-5  flex flex-row items-center justify-evenly w-full">
            Learn more <BsArrowRight />
          </div>
        </div>
        <div className="relative flex flex-col w-1/3 p-5 rounded bg-orange-900 items-center m-1">
          <VscFileSubmodule className="text-white mt-10 text-8xl border-2 rounded-full p-1" />
          <p className="text-3xl mt-10 mb-10">Easy to use</p>
          <p className="text-xl  mb-20">
            Purchase cryptos with credi/debit cards. 750+ high-quality
            currencies and 800+ trading pairs available. One-stop platform to
            initiate your cryptocurrency investment and management.
          </p>
          <div className="absolute bottom-5 border-t pt-5  flex flex-row items-center justify-evenly w-full">
            Learn more <BsArrowRight />
          </div>
        </div>
        <div className="relative flex flex-col w-1/3 p-5 rounded bg-orange-900 items-center m-1">
          <RiSecurePaymentLine className="text-white mt-10 text-8xl border-2 rounded-full p-1" />
          <p className="text-3xl mt-10 mb-10">Secure</p>
          <p className="text-xl  mb-20">
            Advanced risk control system in the market. Hybrid hot/cold wallet
            systems and multi-signature technologies.
          </p>
          <div className="absolute bottom-5 border-t pt-5  flex flex-row items-center justify-evenly w-full">
            Learn more <BsArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
}
