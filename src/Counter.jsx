import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
 const handleAdd=()=>{
   const newCount=count+1;
  setCount(newCount);
 }
  

  return (
    <div className="ha">
      <h3>Count: {count}</h3>
      <button className="bt" onClick={handleAdd}>Add</button>
    </div>
  );
}
