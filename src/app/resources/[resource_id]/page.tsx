import React from "react"
import { resources } from "../../../data"
import ResourceCategoryItem from "../../../components/resource-category-item"
import { TCategory, TResource } from "../../../types/types"


export default function Resources({
  params,
  searchParams,
}: {
  params: { resource_id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const { resource_id } = params
  const currentResource = resources.find(resource => resource.id === parseInt(resource_id || '0', 10)) || { id: 1, title: "Test", data: [] }
  return (<div className='flex gap-11'>
    <div className='flex-1'>
      <div className="flex flex-col gap-10">
        <ResourceItem {...currentResource} />
      </div>
    </div>
    <div className='w-240 relative'>
      <div>
        <button type="button" className="btn style1 w-full" id="menu-button" aria-expanded="true" aria-haspopup="true">
          Choose a Category
        </button>
      </div>
      <div className="absolute right-0 z-10 mt-2 w-full origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex={-1}>
        <div className="py-1 flex flex-col" role="none">
          {resources.map((resource: TResource) =>
            <a key={resource.id} href={`/resources/${resource.id}`}
              className="text-15 font-semibold px-4 py-4 text-sm border-solid border-b border-geyser last:border-b-0"
              role="menuitem" tabIndex={-1} id="menu-item-0">
              {resource.title}
            </a>
          )}
        </div>
      </div>
    </div>
  </div>
  )
}

const ResourceItem = (resource: TResource) => <div className="flex flex-col gap-7 pt-5">
  <div className="flex">
    <div className="font-extrabold text-18.5">{resource.title}</div>
  </div>
  <div className="flex gap-8 flex-wrap">
    {resource.data.map((category: TCategory, index: number) => <ResourceCategoryItem key={index} resource={resource} category={category} />)}
  </div>
</div>
