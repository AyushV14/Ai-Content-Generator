"use client"

import React, { useContext, useState } from 'react'
import FormSection from '../_components/FormSection'
import OutputSection from '../_components/OutputSection'
import { TEMPLATE } from '../../_components/TemplateListSection'
import Templates from '@/app/(data)/Templates'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { useParams, useRouter } from 'next/navigation'
import { chatSession } from '@/utlis/AiModal'
import { db } from '@/utlis'
import { AiOutput } from '@/utlis/schema'
import { useUser } from '@clerk/nextjs'
import { TotalUsageContext } from '@/app/(context)/TotalUsageContext'
import { UpdateCreditUsageContext } from '@/app/(context)/UpdateCreditUsage'


const CreateNewContent = () => {

  const params = useParams()
  const templateSlug = params['template-slug'] as string
  const [loading, setloading] = useState(false)
  const [aiOutput, setaiOutput] = useState<string>('')
  const router = useRouter()
  const {user}= useUser()
  const {totalUsage, settotalUsage} = useContext(TotalUsageContext)
  const {UpdateCreditUsage,setUpdateCreditUsage} = useContext(UpdateCreditUsageContext)

  const selectedTemplate: TEMPLATE | undefined = Templates?.find(
    (item) => item.slug === templateSlug
  )


  const GenerateAIContent = async(formData: any) => {

    if(totalUsage>=10000){
      console.log("Please Upgrade");
      router.push('/dashboard/billing')
      return ;
    }
    setloading(true)
    const selectedPropmt = selectedTemplate?.aiPrompt;
    

    const FinalAiPrompt = JSON.stringify(formData)+","+selectedPropmt;

    const result = await chatSession.sendMessage(FinalAiPrompt)

    console.log(result.response.text());
    setaiOutput(result.response.text())
    await saveInDb(JSON.stringify(formData), selectedTemplate?.slug, result.response.text())
    setloading(false);

    setUpdateCreditUsage(Date.now())

    
  }

  const saveInDb=async(formData:string, slug:any,aiResp:string)=>{
    const result = await db.insert(AiOutput).values({
      formData,
      templateSlug:slug,
      aiResponse:aiResp,
      createdBy:user?.primaryEmailAddress?.emailAddress|| '',
      createdAt: new Date().toISOString(),
    })
    console.log(result);
    
  }

  return (
    <div className='p-10'>
      <Link href={'/dashboard'}>
        <Button><ArrowLeft/>Back</Button>
      </Link>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-5 py-5'>
        <FormSection 
          selectedTemplate={selectedTemplate} 
          userFormInput={(v:any)=>GenerateAIContent(v)}
          loading={loading}
        />
        <div className='col-span-2'>
          <OutputSection aiOutput={aiOutput}/>
        </div>
      </div>
    </div>
  )
}

export default CreateNewContent