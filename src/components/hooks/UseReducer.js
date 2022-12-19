import React, {useReducer} from 'react';
import "./style.css";

const reducer = (state, action) => {
    if (action.type ==="INCR") {
        state = state + 1;
    }
    if (state >0 && action.type ==="DECR") {
        state = state - 1;
    }

    return state;
}

const UseReducer = () => {

    const initialData = 0;
    const [state, dispatch] = useReducer(reducer, initialData);



  return (
    
    <>
    

        <div className='center_div'>
        
            <p>{state}</p>
            <div className='button2' onClick={()=>dispatch({type: "INCR"})}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                INCR
            </div>



            <div className='button2' onClick={()=>dispatch({type: "DECR"})}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
                DECR
            </div>
        
        </div>    
    
    
    
    </>

  )
}

export default UseReducer



// _________________________________
//Simple Version:
// import React, {useReducer} from 'react';
// import "./style.css";

// const reducer = (myNum, action) => {
//     if (action.type ==="Add") {
//         myNum = myNum + 1;
//     }
//     if (myNum >0 && action.type ==="Sub") {
//         myNum = myNum - 1;
//     }
//     console.log(myNum);
//     console.log(action);
//     return myNum;
// }

// const UseReducer = () => {

//     const initialData = 0;
//     const [myNum, setMyNum] = useReducer(reducer, initialData);

//     // console.log(myNum);

//   return (
    
//     <>
    

//         <div className='center_div'>
        
//             <p>{myNum}</p>
//             <div className='button2' onClick={()=>setMyNum({type: "Add"})}>
//                 <span></span>
//                 <span></span>
//                 <span></span>
//                 <span></span>
//                 INCR
//             </div>



//             <div className='button2' onClick={()=>setMyNum({type: "Sub"})}>
//             <span></span>
//             <span></span>
//             <span></span>
//             <span></span>
//                 DECR
//             </div>
        
//         </div>    
    
    
    
//     </>

//   )
// }

// export default UseReducer