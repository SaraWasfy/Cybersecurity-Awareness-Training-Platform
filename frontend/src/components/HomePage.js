import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
//import RegisterPatientService from "../services/RegisterPatientService";
import { useNavigate } from "react-router-dom";
import logo from '../images/Shield logo 2.png';
import Photo from '../images/Shield.png';
import PhotoCut from '../images/ShieldCut.png';
import PhotoCut2 from '../images/ShieldCut2.png';
import X from '../images/X.png';
import first from '../images/Leaderboard/L1st.png';
import second from '../images/Leaderboard/L2nd.png';
import third from '../images/Leaderboard/L3rd.png';
import axios from 'axios';
import userService from "../services/userService";

function HomePage() {
  let navigate = useNavigate();
    async function quiz() {
        navigate("../PhishingQuiz", { replace: true });
    }
    async function spot() {
        navigate("../SpotPhishing", { replace: true });
    }
    async function badges() {
        navigate("../Badges", { replace: true });
    }
    async function aboutus() {
        navigate("../aboutus", { replace: true });
    }
  async function Home() {
    navigate("../Home", { replace: true });
   }

   async function logout(e) {
    e.preventDefault();

    userService.logout()
        .then((response) => {
            alert("You are logged out");
            console.log(response.data);
            navigate("../", { replace: true });
        })
        .catch((e) => {
            console.log(e);
            alert("Logout failed: " + e.message);
        });
}

   const [cUser, setcUser] = useState([]);
   const [Top1, setTop1] = useState([]);
   const [Top2, setTop2] = useState([]);
   const [Top3, setTop3] = useState([]);
   userService.getTop3()
   .then((response) => {
   setTop1(response.data[0])
   setTop2(response.data[1])
   setTop3(response.data[2])
   })
   .catch((e) => {
     console.log(e);
   });
   userService.getCurrentUser()
   .then((response) => {
    setcUser(response.data)
   })
   .catch((e) => {
     console.log(e);
   });

  return (
<div style={{width: '100%', height: '100%', position: 'relative', background: 'black'}}>
<div style={{width: 1440, height: 540, left: 0, top: 3020,  background: 'black', position: 'absolute', background:'black'}}>
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
    <div style={{paddingTop: 34, paddingBottom: 42, paddingLeft: 65, paddingRight: 75, left: 0, top: 1832, position: 'absolute', justifyContent: 'center', alignItems: 'center', display: 'inline-flex', background:'black'}}>
        <div style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 104, display: 'inline-flex'}}>
            <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 48, display: 'flex'}}>
                <div style={{width: 756, textAlign: 'center', color: 'white', fontSize: 40, fontFamily: 'Montserrat', fontWeight: '600', lineHeight: 2, wordWrap: 'break-word'}}>Training</div>
                <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 24, display: 'flex'}}>
                    <div style={{justifyContent: 'flex-start', alignItems: 'flex-start', gap: 72, display: 'inline-flex'}}>
                        <button onClick={spot}  style={{borderColor:'white', borderRadius:20, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 40, display: 'inline-flex', background:'black'}}>
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
                        </button>
                        <button onClick={quiz} style={{borderColor:'white', borderRadius:20 ,flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 40, display: 'inline-flex', background:'black'}}>
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
                        </button>
                    </div>
                    <div style={{width: 1300, textAlign: 'center', color: 'white', fontSize: 40, fontFamily: 'Montserrat', fontWeight: '600', lineHeight: 2, wordWrap: 'break-word'}}>To be added</div>
                    <div style={{justifyContent: 'flex-start', alignItems: 'flex-start', gap: 72, display: 'inline-flex'}}>
                        <button style={{borderColor:'white', borderRadius:20 ,flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 40, display: 'inline-flex', background:'black'}}>
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
                                    <div style={{width: 449, height: 168, textAlign: 'center', color: 'white', fontSize: 18, fontFamily: 'Lato', fontWeight: '300', lineHeight: 1, letterSpacing: 0.36, wordWrap: 'break-word'}}>Empower yourself with the knowledge and skills to recognize and mitigate cyber threats. Our security awareness training programs educates you on cybersecurity best practices, reducing the risk of human error and strengthening your overall security posture.</div>
                                </div>
                            </div>
                        </button>
                        <button style={{borderColor:'white', borderRadius:20, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 40, display: 'inline-flex', background:'black'}}>
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
                                    <div style={{width: 449, height: 168, textAlign: 'center', color: 'white', fontSize: 18, fontFamily: 'Lato', fontWeight: '300', lineHeight: 1, letterSpacing: 0.36, wordWrap: 'break-word'}}>Empower yourself with the knowledge and skills to recognize and mitigate cyber threats. Our security awareness training programs educates you on cybersecurity best practices, reducing the risk of human error and strengthening your overall security posture.</div>
                                </div>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div style={{width: 1440, height: 561, left: 0, top: 1271, position: 'absolute', background:'black'}}>
        <div style={{width: 160, height: 235, left: 1124, top: 303, position: 'absolute'}}>
            <div style={{width: 200, height: 100, left: -25, top: 217, position: 'absolute', color: '#B7B3B3', fontSize: 16, fontFamily: 'Inter', fontWeight: '300', wordWrap: 'break-word', textAlign: 'center'}}> @{Top3.username}</div>
            <div style={{width: 100, height: 100, left: 30, top: 194, position: 'absolute', color: '#E6A66C', fontSize: 20, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word', textAlign: 'center'}}>{Top3.score}</div>
            <div style={{width: 125, height: 100, left: 18, top: 160, position: 'absolute', color: 'white', fontSize: 24, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word', textAlign: 'center'}}>{Top3.firstname}</div>
            <img style={{width: 160, height: 160, left: 0, top: 0, position: 'absolute'}} src={third} alt="3rd" />
        </div>
        <div style={{width: 160, height: 231, left: 144, top: 275, position: 'absolute', background:'black'}}>
            <div style={{width: 200, height: 100, left: -25, top: 213, position: 'absolute', color: '#B7B3B3', fontSize: 16, fontFamily: 'Inter', fontWeight: '300', wordWrap: 'break-word', textAlign: 'center'}}> @{Top2.username}</div>
            <div style={{width: 100, height: 100, left: 30, top: 191, position: 'absolute', color: '#C0C0C0', fontSize: 20, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word', textAlign: 'center'}}>{Top2.score}</div>
            <div style={{width: 100, height: 100, left: 30, top: 160, position: 'absolute', color: 'white', fontSize: 24, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word', textAlign: 'center'}}>{Top2.firstname}</div>
            <img style={{width: 160, height: 160, left: 0, top: 0, position: 'absolute'}} src={second} alt="2nd" />
        </div>
        <div style={{width: 160, height: 236, left: 641, top: 221, position: 'absolute'}}>
            <div style={{width: 200, height: 100, left: -25, top: 218, position: 'absolute', color: '#B7B3B3', fontSize: 16, fontFamily: 'Inter', fontWeight: '300', wordWrap: 'break-word', textAlign: 'center'}}> @{Top1.username}</div>
            <div style={{width: 100, height: 100, left: 30, top: 195, position: 'absolute', color: '#ECC704', fontSize: 20, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word', textAlign: 'center'}}>{Top1.score}</div>
            <div style={{width: 100, height: 100, left: 30, top: 160, position: 'absolute', color: 'white', fontSize: 24, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word', textAlign: 'center'}}>{Top1.firstname}</div>
            <img style={{width: 160, height: 160, left: 0, top: 0, position: 'absolute'}} src={first} alt="1st" />
        </div>
        <img style={{width: 82, height: 110.17, left: 680, top: 90, position: 'absolute'}} src={logo} alt="logo" />
        <div style={{width: 306, height: 58, left: 567, top: 12, position: 'absolute', color: 'white', fontSize: 48, fontFamily: 'Inter', fontWeight: '600', wordWrap: 'break-word'}}>Leaderboard </div>
    </div>
    <div style={{width: 1440, height: 416, left: 0, top: 855, position: 'absolute', background: 'black'}}>
        <div style={{width: 1406, left: 17, top: 22, position: 'absolute', textAlign: 'center', color: '#54F4FC', fontSize: 56, fontFamily: 'Montserrat', fontWeight: '600', lineHeight: 2, wordWrap: 'break-word'}}>Hello, {cUser.firstname}!!</div>
        <div style={{width: 1406, left: 17, top: 132, position: 'absolute', textAlign: 'center'}}><span style={{color: 'white', fontSize: 40, fontFamily: 'Montserrat', fontWeight: '600', lineHeight: 2, wordWrap: 'break-word'}}>Your Score is: </span><span style={{color: '#54F4FC', fontSize: 40, fontFamily: 'Montserrat', fontWeight: '600', lineHeight: 2, wordWrap: 'break-word'}}>{cUser.score}</span></div>
        <div style={{width: 1406, left: 17, top: 231, position: 'absolute', textAlign: 'center'}}><span style={{color: 'white', fontSize: 40, fontFamily: 'Montserrat', fontWeight: '600', lineHeight: 2, wordWrap: 'break-word'}}>Username: </span><span style={{color: '#54F4FC', fontSize: 40, fontFamily: 'Montserrat', fontWeight: '600', lineHeight: 2, wordWrap: 'break-word'}}>@{cUser.username}</span></div>
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
        </div>
        <div style={{height: 81, left: 40, top: 16, position: 'absolute'}}>
            <div style={{width: 1360, height: 1, left: 0, top: 80, position: 'absolute', background: '#404040'}} />
            <div style={{width: 1347, height: 67.18, left: 13, top: 0, position: 'absolute', justifyContent: 'flex-start', alignItems: 'center', gap: 133, display: 'inline-flex'}}>
                        <button onClick={Home} style={{width: 254, height: 67.18, position: 'relative', background: 'black', border: 'none'}}>
                            <div style={{width: 204, left: 0, top: 5, position: 'absolute', color: '#54F4FC', fontSize: 40, fontFamily: 'Archivo', fontWeight: '600', lineHeight: 1.5, wordWrap: 'break-word'}}>CyProtego</div>
                            <img style={{width: 50, height: 67.18, left: 204, top: 0, position: 'absolute'}} src={logo} alt="logo" />
                        </button>
                <div style={{justifyContent: 'flex-start', alignItems: 'flex-start', gap: 48, display: 'flex'}}>
                    <div style={{justifyContent: 'center', alignItems: 'flex-start', gap: 8, display: 'flex'}}>
                    </div>
                    <button onClick={spot} style={{border:'none', width: 200, height:25, left: 400, top: 20, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 16, fontFamily: 'Montserrat', fontWeight: '500', wordWrap: 'break-word', background:'black'}}>Spot Phishing Email</button>
                    <button onClick={quiz} style={{border:'none', width: 150, height:25, left: 600, top: 20, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 16, fontFamily: 'Montserrat', fontWeight: '500', wordWrap: 'break-word', background:'black'}}>Phishing Quiz</button>
                    <button onClick={badges} style={{border:'none', width: 100, height:25, left: 750, top: 20, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 16, fontFamily: 'Montserrat', fontWeight: '500', wordWrap: 'break-word', background:'black'}}>Badges</button>
                    <button onClick={aboutus} style={{border:'none', width: 100, height:25, left: 850, top: 20, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 16, fontFamily: 'Montserrat', fontWeight: '500', wordWrap: 'break-word', background:'black'}}>About Us</button>
                    <button onClick={Home} style={{border:'none', width: 100, height:25, left: 980, top: 20, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 16, fontFamily: 'Montserrat', fontWeight: '500', wordWrap: 'break-word', background:'black'}}>Contact Us</button>
                    <button onClick={logout} style={{width:100, border:'none', paddingTop: 17, paddingBottom: 17, left: 1205, top: 10, position: 'absolute', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex', background:'black'}}>
                        <div style={{color: '#54F4FC', fontSize: 18, fontFamily: 'Montserrat', fontWeight: '700', lineHeight: 1, letterSpacing: 0.90, wordWrap: 'break-word'}}>LOGOUT</div>
                    </button>
                </div>
            </div>
        </div>
    </div>
    <img style={{width: 500, height: 550, left: 940, top: 936, position: 'absolute'}} src={PhotoCut} alt="Photo" />
    <img style={{width: 500, height: 550, left: 0, top: 936, position: 'absolute'}} src={PhotoCut2} alt="Photo" />
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
</div>

  );
}

export default HomePage;