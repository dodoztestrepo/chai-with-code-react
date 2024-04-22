import { useState } from "react"


function App() {
let [count,setCount]=useState(1);
 function addNumber(){
  setCount(count+1)
 }
 function decreaseCount(){
  if (count==0) {
    
  }else setCount(count-1);

 }

  return (
    <>
    
    <h4>counter {count}</h4>
    <button onClick={addNumber} >Increase value {count}</button><br /><br />
    <button onClick={decreaseCount}> Decrease value</button><br />
    </>
  )
  
}

export default App
