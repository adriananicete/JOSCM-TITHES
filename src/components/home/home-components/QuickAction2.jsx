import { useNavigate } from "react-router";
import { FaChartBar } from "react-icons/fa";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";
import { LiaHomeSolid } from "react-icons/lia";

function QuickAction2() {
    const navigate = useNavigate();
    return ( 
        <div className="w-full h-[110px]  flex flex-col p-2 border border-gray-200 rounded-[10px]">
        <p className="text-[16px] font-[500] mb-2">Quick Actions</p>

        <div className="grid grid-cols-3 gap-2 flex-1 items-stretch text-center">
          {/* Home */}
          <div
            onClick={() => navigate("/home")}
            className="bg-[#fff] cursor-pointer flex flex-col justify-center items-center border border-[#fff] rounded-[5px] shadow-sm"
          >
            <LiaHomeSolid size={25} />
            <p className="text-[12px]">Home</p>
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
     );
}

export default QuickAction2;