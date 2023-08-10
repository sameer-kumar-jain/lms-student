import React from 'react'
import { communities, myCourses, topics } from '../../../data'
import Heading from '../../../components/heading'
import RadiusBox from '../../../components/radius-box'
import MyCourseItem from '../../../components/my-course-item'
import { TTopic } from '../../../types/types'

type TCourseModule = {
  title: string,
  desc: string,
  videos: Array<TCourseModuleVideo>
}

type TCourseModuleVideo = {
  title: string,
  id: number
}
const courseModules: Array<TCourseModule> = [
  { title: 'Module 1', desc: 'What this course is all about', videos: [{ title: "video 1", id: 1 }] },
  { title: 'Module 2', desc: 'Pre-requisites', videos: [{ title: "video 1", id: 2 }, { title: "video 2", id: 3 }, { title: "video 3", id: 4 }] },
  { title: 'Module 3', desc: 'Final Processing and Conduct', videos: [{ title: "video 1", id: 5 }, { title: "video 2", id: 6 }, { title: "video 3", id: 7 }] }
]

export default function CoursePage({
  params,
  searchParams,
}: {
  params: { community_id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const course_id = params.community_id as string
  const currentCommunity = communities.find(community => community.id === parseInt(course_id || '0', 10))
  return (
    <div className='flex gap-11'>
      <div className='flex-1 flex flex-col gap-5 '>
        <div className='flex-1'>
          <Heading text={currentCommunity?.title || ""} />
          <span className='text-13 font-semibold'>25 Topics</span>
        </div>
        <MyCourses />
      </div>

      <div className='w-270 flex flex-col gap-5'>
        <div className='p-3 bg-white rounded-md my-5'>Search</div>
        <div className='flex pt-8 justify-between'>
          <div className='btn style3 flex gap-3 items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M7 1V13" stroke="#0C8D92" stroke-width="2" stroke-linecap="round" />
              <path d="M1 7L13 7" stroke="#0C8D92" stroke-width="2" stroke-linecap="round" />
            </svg>
            <span>Post a question</span>
          </div>
          <button className='btn style1'>{`< Back`}</button>
        </div>
        <div className='rounded-md p-7 text-12.5 bg-white'>
          This group will help you learn how to prepare for the interview and execute successfully at ESSEC. It offer deep learning about the resources and material required for the interview. Documentation preparation before the interview, Process involved and more.
        </div>
      </div>
    </div>
  )
}

const MyCourses = () => {

  return <>
    <RadiusBox>
      <div className='flex flex-col p-7 gap-6'>
        {topics.map((topic: TTopic, index: number) => <div className='flex gap-6 course-item'>
          <div className='w-[100px]'>
            <img src={topic.thumb} />
          </div>
          <div className='flex-1 flex flex-col gap-3 justify-center'>
            <div className='font-bold text-base max-w-[450px]'>{topic.title}</div>
            <div className="flex gap-1 items-center">
              <span className="text-13 font-bold">30K</span>
              <span className="text-11 text-black">Posts</span>
            </div>
          </div>
          <div className='flex flex-col justify-center'>
            <button className='btn style1'>Visit</button>
          </div>
        </div>)}
      </div>
    </RadiusBox>
  </>
}