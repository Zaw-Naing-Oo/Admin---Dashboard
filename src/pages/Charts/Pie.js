import React from 'react'
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, AccumulationTooltip, Inject, AccumulationLegend } from '@syncfusion/ej2-react-charts';
import { pieChartData } from '../../data/dummy'
import { ChartsHeader } from '../../components'
import { useStateContext } from '../../contexts/ContextProvider'

const Pie = () => {

  const { currentMode} = useStateContext();

  return (
    <div className=' m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <ChartsHeader category="Pie" title="Project Cost Breakdown" />
      <AccumulationChartComponent
        id='charts'
        legendSettings={ { background: "white", }}
        tooltip={{ 
          enable: true, format: '${point.x} : <b>${point.y}%</b>'
         }}
        background={currentMode === 'Dark' ? '#33373E' : '#fff'}
      >
        <Inject services={[AccumulationTooltip, AccumulationLegend]}/>
        <AccumulationSeriesCollectionDirective>
          <AccumulationSeriesDirective dataSource={pieChartData} xName='x' yName='y' tooltipMappingName='text' >
          </AccumulationSeriesDirective>
      </AccumulationSeriesCollectionDirective>
      </AccumulationChartComponent>
    </div>
  )
}

export default Pie