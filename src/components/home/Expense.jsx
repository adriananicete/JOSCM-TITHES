import { useNavigate } from "react-router";
import Template from "../../layout/Template";
import Headbar from "./home-components/Headbar";
import QuickAction from "./home-components/QuickActions";
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Bar, Line } from "react-chartjs-2";

import financeData from "../../data/financeData.json";
import { useState } from "react";

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
      backgroundColor: "#ccac55",
      borderColor: "#ccac55",
    },
  ]);

  // Function para mag-add ng bagong line
  const addTithesLine = () => {
    setDatasets((prev) => [
      ...prev,
      {
        label: "Tithes",
        data: financeData.map((item) => item.tithes),
        backgroundColor: "#8a61e9",
        borderColor: "#8a61e9",
      },
    ]);
  };

  const removeTithesLine = () => {
    setDatasets((prev) =>
      prev.filter((datasets) => datasets.label !== "Tithes")
    );
  };

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
                setDatasets((prev) => prev.filter((d) => d.label !== "Tithes"));
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
    </Template>
  );
}

export default Expense;
