import { useEffect } from "react";
import * as echarts from "echarts";

function Chart02() {
  function randomNumberVectorGenerator() {
    return Math.random() * (20 - 1) + 1;
  }

  let arr = [];

  for (let i = 0; i <= 12; i++) {
    arr[i] = parseInt(randomNumberVectorGenerator());
  }

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
      title: {
        text: "Users x Month",
        left: "center",
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
          data: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
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
          data: arr,
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
