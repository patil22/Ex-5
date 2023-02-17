import React, { useState } from 'react'

const Accordian = () => {


    const [mystyle, setmystyle] = useState({
        color: 'white',
        backgroundColor: 'black'
    })
    const [btn, setbtn] = useState("background white")
    const [border, setborder] = useState({
        border: '1px solid red'

    })

    const toggle = () => {
        if (mystyle.color === 'white') {
            setmystyle({
                color: 'black',
                backgroundColor: 'white'

            })
            setbtn("background Dark")
            setborder({
                border: '5px solid red'
            })
           
          
        }
        else {
            setmystyle({
                color: 'white',
                backgroundColor: 'black'
            })


            setbtn("background white")
            setborder({
                border: '5px solid green'
            })
          
            
        }

    }




return (

    <div className='container'>
        <h1>Accordian</h1>
        <div class="accordion accordion-flush" id="accordionFlushExample" >
            <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingOne">
                    <button class="accordion-button collapsed" style={mystyle } type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                        Accordion Item #1
                    </button>
                </h2>
                <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body" style={mystyle}  style={border} >Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingTwo">
                    <button class="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                        Accordion Item #2
                    </button>
                </h2>
                <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body" style={mystyle }  style={border}>Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingThree">
                    <button class="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                        Accordion Item #3
                    </button>
                </h2>
                <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body" style={mystyle}  style={border}>Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                </div> 
            </div>
        </div>
        <button type="button" className='btn btn-secondary my-3' onClick={toggle} >{btn}</button>

    </div>


)
}





export default Accordian;