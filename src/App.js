import React, { useRef } from "react";
import { useQueueState } from "rooks";
  
export default function App() {
    const numberToPushRef = useRef(3);
    const [list, { enqueue, dequeue, peek, 
        length }] = useQueueState([1, 2, 3]);
  
    function addToQueue() {
        numberToPushRef.current = 
            numberToPushRef.current + 1;
          
        enqueue(numberToPushRef.current);
    }
  
    return (
        <>
        <div style={{display: 'flex', justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
            <h1 style={{ color: 'green', margin: '60px' , marginTop: '5rem' }}>Queue</h1>
            <div style={{
                display: 'flex',
                flexDirection: 'horizontal',
                width: '400px',
                height: '60px',
                fontSize: '20px',
                margin: '20px',
                borderTop: '2px solid green',
                borderBottom: '2px solid green'
            }}>
                {list.map((item) => {
                    return <div style={{
                        width: '30px',
                        height: '30px',
                        
                        background: 'pink',
                        borderRadius: '5px',
                        margin: '10px',
                        textAlign: 'center'
                    }}
                        key={item}>{item}</div>;
                })}
            </div>
            <button style={{
                margin: '20px',
                background: 'yellow',
                width: '200px',
                borderRadius: '5px'
            }}
                onClick={addToQueue}>Enqueue</button>
            <button style={{
                margin: '20px',
                background: 'yellow',
                width: '200px',
                borderRadius: '5px'
            }}
                onClick={dequeue} warning>
                dequeue
            </button>
            <p style={{
                color: '#e84917',
                fontSize: '20px',
                margin: '20px'
            }}>Front Element : {peek()}</p>
  
            <p style={{
                color: '#175ce8',
                fontSize: '20px',
                margin: '20px'
            }}>Length of Queue : {length}</p>
  </div>
        </>
    );
}