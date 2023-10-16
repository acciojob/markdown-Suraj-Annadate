import React ,{useState} from 'react';
import '../styles/App.css'


const App=()=>{
    let [val,setVal]=useState('');
  
    function changetext(event){
        setVal(event.target.value)
    }
    return (
       <div className="app">
         <div className='mark1'>
            <div className='preview'>
            <h1>Heading</h1><br></br><br></br><span>This is some <strong>bold</strong> text.</span>  
             <textarea onChange={changetext}>
            </textarea>   
            </div>
        </div>
       </div>
    )
}   

export default App;
