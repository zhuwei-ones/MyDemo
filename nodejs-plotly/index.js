const echarts = require("echarts");
const fs = require("fs");

// 在 SSR 模式下第一个参数不需要再传入 DOM 对象
const chart = echarts.init(null, null, {
  renderer: "svg", // 必须使用 SVG 模式
  ssr: true, // 开启 SSR
  width: 400, // 需要指明高和宽
  height: 300,
});

// 像正常使用一样 setOption
chart.setOption({
  title: {
    text: "Stacked Line",
  },
  legend: {
    data: ["1111", "2222"],
  },
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
      name: "1111",
    },
    {
      data: [260, 2, 3, 4, 5, 3, 3],
      type: "line",
      name: "2222",
    },
  ],
});

// 输出字符串
const svgStr = chart.renderToSVGString();

console.log(svgStr);

fs.writeFileSync("bar.svg", chart.renderToSVGString(), "utf-8");
