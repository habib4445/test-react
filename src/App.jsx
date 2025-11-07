import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
function handleClick(){
  alert('I am clicker');
}
  return (
    <>
      <h1>Vite + React</h1>
<button onClick={handleClick} >Click Me</button>

    </>
  );
}

export default App;
