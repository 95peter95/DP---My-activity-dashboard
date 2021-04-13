import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default class AreaGraphComponent extends PureComponent {

  render() {

    const graphData = this.props.testAttempts.map((log, i) => ({
      uv: log.result.score.scaled * 100,
      name: `Attempt ${i+1}`
    }))

    return (
      
        <AreaChart
          width={500}
          height={340}
          data={graphData}
          margin={{
            top: 10,
            right: 0,
            left: -30,
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