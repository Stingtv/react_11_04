import React,{useRef,useState} from 'react'


function Child({value}) {
    let number= 5;
    const numberRef = useRef(5);
    const [numberState, setNumberState] = useState(5);
  return (
    <div>
        <h2>Demonstrate state, ref ans regular variable</h2>
        <p>The button will increment all the values by 1</p>
        <button onClick={() =>{
            setNumberState((x) => x + 1);
            number +=1;
            numberRef.current += 1;
            console.log(`number: ${number}, numberRef: ${numberRef.current}, numberState: ${numberState}`);
        }}>Increment  onclick see log and table</button>
<button onClick={() =>{
            //setNumberState((x) => x + 1);
            number +=1;
            numberRef.current += 1;
            console.log(`number: ${number}, numberRef: ${numberRef.current}, numberState: ${numberState}`);
        }}>Increment without number state onclick see log and table</button>

        <table>
            <thead>
            <tr>
                <th>number   ,</th>
                <th>numberRef ,</th>
                <th>numberState</th>
            </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{number}</td>
                    <td>{numberRef.current}</td>
                    <td>{numberState}</td>
                </tr>
            </tbody>
            
        </table>
        <h3>useRef / useState Summary</h3>
        <p>useState: save the state between renders, Changing the state cause to trigger rendering</p>
        <p>useRef: save the content between rendering, changing the content not cause to rendering</p>
    </div>
  )
}

export default Child