"use client"

import { FileClock, HomeIcon, Settings2Icon, WalletCardsIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'
import UsageTrack from './UsageTrack'

const SideNav = () => {

  const MenuList = [
    {
      name:'Home',
      icon:HomeIcon,
      path:'/dashboard'
    },
    {
      name:'History',
      icon:FileClock,
      path:'/dashboard/history'
    },
    {
      name:'Billing',
      icon:WalletCardsIcon,
      path:'/dashboard/billing'
    },
    {
      name:'Setting',
      icon:Settings2Icon,
      path:'/dashboard/setting'
    },
  ]

  const path = usePathname();

  useEffect(()=>{
    // console.log(path);
    
  },[])

  return (
    <div className='h-screen p-5 relative shadow-sm border bg-white'>
      
      <div className='flex justify-center p-3'>
        <Link href={'/dashboard'}>
          <Image
            src={'/logo.svg'}
            alt='logo'
            width={120}
            height={100}
          />
        </Link>
      </div>
      
      <hr className='my-6 border'/>
      <div className='mt-3'>
        {MenuList.map((menu,index)=>(
          <Link href={menu.path} key={index}>
            <div className={`flex gap-2 mb-2 p-3 hover:bg-primary hover:text-white rounded-lg  transition-all cursor-pointer items-center ${path==menu.path&& 'bg-primary text-white'}`}>
              <menu.icon className='h-6 w-6'/>
              <h2 className='text-lg'>{menu.name}</h2>
            </div>
          </Link>
        ))}
      </div>

      <div className='absolute bottom-10 left-0 w-full'>
        <UsageTrack/>
      </div>
    </div>
  )
}

export default SideNav