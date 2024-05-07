import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserService from "../services/userService";
import logo from '../images/Shield logo 2.png';
import Photo from '../images/ShieldCut.png';
import X from '../images/X.png';

function Login(props) {
    const [user, setUser] = useState({
        username: "",
        password: "",
    });

    let navigate = useNavigate();

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    };

    async function login(e) {
        e.preventDefault();

        UserService.login(user)
            .then((response) => {
                alert("You are logged in");
                console.log(response.data);
                navigate("../Home", { replace: true });
            })
            .catch((e) => {
                console.log(e);
                alert("Login failed: " + e.message);
            });
    }

    async function signup() {
        navigate("../signup", { replace: true });
      }
      
      async function landing() {
        navigate("../", { replace: true });
      }

    return (
        <div style={{ width: '100%', height: '100%', position: 'relative', background: 'black' }}>
            <div style={{ width: 1440, height: 1024, position: 'absolute', background: 'black' }}>
                <img style={{ width: 498, height: 540, left: 940, top: 510, position: 'absolute', transformOrigin: '0 0' }} src={Photo} alt="Photo" />
                <img style={{ width: 498, height: 550, left: 498, top: 510, position: 'absolute', transform: 'rotate(180deg)', transformOrigin: '0 0' }} src={Photo} alt="Photo" />
            </div>
            <form onSubmit={login} style={{ width: 795, height: 658, left: 326, top: 183, position: 'absolute', background: 'white', borderRadius: 24, overflow: 'hidden' }}>
                <button onClick={landing} style={{ border:'none', width: 32, height: 32, left: 731, top: 32, position: 'absolute' ,  background: 'white'}}>
                    <img style={{ width: 20, height: 20, left: 6.67, top: 6.67, position: 'absolute' }} src={X} alt="X" />
                </button>
                <div style={{ left: 134, top: 40, position: 'absolute', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 40, display: 'inline-flex' }}>
                    
                <button onClick={landing} style={{border:'none', width: 40, height: 48, left:240, top:0, position: 'absolute', background:'white'}}>
                            <img style={{width: 40, height: 48}} src={logo} alt="logo" />
                        </button>
                    
                    <div style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 24, display: 'flex' }}>
                        <img style={{ width: 40, height: 48, borderRadius: 9999 }} src={logo} alt="logo" />
                        <div style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 2, display: 'flex' }}>
                            <div style={{ textAlign: 'center', color: '#333333', fontSize: 32, fontFamily: 'Poppins', fontWeight: '500', wordWrap: 'break-word' }}>Login</div>
                            <div><span style={{ color: '#333333', fontSize: 16, fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word' }}>Don’t have an account?</span> </div>
                            <button onClick={signup} style={{border:'none', padding: 2, justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex' , background:'white'}}>
                                <div> <span style={{ color: '#666666', fontSize: 16, fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word' }}> </span><span style={{ color: '#111111', fontSize: 16, fontFamily: 'Poppins', fontWeight: '400', textDecoration: 'underline', wordWrap: 'break-word' }}>Sign up</span></div>
                            </button>
                        </div>
                    </div>
                    <div style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 24, display: 'flex' }}>
                        <div style={{ height: 87, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'flex' }}>
                            <div style={{ paddingBottom: 3, paddingRight: 211, justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex' }}>
                                <div style={{ color: '#666666', fontSize: 16, fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word' }}>Username</div>
                            </div>
                            <input name="username" type="text" placeholder="Enter your username" onChange={handleInputChange} value={user.username} style={{ width: 528, height: 56, position: 'relative', borderRadius: 12, border: '1px solid rgba(102, 102, 102, 0.35)' }} />
                        </div>
                        <div style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-end', gap: 8, display: 'flex' }}>
                            <div style={{ height: 87, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'flex' }}>
                                <div style={{ paddingRight: 8.86, justifyContent: 'flex-start', alignItems: 'flex-start', gap: 327.14, display: 'inline-flex' }}>
                                    <div style={{ color: '#666666', fontSize: 16, fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word' }}>Your password</div>
                                </div>
                                <input name="password" type="password" placeholder="Enter your password" onChange={handleInputChange} value={user.password} style={{ width: 528, height: 56, position: 'relative', borderRadius: 12, border: '1px solid rgba(102, 102, 102, 0.35)' }} />
                            </div>
                            <div style={{ textAlign: 'right', color: '#111111', fontSize: 16, fontFamily: 'Poppins', fontWeight: '400', textDecoration: 'underline', wordWrap: 'break-word' }}>Forget your password?</div>
                        </div>
                        <div style={{
                            width: '528px', 
                            height: '64px', 
                            paddingTop: '15px', 
                            paddingBottom: '16px', 
                            opacity: 1,  // Full opacity for visibility
                            background: '#666666',  // A distinctive green color for differentiation
                            borderRadius: '40px',  // More pronounced rounded corners
                            overflow: 'hidden', 
                            justifyContent: 'center', 
                            alignItems: 'center', 
                            display: 'flex',
                            cursor: 'pointer',  // Cursor indicates it's clickable
                            transition: 'background-color 0.3s, transform 0.3s',  // Smooth transition for interactions
                            }}
                            onMouseOver={(e) => {
                            e.currentTarget.style.backgroundColor = '#1bc0c8';  // Darken background on hover
                            e.currentTarget.style.transform = 'scale(1.05)';  // Enlarge slightly on hover
                            }}
                            onMouseOut={(e) => {
                            e.currentTarget.style.backgroundColor = '#666666';  // Revert background color on mouse out
                            e.currentTarget.style.transform = 'scale(1)';  // Revert scale on mouse out
                            }}
                            >
                            <div style={{
                                justifyContent: 'center', 
                                alignItems: 'center', 
                                gap: '8px', 
                                display: 'flex',
                                width: '100%',  // Ensure the inner div fills the outer div
                                height: '100%'  // Ensure the inner div fills the outer div
                                }}>
                                <button type="submit" style={{
                                textAlign: 'center', 
                                color: 'white',  // White text for contrast
                                background: 'transparent',  // Transparent background to inherit from parent
                                fontSize: '26px',  // Increased font size
                                fontFamily: 'Poppins', 
                                fontWeight: '700',  // Bold font weight
                                border: 'none',  // No border for a clean look
                                width: '100%',  // Button fills the container
                                height: '100%',  // Button fills the container
                                outline: 'none'  // Removes focus outline
                                }}>
                                Login
                                </button>
                            </div>
                        </div>


                    </div>
                </div>
            </form>
        </div>
    );
}

export default Login;
