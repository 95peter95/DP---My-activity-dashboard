import { eachMonthOfInterval, isWithinInterval, lastDayOfMonth } from "date-fns";
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


export default function LineGraphComponent({ logs }) {

  function getGraphData() {
    if (logs.length > 1) {

      const firstTimeStamp = new Date(logs[0].timestamp)
      const lastTimeStamp = new Date(logs[logs.length - 1].timestamp)

      const months = eachMonthOfInterval({
        start: firstTimeStamp,
        end: lastTimeStamp
      })

      const graphData = months.map(month => {
        const monthLogs =  getMonthLogs(month, logs)

        return {
          name: month.toLocaleString('en', { month: 'long' }),
          totalActivities: monthLogs.length,
          testCompletions: monthLogs.filter(log => log.verb.display.en === 'completed').length,
          sesssionsCount:  monthLogs.filter(log => log.verb.display.en === 'logged into').length
        }
      })

      console.log(graphData);

      return graphData
    }

    return []
  }

  function getMonthLogs(month, logs) {
    return logs.filter(log => {
      return isWithinInterval(new Date(log.timestamp), {
        start: month,
        end: lastDayOfMonth(month)
      })
    })

  }


  getGraphData()

  console.log('logs');
  console.log(logs);

  return (
    <LineChart
      width={500}
      height={400}
      data={getGraphData()}
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
      <Legend verticalAlign="bottom" height={50} />
      <Line
        name="Total activities"
        type="monotone"
        dataKey="totalActivities"
        stroke="#82ca9d"
        activeDot={{ r: 8 }}
      />
      <Line name="Test completions" type="monotone" dataKey="testCompletions" stroke="#8884d8" />
      <Line name="Number of sessions" type="monotone" dataKey="sesssionsCount" stroke="red" />
    </LineChart>
  );
}
