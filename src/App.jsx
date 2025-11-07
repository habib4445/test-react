import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
function handleClick(){
  alert('I am clicker');
}
const handleClick3=()=>{
  alert('I am clicked 3')
}

const handleAdd5 =(num)=>{
  const newNum=num+5;
  alert(newNum);
}

  return (
    <>
      <h1>Vite + React</h1>
<button onClick={handleClick} >Click Me</button>
<button onClick={handleClick3} >Click Me2</button>
<button onClick={()=> alert('clicked 4')} >Click Me4</button>
<button onClick={() => handleAdd5(10)} > Add 5</button>

    </>
  );
}

export default App;
