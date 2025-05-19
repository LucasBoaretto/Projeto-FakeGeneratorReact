import { useEffect, useState } from "react";
import * as echarts from "echarts";

function Chart02() {
  function randomNumberVectorGenerator() {
    return Math.random() * (20 - 1) + 1;
  }

  let arr = [];

  for (let i = 0; i <= 12; i++) {
    arr[i] = parseInt(randomNumberVectorGenerator());
  }

  const [data, setData] = useState({ month: [], users: [] });

  useEffect(() => {
    // Faz a requisição ao backend
    fetch("http://localhost:3000/usersxmonth")
      .then((response) => response.json())
      .then((data) => {
        setData({
          month: data.month,
          users: data.users,
        });
      })
      .catch((error) => console.error("Erro ao buscar dados:", error));
  }, []);

  useEffect(() => {
    const chartDom = document.getElementById("chart02");
    const myChart = echarts.init(chartDom);

    const option = {
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
          data: data.month,
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
          name: "Users",
          type: "bar",
          barWidth: "60%",
          data: data.users,
        },
      ],
    };

    myChart.setOption(option);
    window.addEventListener("resize", myChart.resize);

    return () => {
      window.removeEventListener("resize", myChart.resize);
      myChart.dispose();
    };
  }, [data]);

  console.log(data);

  return (
    <div className="h-100 w-full">
      <div id="chart02" className="h-full"></div>
    </div>
  );
}

export default Chart02;
