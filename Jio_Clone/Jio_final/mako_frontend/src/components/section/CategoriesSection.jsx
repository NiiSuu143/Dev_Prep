import React, { Suspense } from 'react'
import Skeleton from '../atom/Skeleton'
import { getTopRatedData } from '@/lib/api'

function CategoriesSection({ title, id, fetcher }) {
  return (
    <div className="py-8 px-6">
        <h2 id={id} className="text-2xl font-medium mb-6 scroll-m-[100px]">
            {title}
        </h2>
        <Suspense fallback={<CategoriesFallBack/>}>
          <CategoriesContent fetcher={fetcher}/>
        </Suspense>
        
    </div>
  )
}

async function CategoriesContent({fetcher}) {
  const data = await fetcher();
  return <ul className='flex gap-4 w-full overflow-scroll scrollbar-hide snap-x snap-mandatory px-4'>
      {data?.map((item) => {
        return <li className="min-w-[200px] h-[300px] rounded-lg border-2 border-red-500 snap-center" key={item.id}>{item.title}</li>
      })}
    </ul> 
}

function CategoriesFallBack() {
  return (
    <ul className="flex gap-4 w-full overflow-scroll scrollbar-hide">
      {new Array(12).fill(0).map((e, index) => (
        <Skeleton key={index} className="min-w-[200px] h-[300px] " />
      ))}
    </ul>
  )
}

export default CategoriesSection