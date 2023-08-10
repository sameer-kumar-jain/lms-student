import React from "react"

import Link from 'next/link'
import { resourceCategoryItems, resources } from "../../../../../data"
import { TResource } from "../../../../../types/types"


export default function ResourceCategory({
  params,
  searchParams,
}: {
  params: { category_id: string, resource_id: string, report_id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const {
    category_id, resource_id, report_id
  } = params
  const currentCategory = resources.find((resource: TResource) => resource.id === parseInt(resource_id || '0', 10))?.data.find(category => category.id === parseInt(category_id || '0', 10))
  return (<div className="flex flex-col gap-7 pt-5">
    <div className="flex gap-3 items-center">
      <div className="font-extrabold text-22">{currentCategory.title}</div>
      <div className="font-bold text-12 text-blue-chill">{currentCategory.total}</div>
    </div>
    <div className="flex flex-wrap gap-7">
      {resourceCategoryItems.map(item => <Link href={`/resources/${resource_id}/${category_id}/${item.id}`}>
        <ResourceCategoryReportItem {...item} />
      </Link>
      )}
    </div>
  </div>
  )
}

const ResourceCategoryReportItem = ({ id, type, title }: { id: number, type: string, title: string }) => {
  return (<div className="flex flex-col bg-white rounded-md px-3 py-3 gap-2.5 w-[190px]">
    <div className="flex justify-between uppercase text-12">
      {icons[type]}
      {type}
    </div>
    <div className="flex justify-center items-center h-[148px]" style={{
      background: 'conic-gradient(from 180deg at 50% 50.00%, #F0FEFF 0deg, #C9F3F6 360deg)'
    }}>
      <div>Preview<br />Image</div>
    </div>
    <div className="text-13.5 font-medium">
      {title}
    </div>
  </div>
  )
}



const icons = {
  'presentation': <svg xmlns="http://www.w3.org/2000/svg" width="16" height="18" viewBox="0 0 16 18" fill="none">
    <path d="M15.487 1H1V12.5503H15.487V1Z" stroke="#003854" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M8.36188 12.5503L3.27686 16.74" stroke="#003854" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M13.4474 16.74L8.36194 12.5503V15.4201" stroke="#003854" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M4.10022 4.8208H12.3862" stroke="#003854" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M4.10022 6.12354H12.3862" stroke="#003854" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M4.10022 7.42676H12.3862" stroke="#003854" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M4.10022 8.72949H12.3862" stroke="#003854" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
  </svg>,
  'pdf': <svg xmlns="http://www.w3.org/2000/svg" width="15" height="18" viewBox="0 0 15 18" fill="none">
    <path d="M3.84042 11.4126C3.67482 11.4126 3.56322 11.4288 3.50562 11.445V12.5052C3.57402 12.5214 3.65951 12.5259 3.77741 12.5259C4.20851 12.5259 4.47401 12.3081 4.47401 11.94C4.47401 11.6106 4.24542 11.4126 3.84042 11.4126ZM6.97871 11.4234C6.79871 11.4234 6.68172 11.4396 6.61242 11.4558V13.8048C6.68172 13.821 6.79331 13.821 6.89411 13.821C7.62941 13.8264 8.10821 13.4214 8.10821 12.5646C8.11361 11.8176 7.67711 11.4234 6.97871 11.4234Z" fill="black" />
    <path d="M9 0H1.8C1.32261 0 0.864773 0.189642 0.527208 0.527208C0.189642 0.864773 0 1.32261 0 1.8V16.2C0 16.6774 0.189642 17.1352 0.527208 17.4728C0.864773 17.8104 1.32261 18 1.8 18H12.6C13.0774 18 13.5352 17.8104 13.8728 17.4728C14.2104 17.1352 14.4 16.6774 14.4 16.2V5.4L9 0ZM4.9482 12.771C4.6701 13.032 4.2597 13.149 3.7818 13.149C3.68914 13.15 3.59652 13.1446 3.5046 13.1328V14.4162H2.7V10.8738C3.06311 10.8196 3.43001 10.795 3.7971 10.8C4.2984 10.8 4.6548 10.8954 4.8951 11.0871C5.1237 11.2689 5.2785 11.5668 5.2785 11.9178C5.2776 12.2706 5.1606 12.5685 4.9482 12.771ZM8.3745 13.9905C7.9965 14.3046 7.4214 14.454 6.7185 14.454C6.2973 14.454 5.9994 14.427 5.7969 14.4V10.8747C6.16014 10.8217 6.52692 10.7967 6.894 10.8C7.5753 10.8 8.0181 10.9224 8.3637 11.1834C8.7372 11.4606 8.9712 11.9025 8.9712 12.537C8.9712 13.2237 8.7201 13.698 8.3745 13.9905ZM11.7 11.493H10.3212V12.3129H11.61V12.9735H10.3212V14.4171H9.5058V10.827H11.7V11.493ZM9 6.3H8.1V1.8L12.6 6.3H9Z" fill="black" />
  </svg>,
  'video': <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
    <path d="M14.9692 0H1.36083C0.612375 0 0 0.772794 0 1.71732V14.6127C0 15.5572 0.612375 16.33 1.36083 16.33H14.9692C15.7176 16.33 16.33 15.5572 16.33 14.6127V1.71732C16.33 0.772794 15.7176 0 14.9692 0ZM6.87357 3.35178L10.1372 6.16389L6.87357 8.976V3.35178ZM13.6087 12.9786H6.42143C6.22751 13.511 5.80361 13.8824 5.30895 13.8824C4.81429 13.8824 4.39073 13.5106 4.19647 12.9786H2.72167C2.43963 12.9786 2.21135 12.6901 2.21135 12.3347C2.21135 11.9792 2.43963 11.6907 2.72167 11.6907H4.19681C4.39073 11.1583 4.81429 10.7865 5.30929 10.7865C5.80429 10.7865 6.22785 11.1583 6.42177 11.6907H13.609C13.8907 11.6907 14.1193 11.9792 14.1193 12.3347C14.1193 12.6901 13.8904 12.9786 13.6087 12.9786Z" fill="#003854" />
    <path d="M5.30913 12.9339C5.57162 12.9339 5.7844 12.6654 5.7844 12.3342C5.7844 12.0029 5.57162 11.7344 5.30913 11.7344C5.04665 11.7344 4.83386 12.0029 4.83386 12.3342C4.83386 12.6654 5.04665 12.9339 5.30913 12.9339Z" fill="#003854" />
  </svg>
}