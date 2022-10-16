import React, { Component } from 'react';
import video from './conv.mp4';
import CanvasJSReact from './canvasjs.react';
import './App.css'

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
var dps = [{x: 1, y: 10}, {x: 2, y: 13}, {x: 3, y: 18}];   //dataPoints.
var xVal = dps.length + 1;
var yVal = 15;
var updateInterval = 1000;
class App extends Component {
	constructor() {
		super();
		this.updateChart = this.updateChart.bind(this);
	}
	componentDidMount() {
		setInterval(this.updateChart, updateInterval);
	}
	updateChart() {
		yVal = yVal +  Math.round(5 + Math.random() *(-5-5));
		dps.push({x: xVal,y: yVal});
		xVal++;
		if (dps.length >  10 ) {
			dps.shift();
		}
		this.chart.render();
	}
	render() {
		const options = {
      width:800,//in pixels
      height:500,//in pixels
      
			title :{
				text: ""
			},
			data: [{
				type: "line",
				dataPoints : dps
			}]
		}
		return (
      <div className="main">
        <header className="App-header">
        <h1 className='VovaEblan'>GoldEnjoyers</h1>
      </header>
      <div className='central'>
      <video src={video} className="conv" alt="video" loop="loop" autoplay="autoplay" type="video/mp4"/> 
      <CanvasJSChart options = {options}
				 onRef={ref => this.chart = ref}
			/>
      </div>
      <input className = "input" type="range" min="0" max="100" step="1" id='in'/>     
    </div>
			
			/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/
		);
	}
}
export default App;     