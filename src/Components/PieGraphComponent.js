import React, { PureComponent } from 'react';
import { PieChart, Pie, Legend, Tooltip, Cell, ResponsiveContainer } from 'recharts';

const data01 = [
  
  { name: 'Positive answers', value: 5 },
  { name: 'Number of answers', value: 10 },
];


const COLORS = ['#8EB98A', '#b3001b', '#FFBB28', '#FF8042'];


export default class PieGraphComponent extends PureComponent {

  render() {

    return (
        <PieChart width={400} height={400}
        margin={{
          top: 0,
          right: 0,
          left: -30,
          bottom: 100,
        }}>
          <Pie
            dataKey="value"
            isAnimationActive={true}
            data={this.props.totalAnswers}
            cx="50%"
            cy="50%"
            outerRadius={80}
            label
          >
              {this.props.totalAnswers.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
            </Pie>
          <Tooltip />
          <Legend
          />
        </PieChart>
    );
  }
}
