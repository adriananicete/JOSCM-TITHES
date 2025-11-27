import { useNavigate } from "react-router";
import Template from "../../layout/Template";
import Headbar from "./home-components/Headbar";
import QuickAction from "./home-components/QuickActions";

function Expense() {
  const navigate = useNavigate();
  return (
    <Template>
      <Headbar
        title="Expenses"
        text="Record weekly spending and operational costs."
      />

      <QuickAction />

      <div className="w-full bg-white shadow border-[2px] border-[#3c6f7d] rounded-xl p-5 space-y-4">
        <h2 className="font-medium text-lg">Service Information</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-600">Date</label>
            <input type="date" className="w-auto border rounded-lg px-3 py-2" />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-600">PCF No.</label>
            <input
              type="number"
              className="border rounded-lg px-3 py-2"
              placeholder="PCF-00001"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
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
      <div className="w-full bg-white border-[2px] border-[#3c6f7d] shadow rounded-xl p-5 space-y-2 flex flex-col justify-center items-center">
        <div className="w-full">
          <h2 className="font-medium text-lg">Upload File</h2>
        </div>
        <input type="file" className="w-full border rounded-lg px-3 py-2" />
      </div>

      {/* Actions */}
      <div className="flex justify-end gap-3">
        <button
          className="px-5 py-2 border rounded-lg text-gray-700 hover:bg-gray-100"
        >
          Clear
        </button>
        <button className="px-5 py-2 rounded-lg text-white bg-[#4160FF] hover:opacity-90">
          Create Voucher
        </button>
      </div>
    </Template>
  );
}

export default Expense;
