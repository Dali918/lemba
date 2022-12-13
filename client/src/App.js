import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App(){
  return(
    <div>
      
      <h1 className='Rectangle1'>
       Insert How To Use Lemba Slideshow
      </h1>

      <h1 className='Rectangle2'>
        <h1 className="LEMBA"> 
          LEMBA</h1>
          <h3 className='Login'> 
            Login</h3>
            
            <button type='button' className='Button'>Login With Google</button>{' '}        
            <h6 className="Line"> </h6>
          <div className="Form">
          <input  placeholder="Enter Username" className='Form'/>
          <div>
            <input placeholder='Enter Password' className='Form'>
            </input>
          </div>
          </div>
          <button type="button" className='Button'> Login </button>
        <h6>
          Don't Have An Account?
          <button type="button" className='Button' data-bs-toggle="modal" data-bs-target="#exampleModal">
  Sign Up
</button>

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content rounded-5" >
      <div>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>

        <h1 class="modal-title fs-5" id="exampleModalLabel" className='LEMBA'>LEMBA</h1>
        
      </div>
      <div class="modal-body">
        <h6>Sign Up</h6>
        <button type="button" className='Button'> Sign Up With Google </button>

      

      <h6 className="Line"> </h6>
      <div>
          <input  placeholder="Enter Email" className='Form'/>
      </div>
      <div>
          <input placeholder='Enter First Name' className='Form'/>
          <input placeholder='Enter First Name' className='Form'/>
          <input placeholder='Enter New Username' className='Form'/>
          <input placeholder='Enter New Password' className='Form'/>
      </div>
      <div>
        <button type="button" className='Button'> Sign Up </button>
        <h6>Already Have An Account? Login </h6>
      </div>
      </div>
    </div>
  </div>
</div>
</h6>


  </h1>
  </div>
  );
}

export default App;