import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const data = [
  {
    name: "January",
    uv: 0,
    pv: 0,
    amt: 0
  },
  {
    name: "February",
    uv: 50,
    pv: 10,
    amt: 5
  },
  {
    name: "March",
    uv: 90,
    pv: 15,
    amt: 17
  },
  {
    name: "",
    uv: 0,
    pv: 0,
    amt: 0
  }
];

export default function LineGraphComponent() {
  return (
    <LineChart
      width={500}
      height={400}
      data={data}
      margin={{
        top: 15,
        right: 0,
        left: -35,
        bottom: 0
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend verticalAlign="bottom" height={50}/>
      <Line
        name="Total activities"
        type="monotone"
        dataKey="uv"
        stroke="#82ca9d"
        activeDot={{ r: 8 }}
      />
      <Line name="Test completions" type="monotone" dataKey="pv" stroke="#8884d8" />
      <Line name="Number of sessions" type="monotone" dataKey="amt" stroke="red" />
    </LineChart>
  );
}
