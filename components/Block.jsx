import Image from "next/image"

function Block({title,para}) {
  return (
    <div className='flex items-center w-60 h-full px-3 border-r
    border-gray-300' >
        <Image src={'./demo.svg'} width={200} height={200}
        className="w-10 h-10 rounded-full mr-5"/>
        <div>
            <h3 className="font-bold"
            >{title}</h3>
            <p className="text-gray-400 text-sm line-clamp-1">{para}</p>
        </div>
    </div>
  )
}

export default Block