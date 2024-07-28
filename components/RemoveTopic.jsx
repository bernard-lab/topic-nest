"use client"

import { HiOutlineTrash } from "react-icons/hi"
import { useRouter } from "next/navigation"

const url = process.env.NEXT_PUBLIC_URL;

const RemovePage = ({ id }) => {
  const router = useRouter();

  const removeTopic = async () => {
    const confirmed = confirm('Do you wan to delete this topic?');

    if(confirmed){
      const response = await fetch(`${url}/api/topics?topicId=${id}` , {
        method: "DELETE",
      });
      // Refresh Page if response is successful
      if(response.ok) router.refresh();
    }
  }
  
  return (
    <button 
      onClick={removeTopic}
      className="text-red-500 hover:text-red-400">
        <HiOutlineTrash size={24}/>
    </button>
  )
}

export default RemovePage