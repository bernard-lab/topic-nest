import Link from "next/link"
import { FcNews } from "react-icons/fc";


const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-purple-800 px-8 py-3 rounded-t-2xl">
        <Link href={"/"} className="text-white font-bold text-2xl flex items-center gap-2"
        >
          <FcNews className="text-4xl"/>
          Topic Nest
          </Link>
        <Link 
        href={"/addTopic"} 
        className="py-2 px-4 border rounded-xl text-white font-semibold hover:bg-orange-400 bg-transparent"
        >Create Topic</Link>
    </nav>
  )
}

export default Navbar