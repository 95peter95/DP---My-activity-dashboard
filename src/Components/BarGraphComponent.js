import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'One course',
    uv: 3,
  },
  {
    name: 'two courses',
    uv: 5,
  },
  {
    name: 'three courses',
    uv: 2,
  },
  {
    name: 'Four courses',
    uv: 1,
  },
  {
    name: 'More than four',
    uv: 0,
  },
   
];

export default class BarGraphComponent extends PureComponent {

  render() {
    return (

        <BarChart
          width={500}
          height={370}
          data={data}
          margin={{
            top: 15,
            right: 0,
            left: -30,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis yAxisId="left" orientation="left" stroke="#7CB5EC" />
          
          <Tooltip />
          <Legend />
          <Bar name="Students" yAxisId="left" dataKey="uv" fill="#7CB5EC" />
          
        </BarChart>
    );
  }
}
