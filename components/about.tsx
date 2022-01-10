/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function About() {
  const aboutItems = [
    {
      title: "IT consultantacy",
      content:
        "With our experts who has over 10 years experienced in software develop and designing complex IT system. We ensure that we will provide the best IT solution for your company, and step by step make your company grow up in digital era."
    },
    {
      title: "Supplying developers",
      content:
        "We have about 50 qualified enthusiastic, experienced developers."
    },
    {
      title: "IT consultantacy",
      content:
        "We can provide developers in various of fields includes mobile application, web application, aritificial intelligence ..."
    },
  ];

  return (
    <section className="max-w-[1280px] mx-auto mt-[125px]">
      <p className="text-[#4f46e5] uppercase font-[700] text-center">
        Grow your revenue
      </p>
      <p className="text-center text-[70px] font-[700] mb-[64px]">
        Transform your business
      </p>
      <div className="flex items-center">
        <div className="w-1/2 px-[32px]">
          <ul>
              {aboutItems.map((aboutItem,index)=>(
                  <li key={index} className="flex mb-[48px]">
                  <div className="px-[16px] mt-[12px]">
                    <span className="px-[25px] py-[19px] bg-[#eff6ff] text-[24px] font-bold text-[#3b82f6] rounded-[50%]">
                      {index+1}
                    </span>
                  </div>
                  <div className="px-[16px]">
                    <p className="my-[16px] text-[20px] font-bold">
                      {aboutItem.title}
                    </p>
                    <p className="text-[#6b7280] leading-[32px]">
                      {aboutItem.content}
                    </p>
                  </div>
                </li>
              ))}
          </ul>
        </div>
        <div className="w-1/2 px-[32px] ">
          <img src="business.png" alt="" className="bg-white" />
        </div>
      </div>
    </section>
  );
}
