import React, { Children } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faCheckCircle } from "@fortawesome/fontawesome-free-regular";
export default function Feature() {
  const faPropIcon = faCheckCircle as IconProp;

  const features = [
    {
      title:' High quality developers',
      content: 'We always put our customer at first, so developers will be our DNA. The high qualified developers, the more happiness customers.',
      class : 'w-1/3 p-[32px] border-[#e5e7eb] border-[1px] border-l-0 border-t-0'
    },
    {
      title:' Smart IT solution',
      content: 'We have great experts who can approach with world class knowledge. That will help us in providing and solving complex IT problems.',
      class : 'w-1/3 p-[32px] border-[#e5e7eb] border-[1px] border-l-0 border-t-0'
    },
    {
      title:' Company culture',
      content: 'There are less of company has their own culture. For us, the culture will shape us and lead us in the right way.',
      class : 'w-1/3 p-[32px] border-[#e5e7eb] border-[1px] border-l-0 border-t-0 border-r-0'
    },
    {
      title:' Up to date technologies',
      content: 'We always up to date knowledge for making sure that we will always provide the best services, best technologies for customer.',
      class : 'w-1/3 p-[32px] border-[#e5e7eb] border-[1px] border-l-0 border-t-0 border-b-0'
    },
    {
      title:' Easy in colloboration',
      content: '"THE CUSTOMER IS ALWAYS RIGHT" is our sologan. Just contact with us, the rest will be handled by us professionally.',
      class : 'w-1/3 p-[32px] border-[#e5e7eb] border-[1px] border-l-0 border-t-0 border-b-0'
    },
    {
      title:' Changing to adapt',
      content: 'Our vision is to become the best oursourcing company around the world. So, we always want to change and re-new to find the best version of us.',
      class : 'w-1/3 p-[32px] border-[#e5e7eb] border-[1px] border-0'
    },

  ]

  return (
    <section className="max-w-[1280px] mx-auto mt-[125px] p-[32px]">
      <p className="text-[#4f46e5] uppercase font-[700] text-center">
        Features
      </p>
      <p className="text-center text-[70px] font-[700] mt-[8px] mb-[64px] leading-[70px] ">
        How we change the oursourcing game
      </p>
      <div className="p-[24px] flex flex-wrap">
        {features.map((feature,index)=>(
          <div key={index} className= {feature.class}>
          <div className="flex items-center mb-[24px]">
            <span className="text-[#6366f1]">
              <FontAwesomeIcon
                icon={faPropIcon}
                className="w-[20px] h-[20px]"
              />
            </span>
            <p className="text-[20px] ml-[16px]">{feature.title}</p>
          </div>
            <p className="text-[#6b7280] leading-[32px]">
            {feature.content}
          </p>
        </div>
        ))}
      </div>
    </section>
  );
}
