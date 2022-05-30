import React from 'react'
import { SparklineComponent, Inject, SparklineTooltip } from '@syncfusion/ej2-react-charts'

const SparkLine = ({ id, height, width, data, color, currentColor, type }) => {
  return (
    <SparklineComponent 
      id={id} 
      height={height} 
      width={width} 
      lineWidth={1} 
      valueType="Numeric" 
      border={{ color: currentColor, width: 2 }} 
      fill={color} 
      dataSource={data} 
      xName="x" 
      yName='yval'  
      type={type}
      tooltipSettings={{
        visible: true,
        // formatting tooltip text
        format: '${x} : ${yval}',
        trackLineSettings: {
          visible: true,
          color: '#033e96',

      }
      }}
    >
       <Inject services={[SparklineTooltip]} />
    </SparklineComponent>
  )
}

export default SparkLine