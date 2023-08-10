import React from "react"
import { events } from "../../data"
import { TEvent } from "../../types/types";
import { format, parse, parseISO, startOfWeek, getDay } from "date-fns";
import SectionDivider from "../../components/section-divider";
import Switch from "../../components/switch";
import EventCalenderView from "../../components/client/event-calender";


export default function Events({
  params,
  searchParams,
}: {
  params: { view: string }
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const calenderView = searchParams.view === 'calender'
  const eventDates: { [key: string]: Array<TEvent> } = {};
  events.map(event => {
    if (!eventDates.hasOwnProperty(event.date)) {
      eventDates[event.date] = []
    }
    eventDates[event.date].push(event)
  })

  return (<div className="flex flex-col gap-7 pt-5">
    <div className="flex justify-between">
      <div className="font-extrabold text-22">Upcoming events</div>
      <div className="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none">
          <mask id="path-1-inside-1_179_1552" fill="white">
            <rect y="2.27295" width="17.6581" height="14.7273" rx="0.5" />
          </mask>
          <rect y="2.27295" width="17.6581" height="14.7273" rx="0.5" stroke="#003854" strokeWidth="1.4" mask="url(#path-1-inside-1_179_1552)" />
          <rect x="3.06567" y="5.11377" width="2.31171" height="1.92802" rx="0.2" fill="#003854" />
          <rect x="7.64819" y="5.11377" width="2.31171" height="1.92802" rx="0.2" fill="#003854" />
          <rect x="12.2307" y="5.11377" width="2.31171" height="1.92802" rx="0.2" fill="#003854" />
          <rect x="3.06567" y="8.74707" width="2.31171" height="1.92802" rx="0.2" fill="#003854" />
          <rect x="7.64819" y="8.74707" width="2.31171" height="1.92802" rx="0.2" fill="#003854" />
          <rect x="3.06567" y="12.3784" width="2.31171" height="1.92802" rx="0.2" fill="#003854" />
          <rect x="7.64819" y="12.3784" width="2.31171" height="1.92802" rx="0.2" fill="#003854" />
          <rect x="12.2307" y="8.74707" width="2.31171" height="1.92802" rx="0.2" fill="#003854" />
          <path d="M3.06567 0.2C3.06567 0.0895429 3.15522 0 3.26567 0H5.17738C5.28784 0 5.37738 0.0895431 5.37738 0.2V2.86438C5.37738 2.97484 5.28784 3.06438 5.17738 3.06438H3.26567C3.15522 3.06438 3.06567 2.97484 3.06567 2.86438V0.2Z" fill="#003854" />
          <path d="M12.2285 0.2C12.2285 0.0895429 12.3181 0 12.4285 0H14.3402C14.4507 0 14.5402 0.0895431 14.5402 0.2V2.86438C14.5402 2.97484 14.4507 3.06438 14.3402 3.06438H12.4285C12.3181 3.06438 12.2285 2.97484 12.2285 2.86438V0.2Z" fill="#003854" />
        </svg>
        <div className="pl-2 pr-3 text-15 font-medium">View by calender</div>
        <Switch on="Yes" off="No" value={calenderView} />
      </div>
    </div>
    <div className="flex gap-9">
      <div className={`flex flex-col gap-8 ${calenderView ? 'w-240' : ''}`}>
        {Object.keys(eventDates).map((key, index) => <div key={index}>
          {index > 0 ? <SectionDivider /> : null}
          <EventDateItem key={key} date={key} data={eventDates[key]} />
        </div>)}
      </div>
      {calenderView ? <div className="flex-1 border-l-1 pl-9">
        <div className="text-16.5 font-extrabold">Events By Calendar</div>
        <EventCalenderView />
      </div>
        :
        null
      }
    </div>
  </div>
  )
}

const EventDateItem = ({ data, date }: { data: Array<TEvent>, date: string }) => {
  return (
    <div>
      <div className="flex gap-3 items-center pt-1 pb-5">
        <div className="font-extrabold text-16.5 text-blue-chill">Today</div>
      </div>
      <div className="flex flex-wrap gap-7">
        {data.map(EventItem)}
      </div>
    </div>
  )
}

const EventItem = (data: TEvent, index:number) => {
  return (
    <div key={index} className="rounded-md bg-white w-335 flex flex-col gap-4">
      <div className="flex justify-between">
        <div className="flex gap-2 pl-4 pt-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none">
            <mask id="path-1-inside-1_179_513" fill="white">
              <rect y="2.27295" width="17.6581" height="14.7273" rx="0.5" />
            </mask>
            <rect y="2.27295" width="17.6581" height="14.7273" rx="0.5" stroke="#0C8D92" strokeWidth="1.4" mask="url(#path-1-inside-1_179_513)" />
            <rect x="3.06565" y="5.11377" width="2.31171" height="1.92802" rx="0.2" fill="#0C8D92" />
            <rect x="7.6482" y="5.11377" width="2.31171" height="1.92802" rx="0.2" fill="#0C8D92" />
            <rect x="12.2308" y="5.11377" width="2.31171" height="1.92802" rx="0.2" fill="#0C8D92" />
            <rect x="3.06565" y="8.74707" width="2.31171" height="1.92802" rx="0.2" fill="#0C8D92" />
            <rect x="7.6482" y="8.74707" width="2.31171" height="1.92802" rx="0.2" fill="#0C8D92" />
            <rect x="3.06565" y="12.3784" width="2.31171" height="1.92802" rx="0.2" fill="#0C8D92" />
            <rect x="7.6482" y="12.3784" width="2.31171" height="1.92802" rx="0.2" fill="#0C8D92" />
            <rect x="12.2308" y="8.74707" width="2.31171" height="1.92802" rx="0.2" fill="#0C8D92" />
            <path d="M3.06565 0.2C3.06565 0.0895429 3.15519 0 3.26565 0H5.17736C5.28781 0 5.37736 0.0895431 5.37736 0.2V2.86438C5.37736 2.97484 5.28781 3.06438 5.17736 3.06438H3.26565C3.15519 3.06438 3.06565 2.97484 3.06565 2.86438V0.2Z" fill="#0C8D92" />
            <path d="M12.2285 0.2C12.2285 0.0895429 12.318 0 12.4285 0H14.3402C14.4506 0 14.5402 0.0895431 14.5402 0.2V2.86438C14.5402 2.97484 14.4506 3.06438 14.3402 3.06438H12.4285C12.318 3.06438 12.2285 2.97484 12.2285 2.86438V0.2Z" fill="#0C8D92" />
          </svg>
          <div className="text-12.5 text-blue-chill font-bold uppercase">{format(parse(data.date, 'MM/dd/yyyy', new Date), 'eee, MMMM dd, yyyy')}</div>
        </div>
        <div className="px-4 py-3 flex gap-2 justify-center items-center bg-energy-yellow rounded-bl-md rounded-tr-md">
          <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
            <path d="M16.5859 8.5C16.5859 12.9738 12.9623 16.6 8.49296 16.6C4.02365 16.6 0.4 12.9738 0.4 8.5C0.4 4.02618 4.02365 0.4 8.49296 0.4C12.9623 0.4 16.5859 4.02618 16.5859 8.5Z" stroke="#003854" strokeWidth="0.8" />
            <path d="M8.02112 4.25V9.44444H11.7958" stroke="#003854" strokeWidth="1.5" stroke-linecap="round" />
          </svg>
          <div className="text-12.5 font-bold">6:00 PM EST</div>
        </div>
      </div>
      <div className="px-4 flex flex-col gap-3">
        <div className="text-16.5 font-extrabold">{data.title}</div>
        <div className="text-13.5 text-black font-light">{data.desc}</div>
      </div>
      <div className="pl-4 pt-4 flex justify-between">
        <div><button className="btn style1">Register Now!</button></div>
        <div className="flex px-4 py-2 gap-2 bg-slate-300 rounded-br-md">
          <div className="flex flex-col items-end">
            <span className="text-7.5 font-bold uppercase">MODE:</span>
            <span className="text-12.5 font-bold uppercase">{data.mode}</span>
          </div>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="19" viewBox="0 0 16 19" fill="none">
              <path d="M6.90424 14.3463V16.2097H4.16862V18.01H11.4636V16.2097H8.72799V14.3463C10.5691 14.1173 12.2526 13.2043 13.4358 11.7931C14.619 10.3819 15.213 8.57868 15.0968 6.75042C14.9806 4.92215 14.1629 3.20632 12.8103 1.95222C11.4577 0.69811 9.67179 0 7.81612 0C5.96045 0 4.17453 0.69811 2.82191 1.95222C1.46929 3.20632 0.651654 4.92215 0.535447 6.75042C0.419239 8.57868 1.0132 10.3819 2.1964 11.7931C3.37961 13.2043 5.06313 14.1173 6.90424 14.3463ZM7.81612 3.60722C8.53752 3.60722 9.24273 3.8184 9.84256 4.21405C10.4424 4.6097 10.9099 5.17205 11.186 5.82999C11.462 6.48793 11.5343 7.21191 11.3935 7.91038C11.2528 8.60884 10.9054 9.25043 10.3953 9.75399C9.88518 10.2576 9.23525 10.6005 8.52771 10.7394C7.82016 10.8784 7.08677 10.8071 6.42028 10.5345C5.75379 10.262 5.18413 9.80049 4.78334 9.20836C4.38255 8.61623 4.16862 7.92007 4.16862 7.20792C4.16862 6.25295 4.55291 5.3371 5.23695 4.66184C5.92099 3.98658 6.84874 3.60722 7.81612 3.60722Z" fill="#003854" />
              <path d="M7.81612 9.00841C8.82335 9.00841 9.63986 8.20237 9.63986 7.20806C9.63986 6.21376 8.82335 5.40771 7.81612 5.40771C6.80889 5.40771 5.99237 6.21376 5.99237 7.20806C5.99237 8.20237 6.80889 9.00841 7.81612 9.00841Z" fill="#003854" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}