import { useState } from 'react'

import './App.css'

function App() {
  const [color, setColor] = useState("  violet")

  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor:color}} >
       <h1 className="pt-20 text-4xl ">This is my bgchange color game</h1>
      
      <div className="fixed flex flex-wrap justify-center bottom-14 inset-x-0 px-2">
       
        <div className="flex flex-warap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl">
          <button onClick={()=>{setColor("red")}}  className="outline-none px-4 rounded-full text-white shadow-lg" style={{backgroundColor:"red"}}>red</button>

          <button  onClick={()=>{setColor("blue")}} className="outline-none px-4 rounded-full text-white shadow-lg" style={{backgroundColor:"blue"}}>blue</button>
          <button  onClick={()=>{setColor("green")}} className="outline-none px-4 rounded-full text-white shadow-lg" style={{backgroundColor:"green"}}>green</button>
          <button  onClick={()=>{setColor("pink")}} className="outline-none px-4 rounded-full text-white shadow-lg" style={{backgroundColor:"pink"}}>pink</button>
          <button  onClick={()=>{setColor("violet")}} className="outline-none px-4 rounded-full text-white shadow-lg" style={{backgroundColor:"violet"}}>violet</button>
          <button  onClick={()=>{setColor("yellow")}} className="outline-none px-4 rounded-full text-white shadow-lg" style={{backgroundColor:"yellow"}}>yellow</button>
          <button  onClick={()=>{setColor("olive")}} className="outline-none px-4 rounded-full text-white shadow-lg" style={{backgroundColor:"olive"}}>olive</button>
          
          </div>
        </div>
    </div>
   
  )
}

export default App
