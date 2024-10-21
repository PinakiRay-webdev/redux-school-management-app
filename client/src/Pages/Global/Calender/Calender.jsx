import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useCalendarApp, ScheduleXCalendar } from '@schedule-x/react'
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
    views: [
      createViewDay({ startHour: 7, endHour: 14 }), // Set time from 7:00 AM to 2:00 PM for Day view
      createViewWeek({ startHour: 7, endHour: 14 }), // Set time from 7:00 AM to 2:00 PM for Week view
      createViewMonthGrid(),
      createViewMonthAgenda(),
    ],
    events: [
      {
        id: '1',
        title: 'Event 1',
        start: '2024-10-22 10:15',
        end: '2024-10-22 11:15',
      },
      {
        id: '2',
        title: 'Event 2',
        start: '2024-10-23 10:15',
        end: '2024-10-23 11:15',
      },
    ],
  }, plugins)

  const sideBarStatus = useSelector((state) => state.sidebar.isOpen)

  useEffect(() => {
    // get all events
    calendar.eventsService.getAll()
  }, [])

  return (
    <div className={`${sideBarStatus ? "pl-[12vw]" : "pl-[5vw]"} transition-all duration-150 ease-in-out`}>
      <div className='px-3 py-5'>
        <ScheduleXCalendar calendarApp={calendar} />
      </div>
    </div>
  )
}

export default Calender
