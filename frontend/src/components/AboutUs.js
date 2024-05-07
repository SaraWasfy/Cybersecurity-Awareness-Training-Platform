import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserService from "../services/userService";
import logo from '../images/Shield logo 2.png';
import Photo from '../images/Shield.png';
import X from '../images/X.png';


function AboutUs(props) {

    let navigate = useNavigate();

    async function Home() {
      navigate("../Home", { replace: true });
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

    return (
        <div style={{background: 'black', width: '100%', height: '100%'}}>
        <div style={{width: 1440, height: 535, left: 0, top: 1047, background: 'black', position: 'absolute'}}>
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
                <div style={{width: 331, height: 206, left: 104, top: 166, position: 'absolute'}}>
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
                <div style={{width: 1232, height: 110, left: 104, top: -12, position: 'absolute'}}>
                    <div style={{width: 1232, height: 110, left: 0, top: 0, position: 'absolute', opacity: 0.15, background: 'linear-gradient(94deg, )'}}></div>
                    <div style={{width: 254, height: 67.18, left: 486, top: 19, position: 'absolute'}}>
                        <div style={{width: 204, left: 0, top: 5, position: 'absolute', color: '#54F4FC', fontSize: 40, fontFamily: 'Archivo', fontWeight: '600', lineHeight: 2, wordWrap: 'break-word'}}>CyProtego</div>
                        <img style={{width: 50, height: 67.18, left: 204, top: 0, position: 'absolute'}} src={logo} alt="logo" />
                    </div>
                    <div style={{width: 1232, height: 110, opacity: 0.15, background: '#54F4FC'}}></div>
                </div>
            </div>
            <div style={{width: 1440, height: 540, left: 0, top: 507,  background: 'black', position: 'absolute'}}>
                <div style={{width: 1222, height: 389, left: 109, top: 120, position: 'absolute', textAlign: 'center'}}><span style={{color: 'white', fontSize: 24, fontFamily: 'Montserrat', fontWeight: '400', lineHeight: 2, wordWrap: 'break-word'}}>At </span><span style={{color: '#54F4FC', fontSize: 24, fontFamily: 'Montserrat', fontWeight: '700', lineHeight: 2, wordWrap: 'break-word'}}>CyProtego</span><span style={{color: 'white', fontSize: 24, fontFamily: 'Montserrat', fontWeight: '400', lineHeight: 2, wordWrap: 'break-word'}}>, we are passionate about empowering the next generation of digital citizens with the knowledge and tools they need to navigate the ever-evolving cybersecurity landscape. Our innovative platform offers university students a unique learning experience, leveraging gamification to make cybersecurity awareness training engaging and effective. With a current focus on equipping students to identify and respond to phishing emails—a prevalent threat in today's digital world—we are laying the groundwork for safer online interactions. As we continue to develop our platform, we look forward to expanding our training modules to cover a broader spectrum of cybersecurity challenges. Our mission is to cultivate a community of informed, vigilant individuals who are well-prepared to protect themselves and their digital environments against cyber threats. Join us on this journey to a more secure digital future.</span></div>
                <div style={{width: 1219, height: 33, left: 111, top: 58, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 24, fontFamily: 'Lato', fontWeight: '300', lineHeight: 2, wordWrap: 'break-word'}}>Published On: 2024</div>
                <div style={{width: 600, height: 1, left: 420, top: 0, position: 'absolute', background: '#404040'}} />
                <div style={{width: 756, left: 342, top: 0, position: 'absolute', textAlign: 'center', color: '#54F4FC', fontSize: 40, fontFamily: 'Montserrat', fontWeight: '600', lineHeight: 2, wordWrap: 'break-word'}}>About Us</div>
                <div style={{width: 1302, height: 0.50, left: 69, top: -20, position: 'absolute', background: '#54F4FC'}} />
            </div>
            <div style={{width: 1440, height: 507, left: 0, top: 0, background: 'black', position: 'absolute'}}>
                <img style={{width: 760, height: 423, left: 611, top: 81, position: 'absolute'}} src={Photo} alt="Photo" />
                <div style={{width: 756, left: 81, top: 177, position: 'absolute'}}><span style={{color: '#54F4FC', fontSize: 56, fontFamily: 'Montserrat', fontWeight: '600', lineHeight: 2, wordWrap: 'break-word'}}>CyProtego Cybersecurity</span>
                <span style={{color: 'white', fontSize: 56, fontFamily: 'Montserrat', fontWeight: '600', lineHeight: 2, wordWrap: 'break-word'}}> Awareness Training Platform</span></div>
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
                </div>
            </div>
        </div>
        </div>
    </div>
    );
}

export default AboutUs;
