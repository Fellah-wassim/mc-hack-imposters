import React from "react";
import { GrClose } from "react-icons/gr";
import { Row } from "@/src/pages/inventory";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

type Props = {
  data: Row;
  closePopUp: () => void;
};

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const newData = {
  labels,
  datasets: [
    {
      label: "",
      data: labels.map(
        (_, index) =>
          (labels.length - index) * 1000 +
          (Math.floor(Math.random() * 1000) % 2 === 0 ? 1 : -1) *
            Math.floor(Math.random() * 1000)
      ),
      borderColor: "#2ECC71",
      backgroundColor: "#2ECC71",
    },
  ],
};

const ChartPopUp: React.FC<Props> = ({ data, closePopUp }) => {
  return (
    <div className="flex flex-col h-full">
      <div className="flex p-4  items-center justify-between">
        <h1 className="font-serif font-semibold text-lg">{data.name}</h1>
        <GrClose className="cursor-pointer" onClick={closePopUp} />
      </div>
      <hr />
      <div className="flex justify-center grow h-full items-center flex-1">
        <div className="flex-1 w-full max-w-screen-sm ">
          <Line options={options} data={newData} />
        </div>
      </div>
    </div>
  );
};

export default ChartPopUp;
