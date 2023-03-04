import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
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
      text: "SELL / MONTH",
    },
  },
};

const labels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const data: ChartData<"bar", number[], string> = {
  labels,
  datasets: [
    {
      label: "",
      animation: {
        duration: 2000,
      },
      data: labels.map(
        (_, index) =>
          (labels.length - index) * 100000 + Math.floor(Math.random() * 100000)
      ),
      backgroundColor: (_) => "#2ECC71",
    },
  ],
};

const HomeBarChart = () => {
  return <Bar options={options} data={data} />;
};

export default HomeBarChart;
