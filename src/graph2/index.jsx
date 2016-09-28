import { connect } from 'react-redux';
import React from 'react';
import {ComposedChart, BarChart, LineChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import {setGraphData1, setGraphData2} from '../actions';

function mapStateToProps(state) {
  return { 
    data: state.graph.get('data')
  };
}

function mapDispatchToProps(dispatch) {
  return { 
    onSetGraphData1: ()=> dispatch(setGraphData1()),
    onSetGraphData2: ()=> dispatch(setGraphData2()),
  };
}

class Graph2 extends React.Component {
  render() {
    const max = Math.max.apply(null, this.props.data.map(entry => entry.annuity + entry.drawdown));
    const yAxisMax = max * 1.3;
    return (
      <div>
    	<ComposedChart  width={600} height={300} data={this.props.data}
            margin={{top: 20, right: 30, left: 20, bottom: 5}}>
       <XAxis dataKey="index"/>
       <YAxis yAxisId="left" orientation="left" stroke="#8884d8" domain={[0, yAxisMax]}/>
       <YAxis yAxisId="right" orientation="right" stroke="#ff7300"/>
       <Tooltip/>
       <Legend />
       <Bar name="Annuity" dataKey="annuity" yAxisId="left" stackId="a" fill="#8884d8" barSize={5} />
       <Bar name="Drawdown" dataKey="drawdown" yAxisId="left" stackId="a" fill="#82ca9d" barSize={5} />
       <Line name="Fund value" type='monotone' yAxisId="right" dataKey='remaining' stroke='#ff7300'/>
      </ComposedChart >
    	<BarChart  width={600} height={300} data={this.props.data}
            margin={{top: 20, right: 30, left: 20, bottom: 5}}>
       <XAxis dataKey="index"/>
       <YAxis yAxisId="left" orientation="left" stroke="#8884d8" domain={[0, yAxisMax]}/>
       <Tooltip/>
       <Legend />
       <Bar name="Annuity" dataKey="annuity" yAxisId="left" stackId="a" fill="#8884d8" barSize={5} />
       <Bar name="Drawdown" dataKey="drawdown" yAxisId="left" stackId="a" fill="#82ca9d" barSize={5} />
      </BarChart >
    	<LineChart  width={600} height={300} data={this.props.data}
            margin={{top: 20, right: 30, left: 20, bottom: 5}}>
       <XAxis dataKey="index"/>
       <YAxis yAxisId="right" orientation="left" stroke="#ff7300"/>
       <Tooltip/>
       <Legend />
       <Line name="Fund value" type='monotone' yAxisId="right" dataKey='remaining' stroke='#ff7300'/>
      </LineChart >
      <button onClick={this.props.onSetGraphData1}>Data 1</button>
      <button onClick={this.props.onSetGraphData2}>Data 2</button>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Graph2);
