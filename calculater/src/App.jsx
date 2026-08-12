import { useState } from "react"


function App() {
  let [first ,setFirst] = useState(null)
  let [second ,setSecond] = useState(null)
  let [result,setResult] = useState(null)
  
  function add(){
    setResult(Number(first)+Number(second))
  }
  function subtract(){
    setResult(Number(first)-Number(second))
  }
  function multiply(){
    setResult(Number(first)*Number(second))
  }
  function divide(){
    setResult(Number(first)/Number(second))
  }

  return (
    <div className="bg-black h-screen flex flex-col justify-center items-center">
    
        <div className="h-[300px] w-[400px] bg-stone-800 flex flex-col justify-center items-center gap-6">
          <div className="">
          <input type="text" placeholder="Enter 1st number" value={first} onChange={(e)=>setFirst(e.target.value)} className="outline-none w-[180px] m-2 text-sm"/>
          <input type="text" placeholder="Enter 2st number" value={second} onChange={(e)=>setSecond(e.target.value)} className="outline-none w-[180px] m-2 text-sm" />    
        </div>

        <div className="gap-8 flex justify-center items-center ">
      <div className="p-2 bg-fuchsia-100 rounded-full h-[50px] w-[50px] flex justify-center items-center relative"> <button className="p-3 text-blue-600 text-5xl absolute bottom-[-6px]" onClick={add} >+</button></div>
      <div className="p-2 bg-fuchsia-100 rounded-full h-[50px] w-[50px] flex justify-center items-center relative"> <button className="p-3 text-blue-600 text-5xl absolute bottom-[-6px]" onClick={subtract} >-</button></div>
      <div className="p-2 bg-fuchsia-100 rounded-full h-[50px] w-[50px] flex justify-center items-center relative"> <button className="p-3 text-blue-600 text-5xl absolute top-[-4px]" onClick={multiply} >*</button></div>
      <div className="p-2 bg-fuchsia-100 rounded-full h-[50px] w-[50px] flex justify-center items-center relative"> <button className="p-3 text-blue-600 text-4xl absolute bottom-[-2px]" onClick={divide} >/</button></div>
        </div>
        </div>

        {result && <div>Result : {result}</div>}
      
    </div>
  )
}

export default App
