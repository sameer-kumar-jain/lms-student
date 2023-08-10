import React from "react";

export default function TimeView() {
  return (
    <div className="flex gap-2 items-center">
      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
        <path d="M14.5876 7.5C14.5876 11.4215 11.4113 14.6 7.49379 14.6C3.57631 14.6 0.4 11.4215 0.4 7.5C0.4 3.57847 3.57631 0.4 7.49379 0.4C11.4113 0.4 14.5876 3.57847 14.5876 7.5Z" stroke="#0C8D92" strokeWidth="0.8" />
        <path d="M7.07746 3.75V8.33333H10.408" stroke="#0C8D92" strokeWidth="1.5" stroke-linecap="round" />
      </svg>
      <div className="text-12.5 font-bold text-blue-chill">6:00 PM EST</div>
    </div>
  )
}