import Template from "../../layout/Template";
import Headbar from "../home/home-components/Headbar";
import QuickAction2 from "../home/home-components/QuickAction2";
import CategoryContainer from "./CategoryContainer";

function ExpenseCategory() {
    return ( 
        <Template>
            <Headbar />
            <QuickAction2 />
            <div className="w-full p-4 flex flex-col gap-6">

        <CategoryContainer />

        {/* ===================== FILTERS + SEARCH ===================== */}
        <section className="bg-white p-4 rounded-xl shadow flex flex-col gap-3">
          <h2 className="text-lg font-semibold mb-2">Filters & Search</h2>

          <input type="date" className="border p-2 rounded-lg w-full" />
          <input type="date" className="border p-2 rounded-lg w-full" />

          <select className="border p-2 rounded-lg w-full">
            <option>All Categories</option>
            <option>Food</option>
            <option>Utilities</option>
            <option>Transportation</option>
            <option>Ministry</option>
            <option>Miscellaneous</option>
          </select>

          <input
            type="text"
            placeholder="Search..."
            className="border p-2 rounded-lg w-full"
          />

          <select className="border p-2 rounded-lg w-full">
            <option>Sort: Latest → Oldest</option>
            <option>Oldest → Latest</option>
            <option>Highest → Lowest</option>
            <option>Lowest → Highest</option>
          </select>
        </section>

        {/* ===================== CRUD TABLE ===================== */}
        <section className="bg-white p-4 rounded-xl shadow">
          <div className="flex justify-between mb-3">
            <h2 className="text-lg font-semibold">Expense Records</h2>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg w-full md:w-auto mt-2 md:mt-0">
              Add Expense
            </button>
          </div>

          <div className="overflow-x-auto">
            {/* <ExpenseCRUDTableMobile /> */}
          </div>
        </section>

        {/* ===================== EXPORT ===================== */}
        <section className="bg-white p-4 rounded-xl shadow flex flex-col gap-2">
          <h2 className="text-lg font-semibold mb-2">Download / Export</h2>
          <button className="bg-gray-700 text-white px-4 py-2 rounded-lg w-full">
            Export PDF
          </button>
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg w-full">
            Export Excel
          </button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg w-full">
            Export CSV
          </button>
        </section>

        {/* ===================== NOTES ===================== */}
        <section className="bg-white p-4 rounded-xl shadow">
          <h2 className="text-lg font-semibold mb-2">Notes / Remarks</h2>
          <textarea
            className="w-full border p-3 rounded-lg"
            rows="4"
            placeholder="Write your notes or reminders here..."
          />
        </section>
      </div>
        </Template>
     );
}

export default ExpenseCategory;