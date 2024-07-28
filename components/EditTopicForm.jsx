"use client"

import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

const url = process.env.NEXT_PUBLIC_URL;

const EditTopicForm = ({id, title, description }) => {
  const [ newTitle, setNewTitle ] = useState(title);
  const [ newDescription, setNewDescription ] = useState(description);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${url}/api/topics/${id}`, {
        method: 'PUT',
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ newTitle, newDescription }),
      });

      if(!response.ok){
        throw new Error("Failed to update the topic.")
      }

      router.push('/');
      router.refresh();

    } catch (error) {
      console.log(error);
    }

  }

  return (
    <div>
        <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
        <input 
        onChange={(e) => setNewTitle(e.target.value)}
        value={newTitle}
        type="text" 
        placeholder='Topic Title'
        className='border border-slate-500 px-8 py-2 rounded-lg'
        />
        <textarea 
        rows={10} 
         onChange={(e) => setNewDescription(e.target.value)}
         value={newDescription}
        type="text"  
        placeholder='Topic Description'
        className='border border-slate-500 px-8 py-2 rounded-xl'
        />

        <div className='flex gap-4'>
            <button className='w-fit bg-purple-700 font-bold text-white px-6 py-3 rounded-xl hover:bg-purple-600'>Update Topic</button>
            <button className='w-fit bg-red-500 font-bold text-white px-6 py-3 rounded-xl hover:bg-red-400'>
                <Link href={"/"}>Cancel</Link>
            </button>
        </div>
    </form>
    </div>
  )
}

export default EditTopicForm