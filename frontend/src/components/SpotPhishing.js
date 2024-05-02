import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
//import RegisterPatientService from "../services/RegisterPatientService";
import { useNavigate } from "react-router-dom";
import logo from '../images/Shield logo 2.png';
import Photo from '../images/Shield.png';
import X from '../images/X.png';

import Q1 from '../images/Docx Q1.png';
import Q1L from '../images/Q1 Link.png';
import Q1F from '../images/Q1 Feedback.png';

import Q2 from '../images/eFax Q2.png';
import Q2L from '../images/Q2 Link.png';
import Q2F from '../images/Q2 F.jpeg';

import Q3 from '../images/This Photo Q3.png';
import Q3L from '../images/Q3 Link.png';
import Q3F from '../images/Q3 F.jpeg';

import Q4 from '../images/Dropbox Q4.png';
import Q4L from '../images/Q4 Link.png';
import Q4F from '../images/Q4 F.jpeg';

import Q5 from '../images/Attatchment Q5.png';
import Q5F from '../images/Q5 F.jpeg';

import Q6 from '../images/Someone has your password Q6.png';
import Q6L from '../images/Q6 Link.png';
import Q6F from '../images/Q6 F.jpeg';

import Q7 from '../images/Government Attack Q7.png';
import Q7L from '../images/Q7 Link.png';
import Q7F from '../images/Q7 F.jpeg';

import Q8 from '../images/Google Q8.png';
import Q8L1 from '../images/Q8 L1.png';
import Q8L2 from '../images/Q8 L2.png';
import Q8F from '../images/Q8 F.png';


function SpotPhishing() {
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

  const [user, setUser] = useState (initialUserState);
  const [message, setMessage] = useState('')
  const [showResponse1, setShowResponse1] = useState(false);
  const [response1, setResponse1] = useState('');

  const [showResponse2, setShowResponse2] = useState(false);
  const [response2, setResponse2] = useState('');

  const [showResponse3, setShowResponse3] = useState(false);
  const [response3, setResponse3] = useState('');

  const [showResponse4, setShowResponse4] = useState(false);
  const [response4, setResponse4] = useState('');

  const [showResponse5, setShowResponse5] = useState(false);
  const [response5, setResponse5] = useState('');

  const [showResponse6, setShowResponse6] = useState(false);
  const [response6, setResponse6] = useState('');

  const [showResponse7, setShowResponse7] = useState(false);
  const [response7, setResponse7] = useState('');

  const [showResponse8, setShowResponse8] = useState(false);
  const [response8, setResponse8] = useState('');

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
    setUser({ ...user, [name]: value });
  };


  let navigate = useNavigate();
  async function routeChange() {
    navigate("../login", { replace: true });
}

const handlePhishingClickQ1 = () => {
    setShowResponse1(true);
    setResponse1('correct');
};

const handleLegitimateClickQ1 = () => {
    setShowResponse1(true);
    setResponse1('wrong');
};

const handlePhishingClickQ2 = () => {
    setShowResponse2(true);
    setResponse2('correct');
};

const handleLegitimateClickQ2 = () => {
    setShowResponse2(true);
    setResponse2('wrong');
};

const handlePhishingClickQ3 = () => {
    setShowResponse3(true);
    setResponse3('correct');
};

const handleLegitimateClickQ3 = () => {
    setShowResponse3(true);
    setResponse3('wrong');
};

const handlePhishingClickQ4 = () => {
    setShowResponse4(true);
    setResponse4('correct');
};

const handleLegitimateClickQ4 = () => {
    setShowResponse4(true);
    setResponse4('wrong');
};

const handlePhishingClickQ5 = () => {
    setShowResponse5(true);
    setResponse5('correct');
};

const handleLegitimateClickQ5 = () => {
    setShowResponse5(true);
    setResponse5('wrong');
};

const handlePhishingClickQ6 = () => {
    setShowResponse6(true);
    setResponse6('correct');
};

const handleLegitimateClickQ6 = () => {
    setShowResponse6(true);
    setResponse6('wrong');
};

const handlePhishingClickQ7 = () => {
    setShowResponse7(true);
    setResponse7('correct');
};

const handleLegitimateClickQ7 = () => {
    setShowResponse7(true);
    setResponse7('wrong');
};

const handlePhishingClickQ8 = () => {
    setShowResponse8(true);
    setResponse8('correct');
};

const handleLegitimateClickQ8 = () => {
    setShowResponse8(true);
    setResponse8('wrong');
};

