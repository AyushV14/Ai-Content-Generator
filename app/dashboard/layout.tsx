"use client"

import React, { useState } from 'react'
import SideNav from './_components/SideNav';
import Header from './_components/Header';
import { TotalUsageContext } from '../(context)/TotalUsageContext';
import { UpdateCreditUsageContext } from '../(context)/UpdateCreditUsage';

const Dashboardlayout = (
    {   
        children
    }: Readonly<{
    children: React.ReactNode;
  }>) => {

    const [totalUsage, settotalUsage]= useState<any>(0)
    const [UpdateCreditUsage,setUpdateCreditUsage]= useState<any>()
  return (
    <TotalUsageContext.Provider value={{totalUsage, settotalUsage}}>
      <UpdateCreditUsageContext.Provider value={{UpdateCreditUsage,setUpdateCreditUsage}}>
      <div className='bg-slate-100 h-screen'>
        <div className='md:w-64 hidden md:block fixed'>
            <SideNav/>
        </div>
      <div className='md:ml-64'>
          <Header/>
          {children}        
      </div>
      </div>
      </UpdateCreditUsageContext.Provider>
    </TotalUsageContext.Provider>
  )
}

export default Dashboardlayout