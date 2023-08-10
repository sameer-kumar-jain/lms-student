import React from 'react'
import { myCourses } from '../../../data'
import Heading from '../../../components/heading'
import RadiusBox from '../../../components/radius-box'

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
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const course_id = params.id as string
  const currentCourse = myCourses.find(course => course.id === parseInt(course_id || '0', 10))
  return (
    <div className='flex gap-11'>
      <div className='flex-1'>
        <Heading text={currentCourse?.title || ""} />
        <div className='flex gap-7'>
          <span className='text-13 font-semibold'>{currentCourse?.category}</span>
          <div className='flex gap-2.5 items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M9.99992 0.833252C8.18693 0.833252 6.41465 1.37087 4.9072 2.37811C3.39975 3.38536 2.22483 4.817 1.53103 6.49199C0.837224 8.16698 0.655693 10.0101 1.00939 11.7882C1.36309 13.5664 2.23613 15.1998 3.51811 16.4817C4.80009 17.7637 6.43344 18.6368 8.2116 18.9905C9.98975 19.3442 11.8329 19.1626 13.5079 18.4688C15.1828 17.775 16.6145 16.6001 17.6217 15.0926C18.629 13.5852 19.1666 11.8129 19.1666 9.99992C19.1666 7.56877 18.2008 5.23719 16.4817 3.51811C14.7627 1.79902 12.4311 0.833252 9.99992 0.833252ZM13.0891 13.0891C12.9328 13.2453 12.7209 13.3331 12.4999 13.3331C12.279 13.3331 12.067 13.2453 11.9108 13.0891L9.41076 10.5891C9.25447 10.4328 9.16664 10.2209 9.16659 9.99992V4.99992C9.16659 4.77891 9.25439 4.56694 9.41067 4.41066C9.56695 4.25438 9.77891 4.16659 9.99992 4.16659C10.2209 4.16659 10.4329 4.25438 10.5892 4.41066C10.7455 4.56694 10.8333 4.77891 10.8333 4.99992V9.65492L13.0891 11.9108C13.2453 12.067 13.3331 12.279 13.3331 12.4999C13.3331 12.7209 13.2453 12.9328 13.0891 13.0891Z" fill="#0C8D92" />
            </svg>
            <span className='text-12.5'>Total {currentCourse?.details.time} hrs</span>
          </div>

          <div className='flex gap-2.5 items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="20" viewBox="0 0 17 20" fill="none">
              <path fillRule="evenodd" clipRule="evenodd" d="M6.70947 5.02148L6.71739 5.03326C6.89968 5.17887 7.01248 5.40487 7.01248 5.65537C7.01248 6.09964 6.6531 6.46333 6.20461 6.46333H1.62375C0.730998 6.46333 0.00786984 7.18637 0.00786984 8.07912V11.1979C0.00786984 11.6422 0.371612 12.0059 0.815875 12.0059C1.06202 12.0059 1.2805 11.8967 1.42963 11.7227C1.45799 11.6903 1.5551 11.5893 1.57524 11.5696C2.0115 11.1574 2.59733 10.9069 3.23958 10.9069C4.57686 10.9069 5.66333 11.9934 5.66333 13.3307C5.66333 14.6681 4.57682 15.7545 3.23958 15.7545C2.59333 15.7545 2.00323 15.5 1.56688 15.0877C1.55114 15.0719 1.45413 14.9788 1.42963 14.9426C1.2805 14.769 1.05801 14.6557 0.807961 14.6557C0.363387 14.6557 0 15.0196 0 15.4636L0.00786984 17.7743C0.00786984 18.667 0.730998 19.39 1.62375 19.39H15.3584C16.2511 19.39 16.9742 18.667 16.9742 17.7743V14.2519C16.9742 13.8076 16.6104 13.4438 16.1662 13.4438C15.9397 13.4438 15.7338 13.5366 15.5847 13.6904L15.427 13.8601C14.9905 14.2841 14.397 14.5425 13.7424 14.5425C12.4051 14.5425 11.3187 13.4561 11.3187 12.1187C11.3187 10.7814 12.4051 9.69495 13.7424 9.69495C14.4009 9.69495 14.9946 9.95777 15.4309 10.3818L15.5563 10.5151C15.7058 10.6847 15.9239 10.794 16.1662 10.794C16.6104 10.794 16.9742 10.4302 16.9742 9.98618V8.07912C16.9742 7.18637 16.2511 6.46333 15.3584 6.46333H10.7691C10.3251 6.46333 9.96128 6.09959 9.96128 5.65537C9.96128 5.42902 10.0544 5.22347 10.2078 5.07394C10.8824 4.56072 11.3187 3.74449 11.3187 2.82773C11.3187 1.26423 10.0544 0 8.49093 0C6.92765 0 5.66329 1.26427 5.66329 2.82773C5.66333 3.71212 6.07122 4.50421 6.70947 5.02148Z" fill="#0C8D92" />
            </svg>
            <span className='text-12.5'>{currentCourse?.details.modules} Modules</span>
          </div>

          <div className='flex gap-2.5 items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="16" viewBox="0 0 19 16" fill="none">
              <path d="M17.3982 0H1.58166C0.711746 0 0 0.711747 0 1.58166V13.4583C0 14.3283 0.711746 15.04 1.58166 15.04H17.3982C18.2682 15.04 18.9799 14.3283 18.9799 13.4583V1.58166C18.9799 0.711747 18.2682 0 17.3982 0ZM7.98896 3.087L11.7822 5.67697L7.98896 8.26694V3.087ZM15.817 11.9534H7.46345C7.23807 12.4437 6.74538 12.7857 6.17045 12.7857C5.59551 12.7857 5.10322 12.4433 4.87744 11.9534H3.16332C2.83552 11.9534 2.5702 11.6877 2.5702 11.3603C2.5702 11.0329 2.83552 10.7671 3.16332 10.7671H4.87784C5.10322 10.2768 5.59551 9.9344 6.17084 9.9344C6.74617 9.9344 7.23846 10.2768 7.46385 10.7671H15.8174C16.1448 10.7671 16.4105 11.0329 16.4105 11.3603C16.4105 11.6877 16.1444 11.9534 15.817 11.9534Z" fill="#0C8D92" />
              <path d="M6.1705 11.9127C6.47558 11.9127 6.72289 11.6653 6.72289 11.3603C6.72289 11.0552 6.47558 10.8079 6.1705 10.8079C5.86542 10.8079 5.6181 11.0552 5.6181 11.3603C5.6181 11.6653 5.86542 11.9127 6.1705 11.9127Z" fill="#0C8D92" />
            </svg>
            <span className='text-12.5'>{currentCourse?.details.videos} Videos</span>
          </div>
        </div>
        <div className='pt-6'>
          {currentCourse?.desc}
        </div>
        <div className='pt-6'>
          <RadiusBox>
            <img className='w-full' src='/assets/images/video.png' />
            <div className='p-8'>
              <div className='font-bold text-18.5'>Overview Video Presentation</div>
              <div className='pt-3 font-light text-black leading-7'>This video will help you learn about the objective of this course. Why you need it? How it will help you? What concepts are covered in? And, at last how will you get benefited by using it</div>
            </div>
          </RadiusBox>
        </div>
      </div>
      <div className='w-[315px]'>
        <div className='bg-white shadow-0020 rounded-md'>
          <div className='pl-5 pt-4 pb-3 uppercase font-semibold text-13 border-b-1 border-snow '>Table of Content</div>
          <ul className='flex flex-col gap-8 list-decimal ml-8 py-6 text-15 text-blue-chill font-bold'>
            {courseModules.map((courseModule, index) => <CourseModuleItem key={index} {...courseModule} />)}
          </ul>
        </div>
      </div>
    </div>
  )
}

const CourseModuleItem = ({ title, desc, videos }: TCourseModule) => {
  return (
    <li>
      <div>{title}</div>
      <div className='text-14 text-nile-blue font-light'>{desc}</div>
      <ul className='list-disc ml-5 pt-3'>
        {videos.map(video => <li className='text-tundora'>{video.title}</li>)}
      </ul>
    </li>
  )
}
