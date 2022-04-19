import React from 'react'
import "../sass/App.css";

function Popup(props) {
  return(props.trigger)? (
    <div className='popup'>
    <div className='popup-inner position-absolute top-0'>
        <button className='closebtn' onClick={()=>
        props.setTrigger(false)}>close</button>
        {props.children}
    </div>
    </div>
  ):"";
}

export default Popup