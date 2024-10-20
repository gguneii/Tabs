import { useState } from "react";
import Main from "./components/Main"

const content = [
  {
      summary: "React is a library for building UIs",
      details:
          "Dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
      summary: "State management is like giving state a home",
      details:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
      summary: "We can think of props as the component API",
      details:
          "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
]
function App() {
  const [index, setIndex] =useState(0)
  
  function chooseTab(i){
      setIndex(i)
  }
  return (
    <>   
    <div className="w-full mx-auto max-w-[1300px] mt-[10vh]  border border-gray-200 rounded-lg shadow">
        <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 rounded-t-lg bg-[#edf2ff] dark:text-gray-400">
        {
            Array(4).fill("").map((_,i) =>{
                return( <li key={i} className="me-2">
                <button type="button"  onClick={() =>chooseTab(i)} className="inline-block rounded-[30%] p-4 text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-blue-600 dark:hover:text-gray-300">Tab{i + 1}</button>
            </li>)
            })
        }
          
        </ul>
      
    </div>
      <Main data={content[index]} />
    </>
  )
}

export default App
