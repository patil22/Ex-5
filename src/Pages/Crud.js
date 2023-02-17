import React, { useState } from 'react'
import Crud2 from './Crud2'



const Crud = () => {
    const [text, settext] = useState()
    const [add, setadd] = useState([])
    const texthandle = (e) => {

        settext(e.target.value)

    }
    const onclick = () => {
        setadd((olditem) => {
            return [...olditem, text];
        });
        settext("");
    }
    const del = (id)=>{
        console.log("ks")
        setadd((olditem)=>{
            return olditem.filter((arrayele,index)=>{
                return index !== id;

            })
        })
        // settext((olditem)=>{
        //     return olditem.filter((arritem,ind)=>{
        //         return ind !== aa;
        //     })
        // })
        

    }
    return (
        <div className='container'>
            <h1 id="h1">Add and delete data </h1>
            <br />
            <br />
            <input type="text" value={text} className='text' placeholder="add data" onChange={texthandle} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button type="button" className='addbtn' onClick={onclick}>+</button>
            <ul className='ol' >
                {
                    add.map((addval,index) => {
                        return (
                            <div>
                              <Crud2 val = {addval} 
                              key = {index} 
                              id = {index}
                              
                              onSelect = {del}
                              />

                                
                            </div>
                        )
                    })
                }

            </ul>

        </div>
    )


}

export default Crud;