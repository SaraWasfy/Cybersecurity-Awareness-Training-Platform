import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import UserService from "../services/userService";
import { useNavigate } from "react-router-dom";
import logo from '../images/Shield logo 2.png';
import Photo from '../images/Shield.png';
import X from '../images/X.png';

function PhishingQuiz() {
    const [showResponse1, setShowResponse1] = useState(false);
    const [response1, setResponse1] = useState('');
    const [buttonsDisabled1, setButtonsDisabled1] = useState(false);
  
    const [showResponse2, setShowResponse2] = useState(false);
    const [response2, setResponse2] = useState('');
    const [buttonsDisabled2, setButtonsDisabled2] = useState(false);
  
    const [showResponse3, setShowResponse3] = useState(false);
    const [response3, setResponse3] = useState('');
    const [buttonsDisabled3, setButtonsDisabled3] = useState(false);
  
    const [showResponse4, setShowResponse4] = useState(false);
    const [response4, setResponse4] = useState('');
    const [buttonsDisabled4, setButtonsDisabled4] = useState(false);
  
    const [showResponse5, setShowResponse5] = useState(false);
    const [response5, setResponse5] = useState('');
    const [buttonsDisabled5, setButtonsDisabled5] = useState(false);
  
    const [showResponse6, setShowResponse6] = useState(false);
    const [response6, setResponse6] = useState('');
    const [buttonsDisabled6, setButtonsDisabled6] = useState(false);
  
    const [showResponse7, setShowResponse7] = useState(false);
    const [response7, setResponse7] = useState('');
    const [buttonsDisabled7, setButtonsDisabled7] = useState(false);
  
    const [showResponse8, setShowResponse8] = useState(false);
    const [response8, setResponse8] = useState('');
    const [buttonsDisabled8, setButtonsDisabled8] = useState(false);

    const [showResponse9, setShowResponse9] = useState(false);
    const [response9, setResponse9] = useState('');
    const [buttonsDisabled9, setButtonsDisabled9] = useState(false);

    const [showResponse10, setShowResponse10] = useState(false);
    const [response10, setResponse10] = useState('');
    const [buttonsDisabled10, setButtonsDisabled10] = useState(false);

    const [showResponse11, setShowResponse11] = useState(false);
    const [response11, setResponse11] = useState('');
    const [buttonsDisabled11, setButtonsDisabled11] = useState(false);

    const [showResponse12, setShowResponse12] = useState(false);
    const [response12, setResponse12] = useState('');
    const [buttonsDisabled12, setButtonsDisabled12] = useState(false);

    const [showResponse13, setShowResponse13] = useState(false);
    const [response13, setResponse13] = useState('');
    const [buttonsDisabled13, setButtonsDisabled13] = useState(false);

    const [showResponse14, setShowResponse14] = useState(false);
    const [response14, setResponse14] = useState('');
    const [buttonsDisabled14, setButtonsDisabled14] = useState(false);

    const [showResponse15, setShowResponse15] = useState(false);
    const [response15, setResponse15] = useState('');
    const [buttonsDisabled15, setButtonsDisabled15] = useState(false);

    const [showResponse16, setShowResponse16] = useState(false);
    const [response16, setResponse16] = useState('');
    const [buttonsDisabled16, setButtonsDisabled16] = useState(false);

    const [showResponse17, setShowResponse17] = useState(false);
    const [response17, setResponse17] = useState('');
    const [buttonsDisabled17, setButtonsDisabled17] = useState(false);

    const [showResponse18, setShowResponse18] = useState(false);
    const [response18, setResponse18] = useState('');
    const [buttonsDisabled18, setButtonsDisabled18] = useState(false);

    const [showResponse19, setShowResponse19] = useState(false);
    const [response19, setResponse19] = useState('');
    const [buttonsDisabled19, setButtonsDisabled19] = useState(false);

    const [showResponse20, setShowResponse20] = useState(false);
    const [response20, setResponse20] = useState('');
    const [buttonsDisabled20, setButtonsDisabled20] = useState(false);

    const [showResponse21, setShowResponse21] = useState(false);
    const [response21, setResponse21] = useState('');
    const [buttonsDisabled21, setButtonsDisabled21] = useState(false);

    const [showResponse22, setShowResponse22] = useState(false);
    const [response22, setResponse22] = useState('');
    const [buttonsDisabled22, setButtonsDisabled22] = useState(false);

    const [showResponse23, setShowResponse23] = useState(false);
    const [response23, setResponse23] = useState('');
    const [buttonsDisabled23, setButtonsDisabled23] = useState(false);

    
    
    const [sum, setSum] = useState(0);

    const B1R = document.getElementById('Q1R');
    const B2R = document.getElementById('Q2R');
    const B3R = document.getElementById('Q3R');
    const B4R = document.getElementById('Q4R');
    const B5R = document.getElementById('Q5R');
    const B6R = document.getElementById('Q6R');
    const B7R = document.getElementById('Q7R');
    const B8R = document.getElementById('Q8R');
    const B9R = document.getElementById('Q9R');
    const B10R = document.getElementById('Q10R');
    const B11R = document.getElementById('Q11R');
    const B12R = document.getElementById('Q12R');
    const B13R = document.getElementById('Q13R');
    const B14R = document.getElementById('Q14R');
    const B15R = document.getElementById('Q15R');
    const B16R = document.getElementById('Q16R');
    const B17R = document.getElementById('Q17R');
    const B18R = document.getElementById('Q18R');
    const B19R = document.getElementById('Q19R');
    const B20R = document.getElementById('Q20R');
    const B21R = document.getElementById('Q21R');
    const B22R = document.getElementById('Q22R');
    const B23R = document.getElementById('Q23R');

    const B1W1 = document.getElementById('Q1W1');
    const B1W2 = document.getElementById('Q1W2');
    const B1W3 = document.getElementById('Q1W3');

    const B2W1 = document.getElementById('Q2W1');
    const B2W2 = document.getElementById('Q2W2');
    const B2W3 = document.getElementById('Q2W3');

    const B3W1 = document.getElementById('Q3W1');
    const B3W2 = document.getElementById('Q3W2');
    const B3W3 = document.getElementById('Q3W3');

    const B4W1 = document.getElementById('Q4W1');
    const B4W2 = document.getElementById('Q4W2');
    const B4W3 = document.getElementById('Q4W3');

    const B5W1 = document.getElementById('Q5W1');
    const B5W2 = document.getElementById('Q5W2');
    const B5W3 = document.getElementById('Q5W3');

    const B6W1 = document.getElementById('Q6W1');
    const B6W2 = document.getElementById('Q6W2');
    const B6W3 = document.getElementById('Q6W3');

    const B7W1 = document.getElementById('Q7W1');
    const B7W2 = document.getElementById('Q7W2');
    const B7W3 = document.getElementById('Q7W3');

    const B8W1 = document.getElementById('Q8W1');
    const B8W2 = document.getElementById('Q8W2');
    const B8W3 = document.getElementById('Q8W3');

    const B9W1 = document.getElementById('Q9W1');

    const B10W1 = document.getElementById('Q10W1');
    const B11W1 = document.getElementById('Q11W1');
    const B12W1 = document.getElementById('Q12W1');
    const B13W1 = document.getElementById('Q13W1');
    const B14W1 = document.getElementById('Q14W1');
    const B15W1 = document.getElementById('Q15W1');
    const B16W1 = document.getElementById('Q16W1');
    const B17W1 = document.getElementById('Q17W1');
    const B18W1 = document.getElementById('Q18W1');
    const B19W1 = document.getElementById('Q19W1');
    const B20W1 = document.getElementById('Q20W1');
    const B21W1 = document.getElementById('Q21W1');
    const B22W1 = document.getElementById('Q22W1');
    const B23W1 = document.getElementById('Q23W1');

    const handleCorrectClick1 = () => {
        setShowResponse1(true);
        setResponse1('correct');
        setButtonsDisabled1(true);
        B1R.style.background = "#03fc2c";
        setSum(currentSum => currentSum + 10);
        UserService.addPoints()
        .then((response) => {
          console.log(response);
        })
        .catch((e) => {
          console.log(e);
        });
    };
    
    const handleWrongClick1 = () => {
        setShowResponse1(true);
        setResponse1('wrong');
        setButtonsDisabled1(true);
        B1R.style.background = "#03fc2c";
        B1W1.style.backgroundColor = "#fc1a05";
        B1W2.style.backgroundColor = "#fc1a05";
        B1W3.style.backgroundColor = "#fc1a05";
    };

    const handleCorrectClick2 = () => {
        setShowResponse2(true);
        setResponse2('correct');
        setButtonsDisabled2(true);
        B2R.style.background = "#03fc2c";
        setSum(currentSum => currentSum + 10);
        UserService.addPoints()
        .then((response) => {
          console.log(response);
        })
        .catch((e) => {
          console.log(e);
        });
    };
    
    const handleWrongClick2 = () => {
        setShowResponse2(true);
        setResponse2('wrong');
        setButtonsDisabled2(true);
    };

    const handleCorrectClick3 = () => {
        setShowResponse3(true);
        setResponse3('correct');
        setButtonsDisabled3(true);
        B3R.style.backgroundColor = "#03fc2c";
        setSum(currentSum => currentSum + 10);
        UserService.addPoints()
        .then((response) => {
          console.log(response);
        })
        .catch((e) => {
          console.log(e);
        });
    };
    
    const handleWrongClick3 = () => {
        setShowResponse3(true);
        setResponse3('wrong');
        setButtonsDisabled3(true);
    };

    const handleCorrectClick4 = () => {
        setShowResponse4(true);
        setResponse4('correct');
        setButtonsDisabled4(true);
        B4R.style.backgroundColor = "#03fc2c";
        setSum(currentSum => currentSum + 10);
        UserService.addPoints()
        .then((response) => {
          console.log(response);
        })
        .catch((e) => {
          console.log(e);
        });
    };
    
    const handleWrongClick4 = () => {
        setShowResponse4(true);
        setResponse4('wrong');
        setButtonsDisabled4(true);
    };

    const handleCorrectClick5 = () => {
        setShowResponse5(true);
        setResponse5('correct');
        setButtonsDisabled5(true);
        B5R.style.backgroundColor = "#03fc2c";
        setSum(currentSum => currentSum + 10);
        UserService.addPoints()
        .then((response) => {
          console.log(response);
        })
        .catch((e) => {
          console.log(e);
        });
    };
    
    const handleWrongClick5 = () => {
        setShowResponse5(true);
        setResponse5('wrong');
        setButtonsDisabled5(true);
    };

    const handleCorrectClick6 = () => {
        setShowResponse6(true);
        setResponse6('correct');
        setButtonsDisabled6(true);
        B6R.style.backgroundColor = "#03fc2c";
        setSum(currentSum => currentSum + 10);
        UserService.addPoints()
        .then((response) => {
          console.log(response);
        })
        .catch((e) => {
          console.log(e);
        });
    };
    
    const handleWrongClick6 = () => {
        setShowResponse6(true);
        setResponse6('wrong');
        setButtonsDisabled6(true);
    };

    const handleCorrectClick7 = () => {
        setShowResponse7(true);
        setResponse7('correct');
        setButtonsDisabled7(true);
        B7R.style.backgroundColor = "#03fc2c";
        setSum(currentSum => currentSum + 10);
        UserService.addPoints()
        .then((response) => {
          console.log(response);
        })
        .catch((e) => {
          console.log(e);
        });
    };
    
    const handleWrongClick7 = () => {
        setShowResponse7(true);
        setResponse7('wrong');
        setButtonsDisabled7(true);
    };

    const handleCorrectClick8 = () => {
        setShowResponse8(true);
        setResponse8('correct');
        setButtonsDisabled8(true);
        B8R.style.backgroundColor = "#03fc2c";
        setSum(currentSum => currentSum + 10);
        UserService.addPoints()
        .then((response) => {
          console.log(response);
        })
        .catch((e) => {
          console.log(e);
        });
    };
    
    const handleWrongClick8 = () => {
        setShowResponse8(true);
        setResponse8('wrong');
        setButtonsDisabled8(true);
    };

    const handleCorrectClick9 = () => {
        setShowResponse9(true);
        setResponse9('correct');
        setButtonsDisabled9(true);
        B9R.style.backgroundColor = "#03fc2c";
        setSum(currentSum => currentSum + 10);
        UserService.addPoints()
        .then((response) => {
          console.log(response);
        })
        .catch((e) => {
          console.log(e);
        });
    };
    
    const handleWrongClick9 = () => {
        setShowResponse9(true);
        setResponse9('wrong');
        setButtonsDisabled9(true);
    };

    const handleCorrectClick10 = () => {
        setShowResponse10(true);
        setResponse10('correct');
        setButtonsDisabled10(true);
        B10R.style.backgroundColor = "#03fc2c";
        setSum(currentSum => currentSum + 10);
        UserService.addPoints()
        .then((response) => {
          console.log(response);
        })
        .catch((e) => {
          console.log(e);
        });
    };
    
    const handleWrongClick10 = () => {
        setShowResponse10(true);
        setResponse10('wrong');
        setButtonsDisabled10(true);
    };

    const handleCorrectClick11 = () => {
        setShowResponse11(true);
        setResponse11('correct');
        setButtonsDisabled11(true);
        B11R.style.backgroundColor = "#03fc2c";
        setSum(currentSum => currentSum + 10);
        UserService.addPoints()
        .then((response) => {
          console.log(response);
        })
        .catch((e) => {
          console.log(e);
        });
    };
    
    const handleWrongClick11 = () => {
        setShowResponse11(true);
        setResponse11('wrong');
        setButtonsDisabled11(true);
    };

    const handleCorrectClick12 = () => {
        setShowResponse12(true);
        setResponse12('correct');
        setButtonsDisabled12(true);
        B12R.style.backgroundColor = "#03fc2c";
        setSum(currentSum => currentSum + 10);
        UserService.addPoints()
        .then((response) => {
          console.log(response);
        })
        .catch((e) => {
          console.log(e);
        });
    };
    
    const handleWrongClick12 = () => {
        setShowResponse12(true);
        setResponse12('wrong');
        setButtonsDisabled12(true);
    };

    const handleCorrectClick13 = () => {
        setShowResponse13(true);
        setResponse13('correct');
        setButtonsDisabled13(true);
        B13R.style.backgroundColor = "#03fc2c";
        setSum(currentSum => currentSum + 10);
        UserService.addPoints()
        .then((response) => {
          console.log(response);
        })
        .catch((e) => {
          console.log(e);
        });
    };
    
    const handleWrongClick13 = () => {
        setShowResponse13(true);
        setResponse13('wrong');
        setButtonsDisabled13(true);
    };

    const handleCorrectClick14 = () => {
        setShowResponse14(true);
        setResponse14('correct');
        setButtonsDisabled14(true);
        B14R.style.backgroundColor = "#03fc2c";
        setSum(currentSum => currentSum + 10);
        UserService.addPoints()
        .then((response) => {
          console.log(response);
        })
        .catch((e) => {
          console.log(e);
        });
    };
    
    const handleWrongClick14 = () => {
        setShowResponse14(true);
        setResponse14('wrong');
        setButtonsDisabled14(true);
    };

    const handleCorrectClick15 = () => {
        setShowResponse15(true);
        setResponse15('correct');
        setButtonsDisabled15(true);
        B15R.style.backgroundColor = "#03fc2c";
        setSum(currentSum => currentSum + 10);
        UserService.addPoints()
        .then((response) => {
          console.log(response);
        })
        .catch((e) => {
          console.log(e);
        });
    };
    
    const handleWrongClick15 = () => {
        setShowResponse15(true);
        setResponse15('wrong');
        setButtonsDisabled15(true);
    };

    const handleCorrectClick16 = () => {
        setShowResponse16(true);
        setResponse16('correct');
        setButtonsDisabled16(true);
        B16R.style.backgroundColor = "#03fc2c";
        setSum(currentSum => currentSum + 10);
        UserService.addPoints()
        .then((response) => {
          console.log(response);
        })
        .catch((e) => {
          console.log(e);
        });
    };
    
    const handleWrongClick16 = () => {
        setShowResponse16(true);
        setResponse16('wrong');
        setButtonsDisabled16(true);
    };

    const handleCorrectClick17 = () => {
        setShowResponse17(true);
        setResponse17('correct');
        setButtonsDisabled17(true);
        B17R.style.backgroundColor = "#03fc2c";
        setSum(currentSum => currentSum + 10);
        UserService.addPoints()
        .then((response) => {
          console.log(response);
        })
        .catch((e) => {
          console.log(e);
        });
    };
    
    const handleWrongClick17 = () => {
        setShowResponse17(true);
        setResponse17('wrong');
        setButtonsDisabled17(true);
    };

    const handleCorrectClick18 = () => {
        setShowResponse18(true);
        setResponse18('correct');
        setButtonsDisabled18(true);
        B18R.style.backgroundColor = "#03fc2c";
        setSum(currentSum => currentSum + 10);
        UserService.addPoints()
        .then((response) => {
          console.log(response);
        })
        .catch((e) => {
          console.log(e);
        });
    };
    
    const handleWrongClick18 = () => {
        setShowResponse18(true);
        setResponse18('wrong');
        setButtonsDisabled18(true);
    };

    const handleCorrectClick19 = () => {
        setShowResponse19(true);
        setResponse19('correct');
        setButtonsDisabled19(true);
        B19R.style.backgroundColor = "#03fc2c";
        setSum(currentSum => currentSum + 10);
        UserService.addPoints()
        .then((response) => {
          console.log(response);
        })
        .catch((e) => {
          console.log(e);
        });
    };
    
    const handleWrongClick19 = () => {
        setShowResponse19(true);
        setResponse19('wrong');
        setButtonsDisabled19(true);
    };

    const handleCorrectClick20 = () => {
        setShowResponse20(true);
        setResponse20('correct');
        setButtonsDisabled20(true);
        B20R.style.backgroundColor = "#03fc2c";
        setSum(currentSum => currentSum + 10);
        UserService.addPoints()
        .then((response) => {
          console.log(response);
        })
        .catch((e) => {
          console.log(e);
        });
    };
    
    const handleWrongClick20 = () => {
        setShowResponse20(true);
        setResponse20('wrong');
        setButtonsDisabled20(true);
    };

    const handleCorrectClick21 = () => {
        setShowResponse21(true);
        setResponse21('correct');
        setButtonsDisabled21(true);
        B21R.style.backgroundColor = "#03fc2c";
        setSum(currentSum => currentSum + 10);
        UserService.addPoints()
        .then((response) => {
          console.log(response);
        })
        .catch((e) => {
          console.log(e);
        });
    };
    
    const handleWrongClick21 = () => {
        setShowResponse21(true);
        setResponse21('wrong');
        setButtonsDisabled21(true);
    };

    const handleCorrectClick22 = () => {
        setShowResponse22(true);
        setResponse22('correct');
        setButtonsDisabled22(true);
        B22R.style.backgroundColor = "#03fc2c";
        setSum(currentSum => currentSum + 10);
        UserService.addPoints()
        .then((response) => {
          console.log(response);
        })
        .catch((e) => {
          console.log(e);
        });
    };
    
    const handleWrongClick22 = () => {
        setShowResponse22(true);
        setResponse22('wrong');
        setButtonsDisabled22(true);
    };

    const handleCorrectClick23 = () => {
        setShowResponse23(true);
        setResponse23('correct');
        setButtonsDisabled23(true);
        B23R.style.backgroundColor = "#03fc2c";
        setSum(currentSum => currentSum + 10);
        UserService.addPoints()
        .then((response) => {
          console.log(response);
        })
        .catch((e) => {
          console.log(e);
        });
    };
    
    const handleWrongClick23 = () => {
        setShowResponse23(true);
        setResponse23('wrong');
        setButtonsDisabled23(true);
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
            <button id="Q1W1" onClick={handleWrongClick1} style={{width: 619, height: 70, left: 752, top: 254, position: 'absolute', borderRadius: 30, background: '#54F4FC'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute', borderRadius: 30}} />
                <div style={{width: 445.68, height: 43.40, left: 91.61, top: 12.60, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>Show your coworkers to see what they think.</div>
            </button>
            <button id="Q1R" onClick={handleCorrectClick1} style={{width: 619, height: 70, left: 69, top: 254, position: 'absolute', borderRadius: 30, background: '#54F4FC'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute', borderRadius: 30}} />
                <div style={{width: 445.68, height: 43.40, left: 91.61, top: 12.60, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>Report it so the organization can investigate.</div>
            </button>
            <button id="Q1W2" onClick={handleWrongClick1} style={{width: 619, height: 70, left: 752, top: 137, position: 'absolute', borderRadius: 30, background: '#54F4FC'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute', borderRadius: 30}} />
                <div style={{width: 445.68, height: 43.40, left: 91.61, top: 12.60, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>Open the email and see whether it looks legitimate.</div>
            </button>
            <button id="Q1W3" onClick={handleWrongClick1} style={{width: 619, height: 70, left: 69, top: 137, position: 'absolute', borderRadius: 30, background: '#54F4FC'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute', borderRadius: 30}} />
                <div style={{width: 445.68, height: 43.40, left: 91.61, top: 12.60, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>Ignore it.</div>
            </button>
            <div style={{width: 1440, height: 158, left: 0, top: 362, position: 'absolute', textAlign: 'center'}}><span style={{color: 'white', fontSize: 24, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>Report the phish so the company can investigate it. If the phish is real, the company can update email security rules <br/></span><span style={{color: 'white', fontSize: 24, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>that not only protect the company but its customers as well.<br/></span><span style={{color: 'white', fontSize: 24, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>If you ignore the email, the company won't necessarily know how to detect and block that sender in the future.<br/>If you open the email or show it to coworkers, you increase the risk of adware, malware, or information theft.</span></div>
            <div style={{width: 1302, height: 127, left: 71, top: 0, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 30, fontFamily: 'Mulish', fontWeight: '800', lineHeight: 5, wordWrap: 'break-word'}}>1. What should you do as a student if you suspect a phishing attack?</div>
            <div style={{width: 1302, height: 0.50, left: 71, top: 558, position: 'absolute', background: 'white'}}></div>
        </div>
        <div style={{width: 1440, height: 532.50, position: 'relative'}}>
            <button id="Q2W1" onClick={handleWrongClick2} style={{width: 619, height: 70, left: 752, top: 254, position: 'absolute', borderRadius: 30, background: '#54F4FC'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute', borderRadius: 30}} />
                <div style={{width: 445.68, height: 43.40, left: 91.61, top: 12.60, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>Proper spelling and grammar</div>
            </button>
            <button id="Q2R" onClick={handleCorrectClick2} style={{width: 619, height: 70, left: 69, top: 254, position: 'absolute', borderRadius: 30, background: '#54F4FC'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute', borderRadius: 30}} />
                <div style={{width: 594, height: 70, left: 14, top: 0, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>Unknown sender, sense of urgency, unexpected attachment, or too good to be true</div>
            </button>
            <button id="Q2W2" onClick={handleWrongClick2} style={{width: 619, height: 70, left: 752, top: 137, position: 'absolute', borderRadius: 30, background: '#54F4FC'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute', borderRadius: 30}} />
                <div style={{width: 445.68, height: 43.40, left: 91.61, top: 12.60, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>Contains personal information</div>
            </button>
            <button id="Q2W3" onClick={handleWrongClick2} style={{width: 619, height: 70, left: 69, top: 137, position: 'absolute', borderRadius: 30, background: '#54F4FC'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute', borderRadius: 30}} />
                <div style={{width: 445.68, height: 43.40, left: 91.61, top: 12.60, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>Nice graphics and layout</div>
            </button>
            <div style={{width: 1289, height: 127, left: 71, top: 0, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 30, fontFamily: 'Mulish', fontWeight: '800', lineHeight: 5, wordWrap: 'break-word'}}>2. What are the most common signs of a phishing scam?</div>
            <div style={{width: 1302, height: 0.50, left: 71, top: 532, position: 'absolute', background: 'white'}}></div>
            <div style={{width: 1440, height: 132, left: 0, top: 362, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 24, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>Phishing emails often use a sense of urgency to make you click on a link or open an attachment without thinking.<br/>Often these emails come from someone you don't know and contain attachments or links that you don't recognize.<br/>Remember: If it's too good to be true, it probably is.</div>
        </div>
        <div style={{width: 1440, height: 504.50, position: 'relative'}}>
            <button id="Q3R" onClick={handleCorrectClick3} style={{width: 619, height: 70, left: 752, top: 254, position: 'absolute', borderRadius: 30, background: '#54F4FC'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute', borderRadius: 30}} />
                <div style={{width: 445.68, height: 43.40, left: 91.61, top: 12.60, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>3.4 billion</div>
            </button>
            <button id="Q3W1" onClick={handleWrongClick3} style={{width: 619, height: 70, left: 69, top: 254, position: 'absolute', borderRadius: 30, background: '#54F4FC'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute', borderRadius: 30}} />
                <div style={{width: 594, height: 43.40, left: 14, top: 12.60, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>1.5 billion</div>
            </button>
            <button id="Q3W2" onClick={handleWrongClick3} style={{width: 619, height: 70, left: 752, top: 137, position: 'absolute', borderRadius: 30, background: '#54F4FC'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute', borderRadius: 30}} />
                <div style={{width: 445.68, height: 43.40, left: 91.61, top: 12.60, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>500 million</div>
            </button>
            <div style={{width: 1440, height: 104, left: 0, top: 362, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 24, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>Phishing is an extremely lucrative criminal business and can be devastating to an organization if successful.<br/>Worldwide web fraud detection organizations estimate that over 3.4 billion phishing emails are sent each day.</div>
            <button id="Q3W3" onClick={handleWrongClick3} style={{width: 619, height: 70, left: 69, top: 137, position: 'absolute', borderRadius: 30, background: '#54F4FC'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute', borderRadius: 30}} />
                <div style={{width: 445.68, height: 43.40, left: 91.61, top: 12.60, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>250 million</div>
            </button>
            <div style={{width: 1289, height: 127, left: 71, top: 0, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 30, fontFamily: 'Mulish', fontWeight: '800', lineHeight: 5, wordWrap: 'break-word'}}>3. How many phishing emails are sent each day worldwide?</div>
            <div style={{width: 1302, height: 0.50, left: 83, top: 504, position: 'absolute', background: 'white'}}></div>
        </div>
        <div style={{width: 1440, height: 570.50, position: 'relative'}}>
            <button id="Q4W1" onClick={handleWrongClick4} style={{width: 619, height: 70, left: 752, top: 254, position: 'absolute',  borderRadius: 30, background: '#54F4FC'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute', borderRadius: 30}} />
                <div style={{width: 594, height: 70, left: 12, top: 0, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>A type of phishing that lures the recipient in with a fun offer and then spreads a virus</div>
            </button>
            <button id="Q4W2" onClick={handleWrongClick4} style={{width: 619, height: 70, left: 69, top: 254, position: 'absolute',  borderRadius: 30, background: '#54F4FC'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute',   borderRadius: 30}} />
                <div style={{width: 594, height: 70, left: 14, top: 0, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>A type of phishing that promises a large reward</div>
            </button>
            <button id="Q4W3" onClick={handleWrongClick4} style={{width: 619, height: 70, left: 752, top: 137, position: 'absolute',  borderRadius: 30, background: '#54F4FC'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute',   borderRadius: 30}} />
                <div style={{width: 594, height: 70, left: 12, top: 0, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>A type of phishing that involves vacation offers</div>
            </button>
            <button id="Q4R" onClick={handleCorrectClick4} style={{width: 619, height: 70, left: 69, top: 137, position: 'absolute',  borderRadius: 30, background: '#54F4FC'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute',   borderRadius: 30}} />
                <div style={{width: 594, height: 70, left: 12, top: 0, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>A type of phishing that is personalized and targets specific individuals</div>
            </button>
            <div style={{width: 1290, height: 127, left: 83, top: 0, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 30, fontFamily: 'Mulish', fontWeight: '800', lineHeight: 5, wordWrap: 'break-word'}}>4. What is spear phishing?</div>
            <div style={{width: 1302, height: 0.50, left: 71, top: 570, position: 'absolute', background: 'white'}}></div>
            <div style={{width: 1440, height: 170, left: 0, top: 362, position: 'absolute', textAlign: 'center'}}><span style={{color: 'white', fontSize: 24, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>Spear phishing is a type of phishing that targets specific individuals or organizations in a business.<br/>The target could be system administrators, developers, executives, finance, HR or sales professionals, who handle <br/></span><span style={{color: 'white', fontSize: 24, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>sensitive data or access numerous systems.<br/></span><span style={{color: 'white', fontSize: 24, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>Spear phishing emails go after intellectual property and confidential information that could command high prices <br/></span><span style={{color: 'white', fontSize: 24, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>from interested buyers.</span></div>
        </div>
        <div style={{width: 1440, height: 570.50, position: 'relative'}}>
            <button id="Q5R" onClick={handleCorrectClick5} style={{width: 619, height: 70, left: 752, top: 254, position: 'absolute',  borderRadius: 30, background: '#54F4FC'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute',   borderRadius: 30}} />
                <div style={{width: 594, height: 70, left: 12, top: 0, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>All of the above</div>
            </button>
            <button id="Q5W1" onClick={handleWrongClick5} style={{width: 619, height: 70, left: 69, top: 254, position: 'absolute',  borderRadius: 30, background: '#54F4FC'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute',   borderRadius: 30}} />
                <div style={{width: 594, height: 70, left: 14, top: 0, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>The email sender could distribute malware into the company network.</div>
            </button>
            <button id="Q5W2" onClick={handleWrongClick5} style={{width: 619, height: 70, left: 752, top: 137, position: 'absolute',  borderRadius: 30, background: '#54F4FC'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute',   borderRadius: 30}} />
                <div style={{width: 594, height: 70, left: 12, top: 0, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>The email sender could steal your personal information or company information.</div>
            </button>
            <button id="Q5W3" onClick={handleWrongClick5} style={{width: 619, height: 70, left: 69, top: 137, position: 'absolute',  borderRadius: 30, background: '#54F4FC'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute',   borderRadius: 30}} />
                <div style={{width: 594, height: 70, left: 12, top: 0, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>The email sender could gain access to company systems.</div>
            </button>
            <div style={{width: 1290, height: 127, left: 83, top: 0, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 30, fontFamily: 'Mulish', fontWeight: '800', lineHeight: 5, wordWrap: 'break-word'}}>5. What can happen if you click on a phishing email link or attachment?</div>
            <div style={{width: 1302, height: 0.50, left: 71, top: 570, position: 'absolute', background: 'white'}}></div>
            <div style={{width: 1440, height: 170, left: 0, top: 362, position: 'absolute', textAlign: 'center'}}><span style={{color: 'white', fontSize: 24, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>If you click on a link in a phishing email or open an attachment, the email sender could gain access to company <br/></span><span style={{color: 'white', fontSize: 24, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>systems, steal information, or distribute malware into the company network or your personal computer. Don't give <br/>them this kind of power!<br/></span><span style={{color: 'white', fontSize: 24, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>Avoid clicking on links or opening attachments unless you know the sender and are sure the email is valid.</span></div>
        </div>
        <div style={{width: 1440, height: 560.50, position: 'relative'}}>
            <button id="Q6R" onClick={handleCorrectClick6} style={{width: 619, height: 70, left: 752, top: 254, position: 'absolute',  borderRadius: 30, background: '#54F4FC'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute',   borderRadius: 30}} />
                <div style={{width: 594, height: 70, left: 12, top: 0, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>All of the above</div>
            </button>
            <button id="Q6W1" onClick={handleWrongClick6} style={{width: 619, height: 70, left: 69, top: 254, position: 'absolute',  borderRadius: 30, background: '#54F4FC'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute',   borderRadius: 30}} />
                <div style={{width: 594, height: 70, left: 14, top: 0, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>You most likely receive phishing emails on your personal email accounts as well, so it pays to be aware.</div>
            </button>
            <button id="Q6W2" onClick={handleWrongClick6} style={{width: 619, height: 70, left: 752, top: 137, position: 'absolute',  borderRadius: 30, background: '#54F4FC'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute',   borderRadius: 30}} />
                <div style={{width: 594, height: 70, left: 12, top: 0, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>IT has several security precautions in place, but they don't control individual users' non-corporate devices.</div>
            </button>
            <button id="Q6W3" onClick={handleWrongClick6} style={{width: 619, height: 70, left: 69, top: 137, position: 'absolute',  borderRadius: 30, background: '#54F4FC'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute',   borderRadius: 30}} />
                <div style={{width: 594, height: 70, left: 12, top: 0, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>Phishing emails grow more sophisticated all the time. Each one of us needs to be vigilant.</div>
            </button>
            <div style={{width: 1289, height: 127, left: 71, top: 40, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 30, fontFamily: 'Mulish', fontWeight: '800', lineHeight: 1, wordWrap: 'break-word'}}>6. Why is it important for me to watch out for phishing emails if my organization has email controls and security in place?</div>
            <div style={{width: 1302, height: 0.50, left: 71, top: 560, position: 'absolute', background: 'white'}}></div>
            <div style={{width: 1440, height: 170, left: 0, top: 362, position: 'absolute', textAlign: 'center'}}><span style={{color: 'white', fontSize: 24, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>All of these things are true.<br/>IT has security controls in place, but the company relies on each one of us to identify and handle phish that are <br/></span><span style={{color: 'white', fontSize: 24, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>not detected.<br/></span><span style={{color: 'white', fontSize: 24, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>Phishing campaigns are becoming more sophisticated all the time.<br/>It pays to be vigilant when it comes to your work and personal emails.</span></div>
        </div>
        <div style={{width: 1440, height: 570.50, position: 'relative'}}>
            <button id="Q7W1" onClick={handleWrongClick7} style={{width: 619, height: 70, left: 752, top: 254, position: 'absolute',  borderRadius: 30, background: '#54F4FC'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute',   borderRadius: 30}} />
                <div style={{width: 594, height: 70, left: 12, top: 0, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>They ask for money to purchase your ID on the black market.</div>
            </button>
            <button id="Q7W2" onClick={handleWrongClick7} style={{width: 619, height: 70, left: 69, top: 254, position: 'absolute',  borderRadius: 30, background: '#54F4FC'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute',   borderRadius: 30}} />
                <div style={{width: 594, height: 70, left: 14, top: 0, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>They send a request for the recipient's driver's license and credit cards.</div>
            </button>
            <button id="Q7R" onClick={handleCorrectClick7} style={{width: 619, height: 70, left: 752, top: 137, position: 'absolute',  borderRadius: 30, background: '#54F4FC'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute',   borderRadius: 30}} />
                <div style={{width: 594, height: 70, left: 12, top: 0, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700',lineHeight: 1.25, wordWrap: 'break-word'}}>They ask for personal information on a webpage or pop-up window linked from the phishing email, and they use the information entered to make illegal purchases or commit fraud.</div>
            </button>
            <button id="Q7W3" onClick={handleWrongClick7} style={{width: 619, height: 70, left: 69, top: 137, position: 'absolute',  borderRadius: 30, background: '#54F4FC'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute',   borderRadius: 30}} />
                <div style={{width: 594, height: 70, left: 12, top: 0, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>They pretend they are someone else when emailing phishing messages, so that's like stealing an identity.</div>
            </button>
            <div style={{width: 1302, height: 127, left: 71, top: 0, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 30, fontFamily: 'Mulish', fontWeight: '800', lineHeight: 5, wordWrap: 'break-word'}}>7. How can a person executing a phishing attack steal someone's identity?</div>
            <div style={{width: 1302, height: 0.50, left: 71, top: 570, position: 'absolute', background: 'white'}}></div>
            <div style={{width: 1440, height: 170, left: 0, top: 362, position: 'absolute', textAlign: 'center'}}><span style={{color: 'white', fontSize: 24, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>A person who sends phishing emails typically asks for personal or financial information on a web-page or pop-up <br/></span><span style={{color: 'white', fontSize: 24, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>window linked from the phishing email.<br/></span><span style={{color: 'white', fontSize: 24, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>He or she uses that information to purchase things online or gain unauthorized access to data.<br/>Phishers may use fake names, but they do not steal an identity to send the emails, nor do they request photos.</span></div>
        </div>
        <div style={{width: 1440, height: 570.50, position: 'relative'}}>
            <button id="Q8W1" onClick={handleWrongClick8} style={{width: 619, height: 70, left: 752, top: 254, position: 'absolute',  borderRadius: 30, background: '#54F4FC'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute',   borderRadius: 30}} />
                <div style={{width: 594, height: 70, left: 12, top: 0, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', lineHeight: 1.25, wordWrap: 'break-word'}}>If people go without power due to a storm or other natural disaster, they will be excited about communication being restored and they will respond to the emails they receive once power is back.</div>
            </button>
            <button id="Q8W2" onClick={handleWrongClick8} style={{width: 619, height: 70, left: 69, top: 254, position: 'absolute',  borderRadius: 30, background: '#54F4FC'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute',   borderRadius: 30}} />
                <div style={{width: 594, height: 70, left: 14, top: 0, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>Phishing emails reach more people if they are worried about the weather.</div>
            </button>
            <button id="Q8R" onClick={handleCorrectClick8} style={{width: 619, height: 70, left: 752, top: 137, position: 'absolute',  borderRadius: 30, background: '#54F4FC'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute',   borderRadius: 30}} />
                <div style={{width: 594, height: 70, left: 12, top: 0, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', lineHeight: 1.25, wordWrap: 'break-word'}}>Phishers often take advantage of current events, such as natural disasters, health scares, or political elections, and send messages with those themes to play on people's fears.</div>
            </button>
            <button id="Q8W3" onClick={handleWrongClick8} style={{width: 619, height: 70, left: 69, top: 137, position: 'absolute',  borderRadius: 30, background: '#54F4FC'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute',   borderRadius: 30}} />
                <div style={{width: 594, height: 70, left: 12, top: 0, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>If people are distracted by a hurricane or a flu pandemic, they might be less likely to read emails carefully.</div>
            </button>
            <div style={{width: 1302, height: 127, left: 71, top: 0, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 30, fontFamily: 'Mulish', fontWeight: '800', lineHeight: 5, wordWrap: 'break-word'}}>8. Why would people who send phishing emails be excited about a natural disaster or health scare?</div>
            <div style={{width: 1302, height: 0.50, left: 71, top: 570, position: 'absolute', background: 'white'}}></div>
            <div style={{width: 1440, height: 170, left: 0, top: 362, position: 'absolute', textAlign: 'center'}}><span style={{color: 'white', fontSize: 24, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>Phishers capitalize on trends and current events.<br/>They might ask for contributions to charities, talk about economic uncertainty, or appeal to people's emotions <br/></span><span style={{color: 'white', fontSize: 24, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>concerning politics or things in the news.<br/></span><span style={{color: 'white', fontSize: 24, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>Phishers don't have any interest in the weather as a distraction tool.</span></div>
        </div>
        <div style={{width: 1440, height: 570.50, position: 'relative'}}>
            <button id="Q9R" onClick={handleCorrectClick9} style={{width: 619, height: 70, left: 752, top: 254, position: 'absolute',  borderRadius: 30, background: '#54F4FC'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute',   borderRadius: 30}} />
                <div style={{width: 594, height: 70, left: 12, top: 0, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>All of the above</div>
            </button>
            <button id="Q9W1" onClick={handleWrongClick9} style={{width: 619, height: 70, left: 69, top: 254, position: 'absolute',  borderRadius: 30, background: '#54F4FC'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute',   borderRadius: 30}} />
                <div style={{width: 594, height: 70, left: 14, top: 0, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>An offer appears to be from Amazon, but upon closer inspection it's actually from Amzon.co. You should report and delete the email.</div>
            </button>
            <button id="Q9W2" onClick={handleWrongClick9} style={{width: 619, height: 70, left: 752, top: 137, position: 'absolute',  borderRadius: 30, background: '#54F4FC'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute',   borderRadius: 30}} />
                <div style={{width: 594, height: 70, left: 12, top: 0, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700',lineHeight: 1.25, wordWrap: 'break-word'}}>An alert email comes from PayPal or your bank. Open a new browser window and go to your account to see if anything is happening with your account.</div>
            </button>
            <button id="Q9W3" onClick={handleWrongClick9} style={{width: 619, height: 70, left: 69, top: 137, position: 'absolute',  borderRadius: 30, background: '#54F4FC'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute',   borderRadius: 30}} />
                <div style={{width: 594, height: 70, left: 12, top: 0, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>An unknown email sender sound vague or generic, and is threatening something about one of your online accounts? Report it as phishing.</div>
            </button>
            <div style={{width: 1290, height: 127, left: 83, top: 0, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 30, fontFamily: 'Mulish', fontWeight: '800', lineHeight: 5, wordWrap: 'break-word'}}>9. Unsure whether an email is real or phishing? Which of the following should you do?</div>
            <div style={{width: 1302, height: 0.50, left: 71, top: 570, position: 'absolute', background: 'white'}}></div>
            <div style={{width: 1440, height: 170, left: 0, top: 362, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 24, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>The email is vague and generic, and it's threatening something about one of your accounts.<br/>It talks about an urgent threat and sounds suspicious.<br/>The offer is too good to be true. Don't click on the link.<br/>Never give out financial or personal information in response to an email that seems questionable.</div>
        </div>
        <div style={{width: 1440, height: 603.50, position: 'relative'}}>
            <button id="Q10W1" onClick={handleWrongClick10} style={{width: 619, height: 70, left: 752, top: 254, position: 'absolute',  borderRadius: 30, background: '#54F4FC'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute',   borderRadius: 30}} />
                <div style={{width: 594, height: 70, left: 12, top: 0, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>Www.jdoe.billerica.k12.ma.us</div>
            </button>
            <button id="Q10R" onClick={handleCorrectClick10} style={{width: 619, height: 70, left: 69, top: 254, position: 'absolute',  borderRadius: 30, background: '#54F4FC'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute',   borderRadius: 30}} />
                <div style={{width: 594, height: 70, left: 14, top: 0, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>Jdoe@billerica.k12.ma.us</div>
            </button>
            <button id="Q10W2" onClick={handleWrongClick10} style={{width: 619, height: 70, left: 752, top: 137, position: 'absolute',  borderRadius: 30, background: '#54F4FC'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute',   borderRadius: 30}} />
                <div style={{width: 594, height: 70, left: 12, top: 0, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>Jdoe.billerica.k12.ma.us</div>
            </button>
            <button id="Q10W3" onClick={handleWrongClick10} style={{width: 619, height: 70, left: 69, top: 137, position: 'absolute',  borderRadius: 30, background: '#54F4FC'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute',   borderRadius: 30}} />
                <div style={{width: 594, height: 70, left: 12, top: 0, position: 'absolute', textAlign: 'center'}}><span style={{color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>Jdoe@gma!</span><span style={{color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', textDecoration: 'underline', wordWrap: 'break-word'}}>l.com</span></div>
            </button>
            <button id="Q10W4" onClick={handleWrongClick10} style={{width: 619, height: 70, left: 752, top: 371, position: 'absolute',  borderRadius: 30, background: '#54F4FC'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute',   borderRadius: 30}} />
                <div style={{width: 594, height: 70, left: 12, top: 0, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>Jdoe@yahooo.com</div>
            </button>
            <button id="Q10W5" onClick={handleWrongClick10} style={{width: 619, height: 70, left: 69, top: 371, position: 'absolute',  borderRadius: 30, background: '#54F4FC'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute',   borderRadius: 30}} />
                <div style={{width: 594, height: 70, left: 12, top: 0, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', textDecoration: 'underline', wordWrap: 'break-word'}}>Jdoe@hotmaiil.com</div>
            </button>
            <div style={{width: 1277, height: 127, left: 83, top: 0, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 30, fontFamily: 'Mulish', fontWeight: '800', lineHeight:5, wordWrap: 'break-word'}}>10. Which of the following choices is a legitimate email address?</div>
            <div style={{width: 1302, height: 0.50, left: 71, top: 603, position: 'absolute', background: 'white'}}></div>
            <div style={{width: 1440, height: 86, left: 0, top: 479, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 24, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>Email addresses always contain 3 parts - username (ex: jdoe, @ ("at" symbol and domain (ex: billerica.k12.ma.us )</div>
        </div>
        <div style={{width: 1440, height: 603.50, position: 'relative'}}>
            <button id="Q11R" onClick={handleCorrectClick11} style={{width: 619, height: 70, left: 752, top: 254, position: 'absolute',  borderRadius: 30, background: '#54F4FC'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute',   borderRadius: 30}} />
                <div style={{width: 594, height: 70, left: 12, top: 0, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>accounts.google.com</div>
            </button>
            <button id="Q11W1" onClick={handleWrongClick11} style={{width: 619, height: 70, left: 69, top: 254, position: 'absolute',  borderRadius: 30, background: '#54F4FC'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute',   borderRadius: 30}} />
                <div style={{width: 594, height: 70, left: 14, top: 0, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>Google-accounts.com</div>
            </button>
            <button id="Q11W2" onClick={handleWrongClick11} style={{width: 619, height: 70, left: 752, top: 137, position: 'absolute',  borderRadius: 30, background: '#54F4FC'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute',   borderRadius: 30}} />
                <div style={{width: 594, height: 70, left: 12, top: 0, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>Google.accounts.com</div>
            </button>
            <button id="Q11W3" onClick={handleWrongClick11} style={{width: 619, height: 70, left: 69, top: 137, position: 'absolute',  borderRadius: 30, background: '#54F4FC'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute',   borderRadius: 30}} />
                <div style={{width: 594, height: 70, left: 12, top: 0, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>Google.com.accounts.com</div>
            </button>
            <button id="Q11W4" onClick={handleWrongClick11} style={{width: 619, height: 70, left: 410, top: 371, position: 'absolute',  borderRadius: 30, background: '#54F4FC'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute',   borderRadius: 30}} />
                <div style={{width: 594, height: 70, left: 12, top: 0, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>accounts.com/google</div>
            </button>
            <div style={{width: 1277, height: 127, left: 83, top: 40, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 30, fontFamily: 'Mulish', fontWeight: '800', lineHeight: 1, wordWrap: 'break-word'}}>11. Lets check if you can spot a legitimate URL. Which of these links would lead to Google account settings?</div>
            <div style={{width: 1302, height: 0.50, left: 70, top: 603, position: 'absolute', background: 'white'}}></div>
            <div style={{width: 1440, height: 86, left: 0, top: 479, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 24, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>Only one of the addresses is in the Google domain the other are sub-directories of accounts.com  or a completely different<br/> website - google-accounts.com</div>
        </div>
        <div style={{width: 1440, height: 520.50, position: 'relative'}}>
            <button id="Q12R" onClick={handleCorrectClick12} style={{width: 619, height: 70, left: 750, top: 254, position: 'absolute',  borderRadius: 30, background: '#54F4FC'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute',   borderRadius: 30}} />
                <div style={{width: 594, height: 70, left: 12, top: 0, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>None of them</div>
            </button>
            <button id="Q12W1" onClick={handleWrongClick12} style={{width: 619, height: 70, left: 67, top: 254, position: 'absolute',  borderRadius: 30, background: '#54F4FC'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute',   borderRadius: 30}} />
                <div style={{width: 594, height: 70, left: 14, top: 0, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>Seal of a Certificate Authority</div>
            </button>
            <button id="Q12W2" onClick={handleWrongClick12} style={{width: 619, height: 70, left: 750, top: 137, position: 'absolute',  borderRadius: 30, background: '#54F4FC'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute',   borderRadius: 30}} />
                <div style={{width: 594, height: 70, left: 12, top: 0, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>Style of the email</div>
            </button>
            <button id="Q12W3" onClick={handleWrongClick12} style={{width: 619, height: 70, left: 67, top: 137, position: 'absolute',  borderRadius: 30, background: '#54F4FC'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute',   borderRadius: 30}} />
                <div style={{width: 594, height: 70, left: 12, top: 0, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>Company logo</div>
            </button>
            <div style={{width: 1277, height: 127, left: 81, top: 40, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 30, fontFamily: 'Mulish', fontWeight: '800', lineHeight: 1, wordWrap: 'break-word'}}>12. Some people say you that they can tell which website is secure just by looking at it. Which visual clues in a website can be trusted to identify a real website?</div>
            <div style={{width: 1302, height: 0.50, left: 68, top: 520, position: 'absolute', background: 'white'}}></div>
            <div style={{width: 1440, height: 120, left: 0, top: 362, position: 'absolute', textAlign: 'center'}}><span style={{color: 'white', fontSize: 24, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>It is impossible to tell if a website is legitimate just by look and feel, since more advanced phishing attacks use <br/></span><span style={{color: 'white', fontSize: 24, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>website clones that are identical to the originals. <br/></span><span style={{color: 'white', fontSize: 24, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>So the only way to check if it is legitimate is to look at the security indicators in the browser.</span></div>
        </div>
        <div style={{width: 1440, height: 647.50, position: 'relative'}}>
            <button id="Q13W1" onClick={handleWrongClick13} style={{width: 619, height: 70, left: 750, top: 261, position: 'absolute',  borderRadius: 30, background: '#54F4FC'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute',   borderRadius: 30}} />
                <div style={{width: 594, height: 70, left: 12, top: 0, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>It has some links to real websites</div>
            </button>
            <button id="Q13R" onClick={handleCorrectClick13} style={{width: 619, height: 70, left: 67, top: 261, position: 'absolute',  borderRadius: 30, background: '#54F4FC'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute',   borderRadius: 30}} />
                <div style={{width: 594, height: 70, left: 14, top: 0, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>Noticing security indicators in the browser</div>
            </button>
            <button id="Q13W2" onClick={handleWrongClick13} style={{width: 619, height: 70, left: 750, top: 144, position: 'absolute',  borderRadius: 30, background: '#54F4FC'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute',   borderRadius: 30}} />
                <div style={{width: 594, height: 70, left: 12, top: 0, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>The domain in the address bar seems to be legitimate</div>
            </button>
            <button id="Q13W3" onClick={handleWrongClick13} style={{width: 619, height: 70, left: 67, top: 144, position: 'absolute',  borderRadius: 30, background: '#54F4FC'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute',   borderRadius: 30}} />
                <div style={{width: 594, height: 70, left: 12, top: 0, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>Look and feel of the website</div>
            </button>
            <div style={{width: 1290, height: 127, left: 81, top: 40, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 30, fontFamily: 'Mulish', fontWeight: '800', lineHeight: 1, wordWrap: 'break-word'}}>13. People have different techniques of telling that a website is real. What is the most important thing to pay attention to when trying to determine if a website could be trusted?</div>
            <div style={{width: 1302, height: 0.50, left: 68, top: 647, position: 'absolute', background: 'white'}}></div>
            <div style={{width: 1440, height: 240, left: 0, top: 369, position: 'absolute', textAlign: 'center'}}><span style={{color: 'white', fontSize: 24, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>Look and feel can be deceiving since it is possible to completely clone a legitimate website.<br/> People use tricks to make their URL's look as close to the real ones as possible such as changing between <br/></span><span style={{color: 'white', fontSize: 24, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>l (lowercase L) I (capital i) 1 (one) or adding part to the URL that will redirect the user to a phishing site.<br/></span><span style={{color: 'white', fontSize: 24, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}> If a website has some links that lead to legitimate websites it doesn't mean that there isn't one link that will lead <br/></span><span style={{color: 'white', fontSize: 24, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>to a phishy place. <br/></span><span style={{color: 'white', fontSize: 24, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>Security indicators in the browser are there for a reason, they give information about SSL connection and the <br/></span><span style={{color: 'white', fontSize: 24, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>Certificate Authority. This information should be sufficient to find a legitimate website.</span></div>
        </div>
        <div style={{width: 1440, height: 816.50, position: 'relative'}}>
            <button id="Q14W1" onClick={handleWrongClick14} style={{width: 619, height: 70, left: 751, top: 254, position: 'absolute',  borderRadius: 30, background: '#54F4FC'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute',   borderRadius: 30}} />
                <div style={{width: 594, height: 70, left: 12, top: 0, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>35-50 year old's</div>
            </button>
            <button id="Q14W2" onClick={handleWrongClick14} style={{width: 619, height: 70, left: 68, top: 254, position: 'absolute',  borderRadius: 30, background: '#54F4FC'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute',   borderRadius: 30}} />
                <div style={{width: 594, height: 70, left: 14, top: 0, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>25-36 year old's</div>
            </button>
            <button id="Q14R" onClick={handleCorrectClick14} style={{width: 619, height: 70, left: 751, top: 137, position: 'absolute',  borderRadius: 30, background: '#54F4FC'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute',   borderRadius: 30}} />
                <div style={{width: 594, height: 70, left: 12, top: 0, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>18-29 year old's</div>
            </button>
            <button id="Q14W3" onClick={handleWrongClick14} style={{width: 619, height: 70, left: 68, top: 137, position: 'absolute',  borderRadius: 30, background: '#54F4FC'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute',   borderRadius: 30}} />
                <div style={{width: 594, height: 70, left: 12, top: 0, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>10-15 year old's</div>
            </button>
            <button id="Q14W4" onClick={handleWrongClick14} style={{width: 619, height: 70, left: 409, top: 371, position: 'absolute',  borderRadius: 30, background: '#54F4FC'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute',   borderRadius: 30}} />
                <div style={{width: 594, height: 70, left: 12, top: 0, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>60+ year old's</div>
            </button>
            <div style={{width: 1440, height: 299, left: 0, top: 479, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 24, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>The age group most affected by online identity theft is 18-29 year olds. <br/>This is because individuals in this age range tend to be more active online, frequently using social media platforms, online banking, and making online purchases. <br/>They may also be less experienced in recognizing and avoiding online scams or protecting their personal information, making them more vulnerable to identity theft. <br/>Additionally, young adults in this age group often have a higher level of digital literacy and are more likely to engage in risky online behaviors, such as sharing personal information or using weak passwords, which can increase their risk of becoming a victim of identity theft.</div>
            <div style={{width: 1277, height: 127, left: 82, top: 0, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 30, fontFamily: 'Mulish', fontWeight: '800', lineHeight: 5, wordWrap: 'break-word'}}>14. What is the age group most affected by online identity theft?</div>
            <div style={{width: 1302, height: 0.50, left: 70, top: 816, position: 'absolute', background: 'white'}}></div>
        </div>
        <div style={{width: 1440, height: 816.50, position: 'relative'}}>
            <button id="Q15R" onClick={handleCorrectClick15} style={{width: 619, height: 70, left: 751, top: 254, position: 'absolute',  borderRadius: 30, background: '#54F4FC'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute',   borderRadius: 30}} />
                <div style={{width: 594, height: 70, left: 12, top: 0, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>All of the above</div>
            </button>
            <button id="Q15W1" onClick={handleWrongClick15} style={{width: 619, height: 70, left: 68, top: 254, position: 'absolute',  borderRadius: 30, background: '#54F4FC'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute',   borderRadius: 30}} />
                <div style={{width: 594, height: 70, left: 14, top: 0, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>Creating email accounts with reputable providers</div>
            </button>
            <button id="Q15W2" onClick={handleWrongClick15} style={{width: 619, height: 70, left: 751, top: 137, position: 'absolute',  borderRadius: 30, background: '#54F4FC'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute',   borderRadius: 30}} />
                <div style={{width: 594, height: 70, left: 12, top: 0, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>Hack on to a third party email</div>
            </button>
            <button id="Q15W3" onClick={handleWrongClick15} style={{width: 619, height: 70, left: 68, top: 137, position: 'absolute',  borderRadius: 30, background: '#54F4FC'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute',   borderRadius: 30}} />
                <div style={{width: 594, height: 70, left: 12, top: 0, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>Spoofing</div>
            </button>
            <button id="Q15W4" onClick={handleWrongClick15} style={{width: 619, height: 70, left: 409, top: 371, position: 'absolute',  borderRadius: 30, background: '#54F4FC'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute',   borderRadius: 30}} />
                <div style={{width: 594, height: 70, left: 12, top: 0, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>None of the above</div>
            </button>
            <div style={{width: 1290, height: 127, left: 82, top: 40, position: 'absolute', textAlign: 'center'}}><span style={{color: 'white', fontSize: 30, fontFamily: 'Mulish', fontWeight: '800', lineHeight: 1, wordWrap: 'break-word'}}>15. Spam filters can be used to filter out emails from questionable email addresses. <br/></span><span style={{color: 'white', fontSize: 30, fontFamily: 'Mulish', fontWeight: '800', lineHeight: 1 , wordWrap: 'break-word'}}>How do criminals get pass this problem?</span></div>
            <div style={{width: 1302, height: 0.50, left: 70, top: 816, position: 'absolute', background: 'white'}}></div>
            <div style={{width: 1440, height: 299, left: 0, top: 479, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 24, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>The age group most affected by online identity theft is 18-29 year olds. <br/>This is because individuals in this age range tend to be more active online, frequently using social media platforms, online banking, and making online purchases. <br/>They may also be less experienced in recognizing and avoiding online scams or protecting their personal information, making them more vulnerable to identity theft. <br/>Additionally, young adults in this age group often have a higher level of digital literacy and are more likely to engage in risky online behaviors, such as sharing personal information or using weak passwords, which can increase their risk of becoming a victim of identity theft.</div>
        </div>
        <div style={{width: 1440, height: 613.50, position: 'relative'}}>
            <button id="Q16W1" onClick={handleWrongClick16} style={{width: 619, height: 70, left: 750, top: 261, position: 'absolute',  borderRadius: 30, background: '#54F4FC'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute',   borderRadius: 30}} />
                <div style={{width: 594, height: 70, left: 12, top: 0, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>Phishpage</div>
            </button>
            <button id="Q16W2" onClick={handleWrongClick16} style={{width: 619, height: 70, left: 67, top: 261, position: 'absolute',  borderRadius: 30, background: '#54F4FC'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute',   borderRadius: 30}} />
                <div style={{width: 594, height: 70, left: 14, top: 0, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>Clone</div>
            </button>
            <button id="Q16W3" onClick={handleWrongClick16} style={{width: 619, height: 70, left: 750, top: 144, position: 'absolute',  borderRadius: 30, background: '#54F4FC'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute',   borderRadius: 30}} />
                <div style={{width: 594, height: 70, left: 12, top: 0, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>Tricksite</div>
            </button>
            <button id="Q16R" onClick={handleCorrectClick16} style={{width: 619, height: 70, left: 67, top: 144, position: 'absolute',  borderRadius: 30, background: '#54F4FC'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute',   borderRadius: 30}} />
                <div style={{width: 594, height: 70, left: 12, top: 0, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>Spoof</div>
            </button>
            <div style={{width: 1289, height: 127, left: 69, top: 0, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 30, fontFamily: 'Mulish', fontWeight: '800', lineHeight: 5, wordWrap: 'break-word'}}>16. What is another name for a fake web site?</div>
            <div style={{width: 1302, height: 0.50, left: 69, top: 613, position: 'absolute', background: 'white'}}></div>
            <div style={{width: 1440, height: 206, left: 0, top: 369, position: 'absolute', textAlign: 'center'}}><span style={{color: 'white', fontSize: 24, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>Website spoofing is a scam where cyber criminals create a website that closely resembles a trusted brand as well as a domain that is virtually identical to a brand's web domain. <br/>The goal of website spoofing is to lure a brand's customers, suppliers, partners and employees to a fraudulent website <br/></span><span style={{color: 'white', fontSize: 24, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>and convince them to share sensitive information like login credentials, Social Security numbers, credit card <br/>information or bank account numbers.</span></div>
        </div>
        <div style={{width: 1440, height: 496.50, position: 'relative'}}>
            <button id="Q17W1" onClick={handleWrongClick17} style={{width: 619, height: 70, left: 750, top: 144, position: 'absolute',  borderRadius: 30, background: '#54F4FC'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute',   borderRadius: 30}} />
                <div style={{width: 594, height: 70, left: 12, top: 0, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>False</div>
            </button>
            <button id="Q17R" onClick={handleCorrectClick17} style={{width: 619, height: 70, left: 67, top: 144, position: 'absolute',  borderRadius: 30, background: '#54F4FC'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute',   borderRadius: 30}} />
                <div style={{width: 594, height: 70, left: 12, top: 0, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>True</div>
            </button>
            <div style={{width: 1290, height: 127, left: 81, top: 40, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 30, fontFamily: 'Mulish', fontWeight: '800', lineHeight: 1, wordWrap: 'break-word'}}>17. "Your account has been accessed" is a sentence that crooks will send you in an email to make you click on their link.</div>
            <div style={{width: 1302, height: 0.50, left: 69, top: 496, position: 'absolute', background: 'white'}}></div>
            <div style={{width: 1440, height: 206, left: 0, top: 252, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 24, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>This statement is true because it suggests that receiving an email stating "Your account has been accessed" is a tactic used by criminals to trick individuals into clicking on their malicious links. <br/>The intention behind this email is to deceive the recipient into taking action that may compromise their personal information or security. <br/>It is important to be cautious and verify the authenticity of such emails before taking any action.</div>
        </div>
        <div style={{width: 1440, height: 552.50, position: 'relative'}}>
            <button id="Q18W1"onClick={handleWrongClick18} style={{width: 619, height: 70, left: 750, top: 144, position: 'absolute',  borderRadius: 30, background: '#54F4FC'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute',   borderRadius: 30}} />
                <div style={{width: 594, height: 70, left: 12, top: 0, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>False</div>
            </button>
            <button id="Q18R" onClick={handleCorrectClick18} style={{width: 619, height: 70, left: 67, top: 144, position: 'absolute',  borderRadius: 30, background: '#54F4FC'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute',   borderRadius: 30}} />
                <div style={{width: 594, height: 70, left: 12, top: 0, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>True</div>
            </button>
            <div style={{width: 1290, height: 127, left: 81, top: 0, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 30, fontFamily: 'Mulish', fontWeight: '800', lineHeight: 5, wordWrap: 'break-word'}}>18. You should always be suspicious of emails that ask for your personal information.</div>
            <div style={{width: 1302, height: 0.50, left: 69, top: 552, position: 'absolute', background: 'white'}}></div>
            <div style={{width: 1440, height: 262, left: 0, top: 252, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 24, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>Being suspicious of emails that ask for personal information is a crucial practice to ensure online security. <br/>Phishing scams often involve emails that request personal information such as passwords, social security numbers, or credit card details. <br/>These fraudulent emails are designed to deceive individuals into providing sensitive information, which can then be used for identity theft or other malicious activities. <br/>Therefore, it is important to always be suspicious of such emails and avoid providing any personal information unless the sender's identity and intentions are verified.</div>
        </div>
        <div style={{width: 1440, height: 552.50, position: 'relative'}}>
            <button id="Q19W1" onClick={handleWrongClick19} style={{width: 619, height: 70, left: 750, top: 144, position: 'absolute',  borderRadius: 30, background: '#54F4FC'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute',   borderRadius: 30}} />
                <div style={{width: 594, height: 70, left: 12, top: 0, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>False</div>
            </button>
            <button id="Q19R" onClick={handleCorrectClick19} style={{width: 619, height: 70, left: 67, top: 144, position: 'absolute',  borderRadius: 30, background: '#54F4FC'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute',   borderRadius: 30}} />
                <div style={{width: 594, height: 70, left: 12, top: 0, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>True</div>
            </button>
            <div style={{width: 1279, height: 127, left: 79, top: 0, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 30, fontFamily: 'Mulish', fontWeight: '800', lineHeight: 5, wordWrap: 'break-word'}}>19. Legitimate companies would not contact you by phone or email without any prior notice.</div>
            <div style={{width: 1302, height: 0.50, left: 69, top: 552, position: 'absolute', background: 'white'}}></div>
            <div style={{width: 1440, height: 262, left: 0, top: 252, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 24, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>Legitimate companies typically follow proper communication protocols and would not randomly contact individuals through phone or email without any prior notice. <br/>They usually establish contact through official channels, such as customer service or email support, and may require prior interaction or consent from the individual before initiating any communication. <br/>Unsolicited phone calls or emails from unknown sources are often associated with scams or fraudulent activities. <br/>Therefore, it is generally true that legitimate companies would not contact you without any prior notice.</div>
        </div>
        <div style={{width: 1440, height: 389.50, position: 'relative'}}>
            <button id="Q20W1"onClick={handleWrongClick20} style={{width: 619, height: 70, left: 750, top: 144, position: 'absolute',  borderRadius: 30, background: '#54F4FC'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute',   borderRadius: 30}} />
                <div style={{width: 594, height: 70, left: 12, top: 0, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>False</div>
            </button>
            <button id="Q20R" onClick={handleCorrectClick20} style={{width: 619, height: 70, left: 67, top: 144, position: 'absolute',  borderRadius: 30, background: '#54F4FC'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute',   borderRadius: 30}} />
                <div style={{width: 594, height: 70, left: 12, top: 0, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>True</div>
            </button>
            <div style={{width: 1315, height: 127, left: 69, top: 40, position: 'absolute', textAlign: 'center'}}><span style={{color: 'white', fontSize: 30, fontFamily: 'Mulish', fontWeight: '800', lineHeight: 1, wordWrap: 'break-word'}}>20. All of the following are targets of phishing attacks<br/></span><span style={{color: 'white', fontSize: 30, fontFamily: 'Mulish', fontWeight: '800', lineHeight: 1, wordWrap: 'break-word'}}>(Corporations, Hospitals, Universities, Schools, Adult Individuals, Children, General Public)</span></div>
            <div style={{width: 1302, height: 0.50, left: 69, top: 389, position: 'absolute', background: 'white'}}></div>
            <div style={{width: 1440, height: 99, left: 0, top: 252, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 24, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>Spear phishing targets specific groups of people but other phishers phish for information in the whole sea that is the internet so everyone could be affected by it.</div>
        </div>
        <div style={{width: 1440, height: 757.50, position: 'relative'}}>
            <button id="Q21W1" onClick={handleWrongClick21} style={{width: 619, height: 70, left: 750, top: 254, position: 'absolute',  borderRadius: 30, background: '#54F4FC'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute',   borderRadius: 30}} />
                <div style={{width: 594, height: 70, left: 12, top: 0, position: 'absolute', textAlign: 'center'}}><span style={{color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>There is a port switch (</span><span style={{color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', textDecoration: 'underline', wordWrap: 'break-word'}}>example.com:8034</span><span style={{color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>) at the end of the URL</span></div>
            </button>
            <button id="Q21W2" onClick={handleWrongClick21} style={{width: 619, height: 70, left: 67, top: 254, position: 'absolute',  borderRadius: 30, background: '#54F4FC'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute',   borderRadius: 30}} />
                <div style={{width: 594, height: 70, left: 14, top: 0, position: 'absolute', textAlign: 'center'}}><span style={{color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>It has @ (</span><span style={{color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', textDecoration: 'underline', wordWrap: 'break-word'}}>example.com@ 64.29.173.91</span><span style={{color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>) symbol in the URL</span></div>
            </button>
            <button id="Q21W3" onClick={handleWrongClick21} style={{width: 619, height: 70, left: 750, top: 137, position: 'absolute',  borderRadius: 30, background: '#54F4FC'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute',   borderRadius: 30}} />
                <div style={{width: 594, height: 70, left: 12, top: 0, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>An IP address is given instead of an URL</div>
            </button>
            <button id="Q21W4" onClick={handleWrongClick21} style={{width: 619, height: 70, left: 67, top: 137, position: 'absolute',  borderRadius: 30, background: '#54F4FC'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute',   borderRadius: 30}} />
                <div style={{width: 594, height: 70, left: 12, top: 0, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>The domain part looks legitimate but the rest of it is some strange symbols and numbers.</div>
            </button>
            <button id="Q21R" onClick={handleCorrectClick21} style={{width: 619, height: 70, left: 408, top: 371, position: 'absolute',  borderRadius: 30, background: '#54F4FC'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute',   borderRadius: 30}} />
                <div style={{width: 594, height: 70, left: 12, top: 0, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>All of the above</div>
            </button>
            <div style={{width: 1292, height: 127, left: 79, top: 40, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 30, fontFamily: 'Mulish', fontWeight: '800', lineHeight: 1, wordWrap: 'break-word'}}>21. There are many techniques of masking fake URL's to look as legitimate as they can. Which of these links could be unsafe?</div>
            <div style={{width: 1302, height: 0.50, left: 69, top: 757, position: 'absolute', background: 'white'}}></div>
            <div style={{width: 1440, height: 240, left: 0, top: 479, position: 'absolute', textAlign: 'center'}}><span style={{color: 'white', fontSize: 24, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>Phishers can use binary encoding to hide parts of the URL that they don't want the user to see. <br/>Everything before the @ symbol is omitted so only the part after it is important and this may be used to trick people. <br/>Some companies even have redirects to phishing websites on their servers(!) the only thing you need to do to access it is <br/></span><span style={{color: 'white', fontSize: 24, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>to change the port you are connecting through. <br/></span><span style={{color: 'white', fontSize: 24, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>IP addresses cannot be trusted unless you really know where that IP leads to. <br/>So, all of the above is the correct answer</span></div>
        </div>
        <div style={{width: 1440, height: 637.50, position: 'relative'}}>
            <div style={{width: 1440, height: 120, left: 0, top: 479, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 24, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>While some phishers phish for specific information such as usernames and passwords, credit card details, social security numbers, others might make use of any personal information.<br/>So, the correct answer is all of the above</div>
            <button id="Q22W1" onClick={handleWrongClick22} style={{width: 619, height: 70, left: 749, top: 254, position: 'absolute',  borderRadius: 30, background: '#54F4FC'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute',   borderRadius: 30}} />
                <div style={{width: 594, height: 70, left: 12, top: 0, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>Other personal details</div>
            </button>
            <button id="Q22W2" onClick={handleWrongClick22} style={{width: 619, height: 70, left: 66, top: 254, position: 'absolute',  borderRadius: 30, background: '#54F4FC'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute',   borderRadius: 30}} />
                <div style={{width: 594, height: 70, left: 14, top: 0, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>Social security numbers</div>
            </button>
            <button id="Q22W3" onClick={handleWrongClick22} style={{width: 619, height: 70, left: 749, top: 137, position: 'absolute',  borderRadius: 30, background: '#54F4FC'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute',   borderRadius: 30}} />
                <div style={{width: 594, height: 70, left: 12, top: 0, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>Credit card details</div>
            </button>
            <button id="Q22W4" onClick={handleWrongClick22} style={{width: 619, height: 70, left: 66, top: 137, position: 'absolute',  borderRadius: 30, background: '#54F4FC'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute',   borderRadius: 30}} />
                <div style={{width: 594, height: 70, left: 12, top: 0, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>Usernames and passwords</div>
            </button>
            <button id="Q22R" onClick={handleCorrectClick22} style={{width: 619, height: 70, left: 407, top: 371, position: 'absolute',  borderRadius: 30, background: '#54F4FC'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute',   borderRadius: 30}} />
                <div style={{width: 594, height: 70, left: 12, top: 0, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>All of the above</div>
            </button>
            <div style={{width: 1276, height: 127, left: 81, top: 50, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 30, fontFamily: 'Mulish', fontWeight: '800', lineHeight: 1, wordWrap: 'break-word'}}>22. Phishing is a way of attempting to acquire information. What information does it try to acquire?</div>
            <div style={{width: 1302, height: 0.50, left: 69, top: 637, position: 'absolute', background: 'white'}}></div>
        </div>
        <div style={{width: 1440, height: 594.50, position: 'relative'}}>
            <button id="Q23R" onClick={handleCorrectClick23} style={{width: 619, height: 70, left: 750, top: 261, position: 'absolute',  borderRadius: 30, background: '#54F4FC'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute',   borderRadius: 30}} />
                <div style={{width: 594, height: 70, left: 12, top: 0, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>All of the above</div>
            </button>
            <button id="Q23W1" onClick={handleWrongClick23} style={{width: 619, height: 70, left: 67, top: 261, position: 'absolute',  borderRadius: 30, background: '#54F4FC'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute',   borderRadius: 30}} />
                <div style={{width: 594, height: 70, left: 14, top: 0, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>Trusted Certificate Authority indication in the browser</div>
            </button>
            <button id="Q23W2" onClick={handleWrongClick23} style={{width: 619, height: 70, left: 750, top: 144, position: 'absolute',  borderRadius: 30, background: '#54F4FC'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute',   borderRadius: 30}} />
                <div style={{width: 594, height: 70, left: 12, top: 0, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>Padlock icon in the browser status bar</div>
            </button>
            <button id="Q23W3" onClick={handleWrongClick23} style={{width: 619, height: 70, left: 67, top: 144, position: 'absolute',  borderRadius: 30, background: '#54F4FC'}}>
                <div style={{width: 619, height: 70, left: 0, top: 0, position: 'absolute',  borderRadius: 30}} />
                <div style={{width: 594, height: 70, left: 12, top: 0, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>Https:// protocol in the adress bar</div>
            </button>
            <div style={{width: 1440, height: 187, left: 0, top: 369, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 24, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>https shows that we have a secure SSL connection.<br/>The padlock icon in the browser usually means that we're securely connected and it additionally may mean the certificate supplier is trusted which is also a reliable source of legitimacy. <br/>However, we shouldn't trust anything that is in the email itself since it can be easily forged.</div>
            <div style={{width: 1301, height: 127, left: 69, top: 40, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 30, fontFamily: 'Mulish', fontWeight: '800', lineHeight: 1, wordWrap: 'break-word'}}>23. Your browser tries to help you detect fraudulent websites.  Which indications in the browser indicate that the site is secure?</div>
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