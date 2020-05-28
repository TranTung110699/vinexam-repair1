import React, { Component } from 'react';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import 'bootstrap/dist/css/bootstrap.css';
import 'antd/dist/antd.css';

const data = [
  {
    name: 'Page A',
    'Thí sinh đã đăng kí': 50,
    'Thí sinh đã tham gia thi': 20,
    'Thí sinh bị đánh dấu bài': 12,
  },
  {
    name: 'Page A',
    'Thí sinh đã đăng kí': 35,
    'Thí sinh đã tham gia thi': 15,
    'Thí sinh bị đánh dấu bài': 20,
  },
  {
    name: 'Page A',
    'Thí sinh đã đăng kí': 40,
    'Thí sinh đã tham gia thi': 35,
    'Thí sinh bị đánh dấu bài': 5,
  },
  {
    name: 'Page A',
    'Thí sinh đã đăng kí': 32,
    'Thí sinh đã tham gia thi': 30,
    'Thí sinh bị đánh dấu bài': 2,
  },
  {
    name: 'Page A',
    'Thí sinh đã đăng kí': 46,
    'Thí sinh đã tham gia thi': 40,
    'Thí sinh bị đánh dấu bài': 6,
  },
  {
    name: 'Page A',
    'Thí sinh đã đăng kí': 35,
    'Thí sinh đã tham gia thi': 33,
    'Thí sinh bị đánh dấu bài': 2,
  },
  {
    name: 'Page A',
    'Thí sinh đã đăng kí': 36,
    'Thí sinh đã tham gia thi': 36,
    'Thí sinh bị đánh dấu bài': 0,
  },
];

class Flowchart extends Component {
  render() {
    return (
      <BarChart width={700} height={550} data={data}>
        <CartesianGrid strokeDasharray="10 10" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Thí sinh đã đăng kí" fill="#8884d8" />
        <Bar dataKey="Thí sinh đã tham gia thi" fill="#82ca9d" />
        <Bar dataKey="Thí sinh bị đánh dấu bài" fill="red" />
      </BarChart>
    );
  }
}

export default Flowchart;
