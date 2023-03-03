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
      text: "Most demanded medicines",
    },
  },
};

const labels = [
  "Paracetamol 500mg Tablet",
  "Ibuprofen 400mg Tablet",
  "Augmentin 625 Duo Tabler",
  "Amoxicillin 500mg Capsule",
  "Vitamin B Complex Capsule",
  "Cetirizine 10mg Tablet",
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
          (labels.length - index) * 10000 + Math.floor(Math.random() * 1000)
      ),
      backgroundColor: "#2ECC71",
    },
  ],
};

const MostDemanded = () => {
  return <Bar options={options} data={data} />;
};

export default MostDemanded;
