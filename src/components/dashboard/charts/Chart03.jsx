import { useEffect } from "react";
import * as echarts from "echarts";

function Chart03() {
  useEffect(() => {
    var chartDom = document.getElementById("chart03");
    var myChart = echarts.init(chartDom);
    window.addEventListener("resize", () => {
      myChart.resize();
    });
    var option;
    option = {
      title: {
        text: "Chamados x Atendente",
        subtext: "Fake Data",
        left: "center",
      },
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b} : {c} ({d}%)",
      },
      toolbox: {
        show: true,
        feature: {
          mark: { show: true },
          dataView: { show: true, readOnly: true },
          restore: { show: false },
          saveAsImage: { show: true },
        },
      },
      series: [
        {
          name: "Atendimentos",
          type: "pie",
          radius: [20, 140],
          center: ["50%", "50%"],
          // roseType: "radius",
          itemStyle: {
            borderRadius: 5,
          },
          label: {
            show: false,
          },
          emphasis: {
            label: {
              show: true,
            },
          },
          data: [
            { value: 7, name: "Fulano 1" },
            { value: 4, name: "Fulano 2" },
            { value: 8, name: "Fulano 3" },
            { value: 15, name: "Fulano 4" },
            { value: 13, name: "Fulano 5" },
            { value: 18, name: "Fulano 6" },
            { value: 3, name: "Fulano 7" },
            { value: 11, name: "Fulano 8" },
          ],
        },
      ],
    };
    option && myChart.setOption(option);
  });

  return (
    <div className="h-100 w-45/100">
      <div id="chart03" className="h-full"></div>
    </div>
  );
}

export default Chart03;
