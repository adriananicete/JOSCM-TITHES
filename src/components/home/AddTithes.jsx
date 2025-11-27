import { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import Template from "../../layout/Template";
import { UserContext } from "../../context/UserContext";
import Headbar from "./home-components/Headbar";

function AddTithes() {
  const denominations = [1000, 500, 200, 100, 50, 20, 10, 5, 1];
 
  const [amount, setAmount] = useState("");
  const navigate = useNavigate();
  const [counts, setCounts] = useState(
    Object.fromEntries(denominations.map((d) => [d, 0]))
  );

  const handleIncrement = (value) => {
    setCounts((prev) => ({
      ...prev,
      [value]: prev[value] + 1,
    }));
  };

  const handleDecrement = (value) => {
    setCounts((prev) => ({
      ...prev,
      [value]: Math.max(prev[value] - 1, 0),
    }));
  };

  const grandTotal = denominations.reduce(
    (sum, value) => sum + counts[value] * value,
    0
  );

  const { user } = useContext(UserContext)

  function capitalLetter(user) {
    const firstLetter = user.charAt(0).toUpperCase();
    const otherLetters = user.slice(1).toLowerCase();
    const formatName = firstLetter + otherLetters;
    return formatName;
  }

  return (
    <Template>
      {/* Page Title */}
      <Headbar title='Add Tithes' text='Record weekly giving and service collection.'/>

      {/* Service Information */}
      <form action="" className="flex flex-col justify-center items-center gap-4">
        <div className="w-full bg-white shadow border-[2px] border-[#3c6f7d] rounded-xl p-5 space-y-2">
        <h2 className="font-medium text-lg">Service Information</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-600">Date</label>
            <input type="date" className="w-auto border rounded-lg px-3 py-2" />
          </div>

          <div className=" flex flex-col gap-1">
            <label className="text-sm text-gray-600">Service Type</label>
            <select className="w-[100%] border rounded-lg px-3 py-2">
              <option>Sunday Service</option>
              <option>Anniversay Service</option>
              <option>Special Service</option>
            </select>
          </div>
        </div>
      </div>

      {/* Giving Details */}
      <div className="bg-white shadow border-[2px] border-[#3c6f7d] rounded-xl p-5 space-y-2">
        <h2 className="font-medium text-lg">Giving Details</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-600">Category</label>
            <select className="border rounded-lg px-3 py-2">
              <option>Tithes</option>
              <option>Offering</option>
              <option>Mission</option>
              <option>Building Fund</option>
              <option>Pledge</option>
            </select>
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-600">Amount Collected</label>
            <input
              type="number"
              className="border rounded-lg px-3 py-2"
              placeholder="0.00"
              required
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
            />
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm text-gray-600">Notes / Remarks</label>
          <textarea className="border rounded-lg px-3 py-2 h-24 resize-none"></textarea>
        </div>
      </div>

      {/* Denominations */}
      <div className="w-[100%] bg-white border-[2px] border-[#3c6f7d] shadow rounded-xl p-5 space-y-4">
        <h2 className="font-medium text-lg">Denominations</h2>

        <div className="space-y-3">
          {denominations.map((value) => (
            <div key={value} className="flex items-center justify-between">
              {/* DENOMINATION */}
              <span className="w-20 font-medium">₱{value}</span>

              {/* QTY INPUT */}
              <input
                type="number"
                value={counts[value] || 0}
                readOnly
                className="w-[60px] border rounded-lg px-3 py-1"
                placeholder="0"
                required
              />

              {/* BUTTONS */}
              <div className="flex items-center ml-5 gap-1">
                <button
                  type="button"
                  onClick={() => handleIncrement(value)}
                  className="bg-[#3c6f7d] text-white w-[30px] h-[30px] rounded-[5px]"
                >
                  +
                </button>

                <button
                  type="button"
                  onClick={() => handleDecrement(value)}
                  className="bg-[#3c6f7d] text-white w-[30px] h-[30px] rounded-[5px]"
                >
                  -
                </button>
              </div>

              {/* CALCULATED AMOUNT */}
              <span className="w-24 text-right text-gray-500">
                ₱{counts[value] * value}
              </span>
            </div>
          ))}
        </div>

        {/* Totals */}
        <div className="border-t pt-4">
          <div className="flex justify-between text-sm">
            <span className="font-medium">Auto Total:</span>
            <span className="font-semibold">₱{grandTotal}</span>
          </div>

          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Match with Amount?</span>
            {amount === "" ? null : grandTotal === Number(amount) ? ( // nothing shown if user hasn't typed
              <span className="text-green-600 font-medium">MATCH</span>
            ) : (
              <span className="text-red-600 font-medium">MISMATCH</span>
            )}
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex justify-end gap-3">
        <button onClick={() => navigate('/home')} className="px-5 py-2 border rounded-lg text-gray-700 hover:bg-gray-100">
          Back
        </button>
        <button className="px-5 py-2 rounded-lg text-white bg-[#4160FF] hover:opacity-90">
          Save Tithes
        </button>
      </div>
      </form>
    </Template>
  );
}

export default AddTithes;
