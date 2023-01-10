import React, { useRef } from "react";
import { useStackState } from "rooks";
  
export default function App() {
    const numberToPushRef = useRef(3);
    const [list, { push, pop, peek, length }, 
        listInReverse] = useStackState([1, 2, 3]);
  
    function addToStack() {
        numberToPushRef.current = numberToPushRef.current + 1;
        push(numberToPushRef.current);
    }
  
    return (
        <><div style={{textAlign: 'center', marginTop: '10rem'}}>
            <h1 style={{ color: 'red', margin: '20px' }}>
                Stack</h1>
            <div style={{
             
                display: 'block',
                fontSize: '20px',
                margin: '20px'
            }}>
                {listInReverse.map((item) => {
                    return <div style={{
                        width: '30px',
                        height: '30px',
                        background: '#a3fc9d',
                        borderRadius: '5px',
                        margin: '10px',
                        marginLeft: '49%',
                        textAlign: 'center'
                    }}
                        key={item}>{item}</div>;
                })}
            </div>
            <button style={{
                margin: '20px',
                background: '#f8e1ee',
                width: '200px',
                borderRadius: '5px',
                padding: '10px'
            }}
                onClick={addToStack}>Push</button>
            <button style={{
                margin: '20px',
                background: '#bbfdd8',
                width: '200px',
                borderRadius: '5px',
                padding: '10px'
            }}
                onClick={pop} warning>
                Pop
            </button>
            <p style={{
                color: '#e84917',
                fontSize: '20px',
                margin: '20px'
            }}>Top Element : {peek()}</p>
  
            <p style={{
                color: '#175ce8',
                fontSize: '20px',
                margin: '20px'
            }}>Stack Size : {length}</p>
            </div>
  
        </>
    );
}