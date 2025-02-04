"use client"
import React, { useEffect, useRef } from 'react'
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import { Button } from '@/components/ui/button';
import { CopyIcon } from 'lucide-react';
import { marked } from 'marked'; // Install with `npm install marked`

interface PROPS {
  aiOutput: string
}

const OutputSection = ({ aiOutput }: PROPS) => {
  const editorRef = useRef<Editor | null>(null);

  useEffect(() => {
    const editorInstance = editorRef.current?.getInstance();
    // Convert markdown-style content to HTML
    const htmlContent = marked.parse(aiOutput);
    editorInstance?.setHTML(htmlContent);
  }, [aiOutput]);

  return (
    <div className='bg-white shadow-lg border rounded-lg'>
      <div className='flex justify-between items-center p-5'>
        <h2 className='font-medium text-lg'>Your Result</h2>
        <Button className='flex gap-2'>
          <CopyIcon className='w-4 h-4' 
            onClick={() => navigator.clipboard.writeText(aiOutput)}
          />
          Copy
        </Button>
      </div>
      <Editor
        ref={editorRef}
        initialValue="Your Result will appear here"
        initialEditType="wysiwyg"
        height="500px"
        useCommandShortcut={true}
        hideModeSwitch={true}
      />
    </div>
  )
}

export default OutputSection