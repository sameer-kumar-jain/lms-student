import Link from "next/link";
import React from "react";
import { TCategory, TResource } from "../types/types";
import ResourceCategoryItem from "./resource-category-item";

export default function ResourceItem(resource: TResource) {
  return (
    <div className="flex flex-col gap-7 pt-5">
      <div className="flex">
        <div className="font-extrabold text-18.5">{resource.title}</div>
        <div className="border-l-2 border-blue-chill mx-4 pl-4" >
          <Link className="text-blue-chill text-12 font-bold" href={`/resources/${resource.id}`}>Show All</Link>
        </div>

      </div>
      <div className="flex gap-8 flex-wrap">
        {resource.data.map((category: TCategory,  index:number) => <ResourceCategoryItem key={index} resource={resource} category={category} />)}
      </div>
    </div>
  )
}