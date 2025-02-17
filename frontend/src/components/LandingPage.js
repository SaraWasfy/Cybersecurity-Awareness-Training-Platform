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
import iconPhishingEmail from '../assets/icons/phishing.svg';
import iconPhishingQuiz from '../assets/icons/password.svg';
import iconSecurityTraining from '../assets/icons/cyber-security.svg';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';


function LandingPage() {
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

  return (
<div style={{width: '100%', height: '100%', position: 'relative', background: 'black'}}>
        <div style={{width: 1440, height: 535, left: 0, top: 3520, background: 'black', position: 'absolute'}}>
        <div style={{
                    width: '100%',
                    maxWidth: '1232px',
                    height: '110px',
                    textAlign: 'center',
                    fontSize: '40px',
                    fontFamily: 'Archivo',
                    fontWeight: '600',
                    color: 'black',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: '40px',
                    background: 'linear-gradient(90deg, #54F4FC 0%, #C6F0FF 37%, rgba(180, 243, 255, 0.90) 75%, #176DB4 100%)',
                    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)',
                    margin: '40px auto',
                    position: 'relative'
                }}>
                    <img src={logo} alt="CyProtego Logo" style={{ width: '50px', height: '67px', marginRight: '10px' }} />
                    <span>CyProtego</span>
                </div>
            <div style={{
                   width: '100%',
                   maxWidth: '1232px',
                   margin: '50px auto',
                   paddingLeft: '80px', /* Move it to the right */
                   display: 'grid',
                   gridTemplateColumns: 'repeat(4, 1fr)',
                   gap: '40px',
                   textAlign: 'left'
            }}>
                {/* Contact Us Section */}
                <div>
                    <h3 style={{ color: 'white', fontSize: '18px', fontFamily: 'Montserrat', fontWeight: '600' }}>Contact Us</h3>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', margin: '10px 0' }}>
                        <FaPhoneAlt style={{ color: '#54F4FC', fontSize: '20px' }} />
                        <p style={{ color: 'white', fontSize: '16px', fontFamily: 'Lato' }}>+201099163904</p>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', margin: '10px 0' }}>
                        <FaEnvelope style={{ color: '#54F4FC', fontSize: '20px' }} />
                        <p style={{ color: 'white', fontSize: '16px', fontFamily: 'Lato' }}>sara.wasfy@student.guc.edu.eg</p>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', margin: '10px 0' }}>
                        <FaMapMarkerAlt style={{ color: '#54F4FC', fontSize: '20px' }} />
                        <p style={{ color: 'white', fontSize: '16px', fontFamily: 'Lato' }}>
                            German University in Cairo - New Cairo City - Egypt
                        </p>
                    </div>
                </div>

                {/* Partners Section */}
                <div>
                    <h3 style={{ color: 'white', fontSize: '18px', fontFamily: 'Montserrat', fontWeight: '600' }}>Partners</h3>
                    <p style={{ color: 'white', fontSize: '16px', fontFamily: 'Lato' }}>German University in Cairo</p>
                </div>

                {/* Legal Section */}
                <div>
                    <h3 style={{ color: 'white', fontSize: '18px', fontFamily: 'Montserrat', fontWeight: '600' }}>Legal</h3>
                    <p style={{ color: 'white', fontSize: '16px', fontFamily: 'Lato' }}>Privacy Policy</p>
                    <p style={{ color: 'white', fontSize: '16px', fontFamily: 'Lato' }}>Terms & Services</p>
                    <p style={{ color: 'white', fontSize: '16px', fontFamily: 'Lato' }}>Terms of Use</p>
                </div>

                {/* Quick Links Section */}
                <div>
                    <h3 style={{ color: 'white', fontSize: '18px', fontFamily: 'Montserrat', fontWeight: '600' }}>Quick Links</h3>
                    <p style={{ color: 'white', fontSize: '16px', fontFamily: 'Lato' }}>About Us</p>
                    <p style={{ color: 'white', fontSize: '16px', fontFamily: 'Lato' }}>Leaderboard</p>
                    <p style={{ color: 'white', fontSize: '16px', fontFamily: 'Lato' }}>Badges</p>
                </div>
            </div>

            {/* Divider Line */}
            <hr style={{
                width: '80%',
                border: '0.5px solid #D9D9D9',
                margin: '20px auto'
            }} />

            {/* Copyright */}
            <div style={{
                textAlign: 'center',
                color: '#B1B5BB',
                fontSize: '14px',
                fontFamily: 'Lato',
                fontWeight: '300',
                paddingBottom: '20px'
            }}>
                © 2024 All Rights Reserved
            </div>
            </div>
            <div style={{
                width: '100%', 
                top:3020,
                minHeight: '540px', 
                // background: 'black', 
                textAlign: 'center', 
                position: 'relative', 
                padding: '50px 0',
                zIndex: 1
            }}>

                {/* About Us Title */}
                <div style={{
                    fontSize: '40px', 
                    color: '#54F4FC', 
                    fontWeight: '600', 
                    fontFamily: 'Montserrat',
                    marginBottom: '20px'
                }}>
                    About Us
                </div>

                {/* Published Date */}
                <div style={{
                    fontSize: '24px', 
                    fontFamily: 'Lato', 
                    fontWeight: '300', 
                    color: 'white', 
                    marginBottom: '20px'
                }}>
                    Published On: 2024
                </div>
                                {/* Top Divider Line */}
                                <div style={{
                    width: '600px', 
                    height: '1px', 
                    background: '#404040', 
                    margin: '0 auto 20px auto'
                }}></div>

                {/* Paragraph Content */}
                <div style={{
                    width: '80%', 
                    margin: 'auto', 
                    color: 'white', 
                    fontFamily: 'Montserrat', 
                    fontSize: '18px', 
                    lineHeight: '1.6'
                }}>
                    <p>
                        At <span style={{ color: '#54F4FC', fontWeight: '700', fontFamily: 'Archivo' }}>CyProtego</span>, we are passionate about empowering the next generation 
                        of digital citizens with the knowledge and tools they need to navigate the ever-evolving cybersecurity landscape.
                        Our innovative platform offers university students a unique learning experience, leveraging gamification 
                        to make cybersecurity awareness training engaging and effective.
                    </p>
                    <p>
                        With a current focus on equipping students to identify and respond to phishing emails—a prevalent threat 
                        in today’s digital world—we are laying the groundwork for safer online interactions.
                        As we continue to develop our platform, we look forward to expanding our training modules to cover 
                        a broader spectrum of cybersecurity challenges.
                    </p>
                    <p>
                        Our mission is to cultivate a community of informed, vigilant individuals who are well-prepared 
                        to protect themselves and their digital environments against cyber threats. 
                        Join us on this journey to a more secure digital future.
                    </p>
                </div>

                {/* Bottom Divider Line */}
                <div style={{
                    width: '80%', 
                    height: '1px', 
                    background: '#54F4FC', 
                    margin: '30px auto 0 auto'
                }}></div>
            </div>

    <div style={{ paddingTop: 34, paddingBottom: 42, paddingLeft: 65, paddingRight: 113, left: 25, top: 1832, position: 'absolute', justifyContent: 'center', alignItems: 'center', display: 'inline-flex', background: 'black' }}>
        <div style={{ alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 104, display: 'inline-flex' }}>
            <div style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 48, display: 'flex' }}>
                <div style={{ width: 756, textAlign: 'center', color: 'white', fontSize: 40, fontFamily: 'Montserrat', fontWeight: '600', lineHeight: 2 }}>Training</div>
                <div style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 24, display: 'flex' }}>
                    <div style={{ justifyContent: 'center', alignItems: 'center', gap: 72, display: 'flex' }}>
                        {/* Phishing Email */}
                        <div style={{ height: 432, padding: '48px 72px', borderRadius: 16, border: '1px solid', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', display: 'flex' }}>
                            <img src={iconPhishingEmail} alt="Phishing Email Icon" style={{ width: 67, height: 67, marginBottom: 16 }} />
                            <div style={{ color: '#54F4FC', textAlign: 'center', fontSize: 24, fontFamily: 'Montserrat', fontWeight: '600' }}>Spot The Phishing Email</div>
                            <div style={{ width: 449, textAlign: 'center', color: 'white', fontSize: 18, fontFamily: 'Lato', fontWeight: '300', letterSpacing: 0.36 }}>
                            Sharpen your ability to detect phishing attempts with this hands-on exercise. You'll analyze email samples and decide whether they're legitimate or deceptive. 
                            This training enhances your awareness of phishing tactics, helping you recognize warning signs and safeguard your personal and professional information from cyber threats.                            </div>
                        </div>

                        {/* Phishing Quiz */}
                        <div style={{ height: 432, padding: '48px 72px', borderRadius: 16, border: '1px solid', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', display: 'flex' }}>
                            <img src={iconPhishingQuiz} alt="Phishing Quiz Icon" style={{ width: 67, height: 67, marginBottom: 16 }} />
                            <div style={{ color: '#54F4FC', textAlign: 'center', fontSize: 24, fontFamily: 'Montserrat', fontWeight: '600' }}>Phishing Quiz</div>
                            <div style={{ width: 449, textAlign: 'center', color: 'white', fontSize: 18, fontFamily: 'Lato', fontWeight: '300', letterSpacing: 0.36 }}>
                            Test your knowledge of phishing and cyber threats through an engaging quiz. Learn how hackers operate, why they use social engineering, and the techniques they employ to deceive users. 
                            By understanding their strategies, you’ll be better equipped to identify suspicious activities and protect yourself from cyber attacks.                            </div>
                        </div>
                    </div>

                    {/* More Training Coming Soon */}
                    <div style={{
                        width: '100%',
                        maxWidth: '1232px',
                        textAlign: 'center',
                        fontSize: '40px',
                        fontFamily: 'Montserrat',
                        fontWeight: '600',
                        color: 'black',
                        padding: '20px 0',
                        borderRadius: '40px',
                        background: 'linear-gradient(90deg, #54F4FC 0%, #C6F0FF 37%, rgba(180, 243, 255, 0.90) 75%, #176DB4 100%)',
                        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)',
                        margin: '20px auto'
                    }}>
                        More Training Coming Soon
                    </div>


                    {/* Security Awareness Training */}
                    <div style={{ justifyContent: 'center', alignItems: 'center', gap: 72, display: 'flex' }}>
                        <div style={{ height: 432, padding: '48px 72px', borderRadius: 16, border: '1px solid', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', display: 'flex' }}>
                            <img src={iconSecurityTraining} alt="Security Awareness Training Icon" style={{ width: 67, height: 67, marginBottom: 16 }} />
                            <div style={{ color: '#54F4FC', textAlign: 'center', fontSize: 24, fontFamily: 'Montserrat', fontWeight: '600' }}>Security Awareness Training</div>
                            <div style={{ width: 449, textAlign: 'center', color: 'white', fontSize: 18, fontFamily: 'Lato', fontWeight: '300', letterSpacing: 0.36 }}>
                            Empower yourself with the knowledge and skills to recognize and mitigate cyber threats. Our security awareness training programs educate you on cybersecurity best practices, 
                            helping you stay one step ahead of potential risks in the digital world. Learn how to secure your personal and professional data effectively.
                            </div>
                        </div>

                        <div style={{ height: 432, padding: '48px 72px', borderRadius: 16, border: '1px solid', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', display: 'flex' }}>
                            <img src={iconSecurityTraining} alt="Security Awareness Training Icon" style={{ width: 67, height: 67, marginBottom: 16 }} />
                            <div style={{ color: '#54F4FC', textAlign: 'center', fontSize: 24, fontFamily: 'Montserrat', fontWeight: '600' }}>Security Awareness Training</div>
                            <div style={{ width: 449, textAlign: 'center', color: 'white', fontSize: 18, fontFamily: 'Lato', fontWeight: '300', letterSpacing: 0.36 }}>
                            Develop a proactive approach to cybersecurity by identifying common attack vectors and strengthening your digital defenses. Our training modules
                             provide hands-on exercises to help you recognize phishing attempts, prevent data breaches, and maintain a secure online presence.
                            </div>
                        </div>
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
    <div style={{ width: 1440, height: 421, left: 0, top: 850, position: 'absolute', background: 'black' }}>
        <div style={{ left: 104, top: 5, position: 'absolute' }}></div>

        {/* Description Text */}
        <div style={{ width: 1222, height: 194, left: 114, top: 5, position: 'absolute', textAlign: 'center' }}>
            <span style={{ color: 'white', fontSize: 24, fontFamily: 'Montserrat', fontWeight: '400', lineHeight: 1, wordWrap: 'break-word' }}>
                At&nbsp;
            </span>
            <span style={{ color: '#54F4FC', fontSize: 24, fontFamily: 'Archivo', fontWeight: '700', lineHeight: 1, wordWrap: 'break-word' }}>
                CyProtego
            </span>
            <span style={{ color: 'white', fontSize: 24, fontFamily: 'Montserrat', fontWeight: '400', lineHeight: 1, wordWrap: 'break-word' }}>
                , we're dedicated to raising cybersecurity awareness among university students and protecting individuals from the ever-evolving threats in the digital landscape. 
                We provide a new approach which is cybersecurity awareness training using gamification to enhance users’ experience and provide practical exercises to ensure they 
                reach their full potential while keeping them engaged in a competition-like environment.
            </span>
        </div>

        {/* Gradient Box Section */}
        <div style={{ width: 1232, left:110, top: 130, height: 200, position: 'relative', marginTop: 20 }}>
            <div style={{ 
                width: '100%', 
                height: '100%', 
                position: 'absolute', 
                background: 'linear-gradient(90deg, #54F4FC 0%, #C6F0FF 37%, rgba(180, 243, 255, 0.90) 75%, #176DB4 100%)', 
                borderRadius: 40 
            }} />

            {/* Statistics Section */}
            <div style={{ 
                width: 1095, 
                left: 120, 
                top: 13, 
                position: 'absolute', 
                justifyContent: 'flex-start', 
                alignItems: 'flex-start', 
                gap: 114, 
                display: 'inline-flex' 
            }}>
                <div style={{ width: 242, textAlign: 'center' }}>
                    <span style={{ color: 'black', fontSize: 72, fontFamily: 'Montserrat', fontWeight: '700', lineHeight: 1, wordWrap: 'break-word' }}>
                        8+<br />
                    </span>
                    <span style={{ color: 'black', fontSize: 24, fontFamily: 'Lato', fontWeight: '400', lineHeight: 1.2, letterSpacing: 1.2, wordWrap: 'break-word' }}>
                        Phishing Emails Exercises
                    </span>
                </div>

                <div style={{ textAlign: 'center' }}>
                    <span style={{ color: 'black', fontSize: 72, fontFamily: 'Montserrat', fontWeight: '700', lineHeight: 1, wordWrap: 'break-word' }}>
                        25+<br />
                    </span>
                    <span style={{ color: 'black', fontSize: 24, fontFamily: 'Lato', fontWeight: '400', lineHeight: 1.2, letterSpacing: 1.2, wordWrap: 'break-word' }}>
                        Phishing Q&A
                    </span>
                </div>

                <div style={{ textAlign: 'center' }}>
                    <span style={{ color: 'black', fontSize: 72, fontFamily: 'Montserrat', fontWeight: '700', lineHeight: 1, letterSpacing: 3.6, wordWrap: 'break-word' }}>
                        99%<br />
                    </span>
                    <span style={{ color: 'black', fontSize: 24, fontFamily: 'Lato', fontWeight: '400', lineHeight: 1.2, letterSpacing: 1.2, wordWrap: 'break-word' }}>
                    Effective Cybersecurity Training
                    </span>
                </div>
            </div>
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
                            <div style={{width: 230, left: 0, top: 5, position: 'absolute', color: '#54F4FC', fontSize: 40, fontFamily: 'Montserrat', fontWeight: '600', lineHeight: 1, wordWrap: 'break-word', textTransform: 'none'}}>CyProtego</div>
                            <img style={{width: 50, height: 67.18, left: 230, top: -5, position: 'absolute'}} src={logo} alt="logo" />
                </button>
                <div style={{justifyContent: 'flex-start', alignItems: 'flex-start', gap: 48, display: 'flex'}}>
                    <div style={{border:'none', width: 200, height:25, left: 350, top: 20, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 16, fontFamily: 'Montserrat', fontWeight: '500', wordWrap: 'break-word', background:'black'}}>Spot Phishing Email</div>
                    <div style={{border:'none', width: 150, height:25, left: 550, top: 20, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 16, fontFamily: 'Montserrat', fontWeight: '500', wordWrap: 'break-word', background:'black'}}>Phishing Quiz</div>
                    <div style={{border:'none', width: 100, height:25, left: 700, top: 20, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 16, fontFamily: 'Montserrat', fontWeight: '500', wordWrap: 'break-word', background:'black'}}>Badges</div>
                    <div style={{border:'none', width: 100, height:25, left: 800, top: 20, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 16, fontFamily: 'Montserrat', fontWeight: '500', wordWrap: 'break-word', background:'black'}}>About Us</div>
                    <div style={{border:'none', width: 100, height:25, left: 920, top: 20, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 16, fontFamily: 'Montserrat', fontWeight: '500', wordWrap: 'break-word', background:'black'}}>Contact Us</div>
                </div>
                <div style={{paddingTop: 17, paddingBottom: 17}} />
                <button onClick={login} style={{width:100, border:'none', paddingTop: 17, paddingBottom: 17, left: 1205, top: 10, position: 'absolute', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex', background:'black'}}>
                    <div style={{color: '#54F4FC', fontSize: 18, fontFamily: 'Montserrat', fontWeight: '700', lineHeight: 1, letterSpacing: 0.90, wordWrap: 'break-word'}}>LOGIN</div>
                </button>
        
                <button onClick={signup} style={{width:100, border:'none', paddingTop: 17, paddingBottom: 17, left: 1098, top: 10, position: 'absolute', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex', background:'black'}}>
                    <div style={{color: '#54F4FC', fontSize: 18, fontFamily: 'Montserrat', fontWeight: '700', lineHeight: 1, letterSpacing: 0.90, wordWrap: 'break-word'}}>SIGNUP</div>
                </button>
            </div>
        </div>
    </div>
</div>

  );
}

export default LandingPage;