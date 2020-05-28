import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import SeekData_recently from './seekdata_recently';
import TableData_recently from './tabledata_recently';
import './statistical.css';

class Statistical_recently extends Component {
  constructor() {
    super();
    this.state = {
      isClicked: 'hour',
    };
  }

  callbackHandlerFunction = (clickStatus) => {
    this.setState({
      isClicked: clickStatus,
    });
  };

  render() {
    let type = this.state.isClicked;
    let isType = '';
    let number = 'Số liệu';
    if (type === 'hour') {
      isType = 'Tổng số học sinh đã tham gia kiểm tra trong 24h qua là: ';
    } else if (type === 'week') {
      isType = 'Tổng số học sinh đã tham gia kiểm tra trong tuần qua là: ';
    } else {
      isType = 'Tổng số học sinh đã tham gia kiểm tra trong tháng qua là: ';
    }
    return (
      <div className="container-fluid">
        <SeekData_recently handleClickParent={this.callbackHandlerFunction} />
        <div className="col">
          <h4>
            {isType} {number}
          </h4>
        </div>
        {/* eslint-disable-next-line react/jsx-pascal-case */}
        <TableData_recently />
      </div>
    );
  }
}

export default Statistical_recently;
