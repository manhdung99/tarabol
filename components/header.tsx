/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React from 'react'

export default function Header() {
    const titleItems = [
        {link: '/',
         name:'Services'},
         {link: '/',
         name:'Testimonials'},
         {link: '/',
         name:'Pricing'},
         {link: '/',
         name:'Careers'},
         {link: '/',
         name:'About Us'}
    ]
    return (
        <header className=''>
            <nav className='max-w-[1280px] mx-auto py-[24px]'>
                <ul className='flex px-[32px] items-center space-x-[40px]'>
                    <Link href='/'><a><li className='pl-[8px]'><img  src="/logo.svg" className='w-[48px] h-[48px]' alt=""></img></li></a></Link>
                    {titleItems.map((item)=>(
                        <li key={item.name}><Link href={item.link}><a className=' text-[17px] text-[#6b7280] px-[12px] py-[8px] font-[500] hover:text-[#4b5563]'>{item.name}</a></Link></li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}
