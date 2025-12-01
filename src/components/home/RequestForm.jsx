import Template from "../../layout/Template";
import Headbar from "./home-components/Headbar";
import QuickAction2 from "./home-components/QuickAction2";

function RequestForm() {
    return ( 
        <Template>
            <Headbar title={'Request Form'} text={'Form for requesting items, services, or approval.'} />
            <QuickAction2 />

            <div className="w-full bg-white shadow border border-[#3c6f7d] rounded-xl p-5 space-y-4">
        <div className="flex justify-between items-center gap-1">
          <h2 className="font-medium text-lg">Service Information</h2>
          <p className="font-bold text-lg text-[#3c6f7d]">RF-0001</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1 text-[14px]">
            <label className="text-sm text-gray-600">Date</label>
            <input type="date" className="w-auto border rounded-lg px-3 py-2" />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-600">Category</label>
            <select className="border rounded-lg px-3 py-2 text-[14px]" name="" id="">
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
            <label className="text-sm text-gray-600">Estimated Amount</label>
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

      {/* Actions */}
      <div className="flex justify-end gap-3">
        <button className="px-5 py-2 border rounded-lg text-gray-700 hover:bg-gray-100">
          Clear
        </button>
        <button className="px-5 py-2 rounded-lg text-white bg-[#4160FF] hover:opacity-90">
          Submit Request
        </button>
      </div>
        </Template>
     );
}

export default RequestForm;