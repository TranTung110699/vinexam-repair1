import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Flowchart from './flowchart';
import SeekData from './seekdata';
import TableData from './tabledata';

class Statistical extends Component {
  render() {
    return (
      <div className="container-fluid">
        <SeekData />
        <div className="row">
          <Flowchart />
          <div className="col-6">
            <TableData />
          </div>
        </div>
      </div>
    );
  }
}

export default Statistical;
