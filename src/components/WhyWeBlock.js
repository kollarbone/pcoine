import { MdSupportAgent } from "react-icons/md";
import { VscFileSubmodule } from "react-icons/vsc";
import { RiSecurePaymentLine } from "react-icons/ri";
import { BsArrowRight } from "react-icons/bs";

export default function WhyWeBlock() {
  return (
    <div className="m-5 mt-40 mb-20">
      <p className="text-4xl text-left m-7 text-white  w-fit">Why Choose Us</p>
      <div className="flex sm:flex-row mt-20 justify-between flex-col">
        <div className="hover:-translate-y-6 duration-300 cursor-pointer relative flex flex-col sm:w-1/3 w-full p-5 rounded bg-orange-900 items-center m-1 hover:opacity-100 opacity-70">
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
        <div className="hover:-translate-y-6 duration-300 cursor-pointer relative flex flex-col sm:w-1/3 w-full p-5 rounded bg-orange-900 items-center m-1 hover:opacity-100 opacity-70">
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
        <div className="hover:-translate-y-6 duration-300 cursor-pointer relative flex flex-col sm:w-1/3 w-full p-5 rounded bg-orange-900 items-center m-1 hover:opacity-100 opacity-70">
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