//   async function registerPatient(e) {
//     e.preventDefault();
//     // no need to console log response data, only for testing
//     RegisterPatientService.registerPatient(user)
//       .then((response) => {
//         //console.log(response.data);
//         alert(response.data);
//         window.location="http://localhost:3000/"
//       })
//       .catch((e) => {
//         console.log(e);
//       });
//   }

  return (
<div style={{width: '100%', height: '100%', background: 'black', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', gap: 3, display: 'inline-flex'}}>
    <div style={{width: 1440, height: 527, position: 'relative', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
        <div style={{height: 81, position: 'relative'}}>
            <div style={{width: 1360, height: 1, left: 0, top: 80, position: 'absolute', background: '#404040'}} />
            <div style={{width: 1347, height: 67.18, left: 13, top: 0, position: 'absolute', justifyContent: 'flex-start', alignItems: 'center', gap: 133, display: 'inline-flex'}}>
                <div style={{width: 254, height: 67.18, position: 'relative'}}>
                    <div style={{width: 204, left: 0, top: 5, position: 'absolute', color: '#54F4FC', fontSize: 40, fontFamily: 'Archivo', fontWeight: '600', lineHeight: 1.5, wordWrap: 'break-word'}}>CyProtego</div>
                    <img style={{width: 50, height: 67.18, left: 204, top: 0, position: 'absolute'}} src={logo} alt="logo" />
                </div>
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
        
        <div style={{width: 154.08, height: 192.24, left: 100, top: 73, position: 'absolute', textAlign: 'center', color: '#54F4FC', fontSize: 146, fontFamily: 'Montserrat', fontWeight: '800', lineHeight: 2, wordWrap: 'break-word'}}>#</div>
        <img style={{width: 760, height: 423, left: 611, top: 97, position: 'absolute'}} src={Photo} alt="Photo" />
        <div style={{width: 275, height: 83, left: 180, top: 150, position: 'absolute', textAlign: 'center', color: '#54F4FC', fontSize: 68, fontFamily: 'Montserrat', fontWeight: '800', lineHeight: 2, wordWrap: 'break-word'}}>Quiz</div>
        <div style={{width: 531, height: 132, left: 96, top: 288, position: 'absolute', textAlign: 'center', color: '#54F4FC', fontSize: 61, fontFamily: 'Montserrat', fontWeight: '800', lineHeight: 2, wordWrap: 'break-word'}}>Is This a Phishing Email?</div>
        <div style={{width: 1360, height: 0.50, left: 0, top: 520, position: 'absolute', background: '#404040'}} />
    </div>
    <div style={{width: '1440px', height: '9412px', position: 'relative', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
            <div style={{width: '1302px', height: '1052.50px', position: 'relative'}}>
               <div style={{width: '1302px', height: '0.50px', left: '0', top: '1052px', position: 'absolute', background: '#54F4FC'}} />
                {showResponse1 && <div style={{width: '1246px', height: '130px', left: '28px', top: '922px', position: 'absolute', textAlign: 'center', color: 'white', fontSize: '30px', fontFamily: 'Montserrat', fontWeight: '800', lineHeight: '1', wordWrap: 'break-word'}}>
                    The URL looks correct but is actually a look-alike. Be cautious about hyperlinks and attachments you open from emails — they may direct you to fraudulent websites where you're asked to input sensitive information.
                </div>}
                {showResponse1 && response1 === 'wrong' && <div style={{width: '242px', height: '64px', left: '530px', top: '879px', position: 'absolute', textAlign: 'center', color: '#DB1B24', fontSize: '30px', fontFamily: 'Montserrat', fontWeight: '800', lineHeight: '1.5', wordWrap: 'break-word'}}>WRONG :(</div>}
                {showResponse1 && response1 === 'correct' && <div style={{width: '242px', left: '530px', top: '861px', position: 'absolute', textAlign: 'center', color: '#54F4FC', fontSize: '30px', fontFamily: 'Montserrat', fontWeight: '800', lineHeight: '1', wordWrap: 'break-word'}}>CORRECT!!<br/></div>}
                <img style={{width: '1246px', height: '613px', left: '28px', top: '234px', position: 'absolute'}} src={Q1} alt="Q1" />
                <img style={{width: '482px', height: '31px', left: '28px', top: '815px', position: 'absolute'}} src={Q1L} alt="Q1 Link" />
                {(showResponse1 && response1 === 'correct' || showResponse1 && response1 === 'wrong') && <img style={{width: '1246px', height: '613px', left: '28px', top: '234px', position: 'absolute'}} src={Q1F} alt="Q1 Feedback" />}
                <div style={{width: '1246px', height: '103px', paddingLeft: '110px', paddingRight: '97px', left: '28px', top: '120px', position: 'absolute', justifyContent: 'flex-end', alignItems: 'flex-start', gap: '341px', display: 'inline-flex'}}>
                    <button onClick={handlePhishingClickQ1} style={{width: '349px', alignSelf: 'stretch', paddingLeft: '30px', paddingRight: '30px', paddingTop: '17px', paddingBottom: '17px', background: '#54F4FC', borderRadius: '8px', justifyContent: 'center', alignItems: 'center', gap: '10px', display: 'inline-flex'}}>
                        <div style={{width: '258px', height: '78px', textAlign: 'center', color: 'black', fontSize: '30px', fontFamily: 'Montserrat', fontWeight: '700', lineHeight: '2', letterSpacing: '1.50px', wordWrap: 'break-word'}}>PHISHING</div>
                    </button>
                    <button onClick={handleLegitimateClickQ1} style={{width: '349px', alignSelf: 'stretch', paddingLeft: '30px', paddingRight: '30px', paddingTop: '17px', paddingBottom: '17px', borderRadius: '8px', border: '1px #54F4FC solid', justifyContent: 'center', alignItems: 'center', gap: '10px', display: 'inline-flex', background:'black'}}>
                        <div style={{width: '258px', height: '103px', textAlign: 'center', color: '#54F4FC', fontSize: '30px', fontFamily: 'Montserrat', fontWeight: '700', lineHeight: '3', letterSpacing: '1.50px', wordWrap: 'break-word'}}>LEGITIMATE</div>
                    </button>
                </div>
                <div style={{width: '1246px', height: '120px', left: '28px', top: '0', position: 'absolute', textAlign: 'center', color: 'white', fontSize: '30px', fontFamily: 'Montserrat', fontWeight: '800', lineHeight: '1.5', wordWrap: 'break-word'}}>
                    Be sure to check out link URLs at the lower left corner of the picture, and to explore the email addresses. Don't worry, none of the links will work - we don't want to send you anywhere funny!<br/>
                </div>
            </div>
            <div style={{width: '1302px', height: '964.50px', position: 'relative'}}>
            <div style={{width: '1302px', height: '0.50px', left: '0', top: '964px', position: 'absolute', background: '#54F4FC'}} />
            {showResponse2 && <div style={{width: '1246px', height: '130px', left: '28px', top: '834px', position: 'absolute', textAlign: 'center', color: 'white', fontSize: '30px', fontFamily: 'Montserrat', fontWeight: '800', lineHeight: '1.5', wordWrap: 'break-word'}}>
                The sender's email domain is misspelled as “efacks” and the link actually points at “mailru382.co”. Phishing often tries to trick you with look-alike URLs.
            </div>}
            {showResponse2 && response2 === 'wrong' && <div style={{width: '242px', height: '64px', left: '530px', top: '791px', position: 'absolute', textAlign: 'center', color: '#DB1B24', fontSize: '30px', fontFamily: 'Montserrat', fontWeight: '800', lineHeight: '1.5', wordWrap: 'break-word'}}>WRONG :(</div>}
            {showResponse2 && response2 === 'correct' && <div style={{width: '242px', left: '530px', top: '773px', position: 'absolute', textAlign: 'center', color: '#54F4FC', fontSize: '30px', fontFamily: 'Montserrat', fontWeight: '800', lineHeight: '1', wordWrap: 'break-word'}}>CORRECT!!<br/></div>}
            <img style={{width: '1246px', height: '535px', left: '29px', top: '223px', position: 'absolute'}} src={Q2} alt="Q2" />
            <img style={{width: '548px', height: '35px', left: '28px', top: '721px', position: 'absolute'}} src={Q2L} alt="Q2 Link" />
            {(showResponse2 && response2 === 'correct' || showResponse2 && response2 === 'wrong') && <img style={{width: '1246px', height: '535px', left: '29px', top: '223px', position: 'absolute'}} src={Q2F} alt="Q2 Feedback" />}
            <div style={{width: '1246px', height: '103px', paddingLeft: '110px', paddingRight: '97px', left: '28px', top: '83px', position: 'absolute', justifyContent: 'flex-end', alignItems: 'flex-start', gap: '341px', display: 'inline-flex'}}>
                <button onClick={handlePhishingClickQ2} style={{width: '349px', alignSelf: 'stretch', paddingLeft: '30px', paddingRight: '30px', paddingTop: '17px', paddingBottom: '17px', background: '#54F4FC', borderRadius: '8px', justifyContent: 'center', alignItems: 'center', gap: '10px', display: 'inline-flex'}}>
                    <div style={{width: '258px', height: '78px', textAlign: 'center', color: 'black', fontSize: '30px', fontFamily: 'Montserrat', fontWeight: '700', lineHeight: '2', letterSpacing: '1.50px', wordWrap: 'break-word'}}>PHISHING</div>
                </button>
                <button onClick={handleLegitimateClickQ2} style={{width: '349px', alignSelf: 'stretch', paddingLeft: '30px', paddingRight: '30px', paddingTop: '17px', paddingBottom: '17px', borderRadius: '8px', border: '1px #54F4FC solid', justifyContent: 'center', alignItems: 'center', gap: '10px', display: 'inline-flex', background: 'black'}}>
                    <div style={{width: '258px', height: '103px', textAlign: 'center', color: '#54F4FC', fontSize: '30px', fontFamily: 'Montserrat', fontWeight: '700', lineHeight: '3', letterSpacing: '1.50px', wordWrap: 'break-word'}}>LEGITIMATE</div>
                </button>
            </div>
            <div style={{width: '1246px', height: '83px', left: '12px', top: '0', position: 'absolute', textAlign: 'center', color: 'white', fontSize: '30px', fontFamily: 'Montserrat', fontWeight: '800', lineHeight: '1.5', wordWrap: 'break-word'}}>
                You’ve Received a Fax <br/>We know you're excited, but take your time.
            </div>
        </div>
        <div style={{width: '1302px', height: '694.50px', position: 'relative'}}>
            <div style={{width: '1302px', height: '0.50px', left: '0', top: '694px', position: 'absolute', background: '#54F4FC'}} />
            {showResponse3 && <div style={{width: '1246px', height: '130px', left: '28px', top: '564px', position: 'absolute', textAlign: 'center', color: 'white', fontSize: '30px', fontFamily: 'Montserrat', fontWeight: '800', lineHeight: '1.5', wordWrap: 'break-word'}}>
                There is a fishy look-alike URL. The real domain is “sytez.net”, but it is designed to look like Google Drive. Remember to be especially cautious if you aren't sure you know the sender.
            </div>}
            {showResponse3 && response3 === 'wrong' && <div style={{width: '242px', height: '64px', left: '530px', top: '521px', position: 'absolute', textAlign: 'center', color: '#DB1B24', fontSize: '30px', fontFamily: 'Montserrat', fontWeight: '800', lineHeight: '1.5', wordWrap: 'break-word'}}>WRONG :(</div>}
            {showResponse3 && response3 === 'correct' && <div style={{width: '242px', left: '530px', top: '503px', position: 'absolute', textAlign: 'center', color: '#54F4FC', fontSize: '30px', fontFamily: 'Montserrat', fontWeight: '800', lineHeight: '1', wordWrap: 'break-word'}}>CORRECT!!<br/></div>}
            <img style={{width: '1246px', height: '257px', left: '29px', top: '234px', position: 'absolute'}} src={Q3} alt="Q3" />
            <img style={{width: '552px', height: '35px', left: '28px', top: '458px', position: 'absolute'}} src={Q3L} alt="Q3 Link" />
            {(showResponse3 && response3 === 'correct' || showResponse3 && response3 === 'wrong') && <img style={{width: '1246px', height: '257px', left: '29px', top: '234px', position: 'absolute'}} src={Q3F} alt="Q3 Feedback" />}
            <div style={{width: '1246px', height: '103px', paddingLeft: '110px', paddingRight: '97px', left: '28px', top: '80px', position: 'absolute', justifyContent: 'flex-end', alignItems: 'flex-start', gap: '341px', display: 'inline-flex'}}>
                <button onClick={handlePhishingClickQ3} style={{width: '349px', alignSelf: 'stretch', paddingLeft: '30px', paddingRight: '30px', paddingTop: '17px', paddingBottom: '17px', background: '#54F4FC', borderRadius: '8px', justifyContent: 'center', alignItems: 'center', gap: '10px', display: 'inline-flex'}}>
                    <div style={{width: '258px', height: '78px', textAlign: 'center', color: 'black', fontSize: '30px', fontFamily: 'Montserrat', fontWeight: '700', lineHeight: '2', letterSpacing: '1.50px', wordWrap: 'break-word'}}>PHISHING</div>
                </button>
                <button onClick={handleLegitimateClickQ3} style={{width: '349px', alignSelf: 'stretch', paddingLeft: '30px', paddingRight: '30px', paddingTop: '17px', paddingBottom: '17px', borderRadius: '8px', border: '1px #54F4FC solid', justifyContent: 'center', alignItems: 'center', gap: '10px', display: 'inline-flex', background: 'black'}}>
                    <div style={{width: '258px', height: '103px', textAlign: 'center', color: '#54F4FC', fontSize: '30px', fontFamily: 'Montserrat', fontWeight: '700', lineHeight: '3', letterSpacing: '1.50px', wordWrap: 'break-word'}}>LEGITIMATE</div>
                </button>
            </div>
            <div style={{width: '1246px', height: '80px', left: '28px', top: '0', position: 'absolute', textAlign: 'center', color: 'white', fontSize: '30px', fontFamily: 'Montserrat', fontWeight: '800', lineHeight: '1.5', wordWrap: 'break-word'}}>Time for a trip down memory lane!<br/>Remember TK from school?</div>
        </div>

        <div style={{width: '1302px', height: '1234.50px', position: 'relative'}}>
            <div style={{width: '1302px', height: '0.50px', left: '0', top: '1234px', position: 'absolute', background: '#54F4FC'}} />
            {showResponse4 && <div style={{width: '1246px', height: '153px', left: '28px', top: '1081px', position: 'absolute', textAlign: 'center', color: 'white', fontSize: '30px', fontFamily: 'Montserrat', fontWeight: '800', lineHeight: '1', wordWrap: 'break-word'}}>
                This is a legitimate Dropbox communication. The sender is “dropboxmail.com”, which is unusual but legitimate, and the URL is a secure link (https) to “dropbox.com”. If you are unsure about a domain, you can use a search engine to find out more information.
            </div>}
            {showResponse4 && response4 === 'correct' && <div style={{width: '242px', height: '64px', left: '530px', top: '1038px', position: 'absolute', textAlign: 'center', color: '#DB1B24', fontSize: '30px', fontFamily: 'Montserrat', fontWeight: '800', lineHeight: '1.5', wordWrap: 'break-word'}}>WRONG :(</div>}
            {showResponse4 && response4 === 'wrong' && <div style={{width: '242px', left: '530px', top: '1020px', position: 'absolute', textAlign: 'center', color: '#54F4FC', fontSize: '30px', fontFamily: 'Montserrat', fontWeight: '800', lineHeight: '1', wordWrap: 'break-word'}}>CORRECT!!<br/></div>}
            <img style={{width: '1246px', height: '765px', left: '29px', top: '248px', position: 'absolute'}} src={Q4} alt="Q4" />
            <img style={{width: '586px', height: '37px', left: '28px', top: '978px', position: 'absolute'}} src={Q4L} alt="Q4 Link" />
            {(showResponse4 && response4 === 'correct' || showResponse4 && response4 === 'wrong') && <img style={{width: '1246px', height: '765px', left: '29px', top: '248px', position: 'absolute'}} src={Q4F} alt="Q4 Feedback" />}
            <div style={{width: '1246px', height: '103px', paddingLeft: '110px', paddingRight: '97px', left: '28px', top: '81px', position: 'absolute', justifyContent: 'flex-end', alignItems: 'flex-start', gap: '341px', display: 'inline-flex'}}>
                <button onClick={handlePhishingClickQ4} style={{width: '349px', alignSelf: 'stretch', paddingLeft: '30px', paddingRight: '30px', paddingTop: '17px', paddingBottom: '17px', background: '#54F4FC', borderRadius: '8px', justifyContent: 'center', alignItems: 'center', gap: '10px', display: 'inline-flex'}}>
                    <div style={{width: '258px', height: '78px', textAlign: 'center', color: 'black', fontSize: '30px', fontFamily: 'Montserrat', fontWeight: '700', lineHeight: '2', letterSpacing: '1.50px', wordWrap: 'break-word'}}>PHISHING</div>
                </button>
                <button onClick={handleLegitimateClickQ4} style={{width: '349px', alignSelf: 'stretch', paddingLeft: '30px', paddingRight: '30px', paddingTop: '17px', paddingBottom: '17px', borderRadius: '8px', border: '1px #54F4FC solid', justifyContent: 'center', alignItems: 'center', gap: '10px', display: 'inline-flex', background: 'black'}}>
                    <div style={{width: '258px', height: '103px', textAlign: 'center', color: '#54F4FC', fontSize: '30px', fontFamily: 'Montserrat', fontWeight: '700', lineHeight: '3', letterSpacing: '1.50px', wordWrap: 'break-word'}}>LEGITIMATE</div>
                </button>
            </div>
            <div style={{width: '1246px', height: '81px', left: '28px', top: '0', position: 'absolute', textAlign: 'center', color: 'white', fontSize: '30px', fontFamily: 'Montserrat', fontWeight: '800', lineHeight: '1.5', wordWrap: 'break-word'}}>Uh oh, looks like you're out of storage!<br/>I wonder what it costs to upgrade?</div>
        </div>
        <div style={{width: '1302px', height: '1006.50px', position: 'relative'}}>
            <div style={{width: '1302px', height: '0.50px', left: '0', top: '1006px', position: 'absolute', background: '#54F4FC'}} />
            {showResponse5 && <div style={{width: '1246px', height: '153px', left: '28px', top: '853px', position: 'absolute', textAlign: 'center', color: 'white', fontSize: '30px', fontFamily: 'Montserrat', fontWeight: '800', lineHeight: '1', wordWrap: 'break-word'}}>
                This was a complicated phish! PDFs can contain malware or viruses — always be certain you trust the sender and use your browser or an online service such as Google Drive to open them safely.
            </div>}
            {showResponse5 && response5 === 'wrong' && <div style={{width: '242px', height: '64px', left: '530px', top: '810px', position: 'absolute', textAlign: 'center', color: '#DB1B24', fontSize: '30px', fontFamily: 'Montserrat', fontWeight: '800', lineHeight: '1.5', wordWrap: 'break-word'}}>WRONG :(</div>}
            {showResponse5 && response5 === 'correct' && <div style={{width: '242px', left: '530px', top: '792px', position: 'absolute', textAlign: 'center', color: '#54F4FC', fontSize: '30px', fontFamily: 'Montserrat', fontWeight: '800', lineHeight: '1', wordWrap: 'break-word'}}>CORRECT!!<br/></div>}
            <img style={{width: '1246px', height: '521px', left: '29px', top: '263px', position: 'absolute'}} src={Q5} alt="Q5" />
            {(showResponse5 && response5 === 'correct' || showResponse5 && response5 === 'wrong') && <img style={{width: '1246px', height: '521px', left: '29px', top: '263px', position: 'absolute'}} src={Q5F} alt="Q5 Feedback" />}
            <button onClick={handlePhishingClickQ5} style={{width: '349px', height: '103px', paddingLeft: '30px', paddingRight: '30px', paddingTop: '17px', paddingBottom: '17px', left: '138px', top: '95px', position: 'absolute', background: '#54F4FC', borderRadius: '8px', justifyContent: 'center', alignItems: 'center', gap: '10px', display: 'inline-flex'}}>
                <div style={{width: '258px', height: '78px', textAlign: 'center', color: 'black', fontSize: '30px', fontFamily: 'Montserrat', fontWeight: '700', lineHeight: '2', letterSpacing: '1.50px', wordWrap: 'break-word'}}>PHISHING</div>
            </button>
            <button onClick={handleLegitimateClickQ5} style={{width: '349px', height: '103px', paddingLeft: '30px', paddingRight: '30px', paddingTop: '17px', paddingBottom: '17px', left: '828px', top: '95px', position: 'absolute', borderRadius: '8px', border: '1px #54F4FC solid', justifyContent: 'center', alignItems: 'center', gap: '10px', display: 'inline-flex', background: 'black'}}>
                <div style={{width: '258px', height: '103px', textAlign: 'center', color: '#54F4FC', fontSize: '30px', fontFamily: 'Montserrat', fontWeight: '700', lineHeight: '3', letterSpacing: '1.50px', wordWrap: 'break-word'}}>LEGITIMATE</div>
            </button>
            <div style={{width: '1246px', height: '95px', left: '28px', top: '0', position: 'absolute', textAlign: 'center', color: 'white', fontSize: '30px', fontFamily: 'Montserrat', fontWeight: '800', lineHeight: '1.5', wordWrap: 'break-word'}}>You’ve received a new kind of report from the school.<br/>Usually their emails come from “sharon.mosley@westmountschool.org”.<br/></div>
        </div>
        <div style={{width: '1302px', height: '1283.50px', position: 'relative'}}>
            <div style={{width: '1302px', height: '0.50px', left: '0', top: '1283px', position: 'absolute', background: '#54F4FC'}} />
            {showResponse6 && <div style={{width: '1246px', height: '153px', left: '28px', top: '1130px', position: 'absolute', textAlign: 'center', color: 'white', fontSize: '30px', fontFamily: 'Montserrat', fontWeight: '800', lineHeight: '1.5', wordWrap: 'break-word'}}>
                This phish used a look-alike URL to masquerade as Gmail. In fact, this is almost identical to an attack used to successfully hack politicians’ emails. Always be sure to check URLs carefully!
            </div>}
            {showResponse6 && response6 === 'wrong' && <div style={{width: '242px', height: '64px', left: '530px', top: '1087px', position: 'absolute', textAlign: 'center', color: '#DB1B24', fontSize: '30px', fontFamily: 'Montserrat', fontWeight: '800', lineHeight: '1.5', wordWrap: 'break-word'}}>WRONG :(</div>}
            {showResponse6 && response6 === 'correct' && <div style={{width: '242px', left: '530px', top: '1069px', position: 'absolute', textAlign: 'center', color: '#54F4FC', fontSize: '30px', fontFamily: 'Montserrat', fontWeight: '800', lineHeight: '1', wordWrap: 'break-word'}}>CORRECT!!<br/></div>}
            <img style={{width: '1246px', height: '805px', left: '29px', top: '258px', position: 'absolute'}} src={Q6} alt="Q6" />
            <img style={{width: '652px', height: '37px', left: '29px', top: '1028px', position: 'absolute'}} src={Q6L} alt="Q6 Link" />
            {(showResponse6 && response6 === 'correct' || showResponse6 && response6 === 'wrong') && <img style={{width: '1246px', height: '805px', left: '29px', top: '263px', position: 'absolute'}} src={Q6F} alt="Q6 Feedback" />}
            <button onClick={handlePhishingClickQ6} style={{width: '349px', height: '103px', paddingLeft: '30px', paddingRight: '30px', paddingTop: '17px', paddingBottom: '17px', left: '138px', top: '95px', position: 'absolute', background: '#54F4FC', borderRadius: '8px', justifyContent: 'center', alignItems: 'center', gap: '10px', display: 'inline-flex'}}>
                <div style={{width: '258px', height: '78px', textAlign: 'center', color: 'black', fontSize: '30px', fontFamily: 'Montserrat', fontWeight: '700', lineHeight: '2', letterSpacing: '1.50px', wordWrap: 'break-word'}}>PHISHING</div>
            </button>
            <button onClick={handleLegitimateClickQ6} style={{width: '349px', height: '103px', paddingLeft: '30px', paddingRight: '30px', paddingTop: '17px', paddingBottom: '17px', left: '828px', top: '95px', position: 'absolute', borderRadius: '8px', border: '1px #54F4FC solid', justifyContent: 'center', alignItems: 'center', gap: '10px', display: 'inline-flex', background: 'black'}}>
                <div style={{width: '258px', height: '103px', textAlign: 'center', color: '#54F4FC', fontSize: '30px', fontFamily: 'Montserrat', fontWeight: '700', lineHeight: '3', letterSpacing: '1.50px', wordWrap: 'break-word'}}>LEGITIMATE</div>
            </button>
            <div style={{width: '1246px', height: '95px', left: '28px', top: '0', position: 'absolute', textAlign: 'center', color: 'white', fontSize: '30px', fontFamily: 'Montserrat', fontWeight: '800', lineHeight: '1.5', wordWrap: 'break-word'}}>Someone has been trying to access your account.<br/>Look carefully before changing your password.</div>
        </div>
        <div style={{width: '1302px', height: '1056.50px', position: 'relative'}}>
            <div style={{width: '1302px', height: '0.50px', left: '0', top: '1056px', position: 'absolute', background: '#54F4FC'}} />
            {showResponse7 && <div style={{width: '1246px', height: '153px', left: '28px', top: '903px', position: 'absolute', textAlign: 'center', color: 'white', fontSize: '30px', fontFamily: 'Montserrat', fontWeight: '800', lineHeight: '1.5', wordWrap: 'break-word'}}>
                The hackers tried to use Google to hide the actual link, which is from tinyurl. An email similar to this was used to target think tanks and politicians.
            </div>}
            {showResponse7 && response7 === 'wrong' && <div style={{width: '242px', height: '64px', left: '530px', top: '860px', position: 'absolute', textAlign: 'center', color: '#DB1B24', fontSize: '30px', fontFamily: 'Montserrat', fontWeight: '800', lineHeight: '1.5', wordWrap: 'break-word'}}>WRONG :(</div>}
            {showResponse7 && response7 === 'correct' && <div style={{width: '242px', left: '530px', top: '842px', position: 'absolute', textAlign: 'center', color: '#54F4FC', fontSize: '30px', fontFamily: 'Montserrat', fontWeight: '800', lineHeight: '1', wordWrap: 'break-word'}}>CORRECT!!<br/></div>}
            <img style={{width: '1246px', height: '579px', left: '29px', top: '255px', position: 'absolute'}} src={Q7} alt="Q7" />
            <img style={{width: '652px', height: '37px', left: '29px', top: '798px', position: 'absolute'}} src={Q7L} alt="Q7 Link" />
            {(showResponse7 && response7 === 'correct' || showResponse7 && response7 === 'wrong') && <img style={{width: '1246px', height: '579px', left: '29px', top: '255px', position: 'absolute'}} src={Q7F} alt="Q7 Feedback" />}
            <button onClick={handlePhishingClickQ7} style={{width: '349px', height: '103px', paddingLeft: '30px', paddingRight: '30px', paddingTop: '17px', paddingBottom: '17px', left: '138px', top: '95px', position: 'absolute', background: '#54F4FC', borderRadius: '8px', justifyContent: 'center', alignItems: 'center', gap: '10px', display: 'inline-flex'}}>
                <div style={{width: '258px', height: '78px', textAlign: 'center', color: 'black', fontSize: '30px', fontFamily: 'Montserrat', fontWeight: '700', lineHeight: '2', letterSpacing: '1.50px', wordWrap: 'break-word'}}>PHISHING</div>
            </button>
            <button onClick={handleLegitimateClickQ7} style={{width: '349px', height: '103px', paddingLeft: '30px', paddingRight: '30px', paddingTop: '17px', paddingBottom: '17px', left: '828px', top: '95px', position: 'absolute', borderRadius: '8px', border: '1px #54F4FC solid', justifyContent: 'center', alignItems: 'center', gap: '10px', display: 'inline-flex', background: 'black'}}>
                <div style={{width: '258px', height: '103px', textAlign: 'center', color: '#54F4FC', fontSize: '30px', fontFamily: 'Montserrat', fontWeight: '700', lineHeight: '3', letterSpacing: '1.50px', wordWrap: 'break-word'}}>LEGITIMATE</div>
            </button>
            <div style={{width: '1246px', height: '95px', left: '28px', top: '0', position: 'absolute', textAlign: 'center', color: 'white', fontSize: '30px', fontFamily: 'Montserrat', fontWeight: '800', lineHeight: '1.5', wordWrap: 'break-word'}}>Your account seems to be under attack again.<br/>Or is it?</div>
        </div>
        <div style={{width: '1302px', height: '1357.50px', position: 'relative'}}>
            <div style={{width: '1302px', height: '0.50px', left: '0', top: '1357px', position: 'absolute', background: '#54F4FC'}} />
            {showResponse8 && <div style={{width: '1246px', height: '153px', left: '28px', top: '1199px', position: 'absolute', textAlign: 'center', color: 'white', fontSize: '30px', fontFamily: 'Montserrat', fontWeight: '800', lineHeight: '1.5', wordWrap: 'break-word'}}>
                It's important to be cautious with these kinds of account access requests and to be sure you trust the developer. Check the domain that is displayed, and be sure to click on it for more details.
            </div>}
            {showResponse8 && response8 === 'correct' && <div style={{width: '242px', height: '64px', left: '530px', top: '1156px', position: 'absolute', textAlign: 'center', color: '#DB1B24', fontSize: '30px', fontFamily: 'Montserrat', fontWeight: '800', lineHeight: '1.5', wordWrap: 'break-word'}}>WRONG :(</div>}
            {showResponse8 && response8 === 'wrong' && <div style={{width: '242px', left: '530px', top: '1138px', position: 'absolute', textAlign: 'center', color: '#54F4FC', fontSize: '30px', fontFamily: 'Montserrat', fontWeight: '800', lineHeight: '1', wordWrap: 'break-word'}}>CORRECT!!<br/></div>}
            <img style={{width: '1246px', height: '862px', left: '29px', top: '267px', position: 'absolute'}} src={Q8} alt="Q8" />
            <img style={{width: '652px', height: '37px', left: '29px', top: '1060px', position: 'absolute'}} src={Q8L1} alt="Q8 Link1" />
            <img style={{width: '652px', height: '37px', left: '29px', top: '1092px', position: 'absolute'}} src={Q8L2} alt="Q8 Link2" />
            {(showResponse8 && response8 === 'correct' || showResponse8 && response8 === 'wrong') && <img style={{width: '1246px', height: '862px', left: '29px', top: '267px', position: 'absolute'}} src={Q8F} alt="Q8 Feedback" />}
            <button onClick={handleLegitimateClickQ8} style={{width: '349px', height: '103px', paddingLeft: '30px', paddingRight: '30px', paddingTop: '17px', paddingBottom: '17px', left: '828px', top: '95px', position: 'absolute', borderRadius: '8px', border: '1px #54F4FC solid', justifyContent: 'center', alignItems: 'center', gap: '10px', display: 'inline-flex', background:'black'}}>
                <div style={{width: '258px', height: '103px', textAlign: 'center', color: '#54F4FC', fontSize: '30px', fontFamily: 'Montserrat', fontWeight: '700', lineHeight: '3', letterSpacing: '1.50px', wordWrap: 'break-word'}}>LEGITIMATE</div>
            </button>
            <button onClick={handlePhishingClickQ8} style={{width: '349px', height: '103px', paddingLeft: '30px', paddingRight: '30px', paddingTop: '17px', paddingBottom: '17px', left: '138px', top: '95px', position: 'absolute', background: '#54F4FC', borderRadius: '8px', justifyContent: 'center', alignItems: 'center', gap: '10px', display: 'inline-flex'}}>
                <div style={{width: '258px', height: '78px', textAlign: 'center', color: 'black', fontSize: '30px', fontFamily: 'Montserrat', fontWeight: '700', lineHeight: '2', letterSpacing: '1.50px', wordWrap: 'break-word'}}>PHISHING</div>
            </button>
            <div style={{width: '1246px', height: '95px', left: '28px', top: '0', position: 'absolute', textAlign: 'center', color: 'white', fontSize: '30px', fontFamily: 'Montserrat', fontWeight: '800', lineHeight: '1.5', wordWrap: 'break-word'}}>You’ve signed up for a travel planning service.<br/>You want them to scan your email, but take a close look.</div>
        </div>
    </div>
</div>
  );
}

export default SpotPhishing;