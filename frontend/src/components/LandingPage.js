import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
//import RegisterPatientService from "../services/RegisterPatientService";
import { useNavigate } from "react-router-dom";
import logo from '../images/Shield logo 2.png';
import Photo from '../images/Shield.png';
import X from '../images/X.png';
import first from '../images/Leaderboard/L1st.png';
import second from '../images/Leaderboard/L2nd.png';
import third from '../images/Leaderboard/L3rd.png';
import axios from 'axios';
import userService from "../services/userService";

function RegisterPatient() {
  const initialUserState = {
    name: "",
    email: "",
    username: "",
    password: "",
    dateOfBirth: "",
    gender: "",
    mobile: "01XXXXXXXXX",
    emergencyContactName: "",
    emergencyContactMobile: "",
  };

  const [patient, setPatient] = useState (initialUserState);
  const [message, setMessage] = useState('')
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if(name == 'password'){
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
    setPatient({ ...patient, [name]: value });
  };


  let navigate = useNavigate();
  async function login() {
    navigate("../login", { replace: true });
}
async function signup() {
    navigate("../signup", { replace: true });
}
  async function Home() {
    navigate("../login", { replace: true });
   }
const [users, setUsers] = useState([]);
const fetchUsers = async () => {
    userService.getUsers()
        .then((response) => {
          console.log(response);
        })
        .catch((e) => {
          console.log(e);
        });
    // try {
    //     const response = await userService.getUsers();
    //     const data = response.data;

    //     Check if data is an array and has elements before sorting
    //     if (Array.isArray(data) && data.length > 0) {
    //         const sortedUsers = data.sort((a, b) => b.score - a.score).slice(0, 3);
    //         setUsers(sortedUsers);
    //     } else {
    //         console.log('Data is not an array or is empty');
    //     }
    // } catch (error) {
    //     console.error('Failed to fetch users:', error);
    // }
};
useEffect(() => {
    fetchUsers();
    const intervalId = setInterval(fetchUsers, 5000); // Update every 5 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
}, []);

  return (
<div style={{width: '100%', height: '100%', position: 'relative', background: 'black'}}>
        <div style={{width: 1440, height: 535, left: 0, top: 3520, background: 'black', position: 'absolute'}}>
            <div style={{width: 234, height: 229, left: 1000, top: 166, position: 'absolute'}}>
                    <div style={{left: 0, top: 0, position: 'absolute', color: 'white', fontSize: 18, fontFamily: 'Montserrat', fontWeight: '600', wordWrap: 'break-word'}}>Legal</div>
                    <div style={{left: 0, top: 53, position: 'absolute', color: 'white', fontSize: 16, fontFamily: 'Lato', fontWeight: '400', wordWrap: 'break-word'}}>Privacy Policy</div>
                    <div style={{left: 0, top: 85, position: 'absolute', color: 'white', fontSize: 16, fontFamily: 'Lato', fontWeight: '400', wordWrap: 'break-word'}}>Terms & Services</div>
                    <div style={{left: 0, top: 117, position: 'absolute', color: 'white', fontSize: 16, fontFamily: 'Lato', fontWeight: '400', wordWrap: 'break-word'}}>Terms of Use</div>
                </div>
                <div style={{paddingBottom: 93, paddingRight: 46, left: 697, top: 166, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 31, display: 'inline-flex'}}>
                    <div style={{color: 'white', fontSize: 18, fontFamily: 'Montserrat', fontWeight: '600', wordWrap: 'break-word'}}>Partners</div>
                    <div style={{color: 'white', fontSize: 16, fontFamily: 'Lato', fontWeight: '400', wordWrap: 'break-word'}}>German University in Cairo</div>
                </div>
                <div style={{width: 234, height: 229, left: 1196, top: 166, position: 'absolute'}}>
                    <div style={{left: 0, top: 0, position: 'absolute', color: 'white', fontSize: 18, fontFamily: 'Montserrat', fontWeight: '600', wordWrap: 'break-word'}}>Quick Links</div>
                    <div style={{left: 0, top: 53, position: 'absolute', color: 'white', fontSize: 16, fontFamily: 'Lato', fontWeight: '400', wordWrap: 'break-word'}}>About Us</div>
                    <div style={{left: 0, top: 85, position: 'absolute', color: 'white', fontSize: 16, fontFamily: 'Lato', fontWeight: '400', wordWrap: 'break-word'}}>Leaderboard</div>
                    <div style={{left: 0, top: 117, position: 'absolute', color: 'white', fontSize: 16, fontFamily: 'Lato', fontWeight: '400', wordWrap: 'break-word'}}>Badges</div>
                </div>
                <div style={{width: 1232, height: 0.50, left: 104, top: 467, position: 'absolute', background: '#D9D9D9'}} />
                <div style={{paddingRight: 4, left: 104, top: 496, position: 'absolute', justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex'}}>
                    <div style={{color: '#B1B5BB', fontSize: 14, fontFamily: 'Lato', fontWeight: '300', wordWrap: 'break-word'}}>© 2024 All Rights Reserved</div>
                </div>
                <div style={{width: 331, height: 206, left: 104, top: 166, position: 'absolute', background:'black'}}>
                    <div style={{width: 105, height: 229, left: 0, top: 0, position: 'absolute', color: 'white', fontSize: 18, fontFamily: 'Montserrat', fontWeight: '600', lineHeight: 2, wordWrap: 'break-word'}}>Contact us</div>
                    <div style={{width: 179, height: 26.27, left: 0, top: 59.34, position: 'absolute'}}>
                        <div style={{width: 24, height: 26.27, left: 0, top: 0, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                            <div style={{width: 9.01, height: 9.85, background: 'white'}}></div>
                            <div style={{width: 17.81, height: 19.50, background: 'white'}}></div>
                        </div>
                        <div style={{width: 130, height: 20.79, left: 49, top: 0, position: 'absolute', color: 'white', fontSize: 16, fontFamily: 'Lato', fontWeight: '400', wordWrap: 'break-word'}}>+20 12 3456 789</div>
                    </div>
                    <div style={{width: 229, height: 26.27, left: 0, top: 111.88, position: 'absolute'}}>
                        <div style={{width: 24, height: 26.27, left: 0, top: 0, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                            <div style={{width: 20, height: 17.51, background: 'white'}}></div>
                        </div>
                        <div style={{width: 180, height: 20.79, left: 49, top: 0, position: 'absolute', color: 'white', fontSize: 16, fontFamily: 'Lato', fontWeight: '400', wordWrap: 'break-word'}}>cyprotego@guc.edu.eg</div>
                    </div>
                    <div style={{width: 331, height: 41.59, left: 0, top: 164.41, position: 'absolute'}}>
                        <div style={{width: 24, height: 26.27, left: 0, top: 0, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                            <div style={{width: 16.50, height: 22.98, background: 'white'}}></div>
                            <div style={{width: 6, height: 6.57}}></div>
                        </div>
                        <div style={{width: 282, height: 41.59, left: 49, top: 0, position: 'absolute', color: 'white', fontSize: 16, fontFamily: 'Lato', fontWeight: '400', wordWrap: 'break-word'}}>German University in Cairo - El Tagamoa El Khames - New Cairo City - Egypt</div>
                    </div>
                </div>
                <div style={{width: 1232, height: 110, left: 104, top: -12, position: 'absolute', background:'black'}}>
                    <div style={{width: 1232, height: 110, left: 0, top: 0, position: 'absolute', opacity: 0.15, background: 'linear-gradient(94deg, )'}}></div>
                    <div style={{width: 254, height: 67.18, left: 486, top: 19, position: 'absolute'}}>
                        <div style={{width: 204, left: 0, top: 5, position: 'absolute', color: '#54F4FC', fontSize: 40, fontFamily: 'Archivo', fontWeight: '600', lineHeight: 2, wordWrap: 'break-word'}}>CyProtego</div>
                        <img style={{width: 50, height: 67.18, left: 204, top: 10, position: 'absolute'}} src={logo} alt="logo" />
                    </div>
                    <div style={{width: 1232, height: 110, opacity: 0.15, background: '#54F4FC'}}></div>
                </div>
            </div>
    <div style={{width: 1440, height: 540, left: 0, top: 2980,  background: 'black', position: 'absolute', background:'black'}}>
                <div style={{width: 1222, height: 389, left: 109, top: 120, position: 'absolute', textAlign: 'center'}}>
                <span style={{color: 'white', fontSize: 24, fontFamily: 'Montserrat', fontWeight: '400', lineHeight: 1, wordWrap: 'break-word'}}>At </span>
                <span style={{color: '#54F4FC', fontSize: 24, fontFamily: 'Montserrat', fontWeight: '700', lineHeight: 1, wordWrap: 'break-word'}}>CyProtego</span>
                <span style={{color: 'white', fontSize: 24, fontFamily: 'Montserrat', fontWeight: '400', lineHeight: 1, wordWrap: 'break-word'}}>, we are passionate about empowering the next generation of digital citizens with the knowledge and tools they need to 
                navigate the ever-evolving cybersecurity landscape. Our innovative platform offers university students a unique learning 
                experience, leveraging gamification to make cybersecurity awareness training engaging and effective. With a current focus 
                on equipping students to identify and respond to phishing emails—a prevalent threat in today's digital world—we are laying the 
                groundwork for safer online interactions. As we continue to develop our platform, we look forward to expanding our training 
                modules to cover a broader spectrum of cybersecurity challenges. Our mission is to cultivate a community of informed, vigilant
                 individuals who are well-prepared to protect themselves and their digital environments against cyber threats. Join us on this 
                 journey to a more secure digital future.</span></div>
                <div style={{width: 1219, height: 33, left: 111, top: 58, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 24, fontFamily: 'Lato', fontWeight: '300', lineHeight: 2, wordWrap: 'break-word'}}>Published On: 2024</div>
                <div style={{width: 600, height: 1, left: 420, top: 0, position: 'absolute', background: '#404040'}} />
                <div style={{width: 756, left: 342, top: 0, position: 'absolute', textAlign: 'center', color: '#54F4FC', fontSize: 40, fontFamily: 'Montserrat', fontWeight: '600', lineHeight: 2, wordWrap: 'break-word'}}>About Us</div>
                <div style={{width: 1302, height: 0.50, left: 69, top: -20, position: 'absolute', background: '#54F4FC'}} />
    </div>
    <div style={{paddingTop: 34, paddingBottom: 42, paddingLeft: 65, paddingRight: 112, left: 0, top: 1832, position: 'absolute', justifyContent: 'center', alignItems: 'center', display: 'inline-flex', background:'black'}}>
        <div style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 104, display: 'inline-flex'}}>
            <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 48, display: 'flex'}}>
                <div style={{width: 756, textAlign: 'center', color: 'white', fontSize: 40, fontFamily: 'Montserrat', fontWeight: '600', lineHeight: 2, wordWrap: 'break-word'}}>Training</div>
                <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 24, display: 'flex'}}>
                    <div style={{justifyContent: 'flex-start', alignItems: 'flex-start', gap: 72, display: 'inline-flex'}}>
                        <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 40, display: 'inline-flex'}}>
                            <div style={{height: 432, paddingLeft: 72, paddingRight: 72, paddingTop: 48, paddingBottom: 48, borderRadius: 16, border: '1px solid', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 16, display: 'flex'}}>
                                <div style={{width: 94, height: 94, position: 'relative'}}>
                                    <div style={{width: 67, height: 67, left: 14, top: 14, position: 'absolute'}}>
                                        <div style={{width: 44.67, height: 58.62, left: 11.17, top: 2.79, position: 'absolute', background: '#54F4FC'}}></div>
                                        <div style={{width: 67, height: 67, left: 0, top: 0, position: 'absolute'}} />
                                    </div>
                                    <div style={{width: 67, height: 67, left: 14, top: 14, position: 'absolute'}} />
                                </div>
                                <div style={{color:'#54F4FC',flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 24, display: 'flex'}}>
                                    <div style={{textAlign: 'center', fontSize: 24, fontFamily: 'Montserrat', fontWeight: '600', lineHeight: 1, wordWrap: 'break-word'}}>Spot The Phishing Email</div>
                                    <div style={{width: 449, height: 168, textAlign: 'center', color: 'white', fontSize: 18, fontFamily: 'Lato', fontWeight: '300', lineHeight: 1, letterSpacing: 0.36, wordWrap: 'break-word'}}>Protect yourself and your devices from phishing, avoid identity theft, malware, ransomware, and other cyber threats with our comprehensive cybersecurity training specializing in phishing emails. </div>
                                </div>
                            </div>
                        </div>
                        <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 40, display: 'inline-flex'}}>
                            <div style={{height: 432, paddingLeft: 72, paddingRight: 72, paddingTop: 48, paddingBottom: 48, borderRadius: 16, border: '1px solid', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 16, display: 'flex'}}>
                                <div style={{width: 94, height: 94, position: 'relative'}}>
                                    <div style={{width: 67, height: 67, left: 14, top: 14, position: 'absolute', justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                                        <div style={{width: 67, height: 67, position: 'relative', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                                            <div style={{width: 61.42, height: 61.42, background: '#54F4FC'}}></div>
                                        </div>
                                    </div>
                                    <div style={{width: 67, height: 67, left: 14, top: 14, position: 'absolute'}} />
                                </div>
                                <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 24, display: 'flex'}}>
                                    <div style={{color:'#54F4FC',textAlign: 'center', fontSize: 24, fontFamily: 'Montserrat', fontWeight: '600', lineHeight: 1, wordWrap: 'break-word'}}>Phishing Quiz</div>
                                    <div style={{width: 449, height: 168, textAlign: 'center', color: 'white', fontSize: 18, fontFamily: 'Lato', fontWeight: '300', lineHeight: 1, letterSpacing: 0.36, wordWrap: 'break-word'}}>Secure your network infrastructure from unauthorized access and data breaches with our advanced network security solutions. Defend against evolving cyber threats and maintain network integrity with robust firewalls.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{width: 1232, textAlign: 'center', color: 'white', fontSize: 40, fontFamily: 'Montserrat', fontWeight: '600', lineHeight: 1, wordWrap: 'break-word'}}>To be added</div>
                    <div style={{justifyContent: 'flex-start', alignItems: 'flex-start', gap: 72, display: 'inline-flex'}}>
                        <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 40, display: 'inline-flex'}}>
                            <div style={{height: 432, paddingLeft: 72, paddingRight: 72, paddingTop: 48, paddingBottom: 48, borderRadius: 16, border: '1px solid', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 16, display: 'flex'}}>
                                <div style={{width: 94, height: 94, position: 'relative'}}>
                                    <div style={{width: 67, height: 67, left: 14, top: 14, position: 'absolute', justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                                        <div style={{width: 67, height: 67, position: 'relative'}} />
                                    </div>
                                    <div style={{width: 67, height: 67, left: 14, top: 14, position: 'absolute'}}>
                                        <div style={{width: 61.42, height: 33.50, left: -1.26, top: 37.39, position: 'absolute', transform: 'rotate(-35deg)', transformOrigin: '0 0', background: '#54F4FC'}}></div>
                                    </div>
                                </div>
                                <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 24, display: 'flex'}}>
                                    <div style={{color:'#54F4FC',textAlign: 'center', fontSize: 24, fontFamily: 'Montserrat', fontWeight: '600', lineHeight: 1, wordWrap: 'break-word'}}>Security Awareness Training</div>
                                    <div style={{width: 449, height: 168, textAlign: 'center', color: 'white', fontSize: 18, fontFamily: 'Lato', fontWeight: '300', lineHeight: 1, letterSpacing: 0.36, wordWrap: 'break-word'}}>Empower you  with the knowledge and skills to recognize and mitigate cyber threats. Our security awareness training programs educates you on cybersecurity best practices, reducing the risk of human error and strengthening your overall security posture.</div>
                                </div>
                            </div>
                        </div>
                        <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 40, display: 'inline-flex'}}>
                            <div style={{height: 432, paddingLeft: 72, paddingRight: 72, paddingTop: 48, paddingBottom: 48, borderRadius: 16, border: '1px solid', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 16, display: 'flex'}}>
                                <div style={{width: 94, height: 94, position: 'relative'}}>
                                    <div style={{width: 67, height: 67, left: 14, top: 14, position: 'absolute', justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                                        <div style={{width: 67, height: 67, position: 'relative'}} />
                                    </div>
                                    <div style={{width: 67, height: 67, left: 14, top: 14, position: 'absolute'}} />
                                    <div style={{width: 51.86, height: 51.86, left: 21, top: 24, position: 'absolute', background: '#49D4DB'}}></div>
                                </div>
                                <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 24, display: 'flex'}}>
                                    <div style={{color:'#54F4FC',textAlign: 'center', fontSize: 24, fontFamily: 'Montserrat', fontWeight: '600', lineHeight: 1, wordWrap: 'break-word'}}>Security Awareness Training</div>
                                    <div style={{width: 449, height: 168, textAlign: 'center', color: 'white', fontSize: 18, fontFamily: 'Lato', fontWeight: '300', lineHeight: 1, letterSpacing: 0.36, wordWrap: 'break-word'}}>Empower you  with the knowledge and skills to recognize and mitigate cyber threats. Our security awareness training programs educates you on cybersecurity best practices, reducing the risk of human error and strengthening your overall security posture.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div style={{width: 1440, height: 561, left: 0, top: 1271, position: 'absolute', background:'black'}}>
        <div style={{width: 160, height: 235, left: 1124, top: 303, position: 'absolute'}}>
            <div style={{width: 100, height: 100, left: 30, top: 217, position: 'absolute', color: '#B7B3B3', fontSize: 16, fontFamily: 'Inter', fontWeight: '300', wordWrap: 'break-word', textAlign: 'center'}}>@username</div>
            <div style={{width: 100, height: 100, left: 30, top: 194, position: 'absolute', color: '#E6A66C', fontSize: 20, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word', textAlign: 'center'}}>1674</div>
            <div style={{width: 125, height: 100, left: 18, top: 160, position: 'absolute', color: 'white', fontSize: 24, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word', textAlign: 'center'}}>Emma Aria</div>
            <img style={{width: 160, height: 160, left: 0, top: 0, position: 'absolute'}} src={third} alt="3rd" />
        </div>
        <div style={{width: 160, height: 231, left: 144, top: 275, position: 'absolute', background:'black'}}>
            <div style={{width: 100, height: 100, left: 30, top: 213, position: 'absolute', color: '#B7B3B3', fontSize: 16, fontFamily: 'Inter', fontWeight: '300', wordWrap: 'break-word', textAlign: 'center'}}>@username</div>
            <div style={{width: 100, height: 100, left: 30, top: 191, position: 'absolute', color: '#C0C0C0', fontSize: 20, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word', textAlign: 'center'}}>1847</div>
            <div style={{width: 100, height: 100, left: 30, top: 160, position: 'absolute', color: 'white', fontSize: 24, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word', textAlign: 'center'}}>Jackson</div>
            <img style={{width: 160, height: 160, left: 0, top: 0, position: 'absolute'}} src={second} alt="2nd" />
        </div>
        <div style={{width: 160, height: 236, left: 641, top: 221, position: 'absolute'}}>
            <div style={{width: 100, height: 100, left: 30, top: 218, position: 'absolute', color: '#B7B3B3', fontSize: 16, fontFamily: 'Inter', fontWeight: '300', wordWrap: 'break-word', textAlign: 'center'}}>@username</div>
            <div style={{width: 100, height: 100, left: 30, top: 195, position: 'absolute', color: '#ECC704', fontSize: 20, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word', textAlign: 'center'}}>2430</div>
            <div style={{width: 100, height: 100, left: 30, top: 160, position: 'absolute', color: 'white', fontSize: 24, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word', textAlign: 'center'}}>Sara</div>
            <img style={{width: 160, height: 160, left: 0, top: 0, position: 'absolute'}} src={first} alt="1st" />
        </div>
        <img style={{width: 82, height: 110.17, left: 680, top: 90, position: 'absolute'}} src={logo} alt="logo" />
        <div style={{width: 306, height: 58, left: 567, top: 12, position: 'absolute', color: 'white', fontSize: 48, fontFamily: 'Inter', fontWeight: '600', wordWrap: 'break-word'}}>Leaderboard </div>
    </div>
    <div style={{width: 1440, height: 421, left: 0, top: 850, position: 'absolute', background:'black'}}>
        <div style={{left: 104, top: 5, position: 'absolute'}} />
        <div style={{width: 1222, height: 194, left: 114, top: 5, position: 'absolute', textAlign: 'center'}}>
        <span style={{color: 'white', fontSize: 24, fontFamily: 'Montserrat', fontWeight: '400', lineHeight: 1, wordWrap: 'break-word'}}>At </span>
        <span style={{color: '#54F4FC', fontSize: 24, fontFamily: 'Montserrat', fontWeight: '700', lineHeight: 1, wordWrap: 'break-word'}}>CyProtego</span>
        <span style={{color: 'white', fontSize: 24, fontFamily: 'Montserrat', fontWeight: '400', lineHeight: 1, wordWrap: 'break-word'}}>, we're dedicated to raise cybersecurity awareness
         among university students and protecting individuals from the ever-evolving threats in the digital landscape. We provide a new
          approach which is cybersecurity awareness training using gamification to enhance users’ experience and provide practical 
          exercises to make sure the users’ reach their full potential while keeping them engaged in a competition like environment</span>
        </div>
        <div style={{width: 1232, height: 200, left: 104, top: 220, position: 'absolute'}}>
            <div style={{width: 1232, height: 201, left: 0, top: 0, position: 'absolute', background: 'linear-gradient(90deg, )', borderRadius: 40}} />
            <div style={{width: 1095, left: 121, top: 13, position: 'absolute', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 114, display: 'inline-flex'}}>
                <div style={{width: 242, textAlign: 'center'}}><span style={{color: 'white', fontSize: 72, fontFamily: 'Montserrat', fontWeight: '700', lineHeight: 1, wordWrap: 'break-word'}}>8+<br/></span><span style={{color: 'white', fontSize: 24, fontFamily: 'Lato', fontWeight: '400', lineHeight: 1, letterSpacing: 1.20, wordWrap: 'break-word'}}>Phishing Emails Exercises</span></div>
                <div style={{textAlign: 'center'}}><span style={{color: 'white', fontSize: 72, fontFamily: 'Montserrat', fontWeight: '700', lineHeight: 1, wordWrap: 'break-word'}}>25+<br/></span><span style={{color: 'white', fontSize: 24, fontFamily: 'Lato', fontWeight: '400', lineHeight: 1, letterSpacing: 1.20, wordWrap: 'break-word'}}>Phishing Q&A</span></div>
                <div style={{textAlign: 'center'}}><span style={{color: 'white', fontSize: 72, fontFamily: 'Montserrat', fontWeight: '700', lineHeight: 1, letterSpacing: 3.60, wordWrap: 'break-word'}}>99%<br/></span><span style={{color: 'white', fontSize: 24, fontFamily: 'Lato', fontWeight: '400', lineHeight: 1, letterSpacing: 1.20, wordWrap: 'break-word'}}>Cybersecurity Awareness Training</span></div>
            </div>
        </div>
        <div>
            <h1>Leaderboard</h1>
            <ol>
                {users.map((user, index) => (
                    <li key={index}>
                        {user.username} - {user.score} points
                    </li>
                ))}
            </ol>
        </div>
    </div>
    <div style={{width: 1440, height: 855, left: 0, top: 0, position: 'absolute', background:'black'}}>
        <img style={{width: 829, height: 550, left: 535, top: 192, position: 'absolute'}} src={Photo} alt="Photo" />
        <div style={{width: 756, left: 104, top: 259, position: 'absolute'}}><span style={{color: '#54F4FC', fontSize: 56, fontFamily: 'Montserrat', fontWeight: '600', lineHeight: 1, wordWrap: 'break-word'}}>CyProtego Cybersecurity</span><span style={{color: 'white', fontSize: 56, fontFamily: 'Montserrat', fontWeight: '600', lineHeight: 1, wordWrap: 'break-word'}}> Awareness Training Platform</span></div>
        <div style={{width: 756, left: 104, top: 525, position: 'absolute', color: '#D7D7D7', fontSize: 24, fontFamily: 'Lato', fontWeight: '400', lineHeight: 1, wordWrap: 'break-word'}}>Unlock your full potential with our comprehensive cybersecurity awareness training. Shield yourself from social engineering attacks in a world where everything is digital and interconnected, making cybersecurity not just a practice, but a necessity.</div>
        <div style={{width: 1, height: 335, left: 53, top: 294, position: 'absolute', background: '#424242'}} />
        <div style={{width: 40, height: 1, left: 54, top: 294, position: 'absolute', background: '#424242'}} />
        <div style={{width: 40, height: 1, left: 54, top: 628, position: 'absolute', background: '#424242'}} />
        <div style={{width: 24, height: 24, left: 840, top: 175, position: 'absolute', borderLeft: '3px #54F4FC solid', borderTop: '3px #54F4FC solid'}} />
        <div style={{width: 24, height: 24, left: 840, top: 780, position: 'absolute', borderLeft: '3px #54F4FC solid', borderTop: '3px #54F4FC solid'}} />
        <div style={{width: 24, height: 24, left: 1400, top: 175, position: 'absolute', transform: 'rotate(180deg)', transformOrigin: '0 0', borderLeft: '3px #54F4FC solid', borderTop: '3px #54F4FC solid'}} />
        <div style={{width: 24, height: 24, left: 1400, top: 780, position: 'absolute', transform: 'rotate(180deg)', transformOrigin: '0 0', borderLeft: '3px #54F4FC solid', borderTop: '3px #54F4FC solid'}} />
        <div style={{left: 104, top: 706, position: 'absolute', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 32, display: 'inline-flex'}}>
            <button onClick={signup}style={{paddingLeft: 30, paddingRight: 30, paddingTop: 17, paddingBottom: 17, background: '#54F4FC', borderRadius: 8, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex'}}>
                <div style={{color: 'black', fontSize: 16, fontFamily: 'Montserrat', fontWeight: '700', lineHeight: 1, letterSpacing: 0.80, wordWrap: 'break-word'}}>SIGNUP</div>
            </button>
            <button onClick={login} style={{paddingLeft: 30, paddingRight: 30, paddingTop: 17, paddingBottom: 17, borderRadius: 8, border: '1px #54F4FC solid', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex', background:'black'}}>
                <div style={{color: '#54F4FC', fontSize: 16, fontFamily: 'Montserrat', fontWeight: '700', lineHeight: 1, letterSpacing: 0.80, wordWrap: 'break-word'}}>LOGIN</div>
            </button>
        </div>
        <div style={{height: 81, left: 40, top: 16, position: 'absolute', background:'black'}}>
            <div style={{width: 1360, height: 1, left: 0, top: 80, position: 'absolute', background: '#404040'}} />
            <div style={{width: 1347, height: 67.18, left: 13, top: 0, position: 'absolute', justifyContent: 'flex-start', alignItems: 'center', gap: 133, display: 'inline-flex'}}>
                <button onClick={Home} style={{width: 254, height: 67.18, position: 'relative', background: 'black', border: 'none'}}>
                            <div style={{width: 204, left: 0, top: 5, position: 'absolute', color: '#54F4FC', fontSize: 40, fontFamily: 'Archivo', fontWeight: '600', lineHeight: 1, wordWrap: 'break-word'}}>CyProtego</div>
                            <img style={{width: 50, height: 67.18, left: 204, top: 0, position: 'absolute'}} src={logo} alt="logo" />
                </button>
                <div style={{justifyContent: 'flex-start', alignItems: 'flex-start', gap: 48, display: 'flex'}}>
                    <div style={{justifyContent: 'center', alignItems: 'flex-start', gap: 8, display: 'flex'}}>
                        <div style={{color: 'white', fontSize: 16, fontFamily: 'Montserrat', fontWeight: '500', lineHeight: 1, letterSpacing: 0.80, wordWrap: 'break-word'}}>Training</div>
                        <div style={{width: 18, height: 18, position: 'relative'}}>
                            <div style={{width: 7.50, height: 3.75, left: 5.25, top: 9.50, position: 'absolute', background: 'rgba(255, 255, 255, 0.87)'}}></div>
                        </div>
                    </div>
                    <div style={{color: 'white', fontSize: 16, fontFamily: 'Montserrat', fontWeight: '500', lineHeight: 1, letterSpacing: 0.80, wordWrap: 'break-word'}}>Leaderboard</div>
                    <div style={{color: 'white', fontSize: 16, fontFamily: 'Montserrat', fontWeight: '500', lineHeight: 1, letterSpacing: 0.80, wordWrap: 'break-word'}}>Badges</div>
                    <div style={{color: 'white', fontSize: 16, fontFamily: 'Montserrat', fontWeight: '500', lineHeight: 1, letterSpacing: 0.80, wordWrap: 'break-word'}}>About Us</div>
                    <div style={{color: 'white', fontSize: 16, fontFamily: 'Montserrat', fontWeight: '500', lineHeight: 1, letterSpacing: 0.80, wordWrap: 'break-word'}}>Contact Us</div>
                </div>
                <div style={{paddingTop: 17, paddingBottom: 17}} />
                <button onClick={login} style={{width:100, border:'none', paddingTop: 17, paddingBottom: 17, left: 1205, top: 16, position: 'absolute', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex', background:'black'}}>
            <div style={{color: '#54F4FC', fontSize: 18, fontFamily: 'Montserrat', fontWeight: '700', lineHeight: 1, letterSpacing: 0.90, wordWrap: 'break-word'}}>LOGIN</div>
        </button>
        
        <button onClick={signup} style={{width:100, border:'none', paddingTop: 17, paddingBottom: 17, left: 1098, top: 16, position: 'absolute', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex', background:'black'}}>
            <div style={{color: '#54F4FC', fontSize: 18, fontFamily: 'Montserrat', fontWeight: '700', lineHeight: 1, letterSpacing: 0.90, wordWrap: 'break-word'}}>SIGNUP</div>
        </button>
            </div>
        </div>
    </div>
</div>

  );
}

export default RegisterPatient;