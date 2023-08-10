import React from "react"
import { currentLiveClasses, currentMeetings, upcomingLiveClasses, upcomingMeetings } from "../../data"
import { TMeeting } from "../../types/types"
import SectionDivider from "../../components/section-divider"
import DateView from "../../components/date-view"
import TimeView from "../../components/time-view"
import Link from "next/link"


export default function Meetings() {
  return (<div className="flex w-full gap-12 pt-5">
    <div className="flex flex-col flex-1">
      <div className="text-22 font-extrabold">1:1 Meetings</div>
      <div className="pt-7">
        <div className="font-extrabold text-16.5 text-blue-chill">Current Calls</div>
        <div className="flex pt-5 gap-5 flex-wrap">
          {currentMeetings.map((meeting: TMeeting, index: number) => <CallItem key={index} data={meeting} type="current" />)}
        </div>
      </div>
      <div className="pt-7">
        <SectionDivider />
        <div className="flex gap-1 items-center pt-5">
          <span className="font-extrabold text-16.5 text-blue-chill">Upcoming Calls</span>
          <span className="font-medium text-14.5">(6 Calls)</span>
        </div>
        <div className="flex gap-5 pt-5 flex-wrap">
          {upcomingMeetings.map((meeting: TMeeting, index: number) => <CallItem key={index} data={meeting} type={"upcoming"} />)}
        </div>
      </div>
    </div>
    <div className="border-l-1 border-slate w-1"></div>
    <div className="flex flex-col flex-1 overflow-hidden">
      <div className="text-22 font-extrabold">Live Classes</div>
      <div className="pt-7">
        <div className="flex gap-1 items-center">
          <span className="font-extrabold text-16.5 text-blue-chill">Currently Live Classes</span>
          <span className="font-medium text-14.5">(3 Classes)</span>
        </div>
        <div className="pt-5 flex overflow-x-auto">
          <div className="flex gap-5">
            {currentLiveClasses.map((meeting: TMeeting, index: number) => <ClassItem key={index} data={meeting} type="current" />)}
          </div>
        </div>
      </div>
      <div className="pt-7">
        <SectionDivider />
        <div className="flex gap-1 items-center pt-5">
          <span className="font-extrabold text-16.5 text-blue-chill">Upcoming Classes</span>
          <span className="font-medium text-14.5">(8 Classes)</span>
        </div>
        <div className="flex gap-5 pt-5 flex-wrap">
          {upcomingLiveClasses.map((meeting: TMeeting, index: number) => <ClassItem key={index} data={meeting} type={"upcoming"} />)}
        </div>
      </div>
    </div>
  </div>
  )
}

const CallItem = ({ data, type }: { data: TMeeting, type: 'current' | 'upcoming' }) => {
  return (
    <div className="bg-white rounded-md px-4 py-5 flex flex-col gap-2.5">
      <div><img src={data.thumb} /></div>
      <div className="font-extrabold text-16.5">Call with {data.instructor}</div>
      <TimeView />
      <DateView />
      {type === "current" ? <Link href="/" className="btn style1 mt-4">Join Now!</Link> : null}
    </div>
  )
}

const ClassItem = ({ data, type }: { data: TMeeting, type: 'current' | 'upcoming' }) => {
  return (
    <div className="bg-white rounded-md flex flex-col w-225">
      <div><img src={data.thumb} /></div>
      <div className="p-5 flex flex-col gap-2.5">
        <div className="font-extrabold text-16.5">Call with {data.instructor}</div>
        <TimeView />
        <DateView />
      </div>
    </div>
  )
}