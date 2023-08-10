/* eslint-disable @next/next/no-img-element */
import React from 'react'
import PendingCourseProgress from './pending-course-progress'
import Link from 'next/link'
import { TMyCourseItem } from '../types/types'
import TimeView from './time-view'
export default function RecommendedCourseItem(props: TMyCourseItem) {
  return (
    <div className='flex flex-col w-335'>
      <Link href={`/courses/${props.id}`}>
        <div className='flex gap-2 p-2 '>
          <div className='w-[135px]'>
            <img src={props.thumbnail} alt={props.title} />
          </div>
          <div className='flex-1 flex flex-col gap-4'>
            <div className='font-bold text-18'>{props.title}</div>
            <div className='flex flex-col'>
              <div className='font-bold text-12'>{props.category}</div>

            </div>
            <div className="flex gap-2 items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <g clip-path="url(#clip0_15_577)">
                  <path d="M8 0C6.41775 0 4.87104 0.469192 3.55544 1.34824C2.23985 2.22729 1.21447 3.47672 0.608967 4.93853C0.00346629 6.40034 -0.15496 8.00887 0.153721 9.56072C0.462403 11.1126 1.22433 12.538 2.34315 13.6569C3.46197 14.7757 4.88743 15.5376 6.43928 15.8463C7.99113 16.155 9.59966 15.9965 11.0615 15.391C12.5233 14.7855 13.7727 13.7602 14.6518 12.4446C15.5308 11.129 16 9.58225 16 8C15.9976 5.87901 15.1539 3.84559 13.6542 2.34583C12.1544 0.84606 10.121 0.00242613 8 0ZM8 14C6.81332 14 5.65328 13.6481 4.66658 12.9888C3.67989 12.3295 2.91085 11.3925 2.45673 10.2961C2.0026 9.19975 1.88378 7.99335 2.11529 6.82946C2.3468 5.66557 2.91825 4.59647 3.75736 3.75736C4.59648 2.91824 5.66558 2.3468 6.82946 2.11529C7.99335 1.88378 9.19975 2.0026 10.2961 2.45672C11.3925 2.91085 12.3295 3.67988 12.9888 4.66658C13.6481 5.65327 14 6.81331 14 8C13.9983 9.59077 13.3656 11.1159 12.2407 12.2407C11.1159 13.3656 9.59077 13.9983 8 14Z" fill="#0C8D92" />
                  <path d="M11 7H9V5C9 4.73478 8.89464 4.48043 8.70711 4.29289C8.51957 4.10536 8.26522 4 8 4C7.73478 4 7.48043 4.10536 7.29289 4.29289C7.10536 4.48043 7 4.73478 7 5V8C6.99993 8.13134 7.02574 8.26141 7.07597 8.38277C7.1262 8.50413 7.19985 8.6144 7.29273 8.70727C7.3856 8.80015 7.49587 8.8738 7.61723 8.92403C7.73859 8.97426 7.86866 9.00007 8 9H11C11.2652 9 11.5196 8.89464 11.7071 8.70711C11.8946 8.51957 12 8.26522 12 8C12 7.73478 11.8946 7.48043 11.7071 7.29289C11.5196 7.10536 11.2652 7 11 7Z" fill="#0C8D92" />
                </g>
                <defs>
                  <clipPath id="clip0_15_577">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <div className="text-12.5 font-bold text-blue-chill">2 Hrs</div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}