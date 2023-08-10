import { TCategory, TChannel, TCommunity, TEvent, TLiveClasses, TMeeting, TMessage, TMyCourseItem, TResource, TTopic } from "../types/types";
import { addDays, format } from "date-fns";

export const myCourses: Array<TMyCourseItem> = [{
  thumbnail: "/assets/images/course-image.png",
  desc: "This course will help you learn how to prepare for the interview and execute successfully at ESSEC. It offer deep learning about the resources and material required for the interview. Documentation preparation before the interview, Process involved and more.",
  title: "How to prepare for the interview",
  category: "Category 1",
  percentageComplete: 45,
  details: { modules: 3, videos: 12, time: 3 },
  completed: false,
  id: 1
},
{
  thumbnail: "/assets/images/course-image.png",
  desc: "This course will help you to make a checklist of important documents required for the ESSEC Online screening and will save your time",
  title: "How to prepare for the interview",
  category: "Category 1",
  percentageComplete: 45,
  details: { modules: 3, videos: 12, time: 3 },
  completed: false,
  id: 2
},
{
  thumbnail: "/assets/images/course-image.png",
  desc: "This course will help you to make a checklist of important documents required for the ESSEC Online screening and will save your time",
  title: "How to prepare for the interview",
  category: "Category 1",
  percentageComplete: 45,
  details: { modules: 3, videos: 12, time: 3 },
  completed: false,
  id: 3
}, {
  thumbnail: "/assets/images/course-list-item-img-1.png",
  desc: "This course will help you to make a checklist of important documents required for the ESSEC Online screening and will save your time",
  title: "How to prepare documentation for ESSEC Online Screening?",
  category: "Category 1",
  percentageComplete: 100,
  details: { modules: 3, videos: 12, time: 3 },
  completed: true,
  id: 4
},
{
  thumbnail: "/assets/images/course-list-item-img-2.png",
  desc: "This course will help you to make a checklist of important documents required for the ESSEC Online screening and will save your time",
  title: "How to prepare for the interview",
  category: "Category 1",
  percentageComplete: 25,
  details: { modules: 3, videos: 12, time: 3 },
  completed: false,
  id: 5
},
{
  thumbnail: "/assets/images/course-list-item-img-3.png",
  desc: "This course will help you to make a checklist of important documents required for the ESSEC Online screening and will save your time",
  title: "Logical Reasoning + Conditional Question Formatting by Liza Chehal",
  category: "Category 1",
  percentageComplete: 25,
  details: { modules: 3, videos: 12, time: 3 },
  completed: false,
  id: 6
}]

export const resources: Array<TResource> = [{
  id: 6, title: "New",
  data: [{
    id: 1,
    title: "Business Sector Profiles",
    total: "70+ Reports"
  }]
}, {
  id: 1, title: "Business Projects",
  data: [{
    id: 2,
    title: "Business Sector Profiles",
    total: "70+ Reports"
  }, {
    id: 3,
    title: "Job Description Profiles",
    total: "70+ Reports"
  }]
}, {
  id: 2, title: "School Application Processes",
  data: [{
    id: 4,
    title: "Cover Letter Examples",
    total: "70+ Reports"
  }, {
    id: 5,
    title: "Resume Examples",
    total: "70+ Reports"
  }, {
    id: 6,
    title: "Essay Models",
    total: "70+ Reports"
  }, {
    id: 7,
    title: "School Descriptions",
    total: "70+ Reports"
  }]
}, {
  id: 3, title: "Motivational Interviews",
  data: [{
    id: 2,
    title: "Business Sector Profiles",
    total: "70+ Reports"
  }, {
    id: 3,
    title: "Job Description Profiles",
    total: "70+ Reports"
  }]
}, {
  id: 4, title: "Interview Processes",
  data: [{
    id: 2,
    title: "Business Sector Profiles",
    total: "70+ Reports"
  }, {
    id: 3,
    title: "Job Description Profiles",
    total: "70+ Reports"
  }]
}, {
  id: 5, title: "School Reports",
  data: [{
    id: 2,
    title: "Business Sector Profiles",
    total: "70+ Reports"
  }, {
    id: 3,
    title: "Job Description Profiles",
    total: "70+ Reports"
  }]
}]


