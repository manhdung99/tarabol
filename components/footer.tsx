import React from "react";
import {
  faInstagram,
  faTiktok,
  faFacebook,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
export default function Footer() {
  const socialList = [
    { icon: faFacebook, link: "https://www.facebook.com/dungnm25" },
    { icon: faInstagram, link: "https://www.facebook.com/dungnm25" },
    { icon: faTwitter, link: "https://www.facebook.com/dungnm25" },
    { icon: faGithub, link: "https://github.com/manhdung99" },
    { icon: faTiktok, link: "https://github.com/manhdung99" },
  ];
  const footerItems = [
    {
      title: "Solutions",
      items: ["Marketing", "Analytics", "Commerce", "Insights"],
    },
    {
      title: "Support",
      items: ["Pricing", "Documentation", "Guides", "API Status"],
    },
    {
      title: "Company",
      items: ["About", "Jobs", "Press", "Partners"],
    },
    {
      title: "Legal",
      items: ["Claim", "Privacy", "Terms"],
    },
  ];
  return (
    <footer className="bg-black ">
      <div className=" flex flex-col max-w-[1280px] h-[360px] py-[64px] px-[32px] mx-auto">
        <div className="flex w-[100%]">
          <div className="flex-[1]">
            <p className="text-white font-bold text-[16px]">
              Tarabol Co ., Ltd
            </p>
            <ul className="mt-[24px] flex">
              {socialList.map((sociaItem, index) => (
                <li key={index}>
                  <Link href={sociaItem.link}>
                    <a
                      className="mr-[28px] mt-[20px] mb-[40px] text-white hover:opacity-80"
                      target="_black"
                    >
                      <FontAwesomeIcon
                        icon={sociaItem.icon}
                        style={{ fontSize: "20px" }}
                      />
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-[2] ml-[20px] flex">
            {footerItems.map((footerItem, index) => (
              <div key={index} className="grow flex text-white">
                <div>
                  <p className="font-[700] uppercase text-[14px] tracking-[1px]">
                    {footerItem.title}
                  </p>
                  <ul>
                    {footerItem.items.map((item) => (
                      <li
                        key={item}
                        className="mt-[16px] text-[#6B7280] hover:text-[#4B5563] cursor-pointer"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-[48px] border-t-[1px] border-white">
          <p className="text-white text-center mt-[4px]">
            © 2022 Tarabol, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
