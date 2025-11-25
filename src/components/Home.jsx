import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { TbCurrencyPeso } from "react-icons/tb";
import { FaArrowRight } from "react-icons/fa6";
import { FaChartBar } from "react-icons/fa";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";
import { FaPlus } from "react-icons/fa6";
import { TbUserCircle } from "react-icons/tb";
import { FaCalendarAlt } from "react-icons/fa";
import { useNavigate } from "react-router";

function Home() {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  function capitalLetter(user) {
    const firstLetter = user.charAt(0).toUpperCase();
    const otherLetters = user.slice(1).toLowerCase();
    const formatName = firstLetter + otherLetters;
    return formatName;
  }

  return (
    <div className="w-[100%] bg-[#f9f9f9] p-5 flex flex-col justify-center items-center gap-5 md:w-[23%]">
      <div className="w-full flex justify-between items-start">
        <div>
          <h1 className="text-[20px] font-[500]">
            Welcome, {capitalLetter(user || "guest")}!{" "}
          </h1>
          <p className="text-[#656565] text-[14px]">
            Your reports are ready — review them anytime.
          </p>
        </div>

        <div className="w-[52px] h-[52px] rounded-[50%] bg-[#fff]">
          <img className="w-[100%] h-[100%] object-cover " src="https://res.cloudinary.com/dks2psaem/image/upload/v1763347986/joscm-logo_jq0zlo.png" alt="" />
        </div>
      </div>

      <div className="bg-[linear-gradient(135deg,#0f1013,#454545,#575759)] w-[100%] h-[120px] flex flex-col justify-center items-center p-3 rounded-[10px]">
        <div className="w-[100%] flex justify-between items-center">
          <div className="w-[auto] h-[auto] bg-[#7f38ef] rounded-[5px] flex justify-center items-center p-1">
            <p className="text-[12px] text-[white] font-[600]">
              Total Remaining Balance:
            </p>
          </div>
          <div className="w-[auto] h-[auto] bg-[#f9f9f9] p-2 flex justify-center items-center gap-1 rounded-[15px]">
            <p className="text-[12px] text-[#7f38ef] font-[500]">View Tithes</p>
            <FaArrowRight size={10} className="text-[#7f38ef]" />
          </div>
        </div>
        <div className="flex-[1] w-[100%] col-span-2 flex flex-col items-start justify-end leading-[22px]">
          <p className="text-[12px] text-[#a0a0a0]">Amount</p>
          <div className="flex justify-start items-center text-white">
            <TbCurrencyPeso /> <p className="text-[30px] font-[500]">20,000</p>
          </div>
        </div>
      </div>

      <div className="w-full h-[110px] flex flex-col p-2">
        <p className="text-[16px] font-[500] mb-2">Quick Actions</p>

        <div className="grid grid-cols-3 gap-2 flex-1 items-stretch text-center">
          {/* Add Tithes */}
          <div
            onClick={() => navigate("/addTithes")}
            className="bg-[#fff] cursor-pointer flex flex-col justify-center items-center border border-[#fff] rounded-[5px] shadow-sm"
          >
            <FaPlus size={25} />
            <p className="text-[12px]">Add Tithes</p>
          </div>

          {/* Generate Report */}
          <div
            onClick={() => navigate("/generateTithes")}
            className="bg-[#fff] cursor-pointer flex flex-col justify-center items-center border border-[#fff] rounded-[5px] shadow-sm"
          >
            <FaChartBar size={30} />
            <p className="text-[12px]">Generate Report</p>
          </div>

          {/* Expense */}
          <div
            onClick={() => navigate("/expenses")}
            className="bg-[#fff] cursor-pointer flex flex-col justify-center items-center border border-[#fff] rounded-[5px] shadow-sm"
          >
            <LiaFileInvoiceDollarSolid size={30} />
            <p className="text-[12px]">Expense</p>
          </div>
        </div>
      </div>

      <div className="w-full rounded-[10px] h-[auto] bg-[#ebf2fa] flex flex-col justify-center items-center gap-2">
        <div className="bg-[#8a61e9] w-[100%] h-[90px] flex justify-center items-end rounded-[10px]">
          <div className="w-full h-[90%] bg-[#fdefe2] rounded-[10px] flex justify-start items-center gap-3 p-3 shadow-sm">
            <div className="w-[40px] h-[40px] p-3 bg-[#fff] rounded-[50%] flex justify-center items-center">
              <FaCalendarAlt size={20} color="#c762c8" />
            </div>

            <div className="w-full">
              <p className="font-[600]">Upcoming Event:</p>
              <div className="w-full flex justify-between items-center">
                <p className="italic text-[14px]">Church Anniversary</p>
                <p className="italic text-[14px]">December 7, 2025</p>
              </div>
            </div>
          </div>
        </div>

        <div className="p-1">
          <p className="text-[14px] text-[#447596] font-[500]">
            Those who give with love receive joy in return.
          </p>
        </div>
      </div>

      <div className="w-full h-[200px] mt-3 grid grid-cols-2 grid-row-2 gap-3">
        <div className="box">
          <p>Total Tithes This Month</p>
        </div>
        <div className="box">2</div>
        <div className="box">3</div>
        <div className="box">4</div>
      </div>
    </div>
  );
}

export default Home;
