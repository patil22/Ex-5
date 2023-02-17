


import React from 'react'

export default function Contactus() {
  return (
    <div className='container'>

      {/* <form>
        <input type="text" placeholder='Full Name' className='input1' />
        <br />
        <br />

        <input type="email" placeholder='Email' className='input2' /> <h1>hsdhsdh</h1>
      </form> */}



      <div class="card">
        <h2>Contact Us</h2>
        <div class="row">
          <div class="col">
            <div class="form-group">
              <label className='abf'>First Name</label>
              <input type="text"  placeholder='Enter Name'/>
            </div>
          </div>

          <div class="col">
            <div class="form-group">
              <label className='abf'>Surname</label>
              <input type="text" placeholder='Sur  Name'/>
            </div>
          </div>

          <div class="col">
            <div class="form-group">
              <label className='abf'>Email</label>
              <input type="text" placeholder='Email'/>
            </div>
          </div>

          <div class="col">
            <div class="form-group">
              <label className='abf'>Phone</label>
              <input type="text" placeholder='Phone Number'/>
            </div>
          </div>

          <div class="col">
            <div class="form-group">
              <label className='abf' >Message</label>
              <textarea placeholder='Enter message'></textarea>
            </div>
          </div>

          <div class="col">
            <input type="submit" value="Submit" />
          </div>
        </div>
      </div>
    </div>
  )
}
