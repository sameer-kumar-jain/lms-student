'use client'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import React from "react"
import { TEvent } from "../../types/types";
import { format, parse, startOfWeek, getDay } from "date-fns";
import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import { enUS } from "date-fns/locale";

const locales = {
  'en-US': enUS,
}

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
})

export default function EventCalenderView() {
  return (
    <Calendar
      localizer={localizer}
      events={[]}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500 }}
    />
  )
}