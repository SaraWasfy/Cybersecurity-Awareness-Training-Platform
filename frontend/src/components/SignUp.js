import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import SignUpService from "../services/signUpService";
import { useNavigate } from "react-router-dom";
import logo from '../images/Shield logo 2.png';
import Photo from '../images/ShieldCut.png';
import X from '../images/X.png';
import signUpService from "../services/signUpService";

function SignUp() {
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    username: "",
    password: "",
  });

  const [message, setMessage] = useState('')
  let navigate = useNavigate();
  
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if(name === 'password'){
      if (value.length < 6) {
        setMessage('Password is too short');
      } else if (!/\d/.test(value)) {
        setMessage('Password should contain at least one digit');
      } else if(!/[A-Z]/.test(value)){
        setMessage('Password should contain at least one capital letters');
      }
      else {
        setMessage('Password strength is good');
      }
    }
    setUser({ ...user, [name]: value });
  };



  async function signup(e) {
    e.preventDefault();
    try {
      const response = await signUpService.signup(user);
      //console.log(response.data);
      console.log(response.data);
      if (response.data) {
        alert('Welcome to our platform, login now');
        navigate("../login", { replace: true });
      } else {
        alert(`Error, Please Try Again`);
      }
    } catch (error) {
      console.error(error);
      if (error.response) {
        if (
          error.response.status === 409 &&
          error.response.data.code === 11000 &&
          error.response.data.keyPattern &&
          error.response.data.keyPattern.username
        ) {
         // alert('Error: This username is already taken. Please choose a different one.');
        } else {
          alert(`Error: ${error.response.data.message}`);
        }
      } else if (error.request) {
        alert('Error: No response from the server');
      } else {
        alert(`Error: ${error.message}`);
      }
    }
}


  return (
<div style={{width: '100%', height: '100%', position: 'relative', background: 'white'}}>
    <div style={{width: 1920, height: 1080, left: 0, top: 0, position: 'absolute'}}><img style={{width: 30, height: 37, left: 24, top: 24, position: 'absolute', borderRadius: 9999}} 
                        src={logo} alt="logo" />
        
        <form onSubmit= {signup} style={{width: 839, height: 958, left: 88, top: 56, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'flex-start', gap: 32, display: 'inline-flex'}}>
            <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 2, display: 'flex'}}>
                <div style={{color: '#333333', fontSize: 32, fontFamily: 'Poppins', fontWeight: '500', wordWrap: 'break-word'}}>Sign Up</div>
                <div style={{ padding: 2, justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex' }}>
            <div>
                <span style={{ color: '#333333', fontSize: '16px', fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word' }}>Already have an account?</span>
                <span style={{ color: '#666666', fontSize: '16px', fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word' }}> </span>
                <span style={{ color: '#111111', fontSize: '16px', fontFamily: 'Poppins', fontWeight: '400', textDecoration: 'underline', wordWrap: 'break-word' }}>Sign in</span>
            </div>
         </div>

            </div>
            <div style={{ height: 87, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'flex' }}>
                <div style={{ width: 534, paddingBottom: 3, paddingRight: 450, justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex' }}>
                    <div style={{ color: '#666666', fontSize: 16, fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word' }}>First name</div>
                </div>
                <div style={{ width: 534, height: 56, position: 'relative', borderRadius: 12, border: '1px solid rgba(102, 102, 102, 0.35)' }}>
                <input name="firstname" type="text" placeholder="Enter your first name" onChange={handleInputChange} value={user.firstname} style={{ width: '100%', height: '100%', padding: '10px 12px', borderRadius: 12, border: 'none', fontSize: 16, fontFamily: 'Poppins' }} />
                </div>
            </div>

            <div style={{ height: 87, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'flex' }}>
                <div style={{ width: 534, paddingBottom: 3, paddingRight: 450, justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex' }}>
                    <div style={{ color: '#666666', fontSize: 16, fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word' }}>Last name</div>
                </div>
                <div style={{ width: 534, height: 56, position: 'relative', borderRadius: 12, border: '1px solid rgba(102, 102, 102, 0.35)' }}>
                <input name="lastname" type="text" placeholder="Enter your last name" onChange={handleInputChange} value={user.lastname} style={{ width: '100%', height: '100%', padding: '10px 12px', borderRadius: 12, border: 'none', fontSize: 16, fontFamily: 'Poppins' }} />
                </div>
            </div>
            <div style={{ height: 87, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'flex' }}>
                <div style={{ width: 665, paddingBottom: 3, paddingRight: 621, justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex' }}>
                    <div style={{ color: '#666666', fontSize: 16, fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word' }}>Email</div>
                </div>
                <div style={{ width: 665, height: 56, position: 'relative', borderRadius: 12, border: '1px solid rgba(102, 102, 102, 0.35)' }}>
                <input name="email" type="email" placeholder="Enter your email" onChange={handleInputChange} value={user.email}  style={{ width: '100%', height: '100%', padding: '10px 12px', borderRadius: 12, border: 'none', fontSize: 16, fontFamily: 'Poppins', boxSizing: 'border-box' }} />
                </div>
            </div>

            <div style={{ height: 87, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'flex' }}>
                <div style={{ width: 665, paddingBottom: 3, paddingRight: 546, justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex' }}>
                    <div style={{ color: '#666666', fontSize: 16, fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word' }}>Phone Number</div>
                </div>
                <div style={{ width: 665, height: 56, position: 'relative', borderRadius: 12, border: '1px solid rgba(102, 102, 102, 0.35)' }}>
                <input name="phone" type="tel" placeholder="Enter your phone number" onChange={handleInputChange} value={user.phone} style={{ width: '100%', height: '100%', padding: '10px 12px', borderRadius: 12, border: 'none', fontSize: 16, fontFamily: 'Poppins', boxSizing: 'border-box' }} />
                </div>
            </div>

            <div style={{ height: 87, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'flex' }}>
                <div style={{ width: 665, paddingBottom: 3, paddingRight: 582, justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex' }}>
                    <div style={{ color: '#666666', fontSize: 16, fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word' }}>Username</div>
                </div>
                <div style={{ width: 665, height: 56, position: 'relative', borderRadius: 12, border: '1px solid rgba(102, 102, 102, 0.35)' }}>
                <input name="username" type="text" placeholder="Enter your username" onChange={handleInputChange} value={user.username}  style={{ width: '100%', height: '100%', padding: '10px 12px', borderRadius: 12, border: 'none', fontSize: 16, fontFamily: 'Poppins', boxSizing: 'border-box' }} />
                </div>
            </div>

            <div style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex' }}>
                <div style={{ height: 87, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'flex' }}>
                    <div style={{ paddingRight: 8.86, justifyContent: 'flex-start', alignItems: 'flex-start', gap: 506.14, display: 'inline-flex' }}>
                        <div style={{ color: '#666666', fontSize: 16, fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word' }}>Password  </div>
                    </div>
                    <div style={{ width: 665, height: 56, position: 'relative', borderRadius: 12, border: '1px solid rgba(102, 102, 102, 0.35)' }}>
                    <input name="password" type="password" placeholder="Enter your password" onChange={handleInputChange} value={user.password} style={{ width: '100%', height: '100%', padding: '10px 12px', borderRadius: 12, border: 'none', fontSize: 16, fontFamily: 'Poppins', boxSizing: 'border-box' }} />
                    </div>
                </div>
                <div style={{justifyContent: 'flex-start', alignItems: 'flex-start', gap: 18, display: 'inline-flex'}}>
                
                    <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                        <div style={{paddingTop: 8, paddingBottom: 8, paddingRight: 8, justifyContent: 'center', alignItems: 'center', gap: 8, display: 'inline-flex'}}>
                            <div style={{width: 8, height: 8, background: 'rgba(102, 102, 102, 0.60)', borderRadius: 9999}} />
                            <div style={{color: 'rgba(102, 102, 102, 0.60)', fontSize: 14, fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word'}}>Use At Least 8 characters</div>
                        </div>
                        <div style={{paddingTop: 8, paddingBottom: 8, paddingRight: 8, justifyContent: 'center', alignItems: 'center', gap: 8, display: 'inline-flex'}}>
                            <div style={{width: 8, height: 8, background: 'rgba(102, 102, 102, 0.60)', borderRadius: 9999}} />
                            <div style={{color: 'rgba(102, 102, 102, 0.60)', fontSize: 14, fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word'}}>At Least One Special character</div>
                        </div>
                    </div>
                    <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                        <div style={{paddingTop: 8, paddingBottom: 8, paddingRight: 8, justifyContent: 'center', alignItems: 'center', gap: 8, display: 'inline-flex'}}>
                            <div style={{width: 8, height: 8, background: 'rgba(102, 102, 102, 0.60)', borderRadius: 9999}} />
                            <div style={{color: 'rgba(102, 102, 102, 0.60)', fontSize: 14, fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word'}}>At Least One Uppercase character</div>
                        </div>
                        <div style={{paddingTop: 8, paddingBottom: 8, paddingRight: 8, justifyContent: 'center', alignItems: 'center', gap: 8, display: 'inline-flex'}}>
                            <div style={{width: 8, height: 8, background: 'rgba(102, 102, 102, 0.60)', borderRadius: 9999}} />
                            <div style={{color: 'rgba(102, 102, 102, 0.60)', fontSize: 14, fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word'}}>At Least One lowercase character</div>
                        </div>
                    </div>
                    <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                        <div style={{paddingTop: 8, paddingBottom: 8, paddingRight: 8, justifyContent: 'center', alignItems: 'center', gap: 8, display: 'inline-flex'}}>
                            <div style={{width: 8, height: 8, background: 'rgba(102, 102, 102, 0.60)', borderRadius: 9999}} />
                            <div style={{color: 'rgba(102, 102, 102, 0.60)', fontSize: 14, fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word'}}>At Least One Number</div>
                        </div>
                        <p style={{ color: 'red' }}>{message}</p>
                    </div>
                </div>
            </div>
            <div style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', gap: 8, display: 'flex'}}>
            <div style={{
  width: '480px', // Slightly smaller width
  height: '65px', // Slightly smaller height
  paddingTop: '12px', 
  paddingBottom: '13px', 
  opacity: 1,  
  background: '#666666',  // Primary button blue color
  borderRadius: '40px',  
  overflow: 'hidden', 
  justifyContent: 'center', 
  alignItems: 'center', 
  display: 'flex',
  cursor: 'pointer',  
  transition: 'background-color 0.3s',  // Transition for color change
}}
onMouseOver={(e) => {
  e.currentTarget.style.backgroundColor = '#1bc0c8';  // Darken background on hover
}}
onMouseOut={(e) => {
  e.currentTarget.style.backgroundColor = '#666666';  // Revert background color on mouse out
}}
>
  <div style={{
    justifyContent: 'center', 
    alignItems: 'center', 
    gap: '8px', 
    display: 'flex',
    width: '100%',  // Ensures the inner div fills the outer div
    height: '100%'  // Ensures the inner div fills the outer div
  }}>
    <button type="submit" style={{
      textAlign: 'center', 
      color: 'white',  // White text for contrast
      background: 'transparent',  // Transparent background to inherit from parent
      fontSize: '25px',  // Smaller font size
      fontFamily: 'Poppins', 
      fontWeight: '600',  // Slightly less bold
      border: 'none',  // No border for a clean look
      width: '100%',  // Button fills the container
      height: '100%',  // Button fills the container
      outline: 'none'  // Removes focus outline
    }}>
      Create an account
    </button>
  </div>
</div>


            </div>
         </form>
         <div style={{width: 32, height: 32, left: 991, top: 24, position: 'absolute'}}>
            <div style={{width: 32, height: 32, left: 0, top: 0, position: 'absolute'}}></div>
            {/* <div style={{width: 18.67, height: 18.67, left: 6.67, top: 6.67, position: 'absolute', background: '#666666'}}></div> */}
            <img style={{width: 19, height: 19, left: 6.67, top: 6.67, position: 'absolute'}} src={X} alt="X" />
        </div>
    </div>
    <div style={{width: 870, height: 1080, left: 1050, top: 0, position: 'absolute', background: 'black'}}>
        {/* <img style={{width: 506, height: 550, left: 364, top: 530, position: 'absolute'}} src={Photo} alt="photo" /> */}
        <img style={{width: 600, height: 600, left: 600, top: 1050, position: 'absolute', transform: 'rotate(180deg)', transformOrigin: '0 0'}} src={Photo} alt="photo" />
        <img style={{width: 600, height: 600, left: 270, top: -32, position: 'absolute'}} src={Photo} alt="photo" />
    </div>
</div>
  );
}

export default SignUp;