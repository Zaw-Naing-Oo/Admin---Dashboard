import React from 'react'
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject, Resize, DragAndDrop} from '@syncfusion/ej2-react-schedule';
import { DatePicker } from '@syncfusion/ej2-react-calendars'
import { scheduleData } from '../data/dummy'
import { Header } from '../components';

const Calendar = () => {
  return (
    <div className=' m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl'>
      <Header title="Calanders" category="App" />
      <ScheduleComponent
        height='650px'
        eventSettings={
          {
            dataSource: scheduleData
          }
        }
        // We need to put starting date as now it is 2022 and the data of starting and ending date in dummy.js is 2021;
        selectedDate = { new Date(2021, 0, 10)}
      >
        <Inject services={[Day, Week, WorkWeek, Month, Agenda, DragAndDrop, Resize]} />
      </ScheduleComponent>
    </div>
  )
}

export default Calendar