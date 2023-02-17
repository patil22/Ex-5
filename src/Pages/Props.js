import React from 'react'

const Props = (props)=>{
    return(

        <div>

{props.status === "active" ?(
<p style={{color:"green"}}>My Name is {props.name}  and Age is {props.age} </p>) :
<p style={{color:"red"}}>My Name is {props.name}  and Age is {props.age} </p>}

        </div>
    );
}
export default Props;