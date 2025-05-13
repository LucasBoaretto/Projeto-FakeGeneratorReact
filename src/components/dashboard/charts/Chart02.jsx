import { useEffect } from "react";
import * as echarts from "echarts";

function Chart02() {
  useEffect(() => {
    var chartDom = document.getElementById("chart02");
    var myChart = echarts.init(chartDom);
    window.addEventListener("resize", () => {
      myChart.resize();
    });
    var option;
    option = {
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow",
        },
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true,
      },
      xAxis: [
        {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          axisTick: {
            alignWithLabel: true,
          },
        },
      ],
      yAxis: [
        {
          type: "value",
        },
      ],
      series: [
        {
          name: "Direct",
          type: "bar",
          barWidth: "60%",
          data: [10, 52, 200, 334, 390, 330, 220],
        },
      ],
    };
    option && myChart.setOption(option);
  });

  return (
    <div className="h-100 w-full">
      <div id="chart02" className="h-full"></div>
    </div>
  );
}

export default Chart02;
