import React, { useState } from 'react'
import PageHeading from '../components/page-heading'
import Heading from '../components/heading'
import RadiusBox from '../components/radius-box'
import PendingCourseProgress from '../components/pending-course-progress'
import Link from 'next/link'
import SectionDivider from '../components/section-divider'
import PendingCourseItem from '../components/pending-course-item'
import { myCourses } from '../data'
import RecommendedCourseItem from '../components/recommended-course-item'
import CalendarView from '../components/client/calender'

export default function Dashboard() {
  return (
    <div className='w-full px-8'>
      <div>
        <PageHeading text={<div className='flex items-center gap-2'><span className='text-17 font-normal'>Good Morning!</span><span>Peter</span></div>} />
      </div>
      <Heading text={'Overview of the Course Completion'} />
      <div className='flex gap-2 pb-8'>
        <RadiusBox className='border-oyster-bay border-1'>
          <div className='flex gap-2 w-[300px] pt-5 justify-between pb-7'>
            <div className='flex flex-col pl-6 gap-5'>
              <span className='text-40 text-blue-chill font-extrabold'>45%</span>
              <span className='text-13 font-bold uppercase'>Completion rate of the Courses</span>
            </div>
            <div className='flex flex-col gap-5'>
              <svg xmlns="http://www.w3.org/2000/svg" width="57" height="42" viewBox="0 0 57 42" fill="none">
                <path d="M0 12.9231L25.8462 25.8462L48.4615 14.5385V42H51.6923V12.9231L25.8462 0L0 12.9231Z" fill="#003854" />
                <path d="M9.69232 19.5752V33.9231L25.8462 42L42 33.9231V19.5752L25.8462 27.6522L9.69232 19.5752Z" fill="#003854" />
                <rect x="21.9" y="4.02306" width="33.7385" height="6.16923" rx="3.08462" fill="#0C8D92" stroke="white" />
                <rect x="24.1231" y="5.38461" width="23.2615" height="3.44615" rx="1.72308" fill="white" />
              </svg>
              <button className='btn style1' style={{ borderTopRightRadius: 0, borderBottomRightRadius: 0 }}>Resume</button>
            </div>
          </div>
          <PendingCourseProgress percentage={45} />
        </RadiusBox>
        <RadiusBox className='border-oyster-bay border-1'>
          <div className='flex gap-2 w-[300px] pt-5 justify-between pb-7'>
            <div className='flex flex-col pl-6 gap-5'>
              <span className='text-40 text-blue-chill font-extrabold'>09</span>
              <span className='text-13 font-bold uppercase'>Number of Videos Watched</span>
            </div>
            <div className='pr-6'>
              <svg xmlns="http://www.w3.org/2000/svg" width="54" height="42" viewBox="0 0 54 42" fill="none">
                <path d="M48.5855 0H4.41687C1.98759 0 0 1.98759 0 4.41687V37.5831C0 40.0124 1.98759 42 4.41687 42H48.5855C51.0148 42 53.0024 40.0124 53.0024 37.5831V4.41687C53.0024 1.98759 51.0148 0 48.5855 0ZM22.3096 8.62062L32.9024 15.8532L22.3096 23.0859V8.62062ZM44.1698 33.3805H20.8421C20.2127 34.7497 18.8368 35.7049 17.2313 35.7049C15.6258 35.7049 14.251 34.7486 13.6205 33.3805H8.83374C7.91834 33.3805 7.17741 32.6384 7.17741 31.7242C7.17741 30.8099 7.91834 30.0678 8.83374 30.0678H13.6216C14.251 28.6986 15.6258 27.7423 17.2324 27.7423C18.839 27.7423 20.2138 28.6986 20.8432 30.0678H44.1709C45.0852 30.0678 45.8272 30.8099 45.8272 31.7242C45.8272 32.6384 45.0841 33.3805 44.1698 33.3805Z" fill="#003854" />
                <path d="M17.2258 34.5267C18.7504 34.5267 19.9864 33.2907 19.9864 31.7661C19.9864 30.2415 18.7504 29.0056 17.2258 29.0056C15.7012 29.0056 14.4653 30.2415 14.4653 31.7661C14.4653 33.2907 15.7012 34.5267 17.2258 34.5267Z" fill="#0C8D92" />
              </svg>
            </div>
          </div>
        </RadiusBox>
        <RadiusBox className='border-oyster-bay border-1'>
          <div className='flex gap-2 w-[300px] pt-5 justify-between pb-7'>
            <div className='flex flex-col pl-6 gap-5'>
              <span className='text-40 text-blue-chill font-extrabold'>04 H</span>
              <span className='text-13 font-bold uppercase'>Learning Time Spent</span>
            </div>
            <div className='pr-6'>
              <svg xmlns="http://www.w3.org/2000/svg" width="43" height="45" viewBox="0 0 43 45" fill="none">
                <path d="M2.82692 6.5625C2.82692 6.2144 2.97584 5.88056 3.24092 5.63442C3.50599 5.38828 3.86551 5.25 4.24038 5.25H8.48077V6.5625H5.65384C5.27897 6.5625 4.91945 6.70078 4.65438 6.94692C4.3893 7.19306 4.24038 7.5269 4.24038 7.875V36.75C4.24038 37.0981 4.3893 37.4319 4.65438 37.6781C4.91945 37.9242 5.27897 38.0625 5.65384 38.0625H14.1346V35.4375H7.06731V9.1875H29.6827V14.4375H32.5096V7.875C32.5096 7.5269 32.3607 7.19306 32.0956 6.94692C31.8305 6.70078 31.471 6.5625 31.0961 6.5625H28.2692V5.25H32.5096C32.8845 5.25 33.244 5.38828 33.5091 5.63442C33.7742 5.88056 33.9231 6.2144 33.9231 6.5625V15.75H36.75V6.5625C36.75 5.51821 36.3032 4.51669 35.508 3.77827C34.7128 3.03984 33.6342 2.625 32.5096 2.625H31.0961C31.0961 1.92881 30.7983 1.26113 30.2682 0.768845C29.738 0.276562 29.019 0 28.2692 0L8.48077 0C7.73102 0 7.01198 0.276562 6.48183 0.768845C5.95168 1.26113 5.65384 1.92881 5.65384 2.625H4.24038C3.11576 2.625 2.03721 3.03984 1.24198 3.77827C0.446753 4.51669 0 5.51821 0 6.5625V40.6875C0 41.0356 0.148918 41.3694 0.413993 41.6156C0.679069 41.8617 1.03859 42 1.41346 42H15.5481V39.375H2.82692V6.5625ZM11.3077 2.625H25.4423V6.5625H11.3077V2.625Z" fill="#003854" />
                <circle cx="27.8151" cy="29.315" r="9.87667" fill="#0C8D92" />
                <path d="M27.815 14.5C24.8849 14.5 22.0205 15.3689 19.5842 16.9968C17.1479 18.6247 15.249 20.9385 14.1277 23.6455C13.0064 26.3526 12.713 29.3314 13.2847 32.2053C13.8563 35.0791 15.2673 37.7189 17.3392 39.7908C19.4111 41.8627 22.0509 43.2737 24.9247 43.8453C27.7986 44.417 30.7774 44.1236 33.4845 43.0023C36.1915 41.881 38.5053 39.9821 40.1332 37.5458C41.7611 35.1095 42.63 32.2451 42.63 29.315C42.63 25.3858 41.0691 21.6176 38.2908 18.8392C35.5124 16.0609 31.7442 14.5 27.815 14.5ZM27.815 40.8378C25.536 40.8378 23.3082 40.162 21.4133 38.8958C19.5184 37.6297 18.0415 35.8301 17.1693 33.7246C16.2972 31.6191 16.069 29.3022 16.5136 27.067C16.9582 24.8318 18.0557 22.7787 19.6672 21.1672C21.2787 19.5557 23.3318 18.4582 25.567 18.0136C27.8022 17.569 30.1191 17.7972 32.2246 18.6693C34.3301 19.5415 36.1297 21.0184 37.3958 22.9133C38.662 24.8082 39.3378 27.036 39.3378 29.315C39.3378 32.371 38.1238 35.3019 35.9628 37.4628C33.8019 39.6238 30.871 40.8378 27.815 40.8378Z" fill="#003854" />
                <path d="M29.4612 22.7306H26.169V29.315C26.1677 29.5316 26.2092 29.7464 26.2912 29.9469C26.3731 30.1475 26.4938 30.3299 26.6463 30.4837L31.5847 35.4221L33.9057 33.101L29.4612 28.6401V22.7306Z" fill="white" />
              </svg>
            </div>
          </div>
        </RadiusBox>
      </div>
      <div className='flex'>
        <div className='flex-1'>
          <SectionDivider />
          <div className="flex pt-5">
            <div className="font-extrabold text-18.5">Resume Your Courses</div>
            <div className="border-l-2 border-blue-chill mx-4 pl-4" >
              <Link className="text-blue-chill text-12 font-bold" href={`/resources/`}>Show All</Link>
            </div>
          </div>
          <div>
            <PendingCourses />
          </div>
          <SectionDivider />
          <div className="flex pt-5">
            <div className="font-extrabold text-18.5">Recommended Courses</div>
            <div className="border-l-2 border-blue-chill mx-4 pl-4" >
              <Link className="text-blue-chill text-12 font-bold" href={`/resources/`}>Show All</Link>
            </div>
          </div>
          <div>
            <RecommendedCourses />
          </div>
        </div>
        <div>
          <div className='w-350 bg-white flex flex-col rounded-md shadow-0020 p-6 gap-6'>
            <div className='flex justify-between items-center'>
              <span className='text-18.5 font-bold'>Agenda & Next Dates</span>
              <Link className="text-blue-chill text-12 font-bold" href={`/resources/`}>See All</Link>
            </div>
            <div className='text-12 font-light'>Next Deadlines</div>
            <div className='flex flex-col gap-8'>
              <div className='flex gap-2'>
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="19" viewBox="0 0 24 19" fill="none">
                    <path d="M22.3043 4.13043H0.826087C0.330435 4.13043 0 4.46087 0 4.95652V18.1739C0 18.6696 0.330435 19 0.826087 19H22.3043C22.8 19 23.1304 18.6696 23.1304 18.1739V4.95652C23.1304 4.46087 22.8 4.13043 22.3043 4.13043ZM10.7391 15.6957H4.13043C3.63478 15.6957 3.30435 15.3652 3.30435 14.8696C3.30435 13.3 4.13043 11.9783 5.36956 11.3174C5.12174 10.9043 4.95652 10.4087 4.95652 9.91304C4.95652 8.50869 6.03043 7.43478 7.43478 7.43478C8.83913 7.43478 9.91304 8.50869 9.91304 9.91304C9.91304 10.4087 9.74783 10.9043 9.5 11.3174C10.7391 11.9783 11.5652 13.3 11.5652 14.8696C11.5652 15.3652 11.2348 15.6957 10.7391 15.6957ZM19 14.0435H16.5217C16.0261 14.0435 15.6957 13.713 15.6957 13.2174C15.6957 12.7217 16.0261 12.3913 16.5217 12.3913H19C19.4957 12.3913 19.8261 12.7217 19.8261 13.2174C19.8261 13.713 19.4957 14.0435 19 14.0435ZM19 10.7391H14.0435C13.5478 10.7391 13.2174 10.4087 13.2174 9.91304C13.2174 9.41739 13.5478 9.08695 14.0435 9.08695H19C19.4957 9.08695 19.8261 9.41739 19.8261 9.91304C19.8261 10.4087 19.4957 10.7391 19 10.7391Z" fill="#0C8D92" />
                    <path d="M14.8696 5.78261H8.2609C7.76525 5.78261 7.43481 5.45217 7.43481 4.95652V4.13043C7.43481 1.81739 9.25221 0 11.5652 0C13.8783 0 15.6957 1.81739 15.6957 4.13043V4.95652C15.6957 5.45217 15.3652 5.78261 14.8696 5.78261ZM9.08699 4.13043H14.0435C14.0435 2.72609 12.9696 1.65217 11.5652 1.65217C10.1609 1.65217 9.08699 2.72609 9.08699 4.13043Z" fill="#0C8D92" />
                  </svg>
                </div>
                <div className='flex-1 flex flex-col gap-1'>
                  <span className='text-10.5'>Tuesday 6th jUNE - 6PM</span>
                  <span className='text-14 font-bold'>Closing date for HEC applications</span>
                </div>
                <div className='flex items-center justify-center w-[56px] h-[56px] rounded-[100px]' style={{ backgroundColor: "#FFE2E2" }}>
                  <span className='text-10.5 font-bold text-tundora text-center '>3 Days Left</span>
                </div>
              </div>
              <div className='flex gap-2'>
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="19" viewBox="0 0 24 19" fill="none">
                    <path d="M22.3043 4.13043H0.826087C0.330435 4.13043 0 4.46087 0 4.95652V18.1739C0 18.6696 0.330435 19 0.826087 19H22.3043C22.8 19 23.1304 18.6696 23.1304 18.1739V4.95652C23.1304 4.46087 22.8 4.13043 22.3043 4.13043ZM10.7391 15.6957H4.13043C3.63478 15.6957 3.30435 15.3652 3.30435 14.8696C3.30435 13.3 4.13043 11.9783 5.36956 11.3174C5.12174 10.9043 4.95652 10.4087 4.95652 9.91304C4.95652 8.50869 6.03043 7.43478 7.43478 7.43478C8.83913 7.43478 9.91304 8.50869 9.91304 9.91304C9.91304 10.4087 9.74783 10.9043 9.5 11.3174C10.7391 11.9783 11.5652 13.3 11.5652 14.8696C11.5652 15.3652 11.2348 15.6957 10.7391 15.6957ZM19 14.0435H16.5217C16.0261 14.0435 15.6957 13.713 15.6957 13.2174C15.6957 12.7217 16.0261 12.3913 16.5217 12.3913H19C19.4957 12.3913 19.8261 12.7217 19.8261 13.2174C19.8261 13.713 19.4957 14.0435 19 14.0435ZM19 10.7391H14.0435C13.5478 10.7391 13.2174 10.4087 13.2174 9.91304C13.2174 9.41739 13.5478 9.08695 14.0435 9.08695H19C19.4957 9.08695 19.8261 9.41739 19.8261 9.91304C19.8261 10.4087 19.4957 10.7391 19 10.7391Z" fill="#0C8D92" />
                    <path d="M14.8696 5.78261H8.2609C7.76525 5.78261 7.43481 5.45217 7.43481 4.95652V4.13043C7.43481 1.81739 9.25221 0 11.5652 0C13.8783 0 15.6957 1.81739 15.6957 4.13043V4.95652C15.6957 5.45217 15.3652 5.78261 14.8696 5.78261ZM9.08699 4.13043H14.0435C14.0435 2.72609 12.9696 1.65217 11.5652 1.65217C10.1609 1.65217 9.08699 2.72609 9.08699 4.13043Z" fill="#0C8D92" />
                  </svg>
                </div>
                <div className='flex-1 flex flex-col gap-1'>
                  <span className='text-10.5'>Tuesday 6th jUNE - 6PM</span>
                  <span className='text-14 font-bold'>Assessment date for HEC applications</span>
                </div>
                <div className='flex items-center justify-center w-[56px] h-[56px] rounded-[100px]' style={{ backgroundColor: "#D8F6F8" }}>
                  <span className='text-10.5 font-bold text-tundora text-center '>3 Days Left</span>
                </div>
              </div>
            </div>
            <div>
            <CalendarView  />
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}


const PendingCourses = () => {
  return <>
    <div className='flex gap-8 pt-6 pb-10'>
      {myCourses.filter(course => !course.completed).slice(0, 2).map(item => <RadiusBox key={item.title}>
        <PendingCourseItem {...item} />
      </RadiusBox>)}
    </div>
  </>
}


const RecommendedCourses = () => {
  return <>
    <div className='flex gap-8 pt-6 pb-10'>
      {myCourses.filter(course => !course.completed).slice(0, 1).map(item => <RadiusBox key={item.title}>
        <RecommendedCourseItem {...item} />
      </RadiusBox>)}
    </div>
  </>
}
