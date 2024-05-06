import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
// import RegisterPatientService from "../services/RegisterPatientService";
import { useNavigate } from "react-router-dom";
import logo from '../images/Shield logo 2.png';
import Photo from '../images/Shield.png';
import X from '../images/X.png';

function PhishingQuiz() {
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

  async function Home() {
    navigate("../login", { replace: true });
   }

  return (
<div style={{width: '100%', height: '100%', paddingBottom: 2, background: 'black', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', display: 'inline-flex'}}>
<div style={{width: 1440, height: 527, position: 'relative', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
        <div style={{height: 81, position: 'relative'}}>
            <div style={{width: 1360, height: 1, left: 0, top: 80, position: 'absolute', background: '#404040'}} />
            <div style={{width: 1347, height: 67.18, left: 13, top: 0, position: 'absolute', justifyContent: 'flex-start', alignItems: 'center', gap: 133, display: 'inline-flex'}}>
            <button onClick={Home} style={{width: 254, height: 67.18, position: 'relative', background: 'black', border: 'none'}}>
                            <div style={{width: 204, left: 0, top: 5, position: 'absolute', color: '#54F4FC', fontSize: 40, fontFamily: 'Archivo', fontWeight: '600', lineHeight: 2, wordWrap: 'break-word'}}>CyProtego</div>
                            <img style={{width: 50, height: 67.18, left: 204, top: 0, position: 'absolute'}} src={logo} alt="logo" />
                        </button>
                <div style={{justifyContent: 'flex-start', alignItems: 'flex-start', gap: 48, display: 'flex'}}>
                    <div style={{justifyContent: 'center', alignItems: 'flex-start', gap: 8, display: 'flex'}}>
                        <div style={{color: 'white', fontSize: 16, fontFamily: 'Montserrat', fontWeight: '500', lineHeight: 26.24, letterSpacing: 0.80, wordWrap: 'break-word'}}>Training</div>
                        <div style={{width: 18, height: 18, position: 'relative'}}>
                            <div style={{width: 7.50, height: 3.75, left: 5.25, top: 9.50, position: 'absolute', background: 'rgba(255, 255, 255, 0.87)'}}></div>
                        </div>
                    </div>
                    <div style={{color: 'white', fontSize: 16, fontFamily: 'Montserrat', fontWeight: '500', lineHeight: 26.24, letterSpacing: 0.80, wordWrap: 'break-word'}}>Leaderboard</div>
                    <div style={{color: 'white', fontSize: 16, fontFamily: 'Montserrat', fontWeight: '500', lineHeight: 26.24, letterSpacing: 0.80, wordWrap: 'break-word'}}>Badges</div>
                    <div style={{color: 'white', fontSize: 16, fontFamily: 'Montserrat', fontWeight: '500', lineHeight: 26.24, letterSpacing: 0.80, wordWrap: 'break-word'}}>About Us</div>
                    <div style={{color: 'white', fontSize: 16, fontFamily: 'Montserrat', fontWeight: '500', lineHeight: 26.24, letterSpacing: 0.80, wordWrap: 'break-word'}}>Contact Us</div>
                </div>
                <div style={{paddingTop: 17, paddingBottom: 17}} />
            </div>
        </div>
        
        <div style={{width: 154.08, height: 192.24, left: 100, top: 73, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 146, fontFamily: 'Montserrat', fontWeight: '800', lineHeight: 2, wordWrap: 'break-word'}}>#</div>
        <img style={{width: 760, height: 423, left: 611, top: 97, position: 'absolute'}} src={Photo} alt="Photo" />
        <div style={{width: 500, height: 83, left: 200, top: 150, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 68, fontFamily: 'Montserrat', fontWeight: '800', lineHeight: 2, wordWrap: 'break-word'}}>Phishing Quiz</div>
        <div style={{width: 800, height: 132, left: 10, top: 400, position: 'absolute', textAlign: 'center', color: '#54F4FC', fontSize: 61, fontFamily: 'Montserrat', fontWeight: '800', lineHeight: 1, wordWrap: 'break-word'}}>Choose The Right Answer</div>
        <div style={{width: 1360, height: 0.50, left: 0, top: 520, position: 'absolute', background: '#404040'}} />
    </div>
    <div style={{width: 1440, height: 13954, position: 'relative', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
        <div style={{width: 1440, height: 558.50, position: 'relative'}}>
            <button style={{width: 619, height: 70, left: 752, top: 254, position: 'absolute', borderRadius: 30}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute', background: '#54F4FC', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 30}} />
                <div style={{width: 445.68, height: 43.40, left: 91.61, top: 12.60, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>Show your coworkers to see what they think.</div>
            </button>
            <button style={{width: 619, height: 70, left: 69, top: 254, position: 'absolute', borderRadius: 30}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute', background: '#54F4FC', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 30}} />
                <div style={{width: 445.68, height: 43.40, left: 91.61, top: 12.60, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>Report it so the organization can investigate.</div>
            </button>
            <button style={{width: 619, height: 70, left: 752, top: 137, position: 'absolute', borderRadius: 30}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute', background: '#54F4FC', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 30}} />
                <div style={{width: 445.68, height: 43.40, left: 91.61, top: 12.60, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>Open the email and see whether it looks legitimate.</div>
            </button>
            <button style={{width: 619, height: 70, left: 69, top: 137, position: 'absolute', borderRadius: 30}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute', background: '#54F4FC', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 30}} />
                <div style={{width: 445.68, height: 43.40, left: 91.61, top: 12.60, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>Ignore it.</div>
            </button>
            <div style={{width: 1440, height: 158, left: 0, top: 362, position: 'absolute', textAlign: 'center'}}><span style={{color: 'white', fontSize: 24, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>Report the phish so the company can investigate it. If the phish is real, the company can update email security rules <br/></span><span style={{color: 'white', fontSize: 24, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>that not only protect the company but its customers as well.<br/></span><span style={{color: 'white', fontSize: 24, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>If you ignore the email, the company won't necessarily know how to detect and block that sender in the future.<br/>If you open the email or show it to coworkers, you increase the risk of adware, malware, or information theft.</span></div>
            <div style={{width: 1302, height: 127, left: 71, top: 0, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 30, fontFamily: 'Mulish', fontWeight: '800', lineHeight: 5, wordWrap: 'break-word'}}>What should you do as a student if you suspect a phishing attack?</div>
            <div style={{width: 1302, height: 0.50, left: 71, top: 558, position: 'absolute', background: 'white'}}></div>
        </div>
        <div style={{width: 1440, height: 532.50, position: 'relative'}}>
            <div style={{width: 619, height: 70, left: 752, top: 254, position: 'absolute'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute', background: '#54F4FC', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 30}} />
                <div style={{width: 445.68, height: 43.40, left: 91.61, top: 12.60, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>Proper spelling and grammar</div>
            </div>
            <div style={{width: 619, height: 70, left: 69, top: 254, position: 'absolute'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute', background: '#54F4FC', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 30}} />
                <div style={{width: 594, height: 70, left: 14, top: 0, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>Unknown sender, sense of urgency, unexpected attachment, or too good to be true</div>
            </div>
            <div style={{width: 619, height: 70, left: 752, top: 137, position: 'absolute'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute', background: '#54F4FC', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 30}} />
                <div style={{width: 445.68, height: 43.40, left: 91.61, top: 12.60, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>Contains personal information</div>
            </div>
            <div style={{width: 619, height: 70, left: 69, top: 137, position: 'absolute'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute', background: '#54F4FC', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 30}} />
                <div style={{width: 445.68, height: 43.40, left: 91.61, top: 12.60, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>Nice graphics and layout</div>
            </div>
            <div style={{width: 1289, height: 127, left: 71, top: 0, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 30, fontFamily: 'Mulish', fontWeight: '800', lineHeight: 5, wordWrap: 'break-word'}}>What are the most common signs of a phishing scam?</div>
            <div style={{width: 1302, height: 0.50, left: 71, top: 532, position: 'absolute', background: 'white'}}></div>
            <div style={{width: 1440, height: 132, left: 0, top: 362, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 24, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>Phishing emails often use a sense of urgency to make you click on a link or open an attachment without thinking.<br/>Often these emails come from someone you don't know and contain attachments or links that you don't recognize.<br/>Remember: If it's too good to be true, it probably is.</div>
        </div>
        <div style={{width: 1440, height: 504.50, position: 'relative'}}>
            <div style={{width: 619, height: 70, left: 752, top: 254, position: 'absolute'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute', background: '#54F4FC', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 30}} />
                <div style={{width: 445.68, height: 43.40, left: 91.61, top: 12.60, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>3.4 billion</div>
            </div>
            <div style={{width: 619, height: 70, left: 69, top: 254, position: 'absolute'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute', background: '#54F4FC', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 30}} />
                <div style={{width: 594, height: 70, left: 14, top: 0, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>1.5 billion</div>
            </div>
            <div style={{width: 619, height: 70, left: 752, top: 137, position: 'absolute'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute', background: '#54F4FC', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 30}} />
                <div style={{width: 445.68, height: 43.40, left: 91.61, top: 12.60, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>500 million</div>
            </div>
            <div style={{width: 1440, height: 104, left: 0, top: 362, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 24, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>Phishing is an extremely lucrative criminal business and can be devastating to an organization if successful.<br/>Worldwide web fraud detection organizations estimate that over 3.4 billion phishing emails are sent each day.</div>
            <div style={{width: 619, height: 70, left: 69, top: 137, position: 'absolute'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute', background: '#54F4FC', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 30}} />
                <div style={{width: 445.68, height: 43.40, left: 91.61, top: 12.60, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>250 million</div>
            </div>
            <div style={{width: 1289, height: 127, left: 71, top: 0, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 30, fontFamily: 'Mulish', fontWeight: '800', lineHeight: 5, wordWrap: 'break-word'}}>How many phishing emails are sent each day worldwide?</div>
            <div style={{width: 1302, height: 0.50, left: 83, top: 504, position: 'absolute', background: 'white'}}></div>
        </div>
        <div style={{width: 1440, height: 570.50, position: 'relative'}}>
            <div style={{width: 619, height: 70, left: 752, top: 254, position: 'absolute'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute', background: '#54F4FC', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 30}} />
                <div style={{width: 594, height: 70, left: 12, top: 0, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>A type of phishing that lures the recipient in with a fun offer and then spreads a virus</div>
            </div>
            <div style={{width: 619, height: 70, left: 69, top: 254, position: 'absolute'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute', background: '#54F4FC', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 30}} />
                <div style={{width: 594, height: 70, left: 14, top: 0, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>A type of phishing that promises a large reward</div>
            </div>
            <div style={{width: 619, height: 70, left: 752, top: 137, position: 'absolute'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute', background: '#54F4FC', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 30}} />
                <div style={{width: 594, height: 70, left: 12, top: 0, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>A type of phishing that involves vacation offers</div>
            </div>
            <div style={{width: 619, height: 70, left: 69, top: 137, position: 'absolute'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute', background: '#54F4FC', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 30}} />
                <div style={{width: 594, height: 70, left: 12, top: 0, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>A type of phishing that is personalized and targets specific individuals</div>
            </div>
            <div style={{width: 1290, height: 127, left: 83, top: 0, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 30, fontFamily: 'Mulish', fontWeight: '800', lineHeight: 5, wordWrap: 'break-word'}}>What is spear phishing?</div>
            <div style={{width: 1302, height: 0.50, left: 71, top: 570, position: 'absolute', background: 'white'}}></div>
            <div style={{width: 1440, height: 170, left: 0, top: 362, position: 'absolute', textAlign: 'center'}}><span style={{color: 'white', fontSize: 24, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>Spear phishing is a type of phishing that targets specific individuals or organizations in a business.<br/>The target could be system administrators, developers, executives, finance, HR or sales professionals, who handle <br/></span><span style={{color: 'white', fontSize: 24, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>sensitive data or access numerous systems.<br/></span><span style={{color: 'white', fontSize: 24, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>Spear phishing emails go after intellectual property and confidential information that could command high prices <br/></span><span style={{color: 'white', fontSize: 24, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>from interested buyers.</span></div>
        </div>
        <div style={{width: 1440, height: 570.50, position: 'relative'}}>
            <div style={{width: 619, height: 70, left: 752, top: 254, position: 'absolute'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute', background: '#54F4FC', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 30}} />
                <div style={{width: 594, height: 70, left: 12, top: 0, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>All of the above</div>
            </div>
            <div style={{width: 619, height: 70, left: 69, top: 254, position: 'absolute'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute', background: '#54F4FC', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 30}} />
                <div style={{width: 594, height: 70, left: 14, top: 0, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>The email sender could distribute malware into the company network.</div>
            </div>
            <div style={{width: 619, height: 70, left: 752, top: 137, position: 'absolute'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute', background: '#54F4FC', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 30}} />
                <div style={{width: 594, height: 70, left: 12, top: 0, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>The email sender could steal your personal information or company information.</div>
            </div>
            <div style={{width: 619, height: 70, left: 69, top: 137, position: 'absolute'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute', background: '#54F4FC', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 30}} />
                <div style={{width: 594, height: 70, left: 12, top: 0, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>The email sender could gain access to company systems.</div>
            </div>
            <div style={{width: 1290, height: 127, left: 83, top: 0, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 30, fontFamily: 'Mulish', fontWeight: '800', lineHeight: 5, wordWrap: 'break-word'}}>What can happen if you click on a phishing email link or attachment?</div>
            <div style={{width: 1302, height: 0.50, left: 71, top: 570, position: 'absolute', background: 'white'}}></div>
            <div style={{width: 1440, height: 170, left: 0, top: 362, position: 'absolute', textAlign: 'center'}}><span style={{color: 'white', fontSize: 24, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>If you click on a link in a phishing email or open an attachment, the email sender could gain access to company <br/></span><span style={{color: 'white', fontSize: 24, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>systems, steal information, or distribute malware into the company network or your personal computer. Don't give <br/>them this kind of power!<br/></span><span style={{color: 'white', fontSize: 24, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>Avoid clicking on links or opening attachments unless you know the sender and are sure the email is valid.</span></div>
        </div>
        <div style={{width: 1440, height: 560.50, position: 'relative'}}>
            <div style={{width: 619, height: 70, left: 752, top: 254, position: 'absolute'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute', background: '#54F4FC', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 30}} />
                <div style={{width: 594, height: 70, left: 12, top: 0, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>All of the above</div>
            </div>
            <div style={{width: 619, height: 70, left: 69, top: 254, position: 'absolute'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute', background: '#54F4FC', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 30}} />
                <div style={{width: 594, height: 70, left: 14, top: 0, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>You most likely receive phishing emails on your personal email accounts as well, so it pays to be aware.</div>
            </div>
            <div style={{width: 619, height: 70, left: 752, top: 137, position: 'absolute'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute', background: '#54F4FC', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 30}} />
                <div style={{width: 594, height: 70, left: 12, top: 0, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>IT has several security precautions in place, but they don't control individual users' non-corporate devices.</div>
            </div>
            <div style={{width: 619, height: 70, left: 69, top: 137, position: 'absolute'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute', background: '#54F4FC', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 30}} />
                <div style={{width: 594, height: 70, left: 12, top: 0, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>Phishing emails grow more sophisticated all the time. Each one of us needs to be vigilant.</div>
            </div>
            <div style={{width: 1289, height: 127, left: 71, top: 40, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 30, fontFamily: 'Mulish', fontWeight: '800', lineHeight: 1, wordWrap: 'break-word'}}>Why is it important for me to watch out for phishing emails if my organization has email controls and security in place?</div>
            <div style={{width: 1302, height: 0.50, left: 71, top: 560, position: 'absolute', background: 'white'}}></div>
            <div style={{width: 1440, height: 170, left: 0, top: 362, position: 'absolute', textAlign: 'center'}}><span style={{color: 'white', fontSize: 24, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>All of these things are true.<br/>IT has security controls in place, but the company relies on each one of us to identify and handle phish that are <br/></span><span style={{color: 'white', fontSize: 24, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>not detected.<br/></span><span style={{color: 'white', fontSize: 24, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>Phishing campaigns are becoming more sophisticated all the time.<br/>It pays to be vigilant when it comes to your work and personal emails.</span></div>
        </div>
        <div style={{width: 1440, height: 570.50, position: 'relative'}}>
            <div style={{width: 619, height: 70, left: 752, top: 254, position: 'absolute'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute', background: '#54F4FC', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 30}} />
                <div style={{width: 594, height: 70, left: 12, top: 0, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>They ask for money to purchase your ID on the black market.</div>
            </div>
            <div style={{width: 619, height: 70, left: 69, top: 254, position: 'absolute'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute', background: '#54F4FC', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 30}} />
                <div style={{width: 594, height: 70, left: 14, top: 0, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>They send a request for the recipient's driver's license and credit cards.</div>
            </div>
            <div style={{width: 619, height: 70, left: 752, top: 137, position: 'absolute'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute', background: '#54F4FC', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 30}} />
                <div style={{width: 594, height: 70, left: 12, top: 0, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700',lineHeight: 1.25, wordWrap: 'break-word'}}>They ask for personal information on a webpage or pop-up window linked from the phishing email, and they use the information entered to make illegal purchases or commit fraud.</div>
            </div>
            <div style={{width: 619, height: 70, left: 69, top: 137, position: 'absolute'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute', background: '#54F4FC', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 30}} />
                <div style={{width: 594, height: 70, left: 12, top: 0, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>They pretend they are someone else when emailing phishing messages, so that's like stealing an identity.</div>
            </div>
            <div style={{width: 1302, height: 127, left: 71, top: 0, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 30, fontFamily: 'Mulish', fontWeight: '800', lineHeight: 5, wordWrap: 'break-word'}}>How can a person executing a phishing attack steal someone's identity?</div>
            <div style={{width: 1302, height: 0.50, left: 71, top: 570, position: 'absolute', background: 'white'}}></div>
            <div style={{width: 1440, height: 170, left: 0, top: 362, position: 'absolute', textAlign: 'center'}}><span style={{color: 'white', fontSize: 24, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>A person who sends phishing emails typically asks for personal or financial information on a web-page or pop-up <br/></span><span style={{color: 'white', fontSize: 24, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>window linked from the phishing email.<br/></span><span style={{color: 'white', fontSize: 24, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>He or she uses that information to purchase things online or gain unauthorized access to data.<br/>Phishers may use fake names, but they do not steal an identity to send the emails, nor do they request photos.</span></div>
        </div>
        <div style={{width: 1440, height: 570.50, position: 'relative'}}>
            <div style={{width: 619, height: 70, left: 752, top: 254, position: 'absolute'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute', background: '#54F4FC', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 30}} />
                <div style={{width: 594, height: 70, left: 12, top: 0, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', lineHeight: 1.25, wordWrap: 'break-word'}}>If people go without power due to a storm or other natural disaster, they will be excited about communication being restored and they will respond to the emails they receive once power is back.</div>
            </div>
            <div style={{width: 619, height: 70, left: 69, top: 254, position: 'absolute'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute', background: '#54F4FC', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 30}} />
                <div style={{width: 594, height: 70, left: 14, top: 0, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>Phishing emails reach more people if they are worried about the weather.</div>
            </div>
            <div style={{width: 619, height: 70, left: 752, top: 137, position: 'absolute'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute', background: '#54F4FC', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 30}} />
                <div style={{width: 594, height: 70, left: 12, top: 0, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', lineHeight: 1.25, wordWrap: 'break-word'}}>Phishers often take advantage of current events, such as natural disasters, health scares, or political elections, and send messages with those themes to play on people's fears.</div>
            </div>
            <div style={{width: 619, height: 70, left: 69, top: 137, position: 'absolute'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute', background: '#54F4FC', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 30}} />
                <div style={{width: 594, height: 70, left: 12, top: 0, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>If people are distracted by a hurricane or a flu pandemic, they might be less likely to read emails carefully.</div>
            </div>
            <div style={{width: 1302, height: 127, left: 71, top: 0, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 30, fontFamily: 'Mulish', fontWeight: '800', lineHeight: 5, wordWrap: 'break-word'}}>Why would people who send phishing emails be excited about a natural disaster or health scare?</div>
            <div style={{width: 1302, height: 0.50, left: 71, top: 570, position: 'absolute', background: 'white'}}></div>
            <div style={{width: 1440, height: 170, left: 0, top: 362, position: 'absolute', textAlign: 'center'}}><span style={{color: 'white', fontSize: 24, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>Phishers capitalize on trends and current events.<br/>They might ask for contributions to charities, talk about economic uncertainty, or appeal to people's emotions <br/></span><span style={{color: 'white', fontSize: 24, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>concerning politics or things in the news.<br/></span><span style={{color: 'white', fontSize: 24, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>Phishers don't have any interest in the weather as a distraction tool.</span></div>
        </div>
        <div style={{width: 1440, height: 570.50, position: 'relative'}}>
            <div style={{width: 619, height: 70, left: 752, top: 254, position: 'absolute'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute', background: '#54F4FC', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 30}} />
                <div style={{width: 594, height: 70, left: 12, top: 0, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>All of the above</div>
            </div>
            <div style={{width: 619, height: 70, left: 69, top: 254, position: 'absolute'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute', background: '#54F4FC', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 30}} />
                <div style={{width: 594, height: 70, left: 14, top: 0, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>An offer appears to be from Amazon, but upon closer inspection it's actually from Amzon.co. You should report and delete the email.</div>
            </div>
            <div style={{width: 619, height: 70, left: 752, top: 137, position: 'absolute'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute', background: '#54F4FC', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 30}} />
                <div style={{width: 594, height: 70, left: 12, top: 0, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700',lineHeight: 1.25, wordWrap: 'break-word'}}>An alert email comes from PayPal or your bank. Open a new browser window and go to your account to see if anything is happening with your account.</div>
            </div>
            <div style={{width: 619, height: 70, left: 69, top: 137, position: 'absolute'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute', background: '#54F4FC', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 30}} />
                <div style={{width: 594, height: 70, left: 12, top: 0, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>An unknown email sender sound vague or generic, and is threatening something about one of your online accounts? Report it as phishing.</div>
            </div>
            <div style={{width: 1290, height: 127, left: 83, top: 0, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 30, fontFamily: 'Mulish', fontWeight: '800', lineHeight: 5, wordWrap: 'break-word'}}>Unsure whether an email is real or phishing? Which of the following should you do?</div>
            <div style={{width: 1302, height: 0.50, left: 71, top: 570, position: 'absolute', background: 'white'}}></div>
            <div style={{width: 1440, height: 170, left: 0, top: 362, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 24, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>The email is vague and generic, and it's threatening something about one of your accounts.<br/>It talks about an urgent threat and sounds suspicious.<br/>The offer is too good to be true. Don't click on the link.<br/>Never give out financial or personal information in response to an email that seems questionable.</div>
        </div>
        <div style={{width: 1440, height: 603.50, position: 'relative'}}>
            <div style={{width: 619, height: 70, left: 752, top: 254, position: 'absolute'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute', background: '#54F4FC', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 30}} />
                <div style={{width: 594, height: 70, left: 12, top: 0, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>Www.jdoe.billerica.k12.ma.us</div>
            </div>
            <div style={{width: 619, height: 70, left: 69, top: 254, position: 'absolute'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute', background: '#54F4FC', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 30}} />
                <div style={{width: 594, height: 70, left: 14, top: 0, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>Jdoe@billerica.k12.ma.us</div>
            </div>
            <div style={{width: 619, height: 70, left: 752, top: 137, position: 'absolute'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute', background: '#54F4FC', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 30}} />
                <div style={{width: 594, height: 70, left: 12, top: 0, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>Jdoe.billerica.k12.ma.us</div>
            </div>
            <div style={{width: 619, height: 70, left: 69, top: 137, position: 'absolute'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute', background: '#54F4FC', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 30}} />
                <div style={{width: 594, height: 70, left: 12, top: 0, position: 'absolute', textAlign: 'center'}}><span style={{color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>Jdoe@gma!</span><span style={{color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', textDecoration: 'underline', wordWrap: 'break-word'}}>l.com</span></div>
            </div>
            <div style={{width: 619, height: 70, left: 752, top: 371, position: 'absolute'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute', background: '#54F4FC', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 30}} />
                <div style={{width: 594, height: 70, left: 12, top: 0, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>Jdoe@yahooo.com</div>
            </div>
            <div style={{width: 619, height: 70, left: 69, top: 371, position: 'absolute'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute', background: '#54F4FC', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 30}} />
                <div style={{width: 594, height: 70, left: 12, top: 0, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', textDecoration: 'underline', wordWrap: 'break-word'}}>Jdoe@hotmaiil.com</div>
            </div>
            <div style={{width: 1277, height: 127, left: 83, top: 0, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 30, fontFamily: 'Mulish', fontWeight: '800', lineHeight:5, wordWrap: 'break-word'}}>Which of the following choices is a legit email address?</div>
            <div style={{width: 1302, height: 0.50, left: 71, top: 603, position: 'absolute', background: 'white'}}></div>
            <div style={{width: 1440, height: 86, left: 0, top: 479, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 24, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>Email addresses always contain 3 parts - username (ex: jdoe, @ ("at" symbol and domain (ex: billerica.k12.ma.us )</div>
        </div>
        <div style={{width: 1440, height: 603.50, position: 'relative'}}>
            <div style={{width: 619, height: 70, left: 752, top: 254, position: 'absolute'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute', background: '#54F4FC', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 30}} />
                <div style={{width: 594, height: 70, left: 12, top: 0, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>Accounts.google.com
        </div>
            </div>
            <div style={{width: 619, height: 70, left: 69, top: 254, position: 'absolute'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute', background: '#54F4FC', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 30}} />
                <div style={{width: 594, height: 70, left: 14, top: 0, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>Google-accounts.com</div>
            </div>
            <div style={{width: 619, height: 70, left: 752, top: 137, position: 'absolute'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute', background: '#54F4FC', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 30}} />
                <div style={{width: 594, height: 70, left: 12, top: 0, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>Google.accounts.com</div>
            </div>
            <div style={{width: 619, height: 70, left: 69, top: 137, position: 'absolute'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute', background: '#54F4FC', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 30}} />
                <div style={{width: 594, height: 70, left: 12, top: 0, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>Google.com.accounts.com</div>
            </div>
            <div style={{width: 619, height: 70, left: 410, top: 371, position: 'absolute'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute', background: '#54F4FC', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 30}} />
                <div style={{width: 594, height: 70, left: 12, top: 0, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>Accounts.com/google</div>
            </div>
            <div style={{width: 1277, height: 127, left: 83, top: 40, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 30, fontFamily: 'Mulish', fontWeight: '800', lineHeight: 1, wordWrap: 'break-word'}}>Lets check if you can spot a legitimate URL. Which of these links would lead to Google account settings?</div>
            <div style={{width: 1302, height: 0.50, left: 70, top: 603, position: 'absolute', background: 'white'}}></div>
            <div style={{width: 1440, height: 86, left: 0, top: 479, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 24, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>Only one of the addresses is in the Google domain the other are sub-directories of accounts.com  or a completely different<br/> website - google-accounts.com</div>
        </div>
        <div style={{width: 1440, height: 520.50, position: 'relative'}}>
            <div style={{width: 619, height: 70, left: 750, top: 254, position: 'absolute'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute', background: '#54F4FC', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 30}} />
                <div style={{width: 594, height: 70, left: 12, top: 0, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>None of them</div>
            </div>
            <div style={{width: 619, height: 70, left: 67, top: 254, position: 'absolute'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute', background: '#54F4FC', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 30}} />
                <div style={{width: 594, height: 70, left: 14, top: 0, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>Seal of a Certificate Authority</div>
            </div>
            <div style={{width: 619, height: 70, left: 750, top: 137, position: 'absolute'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute', background: '#54F4FC', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 30}} />
                <div style={{width: 594, height: 70, left: 12, top: 0, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>Style of the email</div>
            </div>
            <div style={{width: 619, height: 70, left: 67, top: 137, position: 'absolute'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute', background: '#54F4FC', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 30}} />
                <div style={{width: 594, height: 70, left: 12, top: 0, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>Company logo</div>
            </div>
            <div style={{width: 1277, height: 127, left: 81, top: 40, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 30, fontFamily: 'Mulish', fontWeight: '800', lineHeight: 1, wordWrap: 'break-word'}}>Some people say you that they can tell which website is secure just by looking at it. Which visual clues in a website can be trusted to identify a real website?</div>
            <div style={{width: 1302, height: 0.50, left: 68, top: 520, position: 'absolute', background: 'white'}}></div>
            <div style={{width: 1440, height: 120, left: 0, top: 362, position: 'absolute', textAlign: 'center'}}><span style={{color: 'white', fontSize: 24, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>It is impossible to tell if a website is legitimate just by look and feel, since more advanced phishing attacks use <br/></span><span style={{color: 'white', fontSize: 24, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>website clones that are identical to the originals. <br/></span><span style={{color: 'white', fontSize: 24, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>So the only way to check if it is legitimate is to look at the security indicators in the browser.</span></div>
        </div>
        <div style={{width: 1440, height: 647.50, position: 'relative'}}>
            <div style={{width: 619, height: 70, left: 750, top: 261, position: 'absolute'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute', background: '#54F4FC', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 30}} />
                <div style={{width: 594, height: 70, left: 12, top: 0, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>It has some links to real websites</div>
            </div>
            <div style={{width: 619, height: 70, left: 67, top: 261, position: 'absolute'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute', background: '#54F4FC', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 30}} />
                <div style={{width: 594, height: 70, left: 14, top: 0, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>Noticing security indicators in the browser</div>
            </div>
            <div style={{width: 619, height: 70, left: 750, top: 144, position: 'absolute'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute', background: '#54F4FC', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 30}} />
                <div style={{width: 594, height: 70, left: 12, top: 0, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>The domain in the address bar seems to be legitimate</div>
            </div>
            <div style={{width: 619, height: 70, left: 67, top: 144, position: 'absolute'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute', background: '#54F4FC', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 30}} />
                <div style={{width: 594, height: 70, left: 12, top: 0, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>Look and feel of the website</div>
            </div>
            <div style={{width: 1290, height: 127, left: 81, top: 40, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 30, fontFamily: 'Mulish', fontWeight: '800', lineHeight: 1, wordWrap: 'break-word'}}>People have different techniques of telling that a website is real. What is the most important thing to pay attention to when trying to determine if a website could be trusted?</div>
            <div style={{width: 1302, height: 0.50, left: 68, top: 647, position: 'absolute', background: 'white'}}></div>
            <div style={{width: 1440, height: 240, left: 0, top: 369, position: 'absolute', textAlign: 'center'}}><span style={{color: 'white', fontSize: 24, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>Look and feel can be deceiving since it is possible to completely clone a legitimate website.<br/> People use tricks to make their URL's look as close to the real ones as possible such as changing between <br/></span><span style={{color: 'white', fontSize: 24, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>l (lowercase L) I (capital i) 1 (one) or adding part to the URL that will redirect the user to a phishing site.<br/></span><span style={{color: 'white', fontSize: 24, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}> If a website has some links that lead to legitimate websites it doesn't mean that there isn't one link that will lead <br/></span><span style={{color: 'white', fontSize: 24, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>to a phishy place. <br/></span><span style={{color: 'white', fontSize: 24, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>Security indicators in the browser are there for a reason, they give information about SSL connection and the <br/></span><span style={{color: 'white', fontSize: 24, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>Certificate Authority. This information should be sufficient to find a legitimate website.</span></div>
        </div>
        <div style={{width: 1440, height: 816.50, position: 'relative'}}>
            <div style={{width: 619, height: 70, left: 751, top: 254, position: 'absolute'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute', background: '#54F4FC', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 30}} />
                <div style={{width: 594, height: 70, left: 12, top: 0, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>35-50 year old's</div>
            </div>
            <div style={{width: 619, height: 70, left: 68, top: 254, position: 'absolute'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute', background: '#54F4FC', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 30}} />
                <div style={{width: 594, height: 70, left: 14, top: 0, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>25-36 year old's</div>
            </div>
            <div style={{width: 619, height: 70, left: 751, top: 137, position: 'absolute'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute', background: '#54F4FC', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 30}} />
                <div style={{width: 594, height: 70, left: 12, top: 0, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>18-29 year old's</div>
            </div>
            <div style={{width: 619, height: 70, left: 68, top: 137, position: 'absolute'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute', background: '#54F4FC', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 30}} />
                <div style={{width: 594, height: 70, left: 12, top: 0, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>10-15 year old's</div>
            </div>
            <div style={{width: 619, height: 70, left: 409, top: 371, position: 'absolute'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute', background: '#54F4FC', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 30}} />
                <div style={{width: 594, height: 70, left: 12, top: 0, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>60+ year old's</div>
            </div>
            <div style={{width: 1440, height: 299, left: 0, top: 479, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 24, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>The age group most affected by online identity theft is 18-29 year olds. <br/>This is because individuals in this age range tend to be more active online, frequently using social media platforms, online banking, and making online purchases. <br/>They may also be less experienced in recognizing and avoiding online scams or protecting their personal information, making them more vulnerable to identity theft. <br/>Additionally, young adults in this age group often have a higher level of digital literacy and are more likely to engage in risky online behaviors, such as sharing personal information or using weak passwords, which can increase their risk of becoming a victim of identity theft.</div>
            <div style={{width: 1277, height: 127, left: 82, top: 0, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 30, fontFamily: 'Mulish', fontWeight: '800', lineHeight: 5, wordWrap: 'break-word'}}>What is the age group most affected by online identity theft?</div>
            <div style={{width: 1302, height: 0.50, left: 70, top: 816, position: 'absolute', background: 'white'}}></div>
        </div>
        <div style={{width: 1440, height: 816.50, position: 'relative'}}>
            <div style={{width: 619, height: 70, left: 751, top: 254, position: 'absolute'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute', background: '#54F4FC', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 30}} />
                <div style={{width: 594, height: 70, left: 12, top: 0, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>All of the above</div>
            </div>
            <div style={{width: 619, height: 70, left: 68, top: 254, position: 'absolute'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute', background: '#54F4FC', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 30}} />
                <div style={{width: 594, height: 70, left: 14, top: 0, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>Creating email accounts with reputable providers</div>
            </div>
            <div style={{width: 619, height: 70, left: 751, top: 137, position: 'absolute'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute', background: '#54F4FC', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 30}} />
                <div style={{width: 594, height: 70, left: 12, top: 0, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>Hack on to a third party email</div>
            </div>
            <div style={{width: 619, height: 70, left: 68, top: 137, position: 'absolute'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute', background: '#54F4FC', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 30}} />
                <div style={{width: 594, height: 70, left: 12, top: 0, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>Spoofing</div>
            </div>
            <div style={{width: 619, height: 70, left: 409, top: 371, position: 'absolute'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute', background: '#54F4FC', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 30}} />
                <div style={{width: 594, height: 70, left: 12, top: 0, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>None of the above</div>
            </div>
            <div style={{width: 1290, height: 127, left: 82, top: 40, position: 'absolute', textAlign: 'center'}}><span style={{color: 'white', fontSize: 30, fontFamily: 'Mulish', fontWeight: '800', lineHeight: 1, wordWrap: 'break-word'}}>Spam filters can be used to filter out emails from questionable email addresses. <br/></span><span style={{color: 'white', fontSize: 30, fontFamily: 'Mulish', fontWeight: '800', lineHeight: 1 , wordWrap: 'break-word'}}>How do criminals get pass this problem?</span></div>
            <div style={{width: 1302, height: 0.50, left: 70, top: 816, position: 'absolute', background: 'white'}}></div>
            <div style={{width: 1440, height: 299, left: 0, top: 479, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 24, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>The age group most affected by online identity theft is 18-29 year olds. <br/>This is because individuals in this age range tend to be more active online, frequently using social media platforms, online banking, and making online purchases. <br/>They may also be less experienced in recognizing and avoiding online scams or protecting their personal information, making them more vulnerable to identity theft. <br/>Additionally, young adults in this age group often have a higher level of digital literacy and are more likely to engage in risky online behaviors, such as sharing personal information or using weak passwords, which can increase their risk of becoming a victim of identity theft.</div>
        </div>
        <div style={{width: 1440, height: 613.50, position: 'relative'}}>
            <div style={{width: 619, height: 70, left: 750, top: 261, position: 'absolute'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute', background: '#54F4FC', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 30}} />
                <div style={{width: 594, height: 70, left: 12, top: 0, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>Phishpage</div>
            </div>
            <div style={{width: 619, height: 70, left: 67, top: 261, position: 'absolute'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute', background: '#54F4FC', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 30}} />
                <div style={{width: 594, height: 70, left: 14, top: 0, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>Clone</div>
            </div>
            <div style={{width: 619, height: 70, left: 750, top: 144, position: 'absolute'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute', background: '#54F4FC', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 30}} />
                <div style={{width: 594, height: 70, left: 12, top: 0, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>Tricksite</div>
            </div>
            <div style={{width: 619, height: 70, left: 67, top: 144, position: 'absolute'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute', background: '#54F4FC', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 30}} />
                <div style={{width: 594, height: 70, left: 12, top: 0, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>Spoof</div>
            </div>
            <div style={{width: 1289, height: 127, left: 69, top: 0, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 30, fontFamily: 'Mulish', fontWeight: '800', lineHeight: 5, wordWrap: 'break-word'}}>What is another name for a fake web site?</div>
            <div style={{width: 1302, height: 0.50, left: 69, top: 613, position: 'absolute', background: 'white'}}></div>
            <div style={{width: 1440, height: 206, left: 0, top: 369, position: 'absolute', textAlign: 'center'}}><span style={{color: 'white', fontSize: 24, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>Website spoofing is a scam where cyber criminals create a website that closely resembles a trusted brand as well as a domain that is virtually identical to a brand's web domain. <br/>The goal of website spoofing is to lure a brand's customers, suppliers, partners and employees to a fraudulent website <br/></span><span style={{color: 'white', fontSize: 24, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>and convince them to share sensitive information like login credentials, Social Security numbers, credit card <br/>information or bank account numbers.</span></div>
        </div>
        <div style={{width: 1440, height: 496.50, position: 'relative'}}>
            <div style={{width: 619, height: 70, left: 750, top: 144, position: 'absolute'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute', background: '#54F4FC', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 30}} />
                <div style={{width: 594, height: 70, left: 12, top: 0, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>False</div>
            </div>
            <div style={{width: 619, height: 70, left: 67, top: 144, position: 'absolute'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute', background: '#54F4FC', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 30}} />
                <div style={{width: 594, height: 70, left: 12, top: 0, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>True</div>
            </div>
            <div style={{width: 1290, height: 127, left: 81, top: 40, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 30, fontFamily: 'Mulish', fontWeight: '800', lineHeight: 1, wordWrap: 'break-word'}}>"Your account has been accessed" is a sentence that crooks will send you in an email to make you click on their link.</div>
            <div style={{width: 1302, height: 0.50, left: 69, top: 496, position: 'absolute', background: 'white'}}></div>
            <div style={{width: 1440, height: 206, left: 0, top: 252, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 24, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>This statement is true because it suggests that receiving an email stating "Your account has been accessed" is a tactic used by criminals to trick individuals into clicking on their malicious links. <br/>The intention behind this email is to deceive the recipient into taking action that may compromise their personal information or security. <br/>It is important to be cautious and verify the authenticity of such emails before taking any action.</div>
        </div>
        <div style={{width: 1440, height: 552.50, position: 'relative'}}>
            <div style={{width: 619, height: 70, left: 750, top: 144, position: 'absolute'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute', background: '#54F4FC', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 30}} />
                <div style={{width: 594, height: 70, left: 12, top: 0, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>False</div>
            </div>
            <div style={{width: 619, height: 70, left: 67, top: 144, position: 'absolute'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute', background: '#54F4FC', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 30}} />
                <div style={{width: 594, height: 70, left: 12, top: 0, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>True</div>
            </div>
            <div style={{width: 1290, height: 127, left: 81, top: 0, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 30, fontFamily: 'Mulish', fontWeight: '800', lineHeight: 5, wordWrap: 'break-word'}}>You should always be suspicious of emails that ask for your personal information.</div>
            <div style={{width: 1302, height: 0.50, left: 69, top: 552, position: 'absolute', background: 'white'}}></div>
            <div style={{width: 1440, height: 262, left: 0, top: 252, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 24, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>Being suspicious of emails that ask for personal information is a crucial practice to ensure online security. <br/>Phishing scams often involve emails that request personal information such as passwords, social security numbers, or credit card details. <br/>These fraudulent emails are designed to deceive individuals into providing sensitive information, which can then be used for identity theft or other malicious activities. <br/>Therefore, it is important to always be suspicious of such emails and avoid providing any personal information unless the sender's identity and intentions are verified.</div>
        </div>
        <div style={{width: 1440, height: 552.50, position: 'relative'}}>
            <div style={{width: 619, height: 70, left: 750, top: 144, position: 'absolute'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute', background: '#54F4FC', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 30}} />
                <div style={{width: 594, height: 70, left: 12, top: 0, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>False</div>
            </div>
            <div style={{width: 619, height: 70, left: 67, top: 144, position: 'absolute'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute', background: '#54F4FC', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 30}} />
                <div style={{width: 594, height: 70, left: 12, top: 0, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>True</div>
            </div>
            <div style={{width: 1279, height: 127, left: 79, top: 0, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 30, fontFamily: 'Mulish', fontWeight: '800', lineHeight: 5, wordWrap: 'break-word'}}>Legitimate companies would not contact you by phone or email without any prior notice.</div>
            <div style={{width: 1302, height: 0.50, left: 69, top: 552, position: 'absolute', background: 'white'}}></div>
            <div style={{width: 1440, height: 262, left: 0, top: 252, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 24, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>Legitimate companies typically follow proper communication protocols and would not randomly contact individuals through phone or email without any prior notice. <br/>They usually establish contact through official channels, such as customer service or email support, and may require prior interaction or consent from the individual before initiating any communication. <br/>Unsolicited phone calls or emails from unknown sources are often associated with scams or fraudulent activities. <br/>Therefore, it is generally true that legitimate companies would not contact you without any prior notice.</div>
        </div>
        <div style={{width: 1440, height: 389.50, position: 'relative'}}>
            <div style={{width: 619, height: 70, left: 750, top: 144, position: 'absolute'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute', background: '#54F4FC', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 30}} />
                <div style={{width: 594, height: 70, left: 12, top: 0, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>False</div>
            </div>
            <div style={{width: 619, height: 70, left: 67, top: 144, position: 'absolute'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute', background: '#54F4FC', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 30}} />
                <div style={{width: 594, height: 70, left: 12, top: 0, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>True</div>
            </div>
            <div style={{width: 1315, height: 127, left: 69, top: 40, position: 'absolute', textAlign: 'center'}}><span style={{color: 'white', fontSize: 30, fontFamily: 'Mulish', fontWeight: '800', lineHeight: 1, wordWrap: 'break-word'}}>All of the following are targets of phishing attacks<br/></span><span style={{color: 'white', fontSize: 30, fontFamily: 'Mulish', fontWeight: '800', lineHeight: 1, wordWrap: 'break-word'}}>(Corporations, Hospitals, Universities, Schools, Adult Individuals, Children, General Public)</span></div>
            <div style={{width: 1302, height: 0.50, left: 69, top: 389, position: 'absolute', background: 'white'}}></div>
            <div style={{width: 1440, height: 99, left: 0, top: 252, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 24, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>Spear phishing targets specific groups of people but other phishers phish for information in the whole sea that is the internet so everyone could be affected by it.</div>
        </div>
        <div style={{width: 1440, height: 757.50, position: 'relative'}}>
            <div style={{width: 619, height: 70, left: 750, top: 254, position: 'absolute'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute', background: '#54F4FC', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 30}} />
                <div style={{width: 594, height: 70, left: 12, top: 0, position: 'absolute', textAlign: 'center'}}><span style={{color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>There is a port switch (</span><span style={{color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', textDecoration: 'underline', wordWrap: 'break-word'}}>example.com:8034</span><span style={{color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>) at the end of the URL</span></div>
            </div>
            <div style={{width: 619, height: 70, left: 67, top: 254, position: 'absolute'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute', background: '#54F4FC', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 30}} />
                <div style={{width: 594, height: 70, left: 14, top: 0, position: 'absolute', textAlign: 'center'}}><span style={{color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>It has @ (</span><span style={{color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', textDecoration: 'underline', wordWrap: 'break-word'}}>example.com@ 64.29.173.91</span><span style={{color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>) symbol in the URL</span></div>
            </div>
            <div style={{width: 619, height: 70, left: 750, top: 137, position: 'absolute'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute', background: '#54F4FC', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 30}} />
                <div style={{width: 594, height: 70, left: 12, top: 0, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>An IP address is given instead of an URL</div>
            </div>
            <div style={{width: 619, height: 70, left: 67, top: 137, position: 'absolute'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute', background: '#54F4FC', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 30}} />
                <div style={{width: 594, height: 70, left: 12, top: 0, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>The domain part looks legitimate but the rest of it is some strange symbols and numbers.</div>
            </div>
            <div style={{width: 619, height: 70, left: 408, top: 371, position: 'absolute'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute', background: '#54F4FC', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 30}} />
                <div style={{width: 594, height: 70, left: 12, top: 0, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>All of the above</div>
            </div>
            <div style={{width: 1292, height: 127, left: 79, top: 40, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 30, fontFamily: 'Mulish', fontWeight: '800', lineHeight: 1, wordWrap: 'break-word'}}>There are many techniques of masking fake URL's to look as legitimate as they can. Which of these links could be unsafe?</div>
            <div style={{width: 1302, height: 0.50, left: 69, top: 757, position: 'absolute', background: 'white'}}></div>
            <div style={{width: 1440, height: 240, left: 0, top: 479, position: 'absolute', textAlign: 'center'}}><span style={{color: 'white', fontSize: 24, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>Phishers can use binary encoding to hide parts of the URL that they don't want the user to see. <br/>Everything before the @ symbol is omitted so only the part after it is important and this may be used to trick people. <br/>Some companies even have redirects to phishing websites on their servers(!) the only thing you need to do to access it is <br/></span><span style={{color: 'white', fontSize: 24, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>to change the port you are connecting through. <br/></span><span style={{color: 'white', fontSize: 24, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>IP addresses cannot be trusted unless you really know where that IP leads to. <br/>So, all of the above is the correct answer</span></div>
        </div>
        <div style={{width: 1440, height: 637.50, position: 'relative'}}>
            <div style={{width: 1440, height: 120, left: 0, top: 479, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 24, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>While some phishers phish for specific information such as usernames and passwords, credit card details, social security numbers, others might make use of any personal information.<br/>So, the correct answer is all of the above</div>
            <div style={{width: 619, height: 70, left: 749, top: 254, position: 'absolute'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute', background: '#54F4FC', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 30}} />
                <div style={{width: 594, height: 70, left: 12, top: 0, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>Other personal details</div>
            </div>
            <div style={{width: 619, height: 70, left: 66, top: 254, position: 'absolute'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute', background: '#54F4FC', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 30}} />
                <div style={{width: 594, height: 70, left: 14, top: 0, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>Social security numbers</div>
            </div>
            <div style={{width: 619, height: 70, left: 749, top: 137, position: 'absolute'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute', background: '#54F4FC', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 30}} />
                <div style={{width: 594, height: 70, left: 12, top: 0, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>Credit card details</div>
            </div>
            <div style={{width: 619, height: 70, left: 66, top: 137, position: 'absolute'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute', background: '#54F4FC', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 30}} />
                <div style={{width: 594, height: 70, left: 12, top: 0, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>Usernames and passwords</div>
            </div>
            <div style={{width: 619, height: 70, left: 407, top: 371, position: 'absolute'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute', background: '#54F4FC', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 30}} />
                <div style={{width: 594, height: 70, left: 12, top: 0, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>All of the above</div>
            </div>
            <div style={{width: 1276, height: 127, left: 81, top: 0, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 30, fontFamily: 'Mulish', fontWeight: '800', lineHeight: 5, wordWrap: 'break-word'}}>Phishing is a way of attempting to acquire information. What information does it try to acquire?</div>
            <div style={{width: 1302, height: 0.50, left: 69, top: 637, position: 'absolute', background: 'white'}}></div>
        </div>
        <div style={{width: 1440, height: 594.50, position: 'relative'}}>
            <div style={{width: 619, height: 70, left: 750, top: 261, position: 'absolute'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute', background: '#54F4FC', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 30}} />
                <div style={{width: 594, height: 70, left: 12, top: 0, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>All of the above</div>
            </div>
            <div style={{width: 619, height: 70, left: 67, top: 261, position: 'absolute'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute', background: '#54F4FC', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 30}} />
                <div style={{width: 594, height: 70, left: 14, top: 0, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>Trusted Certificate Authority indication in the browser</div>
            </div>
            <div style={{width: 619, height: 70, left: 750, top: 144, position: 'absolute'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute', background: '#54F4FC', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 30}} />
                <div style={{width: 594, height: 70, left: 12, top: 0, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>Padlock icon in the browser status bar</div>
            </div>
            <div style={{width: 619, height: 70, left: 67, top: 144, position: 'absolute'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute', background: '#54F4FC', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 30}} />
                <div style={{width: 594, height: 70, left: 12, top: 0, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>Https:// protocol in the adress bar</div>
            </div>
            <div style={{width: 1440, height: 187, left: 0, top: 369, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 24, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>https shows that we have a secure SSL connection.<br/>The padlock icon in the browser usually means that we're securely connected and it additionally may mean the certificate supplier is trusted which is also a reliable source of legitimacy. <br/>However, we shouldn't trust anything that is in the email itself since it can be easily forged.</div>
            <div style={{width: 1301, height: 127, left: 69, top: 40, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 30, fontFamily: 'Mulish', fontWeight: '800', lineHeight: 1, wordWrap: 'break-word'}}>Your browser tries to help you detect fraudulent websites.  Which indications in the browser indicate that the site is secure?</div>
            <div style={{width: 1302, height: 0.50, left: 69, top: 594, position: 'absolute', background: 'white'}}></div>
        </div>
        <button style={{width: 300, height: 90, left: 572, top: 13670, position: 'absolute', paddingLeft: 30, paddingRight: 30, paddingTop: 17, paddingBottom: 17, background: '#54F4FC', borderRadius: 8, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
            <div style={{width: 300, height: 90, textAlign: 'center', color: 'black', fontSize: 30, fontFamily: 'Montserrat', fontWeight: '700', lineHeight: 3, letterSpacing: 1.50, wordWrap: 'break-word'}}>SUBMIT</div>
        </button>
    </div>
</div>
  );
}

export default PhishingQuiz;