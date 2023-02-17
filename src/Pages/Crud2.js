import React from 'react'

export default function Crud2(props) {
   
  return (
    <div>
          <i className='del' onClick={()=>{props.onSelect(props.id)}}>delete</i> <li>{props.val}</li>

      
    </div>
  )
}
