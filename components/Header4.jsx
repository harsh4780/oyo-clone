"use client"
import Image from "next/image"
function Header4() {
  return (
    <div className="flex justify-between items-center my-14  border-gray-300 
    border-2 rounded-lg px-5">
        <div className="flex items-center">
            <Image src={'/fire.jpg'} height={200} width={200} 
            className="w-32 h-32 rounded-full mr-5"/>
            <div>
            <p className="font-bold text-xl">Get Access to execlusive deals</p>
            <p className="">Only the best deals reach your inbox</p>
        </div>
        </div>
        
        <div className="flex">
        <input type="email" className="px-6 py-3 mr-5 outline-none border
        border-gray-300 rounded-lg w-80 h-16 " placeholder="e.g. jhon@gmail.com" name="" id="" />

        <button type="submit" className="w-48 h-14 bg-red-500 rounded-lg
        text-xl text-white">Notify</button>
        </div>
    </div>
  )
}

export default Header4