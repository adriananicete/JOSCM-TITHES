import { useNavigate } from "react-router";
import Template from "../../layout/Template";
import Headbar from "./home-components/Headbar";
import { FaChartBar } from "react-icons/fa";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";
import { LiaHomeSolid } from "react-icons/lia";

function CreateVoucher() {
    const navigate = useNavigate();
  return (
    <Template>
      <Headbar
        title={"Create Voucher"}
        text={"A form used to approve and record payments."}
      />

      <div className="w-full h-[110px]  flex flex-col p-2">
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

      <div className="w-full bg-white shadow border border-[#3c6f7d] rounded-xl p-5 space-y-4">
        <div className="flex justify-between items-center gap-1">
          <h2 className="font-medium text-lg">Service Information</h2>
          <p className="font-bold text-lg text-[#3c6f7d]">PCF-0001</p>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1 text-[12px]">
            <label className="text-sm text-gray-600">Date</label>
            <input type="date" className="w-auto border rounded-lg px-3 py-2" />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-600">RF No.</label>
            <select className="border rounded-lg px-3 py-2 text-[12px]" name="" id="">
              <option value="">RF-0001</option>
              <option value="">RF-0002</option>
              <option value="">RF-0003</option>
            </select>
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-600">Category</label>
            <select className="border rounded-lg px-3 py-2 text-[12px]" name="" id="">
              <option value="">Events</option>
              <option value="">Love Gift</option>
              <option value="">Utilities</option>
              <option value="">Music</option>
              <option value="">Foods</option>
              <option value="">Miscelaneous</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-600">Requested By:</label>
            <input
              type="number"
              className="border rounded-lg px-3 py-2"
              required
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-600">Amount</label>
            <input
              type="number"
              className="border rounded-lg px-3 py-2"
              placeholder="0.00"
              required
            />
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm text-gray-600">Notes / Remarks</label>
          <textarea className="border rounded-lg px-3 py-2 h-30 resize-none"></textarea>
        </div>
      </div>

      {/* Attachments */}
      <div className="w-full bg-white border border-[#3c6f7d] shadow rounded-xl p-5 space-y-2 flex flex-col justify-center items-center">
        <div className="w-full">
          <h2 className="font-medium text-lg">Upload File</h2>
        </div>
        <input type="file" className="w-full border rounded-lg px-3 py-2" />
      </div>

      {/* Actions */}
      <div className="flex justify-end gap-3">
        <button className="px-5 py-2 border rounded-lg text-gray-700 hover:bg-gray-100">
          Clear
        </button>
        <button className="px-5 py-2 rounded-lg text-white bg-[#4160FF] hover:opacity-90">
          Create Voucher
        </button>
      </div>
    </Template>
  );
}

export default CreateVoucher;
