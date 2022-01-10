/* eslint-disable @next/next/no-img-element */
import React from 'react'

export default function Technology() {

    const technologies = [
        {
          url: 'vuejs.jpeg',
          class : 'w-1/3 p-[32px] border-[#e5e7eb] border-[1px] border-l-0 border-t-0'
        },
        {
            url: 'react.png',
          class : 'w-1/3 p-[32px] border-[#e5e7eb] border-[1px] border-l-0 border-t-0'
        },
        {
            url: 'python.jpeg',
          class : 'w-1/3 p-[32px] border-[#e5e7eb] border-[1px] border-l-0 border-t-0 border-r-0'
        },
        {
            url: 'android.jpeg',
          class : 'w-1/3 p-[32px] border-[#e5e7eb] border-[1px] border-l-0 border-t-0 border-b-0'
        },
        {
            url: 'flutter.jpeg',
          class : 'w-1/3 p-[32px] border-[#e5e7eb] border-[1px] border-l-0 border-t-0 border-b-0'
        },
        {
            url: 'angular.jpeg',
          class : 'w-1/3 p-[32px] border-[#e5e7eb] border-[1px] border-0'
        },
    
      ]

    return (
        <section className="max-w-[1280px] mx-auto my-[95px] p-[32px]">
            <p className="text-[#4f46e5] uppercase font-[700] text-center mb-[64px]">
        Technologies providing
      </p>
      <div className="p-[24px] flex flex-wrap">
          {technologies.map((technology,index)=>(
              <div key={index}  className= {technology.class}>
              <img src={technology.url} alt='' className='rounded-[4px]'></img>
            </div>
          ))}
      
        </div>
        </section>
    )
}
