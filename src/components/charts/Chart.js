import React from "react";
import "./styles.css";

import { Line } from "react-chartjs-2";

const data = {
  labels: ["0AM", "4AM", "8AM", "12PM", "16PM", "20PM","24PM"],
  datasets: [
    {
      label: "Online users",
      data: [133, 153, 285, 365, 386, 530, 230],
      fill: true,
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,1)"
    },
    {
      label: "Average",
      data: [250, 250, 250, 250, 250, 250,250],
      fill: false,
      borderColor: "#742774"
    }
  ]
};

export default function Chart() {
  return (
    <div className="App">
      <Line data={data}/>
    </div>
  );
}