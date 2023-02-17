import React, { useState } from 'react'

export default function User() {
  // const [shalert, setshalert] = useState("")


  const change = (event) => {
    console.log("jcdsc")
    settext(event.target.value);
  }
  const uppercase = () => {
    let as = text.toUpperCase();
    console.log(text)
    settext(as)
    document.getelementById('demo').innerHtml = '  < div class= "alert alert-warning alert-dismissible fade show" role = "alert" ><strong>Holy guacamole!</strong> You should check in on some of those fields below.      < button type = "button" class= "btn-close" data - bs - dismiss="alert" aria - label="Close" ></button ></div >'
  }
const lowercase = () => {
  let ab = text.toLowerCase()
  settext(ab)
}

const [text, settext] = useState(" ")
return (
  <div>

    <div className='container'>
      <p id = "demo"></p>
      <textarea class="form-control" onChange={change} value={text} id="box" rows="6" ></textarea>
      <br />
      <button type="button" className='btn btn-primary mx-2' onClick={uppercase}> convert to uppercase</button>
      <button type="button" className='btn btn-primary' onClick={lowercase}>convert to lowercase</button>
    </div>
    <p>Words{text.split(" ").length - 1} characters {text.length - 1}</p>
    <h2>Preview</h2>
    <p>{text}</p>





  </div>
)
}
