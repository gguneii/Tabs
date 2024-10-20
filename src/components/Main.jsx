import { useState } from "react";
import { FaHeart } from "react-icons/fa6";
// import { BsPlus,BsThreePlus } from "react-icons/bs";
function Main({data}) {

  const [flag, setFlag] = useState(true)
  const [counter, setCounter] = useState(0)

   function showContent(){
    setFlag(!flag)
   }
   function increase(n){
    setCounter(counter + n)
    setCounter(counter + n)
   }
  return (
    <div className="mx-auto max-w-[1300px] bg-[#edf2ff]" >
     
        <div className="p-4 mt-[20px] rounded-lg md:p-8" >

          
          {
            data ? 
           <>
             <h2 className="mb-3 text-3xl font-extrabold tracking-tight text-blue-500">{data?.summary}</h2>
             <div className ={flag ? "" : "hidden"}>
             <p className="mb-3 text-gray-500 dark:text-gray-400">{data?.details}</p>
             </div>
           </> :
          <div>There is no product!</div>
      
          }
                 <a href="#" onClick={showContent} className="inline-flex items-center font-medium text-blue-600 hover:text-blue-800 dark:text-blue-500 dark:hover:text-blue-700">
                 {
                        flag ? "Show less" : "Learn more"
                    }
                <svg className=" w-2.5 h-2.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                </svg>
            </a>
            
        </div>

        <div className="px-4 md:pb-8 pb-4 md:px-8 flex items-center justify-between">
          <div>
            <button className="border bg-blue-500 text-white px-3 py-1 rounded-md">Undo</button>
            <button className="border bg-blue-500 text-white px-3 py-1 rounded-md ml-2">Undo in 2s</button>
          </div>
          <div className="flex text-red-500 items-center">
            <FaHeart className="text-[20px] mx-2" />
            <span>{counter}</span>
          <button onClick={() => increase(1)} className="border bg-red-500 text-white rounded-md px-1 mx-2">
            +
          </button>
          <button onClick={() => increase(3)} className="border bg-red-500 text-white rounded-md px-1">
            +++
          </button>
          </div>
        </div>

    </div>
  )
}
export default Main