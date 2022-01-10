import Link from 'next/link'
import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
  } from "@fortawesome/free-brands-svg-icons";
export default function Greeting() {
    return (
        <section>
            <div className='max-w-[896px] mx-auto py-[64px] px-[32px] text-center'>
                <p className='text-[97px] font-[700] text-[#1f2937]  leading-[97px]'>Your success, our hapiness</p>
                <p className=' max-w-[576px] text-[#728980] tracking-[1px] text-[32px] leading-[32px] mx-auto mt-[40px] pb-[50px]'>Providing the best IT services for your company</p>
                <Link href="/"><a className='px-[21px] py-[12px] bg-[#4f46e5] text-white rounded-[4px] opacity-90 hover:opacity-100 '>Contact us</a></Link>
            </div>
            <div>
                <p className='text-center uppercase text-[13px] text-[#4B5562] tracking-[1px] mt-[30px]'>Which platform are we using</p>
                <div className='flex justify-center'>
                <span><svg viewBox="0 0 2499.6 2500" xmlns="http://www.w3.org/2000/svg" className="m-16 mb-8" width="100" height="100"><path d="M1187.9 1187.9H0V0h1187.9z" fill="#f1511b"></path><path d="M2499.6 1187.9h-1188V0h1187.9v1187.9z" fill="#80cc28"></path><path d="M1187.9 2500H0V1312.1h1187.9z" fill="#00adef"></path><path d="M2499.6 2500h-1188V1312.1h1187.9V2500z" fill="#fbbc09"></path></svg></span>
                <span><svg viewBox="0.291 -41.138 145.221 186.738" xmlns="http://www.w3.org/2000/svg" width="100" height="100" className="m-16"><linearGradient id="atlassian_svg__a" gradientTransform="matrix(1 0 0 -1 0 228)" gradientUnits="userSpaceOnUse" x1="62.57" x2="25.03" y1="150.13" y2="85.11"><stop offset="0" stopColor="#0052cc"></stop><stop offset="0.92" stopColor="#2684ff"></stop></linearGradient><path d="M43 67a4.14 4.14 0 00-5.79-.78A4.29 4.29 0 0036 67.73L.45 138.85a4.25 4.25 0 001.9 5.7 4.18 4.18 0 001.9.45h49.53a4.08 4.08 0 003.8-2.35C68.27 120.57 61.79 87 43 67z" fill="url(#atlassian_svg__a)"></path><path d="M69.13 2.28a93.82 93.82 0 00-5.48 92.61l23.88 47.76a4.25 4.25 0 003.8 2.35h49.52a4.24 4.24 0 004.25-4.25 4.31 4.31 0 00-.44-1.9L76.36 2.26a4 4 0 00-7.23 0z" fill="#2684ff"></path></svg></span>
                <span><FontAwesomeIcon icon={faGithub} className='w-[100px] h-[100px] m-[64px]' /></span>
                <span><svg height="100" viewBox="0 0 200 300" width="100" xmlns="http://www.w3.org/2000/svg" className="m-16"><path d="M50 300c27.6 0 50-22.4 50-50v-50H50c-27.6 0-50 22.4-50 50s22.4 50 50 50z" fill="#0acf83"></path><path d="M0 150c0-27.6 22.4-50 50-50h50v100H50c-27.6 0-50-22.4-50-50z" fill="#a259ff"></path><path d="M0 50C0 22.4 22.4 0 50 0h50v100H50C22.4 100 0 77.6 0 50z" fill="#f24e1e"></path><path d="M100 0h50c27.6 0 50 22.4 50 50s-22.4 50-50 50h-50z" fill="#ff7262"></path><path d="M200 150c0 27.6-22.4 50-50 50s-50-22.4-50-50 22.4-50 50-50 50 22.4 50 50z" fill="#1abcfe"></path></svg></span>
                </div>
            </div>
        </section>
    )
}