export const resourceCategoryItems: Array<{
  id: number,
  type: string,
  title: string
}> = [{
  id: 1,
  type: 'presentation',
  title: 'France Top 10 B-Schools for Aspiran'
}, {
  id: 2,
  type: 'pdf',
  title: 'Growth in France Business Sectors'
},
{
  id: 3,
  type: 'video',
  title: 'Admission Status Overview Video'
}, {
  id: 4,
  type: 'presentation',
  title: 'How to plan your B-School Journey'
}, {
  id: 5,
  type: 'video',
  title: 'France Top 10 B-Schools for Aspiran'
}, {
  id: 6,
  type: 'presentation',
  title: 'France Top 10 B-Schools for Aspiran'
}, {
  id: 7,
  type: 'pdf',
  title: 'Growth in France Business Sectors'
},
{
  id: 8,
  type: 'video',
  title: 'Admission Status Overview Video'
}, {
  id: 9,
  type: 'presentation',
  title: 'How to plan your B-School Journey'
}, {
  id: 10,
  type: 'video',
  title: 'France Top 10 B-Schools for Aspiran'
}, {
  id: 11,
  type: 'presentation',
  title: 'France Top 10 B-Schools for Aspiran'
}, {
  id: 12,
  type: 'pdf',
  title: 'Growth in France Business Sectors'
},
{
  id: 13,
  type: 'video',
  title: 'Admission Status Overview Video'
}]

export const events: Array<TEvent> = [{
  date: format(new Date(), "MM/dd/yyyy"),
  time: '6:00',
  timezone: 'EST',
  title: 'Third Level Conference at ESSEC France 2023-2024',
  desc: 'Prep’me is Launching a grand event for aspiring students to learn more about ESSEC at its third level conference in the year 2023-2024. Please click here to participate',
  mode: "online"
}, {
  date: format(new Date(), "MM/dd/yyyy"),
  time: '6:00',
  timezone: 'EST',
  title: 'Third Level Conference at ESSEC France 2023-2024',
  desc: 'Prep’me is Launching a grand event for aspiring students to learn more about ESSEC at its third level conference in the year 2023-2024. Please click here to participate',
  mode: "online"
}, {
  date: format(new Date(), "MM/dd/yyyy"),
  time: '6:00',
  timezone: 'EST',
  title: 'Third Level Conference at ESSEC France 2023-2024',
  desc: 'Prep’me is Launching a grand event for aspiring students to learn more about ESSEC at its third level conference in the year 2023-2024. Please click here to participate',
  mode: "online"
}, {
  date: format(new Date(), "MM/dd/yyyy"),
  time: '6:00',
  timezone: 'EST',
  title: 'Third Level Conference at ESSEC France 2023-2024',
  desc: 'Prep’me is Launching a grand event for aspiring students to learn more about ESSEC at its third level conference in the year 2023-2024. Please click here to participate',
  mode: "online"
},
{
  date: format(addDays(new Date(), 1), "MM/dd/yyyy"),
  time: '6:00',
  timezone: 'EST',
  title: 'Third Level Conference at ESSEC France 2023-2024',
  desc: 'Prep’me is Launching a grand event for aspiring students to learn more about ESSEC at its third level conference in the year 2023-2024. Please click here to participate',
  mode: "online"
}, {
  date: format(addDays(new Date(), 1), "MM/dd/yyyy"),
  time: '6:00',
  timezone: 'EST',
  title: 'Third Level Conference at ESSEC France 2023-2024',
  desc: 'Prep’me is Launching a grand event for aspiring students to learn more about ESSEC at its third level conference in the year 2023-2024. Please click here to participate',
  mode: "online"
}]


export const currentMeetings: Array<TMeeting> = [{
  thumb: '/assets/images/call-1.png',
  instructor: 'Prof. Henery',
  time: '6:00 PM',
  timezone: 'EST',
  date: format(new Date(), "MM/dd/yyyy")
}];
export const upcomingMeetings: Array<TMeeting> = [{
  thumb: '/assets/images/call-2.png',
  instructor: 'Prof. Angela',
  timezone: 'EST',
  time: '6:00 PM',
  date: format(new Date(), "MM/dd/yyyy")
},
{
  thumb: '/assets/images/call-3.png',
  instructor: 'Prof. Angela',
  timezone: 'EST',
  time: '6:00 PM',
  date: format(new Date(), "MM/dd/yyyy")
},
{
  thumb: '/assets/images/call-2.png',
  instructor: 'Prof. Angela',
  timezone: 'EST',
  time: '6:00 PM',
  date: format(new Date(), "MM/dd/yyyy")
},
{
  thumb: '/assets/images/call-3.png',
  instructor: 'Prof. Angela',
  timezone: 'EST',
  time: '6:00 PM',
  date: format(new Date(), "MM/dd/yyyy")
},
{
  thumb: '/assets/images/call-2.png',
  instructor: 'Prof. Angela',
  time: '6:00 PM',
  timezone: 'EST',
  date: format(new Date(), "MM/dd/yyyy")
},
{
  thumb: '/assets/images/call-3.png',
  instructor: 'Prof. Angela',
  time: '6:00 PM',
  timezone: 'EST',
  date: format(new Date(), "MM/dd/yyyy")
}]


