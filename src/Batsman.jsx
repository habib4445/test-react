import { useState } from "react"

export default function Batsman(){
    const[runs,setRuns] = useState(0)
    const [sixes ,setSixes]=useState(0)
    const handleSingles=()=>{
        const updatedRuns=runs+1;
        setRuns(updatedRuns);
    }
// for four
const handleFour=()=>{
        const updatedRuns=runs+4;
        
        setRuns(updatedRuns);

    }
    // for six
    const handleSix=()=>{
        const updatedRuns=runs+6;
        const updatedSixes=sixes+1;
        setSixes(updatedSixes);
        setRuns(updatedRuns); 
    }
    return(
        <div>
            <h3>Player: Bangla Batsman</h3>
            {
                <p> <small>Six: {sixes}</small> </p>
    
            }
             {/* <p> <small>Four: {four}</small> </p> */}
            {
                runs>=50 && <p>You score:50</p>
                
            }
            {
                runs>=100 && <p>You score:Hundred</p>
            }
            <h1>Score:{runs} </h1>
            <button onClick={handleSingles}>Singles</button>
            <button onClick={handleFour} >Four</button>
            <button onClick={handleSix} >Six</button>
        </div>
    )
}