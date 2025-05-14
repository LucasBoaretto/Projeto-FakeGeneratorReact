import React, { useEffect } from "react";
import * as echarts from "echarts";

function Chart01() {
  const data = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  function randomNumberVectorGenerator() {
    return Math.random() * (50 - 1) + 1;
  }

  let arr = [];

  for (let i = 0; i <= 6; i++) {
    arr[i] = parseInt(randomNumberVectorGenerator());
  }

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
        data: data, // pega as categorias dentro do obejeto, não haveria necessidade mas está aqui para exemplo.
      },
      tooltip: {
        triggers: "axis",
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          data: arr,
          type: "line",
        },
      ],
      title: {
        text: "Saídas x Dia",
        left: "center",
      },
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
