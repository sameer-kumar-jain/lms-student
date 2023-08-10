import React from 'react'
import PendingCourseProgress from './pending-course-progress'
import Link from 'next/link'
import { TMyCourseItem } from '../types/types'
export default function PendingCourseItem(props: TMyCourseItem) {
  return (
    <div className='flex flex-col w-335'>
      <Link href={`/courses/${props.id}`}>
      <div className='flex gap-2 p-2 '>
        <div className='w-[135px]'>
          <img src={props.thumbnail} />
        </div>
        <div className='flex-1 flex flex-col justify-between'>
          <div className='font-bold text-18'>{props.title}</div>
          <div className='flex flex-col'>
            <div className='font-bold text-12'>{props.category}</div>
            <div className='font-bold text-xl text-energy-yellow'>{props.percentageComplete}%</div>
          </div>
        </div>
      </div>
      </Link>
      <PendingCourseProgress percentage={props.percentageComplete} />
    </div>
  )
}