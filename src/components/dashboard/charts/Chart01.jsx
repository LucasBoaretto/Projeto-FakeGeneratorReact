import React, { useEffect } from "react";
import * as echarts from "echarts";

function Chart01() {
  useEffect(() => {
    var chartDom = document.getElementById("chart01");
    var myChart = echarts.init(chartDom);
    window.addEventListener("resize", () => {
      myChart.resize();
    });
    var option;
    option = {
      xAxis: {
        type: "category",
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          data: [150, 230, 224, 218, 135, 147, 260],
          type: "line",
        },
      ],
    };
    option && myChart.setOption(option);
  });

  return (
    <div className="h-100 w-full">
      <div id="chart01" className="h-full"></div>
    </div>
  );
}

export default Chart01;
