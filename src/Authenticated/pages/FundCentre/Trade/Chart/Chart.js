
import React, { Component } from 'react';
import * as _ from 'lodash';

import { googStock as googData } from './data/googStock';
import ChartHighstock from './ChartHighstock';


class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 4, 
      data: _.cloneDeep(googData), 
      title: 'NVIDIA',
      type: 'highchart'
    };
  }

  render() {
	let content;
    content = <ChartHighstock data={this.state.data} title={this.state.title} />;
    

    return (
      <div className="App">

        <div className="container">

          {content}

        </div>
      </div>
    );
  }
}



export default Chart;
