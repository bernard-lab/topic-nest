"use client"

import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/navigation';

const url = process.env.NEXT_PUBLIC_URL;

const AddTopic = () => {
  const [title, setTitle] = useState(''); 
  const [description, setDescription] = useState(''); 
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch(`${url}/api/topics`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ title, description })
      });
  
      if(response.ok){
        router.push('/');
        router.refresh();
      }else{
        throw new Error("Failed to create a new topic.")
      }
  
    } catch (error) {
      console.log(error);
    }
  }
  
  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
        <input 
        type="text" 
        placeholder='Topic Title'
        className='border border-slate-500 px-4 py-2 rounded-lg'
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        required
        />

        <textarea
        rows={10} 
        type="text" 
        placeholder='Topic Description'
        className='border border-slate-500 px-4 py-2 rounded-xl'
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        required
        />

        <div className='flex gap-4'>
            <button type='submit' className='w-fit bg-purple-700 rounded-xl font-bold text-white px-6 py-3 hover:bg-purple-600'>
              Add Topic
            </button>

            <button className='w-fit bg-red-500 font-bold text-white px-6 py-3 rounded-xl hover:bg-red-400'>
                <Link href={"/"}>Cancel</Link>
            </button>
        </div>
    </form>
  )
}

export default AddTopic