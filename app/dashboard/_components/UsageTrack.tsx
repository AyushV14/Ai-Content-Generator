"use client"
import { Button } from '@/components/ui/button'
import { db } from '@/utlis'
import { AiOutput } from '@/utlis/schema'
import { useUser } from '@clerk/nextjs'
import { eq } from 'drizzle-orm'
import React, { useContext, useEffect, useState } from 'react'
import { HistoryItem } from '../history/page'
import { TotalUsageContext } from '@/app/(context)/TotalUsageContext'
import { UpdateCreditUsageContext } from '@/app/(context)/UpdateCreditUsage'

 const UsageTrack = () => {

    const {user} = useUser()
    const {totalUsage, settotalUsage} = useContext(TotalUsageContext)
      const {UpdateCreditUsage,setUpdateCreditUsage} = useContext(UpdateCreditUsageContext)
    

    const GetData = async ()=>{
        {/* @ts-ignore */}
        const result : HistoryItem[]= await db.select().from(AiOutput).where(eq(AiOutput.createdBy,user?.primaryEmailAddress?.emailAddress ))

        GetTotalUsage(result)
        console.log(result);
        
    }

    useEffect(()=>{
        user&&GetData()
    },[user])

    useEffect(()=>{
        user&&GetData()
    },[UpdateCreditUsage&&user])


    const GetTotalUsage = (result:HistoryItem[])=>{
        let total: number = 0

        result.forEach(element=>{
            total += element.aiResponse.trim().split(/\s+/).length;
        })
        settotalUsage(total)
        
    }

    
    

  return (
    <div className='m-5'>
        <div className='bg-primary text-white rounded-lg p-3 '>
            <h2 className='font-medium'>Credits</h2>
            <div className='h-2 bg-[#9981f9] w-full rounded-full mt-3'>
                <div className='h-2 bg-white rounded-full'
                    style={{
                        width:(totalUsage/10000)*100+ "%"
                    }}
                ></div>
            </div>
            <h2 className='text-sm my-2'>{totalUsage}/10,000 Credit used</h2>
        </div>
        <Button variant={'outline'} className='w-full my-3 text-primary'>Upgrade</Button>
    </div>
  )
}

export default UsageTrack