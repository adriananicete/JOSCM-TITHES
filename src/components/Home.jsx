import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { TbCurrencyPeso } from "react-icons/tb";
import { FaArrowRight } from "react-icons/fa6";

function Home() {
  const { user } = useContext(UserContext);

  function capitalLetter(user) {
    const firstLetter = user.charAt(0).toUpperCase();
    const otherLetters = user.slice(1).toLowerCase();
    const formatName = firstLetter + otherLetters;
    return formatName;
  }

  return (
    <div className="w-[100%] bg-[#fbfbfb] p-5 flex flex-col justify-center items-center gap-5">
      <div className="w-full">
        <h1 className="text-[20px] font-[500]">
        Welcome, {capitalLetter(user || "guest")}!{" "}
      </h1>
      <p className="text-[#656565] text-[14px]">
        Your reports are ready — review them anytime.
      </p>
      </div>

      <div className="bg-[linear-gradient(135deg,#0f1013,#454545,#575759)] w-[100%] h-[120px] flex flex-col justify-center items-center p-3 rounded-[10px]">
        <div className="w-[100%] flex justify-between items-center">
          <div className="w-[auto] h-[100%] bg-[#7f38ef] rounded-[5px] p-2">
            <p className="text-[14px] text-[white] font-[600]">
              Total Remaining Balance:
            </p>
          </div>
          <div className="w-[auto] h-[100%] bg-[#f9f9f9] p-2 flex justify-center items-center gap-1 rounded-[15px]">
            <p className="text-[12px] text-[#7f38ef] font-[500]">View Tithes</p>
            <FaArrowRight size={10} className="text-[#7f38ef]" />
          </div>
        </div>
        <div className="flex-[1] w-[100%] col-span-2 flex flex-col items-start justify-end leading-[20px]">
          <p className="text-[12px] text-[#a0a0a0]">Amount</p>
          <div className="flex justify-start items-center text-white">
            <TbCurrencyPeso /> <p className="text-[25px] font-[500]">20,000</p>
          </div>
        </div>
      </div>

      <div className="w-full h-[200px] flex flex-col p-2">
        <p className="text-[16px] font-[500] mb-2">Generate Report</p>

        <div className="grid grid-cols-4 grid-rows-2 gap-2 flex-1 items-stretch">
          <div className="bg-[#ffffff]">1</div>
          <div className="bg-[#ffffff]">1</div>
          <div className="bg-[#ffffff]">1</div>
          <div className="bg-[#ffffff]">1</div>
          <div className="col-span-2 bg-[#c6fbe7]">5</div>
          <div className="col-span-2 bg-[#fdefe2]">6</div>
        </div>
      </div>
    </div>
  );
}

export default Home;
