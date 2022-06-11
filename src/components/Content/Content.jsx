import { FaUser } from "react-icons/fa";
import { BsFillCreditCardFill } from "react-icons/bs";
import checkIconMobile from "../../assets/mobile/checkpoint.svg";

const Content = () => {
  return (
    <section className="md:flex md:flex-row">
      <div className="md:w-[20%] ml-[70px] mr-[54px] text-bold rounded-3xl flex items-center flex-col shadow-md bg-gradient-to-b from-white/40 to-transparent">
        <div className="mt-16 gap-8 flex items-start">
          <FaUser size={"22px"} className="mt-[12px]" />
          <div className="text-26">
            10245
            <p className="md:text-16 text-13 font-semibold mb-[36px]">
              Customers
            </p>
          </div>
        </div>
        <div className="flex item-start mb-16 gap-8">
          <BsFillCreditCardFill size={"22px"} className="mt-[12px]" />
          <div className="text-26">
            10245
            <p className="md:text-16 text-13 font-semibold"> Cards Issued</p>
          </div>
        </div>
      </div>

      <div className="md:w-[30%] md:text-16 md:ml-[20%] md:mt-0 text-13 flex flex-col w-full mt-[90px] font-semibold">
        <p className="md:mx-0 flex gap-8 mb-[51px] ml-[70px] mr-[29px] items-center">
          <img src={checkIconMobile} alt="" />
          <p>Card reports sent to your phone every weeks</p>
        </p>
        <p className="md:mx-0 flex gap-8 mb-[51px] ml-[70px] mr-[29px] items-center">
          <img src={checkIconMobile} alt="" />
          <p>No external fees</p>
        </p>
        <p className="md:mx-0 flex gap-8 mb-[51px] ml-[70px] mr-[29px] items-center">
          <img src={checkIconMobile} alt="" />
          <p>Set spending limits and restrictions</p>
        </p>
      </div>
    </section>
  );
};

export default Content;
