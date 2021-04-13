import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { useQuery } from 'react-query'
import { getCoursesEnrolledUsers } from '../axiosClient';

export default function EnrolledUsersBarChart() {
  const { data, isLoading, isSuccess } = useQuery('user-enrolled-users', getCoursesEnrolledUsers)

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isSuccess) {
    const graphData = data.map(item => ({
      name: item.fullname,
      uv: item.enrolledusercount
    }))

    return (
      <BarChart
        width={500}
        height={370}
        data={graphData}
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
    )
  }

  return <div>Error..</div>
}
