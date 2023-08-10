import React from 'react'
export default function RadiusBox({
  children, className
}: {
  children: React.ReactNode,
  className?:string
}) {
  return (
    <div className={`bg-white rounded-lg ${className ? className : ''} `}>
      {children}
    </div>
  )
}
