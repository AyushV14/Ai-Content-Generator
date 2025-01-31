import Templates from '@/app/(data)/Templates'
import React, { useEffect, useState } from 'react'
import TemplateCard from './TemplateCard'

export interface TEMPLATE{
  name:string,
  desc:string,
  icon:string,
  category:string,
  slug:string,
  aiPrompt:string,
  form?:FORM[]
}

export interface FORM{
  label:string,
  field:string,
  name:string,
  required?: boolean 
}

const TemplateListSection = ({userSearchInput}:any) => {

  const [templateList, settemplateList] = useState(Templates)
  useEffect(()=>{

    if(userSearchInput){
      const filterData = Templates.filter(item=>
        item.name.toLowerCase().includes(userSearchInput.toLowerCase())
      )
      settemplateList(filterData)
    }
    else{
      settemplateList(Templates);
    }
    
  },[userSearchInput])

  return (
    <div className='grid p-10 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
      {templateList?.map((item:TEMPLATE,index:number)=>(
        <TemplateCard
          item={item}
          key={index}
        />
      ))}
    </div>
  )
}

export default TemplateListSection