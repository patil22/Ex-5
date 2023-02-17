import React, { useState } from 'react'


const Formvalidation = () => {
    const [use, setuse] = useState(false)
    const [pas,setpas] = useState(false)
    const submit = (e) => {
        e.prevantdefault()

    }
    const email = (e) => {
        let emailval = e.target.value;
    
        if (emailval.match(/^[a-zA-Z*#\-]+$/) ) {
            setuse(true)
            console.log(e.target.value.length)
        }
        
     
        else {
            setuse(false)
        }

    }
    const pass = (e)=>{
        let passval = e.target.value;
        if(passval.match(/^[a-zA-Z*#\-]+$/)){
            setpas(true)
        }
        else{
            setpas(false)
        }

    }
    return (
        <div className='container'>
            <form onSubmit={submit}>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label> {use ? <span> true</span> : ""}
                    <input type="text" required class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={email} />

                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>{pas ? <span> true</span> : ""}
                    <input type="password" required class="form-control" id="exampleInputPassword1" onChange={pass}/>
                </div>

                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    )

}
export default Formvalidation;