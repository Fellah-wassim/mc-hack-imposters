import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
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
  plugins: {
    title: {
      display: true,
      text: "Most Available medicines not demanded",
    },
  },
  responsive: true,
  interaction: {
    mode: "index" as const,
    intersect: false,
  },
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
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

export const data = {
  labels,
  datasets: [
    {
      label: "Demande",
      data: labels.map(
        (_, index) =>
          (labels.length - index) * 700 + Math.floor(Math.random() * 1000)
      ),
      backgroundColor: "#2ECC71",
      stack: "Stack 0",
    },
    {
      label: "Quantity",
      data: labels.map(
        (_, index) =>
          (labels.length - index) * 2000 + Math.floor(Math.random() * 1000)
      ),
      backgroundColor: "#ef4444",
      stack: "Stack 0",
    },
  ],
};

export function MostAvailableNotDemanded() {
  return <Bar options={options} data={data} />;
}
