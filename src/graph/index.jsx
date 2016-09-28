import { connect } from 'react-redux';
import React from 'react';
import { Chart } from 'react-d3-core';
import { BarChart } from 'react-d3-basic';


function mapStateToProps(state) {
  return {data: state.graph.get('data') };
}

function mapDispatchToProps(dispatch) {
  return { };
}

class Graph extends React.Component {
  render() {
    var width = 700,
        height = 400,
        title = "Bar Chart",
        chartSeries = [
          {
            field: 'remaining',
            name: 'Remaining'
          }
        ],
        x = function(d) {
          return d.index;
        },
        xScale = 'ordinal',
        xLabel = "Name",
        yLabel = "£",
        yTicks = [10, ".2s"];
        console.log(this.props.data);
    return (
      <BarChart
        title= {title}
        data= {this.props.data}
        width= {width}
        height= {height}
        chartSeries = {chartSeries}
        x= {x}
        xLabel= {xLabel}
        xScale= {xScale}
        yTicks= {yTicks}
        yLabel = {yLabel}
      />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Graph);
