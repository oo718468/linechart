import { Chart } from "react-google-charts";

export const data = [
  ["date", "Ko'rgan odamlar soni", "Ko'ruvlar soni", "clicklar soni"],
  ["1-aprel", 37.8, 50.8, 50.8],
  ["2-aprel", 30.9, 69.5, 32.4],
  ["3-aprel", 25.4, 57, 25.7],
  ["4-aprel", 11.7, 43.8, 10.5],
  ["5-aprel", 11.9, 50.6, 10.4],
  ["6-aprel", 8.8, 80.6, 7.7],
  ["7-aprel", 7.6, 50.3, 9.6],
  ["8-aprel", 12.3, 29.2, 10.6],
  ["9-aprel", 80.9, 90.9, 70.8],
  ["10-aprel", 12.8, 30.9, 11.6],
  ["11-aprel", 5.3, 7.9, 4.7],
  ["12-aprel", 6.6, 8.4, 5.2],
  ["13-aprel", 4.8, 6.3, 3.6],
  ["14-aprel", 4.2, 6.2, 3.4],
  ["15-aprel", 40.2, 50.2, 70.4],
  ["16-aprel", 40.2, 50.2, 70.4],
];
export const options = {
  title: "Statistika",
  curveType: "function",
  legend: { position: "top" },
};

function ChartBig() {
  return (
    <div>
      <div className="salom">
        <Chart
          chartType="LineChart"
          width="100%"
          height="400px"
          data={data}
          options={options}
        />
      </div>
    </div>
  );
}

export default ChartBig;
