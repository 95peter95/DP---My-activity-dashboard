import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Attempt 1',
    uv: 25, 
  },
  {
    name: 'Attempt 2',
    uv: 30,
    
  },
  {
    name: 'Attempt 3',
    uv: 80,
  }
];

export default class AreaGraphComponent extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/simple-area-chart-4ujxw';

  render() {
    return (
      
        <AreaChart
          width={500}
          height={340}
          data={data}
          margin={{
            top: 10,
            right: 0,
            left: -35,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" name="Result %" dataKey="uv" stroke="#8884d8" fill="#488E3F" />
        </AreaChart>
      
    );
  }
}