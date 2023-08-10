import React from "react"
import { communities } from "../../data"
import { TCommunity } from "../../types/types"
import Link from "next/link"


export default function Community() {
  return (<div className="flex w-full pt-5">
    <div className="flex flex-col flex-1">
      <div className="text-22 font-extrabold">25+ Communities</div>
      <div className="flex gap-5 pt-5 flex-wrap">
        {communities.map((community: TCommunity, index: number) => <Link href={`/community/${community.id}`}>
          <CommunityItem key={index} data={community} />
        </Link>)}
      </div>
    </div>
  </div>
  )
}

const CommunityItem = ({ data }: { data: TCommunity }) => {
  return (
    <div className="bg-white rounded-md flex flex-col w-225 gap-6">
      <div><img src={data.thumb} /></div>
      <div className="pl-3 text-15.5 font-extrabold">{data.title}</div>
      <div className="pl-3 flex gap-4">
        <div className="flex gap-1 items-center"><span className="text-13 font-bold">25</span><span className="text-11 text-black">Topics</span></div>
        <div className="flex gap-1 items-center"><span className="text-13 font-bold">30K</span><span className="text-11 text-black">Posts</span></div>
        <div className="flex justify-end flex-1"><button className="btn style1">Visit</button></div>
      </div>
    </div>
  )
}