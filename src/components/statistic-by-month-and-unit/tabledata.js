import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'antd/dist/antd.css';
import { Table } from 'antd';

const columns = [
  {
    title: 'Mã Cơ sở',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Cơ Sở',
    dataIndex: 'unit',
    key: 'unit',
    // eslint-disable-next-line
    render: (text) => <a>{text}</a>,
  },

  {
    title: 'Tháng',
    dataIndex: 'month',
    key: 'month',
  },

  {
    title: 'Thí sinh đã đăng kí',
    dataIndex: 'amount',
    key: 'amount',
  },
  {
    title: 'Thí sinh bị đánh dấu bài',
    dataIndex: 'amountX',
    key: 'amountX',
  },
  {
    title: 'Thí sinh đã tham gia',
    key: 'amountED',
    dataIndex: 'amountED',
    // render: tags => (
    //     <>
    //         {tags.map(tag => {
    //             // eslint-disable-next-line
    //             let color = tag.length > 5 ? 'geekblue' : 'green';
    //             if (tag === 'loser') {
    //                 color = 'volcano';
    //             }
    //             return (
    //                 <Tag color={color} key={tag}>
    //                     {tag.toUpperCase()}
    //                 </Tag>
    //             );
    //         })}
    //     </>
    // ),
  },
];

const data = [
  {
    key: '1',
    id: '1',
    name: 'John Brown',
    month: '22/02/2020',
    unit: 'Miền Bắc',
    amount: 32,
    amountED: 20,
    amountX: 12,
  },
  {
    key: '1',
    id: '1',
    name: 'John Brown',
    month: '22/02/2020',
    unit: 'Miền Bắc',
    amount: 32,
    amountED: 20,
    amountX: 12,
  },
  {
    key: '1',
    id: '1',
    name: 'John Brown',
    month: '22/02/2020',
    unit: 'Miền Bắc',
    amount: 32,
    amountED: 20,
    amountX: 12,
  },
  {
    key: '1',
    id: '1',
    name: 'John Brown',
    month: '22/02/2020',
    unit: 'Miền Bắc',
    amount: 32,
    amountED: 20,
    amountX: 12,
  },
  {
    key: '1',
    id: '1',
    name: 'John Brown',
    month: '22/02/2020',
    unit: 'Miền Bắc',
    amount: 32,
    amountED: 20,
    amountX: 12,
  },
  {
    key: '1',
    id: '1',
    name: 'John Brown',
    month: '22/02/2020',
    unit: 'Miền Bắc',
    amount: 32,
    amountED: 20,
    amountX: 12,
  },
  {
    key: '1',
    id: '1',
    name: 'John Brown',
    month: '22/02/2020',
    unit: 'Miền Bắc',
    amount: 32,
    amountED: 20,
    amountX: 12,
  },
  {
    key: '1',
    id: '1',
    name: 'John Brown',
    month: '22/02/2020',
    unit: 'Miền Bắc',
    amount: 32,
    amountED: 20,
    amountX: 12,
  },
  {
    key: '1',
    id: '1',
    name: 'John Brown',
    month: '22/02/2020',
    unit: 'Miền Bắc',
    amount: 32,
    amountED: 20,
    amountX: 12,
  },
  {
    key: '1',
    id: '1',
    name: 'John Brown',
    month: '22/02/2020',
    unit: 'Miền Bắc',
    amount: 32,
    amountED: 20,
    amountX: 12,
  },
  {
    key: '1',
    id: '1',
    name: 'John Brown',
    month: '22/02/2020',
    unit: 'Miền Bắc',
    amount: 32,
    amountED: 20,
    amountX: 12,
  },
  {
    key: '1',
    id: '1',
    name: 'John Brown',
    month: '22/02/2020',
    unit: 'Miền Bắc',
    amount: 32,
    amountED: 20,
    amountX: 12,
  },
  {
    key: '1',
    id: '1',
    name: 'John Brown',
    month: '22/02/2020',
    unit: 'Miền Bắc',
    amount: 32,
    amountED: 20,
    amountX: 12,
  },
];

class TableData extends Component {
  render() {
    return (
      <div>
        <Table columns={columns} dataSource={data} />
      </div>
    );
  }
}

export default TableData;
