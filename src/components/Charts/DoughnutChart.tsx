import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  title: "HELLO world",
  labels: ["Alger", "Oran", "Jijel", "Boumerdes", "Others"],
  datasets: [
    {
      label: "Demand",
      data: [38.6, 22.5, 8.1, 7.2, 23.6],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const DoughnutChart = () => {
  return (
    <Doughnut
      data={data}
      options={{
        plugins: {
          tooltip: {
            callbacks: {
              label: (item) => `${item.label}: ${item.formattedValue}%`,
            },
          },
        },
      }}
    />
  );
};

export default DoughnutChart;
