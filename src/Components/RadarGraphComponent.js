import React, { PureComponent } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

const data = [
  {
    subject: 'Started',
    A: 10,
    fullMark: 20,
  },
  {
    subject: 'Viewed',
    A: 17,
    fullMark: 20,
  },
  {
    subject: 'Completed',
    A: 2,
    fullMark: 205,
  },
  {
    subject: 'Answered',
    A: 10,
    fullMark: 20,
  },
  {
    subject: 'Enrolled',
    A: 2,
    fullMark: 20,
  },
];

export default class RadarGraphComponent extends PureComponent {

  render() {
    return (
        <RadarChart cx="50%" cy="50%" outerRadius="80%"
        width={600}
        height={370}
        data={data}
        margin={{
          top: 25,
          right: 0,
          left: -100,
          bottom: 0,
        }}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis />
          <Radar name="Mike" dataKey="A" stroke="red" fill="#8884d8" fillOpacity={0.6} />
        </RadarChart>
        
    );
  }
}
