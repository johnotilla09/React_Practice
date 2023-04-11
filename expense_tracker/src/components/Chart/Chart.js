import React from "react";

import ChartBar from "./ChartBar";
import './Chart.css';

const Chart = props => {
    return (
      <div>
        {props.dataPoints.map((dataPoint) => (
          <ChartBar
            key={dataPoint.label}
            value={dataPoint.value}
            maxvalue={null}
            label={dataPoint.label}
          />
        ))}
      </div>
    );
};

export default Chart;