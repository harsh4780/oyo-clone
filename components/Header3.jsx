
'use client'
function Header3() {
  return (
    <div className="bg-gradient-to-r from-red-600 to-red-400 h-60">
        <div className=" p-5">
            <h2 className="text-3xl font-bold text-white 
            text-center"
            >Over 157, 000 Hotels and homes across 35 centuries</h2>

            <div className="grid grid-cols-5 my-5  mx-20 ">
                <input type="text" name="" placeholder="Search..." id=""
                className=" h-16 border-r-2 border-gray-400 outline-none px-3 text-lg col-span-2"  />
                <input type="text" name="" placeholder="Search..." id=""
                className=" h-16 border-r-2 border-gray-400 outline-none px-3 text-lg col-span-1"  />
                <input type="text" name="" placeholder="Search..." id=""
                className=" h-16  border-r-2 border-gray-400 outline-none px-3 text-lg col-span-1"  />
            <button type="submit"
            className="h-16 px-3 py-2 col-sapn-1
            bg-green-400 hover:cursor-pointer hover:bg-green-600 text-white
            text-xl" >
                Search
            </button>
            </div>
            <div className="flex mx-20 my-5 font-bold">

            <button type="submit"
            className="h-16 px-3 py-2
            hover:cursor-pointer text-white mr-5
            " >
                Continue Your Search
            </button>

            {/* Second button */}
            <button type="submit"
            className="h-16 px-3 py-3 
            hover:cursor-pointer text-white mr-5 border-2 border-white
             hover:bg-gray-500 rounded-xl   " >
               Homestay In India hotels
            </button>
            </div>
        </div>
    </div>
  )
}

export default Header3