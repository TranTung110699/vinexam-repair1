import React, { Component } from 'react';
import './seek.css';

class SeekData_recently extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: 'hour',
    };
  }

  handleClick = () => {
    let typeShow = document.getElementById('typeShow').value;
    this.setState({
      isClicked: typeShow,
    });
    this.props.handleClickParent(typeShow);
  };

  render() {
    return (
      <div>
        <div className="col">Chọn kiểu hiển thị:</div>
        <div className="col">
          <select
            className="form-control"
            id="typeShow"
            onChange={this.handleClick}
          >
            <option value="hour">24h qua</option>
            <option value="week">Tuần qua</option>
            <option value="month">Tháng qua</option>
          </select>
        </div>
      </div>
    );
  }
}

export default SeekData_recently;
