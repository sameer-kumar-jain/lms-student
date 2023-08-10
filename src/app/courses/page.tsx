import Heading from '../../components/heading'
import React from 'react'
import RadiusBox from '../../components/radius-box'
import SectionDivider from '../../components/section-divider'
import PendingCourseItem from '../../components/pending-course-item'
import MyCourseItem from '../../components/my-course-item'
import WhiteButton from '../../components/white-button'
import TransparentButton from '../../components/transparent-button'
import { myCourses } from '../../data'

export default function Courses() {

  return (
    <>
      <div>
        <PendingCourses />
      </div>
      <SectionDivider />
      <Heading text={"My Courses"} />
      <div className='pt-6 pb-2'>
        <WhiteButton>
          <span>All Courses</span>
          <span className='bg-blue-chill ml-2 px-2 py-1 rounded-[3px] text-white'>6</span>
        </WhiteButton>
        <TransparentButton>
          <span>Interview</span>
          <span className='bg-chicago ml-2 px-2 py-1 rounded-[3px] text-white'>2</span>
        </TransparentButton>
        <TransparentButton>
          <span>Letter</span>
          <span className='bg-chicago ml-2 px-2 py-1 rounded-[3px] text-white'>0</span>
        </TransparentButton>
        <TransparentButton>
          <span>Others</span>
          <span className='bg-chicago ml-2 px-2 py-1 rounded-[3px] text-white'>0</span>
        </TransparentButton>
      </div>
      <MyCourses />
    </>
  )
}

const PendingCourses = () => {
  return <>
    <Heading text={"Resume Your Courses"} />
    <div className='flex gap-8 pt-6 pb-10'>
      {myCourses.filter(course => !course.completed).slice(0, 3).map(item => <RadiusBox key={item.title}>
        <PendingCourseItem {...item} />
      </RadiusBox>)}
    </div>
  </>
}



const MyCourses = () => {

  return <>
    <RadiusBox>
      <div className='flex flex-col p-7 gap-6'>
        {myCourses.sort((a, b) => a.percentageComplete < b.percentageComplete ? 1 : -1).map(item => <MyCourseItem key={item.id} {...item} />)}
      </div>
    </RadiusBox>
  </>
}