export const currentLiveClasses: Array<TLiveClasses> = [{
  thumb: '/assets/images/class-1.png',
  instructor: 'UK English Level (Three)',
  time: '6:00 PM',
  timezone: 'EST',
  date: format(new Date(), "MM/dd/yyyy")
},
{
  thumb: '/assets/images/class-2.png',
  instructor: 'How to Prepare for the ESSEC',
  time: '6:00 PM',
  timezone: 'EST',
  date: format(new Date(), "MM/dd/yyyy")
},
{
  thumb: '/assets/images/class-1.png',
  instructor: 'UK English Level (Three)',
  time: '6:00 PM',
  timezone: 'EST',
  date: format(new Date(), "MM/dd/yyyy")
}];
export const upcomingLiveClasses: Array<TLiveClasses> = [{
  thumb: '/assets/images/class-1.png',
  instructor: 'UK English Level (Three)',
  time: '6:00 PM',
  timezone: 'EST',
  date: format(new Date(), "MM/dd/yyyy")
},
{
  thumb: '/assets/images/class-2.png',
  instructor: 'How to Prepare for the ESSEC',
  time: '6:00 PM',
  timezone: 'EST',
  date: format(new Date(), "MM/dd/yyyy")
},
{
  thumb: '/assets/images/class-1.png',
  instructor: 'UK English Level (Three)',
  time: '6:00 PM',
  timezone: 'EST',
  date: format(new Date(), "MM/dd/yyyy")
},
{
  thumb: '/assets/images/class-2.png',
  instructor: 'How to Prepare for the ESSEC',
  time: '6:00 PM',
  timezone: 'EST',
  date: format(new Date(), "MM/dd/yyyy")
}, {
  thumb: '/assets/images/class-1.png',
  instructor: 'UK English Level (Three)',
  time: '6:00 PM',
  timezone: 'EST',
  date: format(new Date(), "MM/dd/yyyy")
},
{
  thumb: '/assets/images/class-2.png',
  instructor: 'How to Prepare for the ESSEC',
  time: '6:00 PM',
  timezone: 'EST',
  date: format(new Date(), "MM/dd/yyyy")
},
{
  thumb: '/assets/images/class-1.png',
  instructor: 'UK English Level (Three)',
  time: '6:00 PM',
  timezone: 'EST',
  date: format(new Date(), "MM/dd/yyyy")
},
{
  thumb: '/assets/images/class-2.png',
  instructor: 'How to Prepare for the ESSEC',
  time: '6:00 PM',
  timezone: 'EST',
  date: format(new Date(), "MM/dd/yyyy")
}]

export const channels: Array<TChannel> = [{
  title: "Literature",
  hex: '#CEB119'
}, {
  title: "B-School Program",
  hex: '#5451F7'
}, {
  title: "Interview Preparation",
  hex: '#09D195'
}]

export const channelMessages: Array<TMessage> = [{
  from: "other",
  profile_picture: "/assets/images/call-1.png",
  display_name: "User Name",
  time: "Today 11.22 AM",
  message: "Hi"
}, {
  from: "other",
  profile_picture: "/assets/images/call-1.png",
  display_name: "User Name",
  time: "Today 11.23 AM",
  message: "Welcome to the new channel"
}, {
  from: "other",
  display_name: "User Name",
  profile_picture: "/assets/images/call-1.png",
  time: "Today 11.23 AM",
  message: "This new channel is created to communicate over the topics of all  kinds of literature courses and material we follow. We will discuss the  problems here with the best way possible and we encourage queries too"
}, {
  from: "me",
  profile_picture: "/assets/images/call-1.png",
  display_name: "User Name",
  time: "Today 11.24 AM",
  message: "Hi"
}, {
  from: "me",
  profile_picture: "/assets/images/call-1.png",
  display_name: "User Name",
  time: "Today 11.24 AM",
  message: "Thanks for connecting us here"
}]


export const communities: Array<TCommunity> = [{
  id: 1,
  title: "Finance",
  thumb: "/assets/images/community-1.png",
  topics: 25,
  posts: 30000
},
{
  id: 2,
  title: "Technology",
  thumb: "/assets/images/community-2.png",
  topics: 25,
  posts: 30000
}]

export const topics: Array<TTopic> = [{
  id: 1,
  community_id: 1,
  title: "Human Resource Management",
  thumb: "/assets/images/community-1.png",
  topics: 25,
  posts: 30000
},
{
  id: 2,
  community_id: 1,
  title: "Sales & Marketing Management",
  thumb: "/assets/images/community-2.png",
  topics: 25,
  posts: 30000
}]