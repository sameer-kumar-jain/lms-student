
export type CourseItem = {
  thumbnail: string,
  title: string,
  desc: string,
  category: string,
  id: number,
  details: {
    time: number,
    modules: number,
    videos: number
  }
}
export type TMyCourseItem = CourseItem & {
  percentageComplete: number,
  completed: boolean
}


export type TCategory = {
  id: number,
  title: string,
  total: string
}

export type TResource = {
  id: number,
  title: string,
  data: Array<TCategory>
}

export type TEvent = {
  date: string,
  time: string,
  timezone: string,
  title: string,
  desc: string,
  mode: 'online' | 'offline'
}


export type TMeeting = {
  date: string,
  time: string,
  timezone: string,
  thumb: string,
  instructor: string,
}


export type TLiveClasses = {
  date: string,
  time: string,
  timezone: string,
  thumb: string,
  instructor: string,
}


export type TChannel = {
  title: string,
  hex: string
}

export type TMessage = {
  from: string,
  profile_picture: string,
  display_name: string,
  time: string,
  message: string
}

export type TCommunity = {
  id: number,
  title: string,
  thumb: string,
  topics: number,
  posts: number
}
export type TTopic = {
  id: number,
  community_id: number,
  title: string,
  thumb: string,
  topics: number,
  posts: number
}

