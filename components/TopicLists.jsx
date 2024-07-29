import React from 'react'
import RemoveTopic from './RemoveTopic'
import Link from 'next/link'
import { HiPencilAlt } from 'react-icons/hi';

const url = process.env.NEXT_PUBLIC_URL;

// GET Data from database
const getTopics = async () => {
    const response = await fetch(`${url}/api/topics`, {cache: "no-store"});

    if(!response.ok) {
      throw new Error("Failed to fetch topics");
    }

    return response.json();
}

export default async function TopicLists() {
  //Fetch data from database
  const topics = await getTopics();
  
return (
    <>{topics.map((topic) => (
      <div 
      key={topic._id} 
      className='p-4 border border-slate-300 my-3 flex justify-between items-start gap-5 rounded-xl bg-purple-200'>
          <div>
              <h2 className='font-bold text-2xl'>{topic.title}</h2>
              <p>{topic.description}</p>
          </div>
          
          <div className='flex gap-2'>
              <RemoveTopic id={topic._id} />

              <Link href={`/editTopic/${topic._id}`}
              >
                  <HiPencilAlt size={24} className='hover:text-slate-500'/>
              </Link>
          </div>
      </div>
    ))}
    </>
  )
}