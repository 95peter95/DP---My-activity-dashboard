import React, { PureComponent } from 'react';
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts';

const data01 = [
  
  { name: 'Positive answers', value: 5 },
  { name: 'Number of answers', value: 10 },
];


export default class PieGraphComponent extends PureComponent {

  render() {
    return (
        <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            isAnimationActive={true}
            data={data01}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          />
          <Tooltip />
        </PieChart>
    );
  }
}
