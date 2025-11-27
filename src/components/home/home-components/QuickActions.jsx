import { FaChartBar } from "react-icons/fa";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";
import { FaPlus } from "react-icons/fa6";
import { LiaHomeSolid } from "react-icons/lia";
import { TbUserCircle } from "react-icons/tb";
import { useLocation, useNavigate } from "react-router";

function QuickAction() {
  const location = useLocation();
  const navigate = useNavigate();

  const currentPath = location.pathname;

  const hideAddTithes = currentPath === "/addTithes";
  const hideGenerate = currentPath === "/generateTithes";
  const hideExpense = currentPath === "/expenses";

  const showHome = currentPath !== "/home";

  return (
    <div className="w-full h-[110px] flex flex-col p-2">
      <p className="text-[16px] font-[500] mb-2">Quick Actions</p>

      <div className="grid grid-cols-3 gap-2 flex-1 items-stretch text-center">
        {/* Home */}
        {showHome && (
          <div
            onClick={() => navigate("/home")}
            className="bg-[#fff] cursor-pointer flex flex-col justify-center items-center border border-[#fff] rounded-[5px] shadow-sm"
          >
            <LiaHomeSolid size={25} />
            <p className="text-[12px]">Home</p>
          </div>
        )}

        {/* Add Tithes */}
        {!hideAddTithes && (
          <div
            onClick={() => navigate("/addTithes")}
            className="bg-[#fff] cursor-pointer flex flex-col justify-center items-center border border-[#fff] rounded-[5px] shadow-sm"
          >
            <FaPlus size={25} />
            <p className="text-[12px]">Add Tithes</p>
          </div>
        )}

        {/* Generate Report */}
        {!hideGenerate && (
          <div
            onClick={() => navigate("/generateTithes")}
            className="bg-[#fff] cursor-pointer flex flex-col justify-center items-center border border-[#fff] rounded-[5px] shadow-sm"
          >
            <FaChartBar size={30} />
            <p className="text-[12px]">Generate Report</p>
          </div>
        )}

        {/* Expense */}
        {!hideExpense && (
          <div
            onClick={() => navigate("/expenses")}
            className="bg-[#fff] cursor-pointer flex flex-col justify-center items-center border border-[#fff] rounded-[5px] shadow-sm"
          >
            <LiaFileInvoiceDollarSolid size={30} />
            <p className="text-[12px]">Expense</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default QuickAction;
