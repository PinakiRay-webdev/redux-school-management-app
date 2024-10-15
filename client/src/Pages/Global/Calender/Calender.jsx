import React , {useEffect} from 'react'
import { useCalendarApp, ScheduleXCalendar } from '@schedule-x/react'
import { useSelector } from 'react-redux'
import {
  createViewDay,
  createViewMonthAgenda,
  createViewMonthGrid,
  createViewWeek,
} from '@schedule-x/calendar'
import { createEventsServicePlugin } from '@schedule-x/events-service'

import '@schedule-x/theme-default/dist/index.css'


function Calender() {
  const plugins = [createEventsServicePlugin()]
 
  const calendar = useCalendarApp({
    views: [createViewDay(), createViewWeek(), createViewMonthGrid(), createViewMonthAgenda()],
    events: [
      {
        id: '1',
        title: 'Event 1',
        start: '2024-10-15',
        end: '2024-10-16',
      },
    ],
  }, plugins)

  const sideBarStatus = useSelector((state) => state.sidebar.isOpen)
 
  useEffect(() => {
    // get all events
    calendar.eventsService.getAll()
  }, [])
 
  return (
    <div className={`w-full h-fit overflow-y-hidden ${sideBarStatus ? "pl-[12vw]" : "pl-[5vw]"} transition-all duration-150 ease-in-out`}>
      <ScheduleXCalendar calendarApp={calendar} />
    </div>
  )
}
 
export default Calender