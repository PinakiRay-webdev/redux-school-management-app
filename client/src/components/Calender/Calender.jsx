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
      // Monday
      {
        id: '1',
        title: 'Maths',
        start: '2024-10-21 07:00',
        end: '2024-10-21 09:00',
      },
      {
        id: '2',
        title: 'Chemistry',
        start: '2024-10-21 09:15',
        end: '2024-10-21 11:15',
      },
      // Tuesday
      {
        id: '3',
        title: 'Physics',
        start: '2024-10-22 07:00',
        end: '2024-10-22 09:00',
      },
      {
        id: '4',
        title: 'Biology',
        start: '2024-10-22 09:15',
        end: '2024-10-22 11:15',
      },
      // Wednesday
      {
        id: '5',
        title: 'IT',
        start: '2024-10-23 07:00',
        end: '2024-10-23 09:00',
      },
      {
        id: '6',
        title: 'Maths',
        start: '2024-10-23 09:15',
        end: '2024-10-23 11:15',
      },
      // Thursday
      {
        id: '7',
        title: 'Chemistry',
        start: '2024-10-24 07:00',
        end: '2024-10-24 09:00',
      },
      {
        id: '8',
        title: 'Physics',
        start: '2024-10-24 09:15',
        end: '2024-10-24 11:15',
      },
      // Friday
      {
        id: '9',
        title: 'Biology',
        start: '2024-10-25 07:00',
        end: '2024-10-25 09:00',
      },
      {
        id: '10',
        title: 'IT',
        start: '2024-10-25 09:15',
        end: '2024-10-25 11:15',
      },
      // Saturday
      {
        id: '11',
        title: 'Maths',
        start: '2024-10-26 07:00',
        end: '2024-10-26 08:30',
      },
      {
        id: '12',
        title: 'Chemistry',
        start: '2024-10-26 08:45',
        end: '2024-10-26 10:15',
      },
      {
        id: '13',
        title: 'Physics',
        start: '2024-10-26 10:30',
        end: '2024-10-26 12:00',
      },
    ]
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
