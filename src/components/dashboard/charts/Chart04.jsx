import { useEffect } from "react";
import * as echarts from "echarts";

function Chart04() {
  useEffect(() => {
    var chartDom = document.getElementById("chart04");
    var myChart = echarts.init(chartDom);
    window.addEventListener("resize", () => {
      myChart.resize();
    });
    var option;
    option = {
      dataset: {
        source: [
          ["qtde", "unidade"],
          [5, "Unidade 1"],
          [15, "Unidade 2"],
          [3, "Unidade 3"],
          [7, "Unidade 4"],
          [9, "Unidade 5"],
          [12, "Unidade 6"],
          [1, "Unidade 7"],
          [2, "Unidade 8"],
          [4, "Unidade 9"],
        ],
      },
      title: {
        text: "Mp atrasadas x dias",
        left: "center",
      },
      grid: { containLabel: true },
      xAxis: { name: "" },
      yAxis: { type: "category" },
      visualMap: {
        orient: "horizontal",
        left: "center",
        min: 0,
        max: 20,
        text: ["Muito urgente", "Pouco urgente"],
        // Map the score column to color
        dimension: 0,
        inRange: {
          color: ["#65B581", "#FFCE34", "#FD665F"],
        },
      },
      series: [
        {
          type: "bar",
          encode: {
            // Map the "amount" column to X axis.
            x: "qtde",
            // Map the "product" column to Y axis
            y: "unidade",
          },
        },
      ],
    };
    option && myChart.setOption(option);
  });

  return (
    <div className="h-100 w-60/100">
      <div id="chart04" className="h-full"></div>
    </div>
  );
}

export default Chart04;
