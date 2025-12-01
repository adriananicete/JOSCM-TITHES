import { useNavigate } from "react-router";
import Template from "../../layout/Template";
import Headbar from "./home-components/Headbar";
import QuickAction from "./home-components/QuickActions";
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Bar, Line } from "react-chartjs-2";

import financeData from "../../data/financeData.json";
import { useState } from "react";
import Card from "../Card";
import CategoryListMobile from "../expense component/CategoryListMobile";
import CategoryChartMobile from "../expense component/CategoryChartMobile";
import SummaryCard from "../expense component/SummaryCard";
import HomeCards from "./home-components/HomeCards";
import { FaClipboardList } from "react-icons/fa";
import SummaryContainer from "../expense component/SummaryContainer";
import CategoryContainer from "../expense component/CategoryContainer";

defaults.plugins.title.display = true;
defaults.plugins.title.color = "black";
defaults.plugins.title.font.size = "16";
defaults.plugins.title.align = "start";

function Expense() {
  const navigate = useNavigate();

  const [datasets, setDatasets] = useState([
    {
      label: "Expenses",
      data: financeData.map((item) => item.expenses),
      backgroundColor: "#0ea5e9",
      borderColor: "#0ea5e9",
    },
  ]);

  return (
    <Template>
      <Headbar
        title="Expenses"
        text="Monitor spending and operational outflows weekly."
      />

      <div className="bg-[#8a61e9] flex justify-center items-end w-full h-[223px] rounded-[10px]">
        <div className=" flex flex-col justify-between items-center shadow-sm bg-[#ebf2fa] rounded-[10px] w-full h-[auto] p-2">
          <Line
            data={{
              labels: financeData.map((item) => item.month),
              datasets: datasets,
            }}
            options={{
              plugins: {
                title: {
                  text: "Financial Overview",
                },
              },
            }}
          />

          <div className="w-full text-center p-1">
            <button
              className="cursor-pointer bg-blue-500 py-1 px-4 rounded-[5px] text-[12px] text-white"
              onClick={() => {
                const hasTithes = datasets.some((d) => d.label === "Tithes");
                if (hasTithes) {
                  // remove Tithes
                  setDatasets((prev) =>
                    prev.filter((d) => d.label !== "Tithes")
                  );
                } else {
                  // add Tithes
                  setDatasets((prev) => [
                    ...prev,
                    {
                      label: "Tithes",
                      data: financeData.map((item) => item.tithes),
                      backgroundColor: "#8a61e9",
                      borderColor: "#8a61e9",
                    },
                  ]);
                }
              }}
            >
              {datasets.some((d) => d.label === "Tithes")
                ? "Remove Tithes"
                : "Add Tithes"}
            </button>
          </div>
        </div>
      </div>

      <QuickAction />

      <div className="bg-[#F3E8FF] w-[100%] h-[auto] flex justify-center items-end rounded-[10px] text-white">
        <div className="w-full h-[95%] bg-[linear-gradient(135deg,#0f1013,#454545,#575759)] rounded-[10px] flex justify-start items-center gap-3 p-3 shadow-sm">
          <div className=" w-full h-[100%] grid grid-cols-2 grid-row-3">
            <div className=" col-span-2 flex justify-between items-start h-[55px]">
              <p className="bg-[#7f38ef] p-1 rounded-[5px] text-[12px]">
                Total Expenses for this year:
              </p>
              <p className="text-[18px]">₱10,120.00</p>
            </div>
            <div className=" col-span-2">
                <p className="text-[#7f38ef] font-[600]">Budget Overview</p>
            </div>
            
            <div className=" flex flex-col justify-start items-start">
              <div>
                <p className="text-sm">Actual Spending:</p>
              <div className="">
                <p className="text-red-600 text-[18px]">₱5,000</p>
                <p className="text-[10px] text-red-500">Exceeded budget</p>
              </div>
              </div>
            </div>

            <div className=" flex flex-col justify-start items-end">
              <p className="text-sm">Monthly Budget:</p>
              <p className="text-[18px]">₱3,000</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-[auto] mt-3 flex flex-col gap-1">
        <p className="font-[600] ">Expense Features</p>

        <div className=" w-full h-[auto] grid grid-cols-2 gap-3  ">
          <HomeCards
            icon={FaClipboardList}
            title="Expense Summary"
            description="Quick overview of your spending data."
            color="#3281fb"
            link={'/expressSummary'}
          />

          <HomeCards
            icon={FaClipboardList}
            title="Expense Category"
            description="Grouped expense categories."
            color="#3ab677"
            link={'/expressCategory'}
          />
        </div>
      </div>

      
    </Template>
  );
}

export default Expense;
