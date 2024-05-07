import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from 'react';
import UserService from "../services/userService";
import { useNavigate } from "react-router-dom";
import logo from '../images/Shield logo 2.png';
import Photo from '../images/Shield.png';
import X from '../images/X.png';
import first from '../images/Badges/1st.png';
import second from '../images/Badges/2nd.png';
import third from '../images/Badges/3rd.png';
import trophie from '../images/Badges/Trophies.png';
import star from '../images/Badges/Star Trophie.png';
import crown from '../images/Badges/badge4.png';
import trophiecircle from '../images/Badges/badge6.png';
import starcircle from '../images/Badges/badge1.png';
import userService from "../services/userService";

function Badges() {
  let navigate = useNavigate();
  async function routeChange() {
    navigate("../login", { replace: true });
}

  async function Home() {
    navigate("../login", { replace: true });
   }

   const [hasTrophie, setHasTrophie] = useState(false);
   useEffect(() => {
       const fetchTrophieStatus = async () => {
           const response = await UserService.getTrophie();
           console.log(response)
           if (response.data.hasTrophie) {
               setHasTrophie(true);
           }
       };

       fetchTrophieStatus();
   }, []);

   const [hasSpot100, setHasSpot100] = useState(false);
   useEffect(() => {
       const fetchSpot100Status = async () => {
           const response = await UserService.getspot100();
           console.log(response)
           if (response.data.hasSpot100) {
               setHasSpot100(true);
           }
       };

       fetchSpot100Status();
   }, []);

   const [hasstar, setHasstar] = useState(false);
   useEffect(() => {
       const fetchstarStatus = async () => {
           const response = await UserService.getstar();
           console.log(response)
           if (response.data.hasstar) {
               setHasstar(true);
           }
       };

       fetchstarStatus();
   }, []);
   
   const [hasquiz100, setHasquiz100] = useState(false);
   useEffect(() => {
       const fetchquiz100Status = async () => {
           const response = await UserService.getquiz100();
           console.log(response)
           if (response.data.hasquiz100) {
               setHasquiz100(true);
           }
       };

       fetchquiz100Status();
   }, []);

   const [hasfirst, setHasfirst] = useState(false);
   useEffect(() => {
       const fetchfirstStatus = async () => {
           const response = await UserService.getfirst();
           console.log(response)
           if (response.data.hasfirst) {
               setHasfirst(true);
           }
       };

       fetchfirstStatus();
   }, []);

   const [hassecond, setHassecond] = useState(false);
   useEffect(() => {
       const fetchsecondStatus = async () => {
           const response = await UserService.getsecond();
           console.log(response)
           if (response.data.hassecond) {
               setHassecond(true);
           }
       };

       fetchsecondStatus();
   }, []);

   const [hasthird, setHasthird] = useState(false);
   useEffect(() => {
       const fetchthirdStatus = async () => {
           const response = await UserService.getthird();
           console.log(response)
           if (response.data.hasthird) {
               setHasthird(true);
           }
       };

       fetchthirdStatus();
   }, []);

   UserService.setTop3()
        .then((response) => {
        })
        .catch((e) => {
          console.log(e);
        });

  return (
<div style={{width: '100%', height: '100%', position: 'relative', background: 'black'}}>
    <div style={{width: 1440, height: 529, left: 0, top: 0, position: 'absolute', background: 'black'}}>
        <div style={{width: 1302, height: 0.50, left: 69, top: 520, position: 'absolute', background: '#54F4FC'}} />
        <img style={{width: 760, height: 423, left: 611, top: 97, position: 'absolute'}} src={Photo} alt="Photo" />
        <div style={{width: 398.67, left: 106, top: 288, position: 'absolute', color: 'white',fontSize: 61, fontFamily: 'Montserrat', fontWeight: '800', lineHeight: 1, wordWrap: 'break-word'}}>Category<br/>Leaders</div>
        <div style={{width: 275, left: 214, top: 128, position: 'absolute', color: '#54F4FC', fontSize: 68, fontFamily: 'Montserrat', fontWeight: '800', wordWrap: 'break-word'}}>Badges</div>
        <div style={{width: 154.08, height: 192.24, left: 69, top: 73, position: 'absolute', color: '#54F4FC', fontSize: 146, fontFamily: 'Montserrat', fontWeight: '800', wordWrap: 'break-word'}}>#</div>
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
                    <div style={{width: 100, height: 3.75, left: 400, top: 20, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 16, fontFamily: 'Montserrat', fontWeight: '500', wordWrap: 'break-word'}}>Training</div>
                    <div style={{width: 100, height: 3.75, left: 550, top: 20, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 16, fontFamily: 'Montserrat', fontWeight: '500', wordWrap: 'break-word'}}>Leaderboard</div>
                    <div style={{width: 100, height: 3.75, left: 700, top: 20, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 16, fontFamily: 'Montserrat', fontWeight: '500', wordWrap: 'break-word'}}>Badges</div>
                    <div style={{width: 100, height: 3.75, left: 850, top: 20, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 16, fontFamily: 'Montserrat', fontWeight: '500', wordWrap: 'break-word'}}>About Us</div>
                    <div style={{width: 100, height: 3.75, left: 1000, top: 20, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 16, fontFamily: 'Montserrat', fontWeight: '500', wordWrap: 'break-word'}}>Contact Us</div>
                </div>
            </div>
        </div>
    </div>
    <div style={{width: 1440, height: 560, left: 0, top: 520, position: 'absolute', background: 'black'}}>
    <div style={{width: 1360, height: 1, left: 30, top: 0, position: 'absolute', background: '#404040'}} />
        <div style={{height: 246, left: 952, top: 292, position: 'absolute'}}>
            <div style={{width: 169, height: 86, left: 0, top: 160, position: 'absolute', textAlign: 'center', color: '#54F4FC', fontSize: 24, fontFamily: 'Montserrat', fontWeight: '400', wordWrap: 'break-word'}}>Phishing Quiz 100% Correct</div>
            {hasquiz100 === true  &&  <img style={{width: 140, height: 140, left: 14, top: 0, position: 'absolute'}} src={crown} alt="Phishing Quiz 100% Correct" />}
        </div>
        <div style={{height: 220, left: 654, top: 292, position: 'absolute'}}>
            <div style={{width: 148, height: 59, left: 0, top: 161, position: 'absolute', textAlign: 'center', color: '#54F4FC', fontSize: 24, fontFamily: 'Montserrat', fontWeight: '400', wordWrap: 'break-word'}}>CyProtego User</div>
            <img style={{width: 140, height: 140, left: 4, top: 0, position: 'absolute'}} src={starcircle} alt="CyProtego User" />
        </div>
        <div style={{height: 240, left: 324, top: 292, position: 'absolute'}}>
            <div style={{width: 190, height: 86, left: 0, top: 154, position: 'absolute', textAlign: 'center', color: '#54F4FC', fontSize: 24, fontFamily: 'Montserrat', fontWeight: '400', wordWrap: 'break-word'}}>Spot The Phishing Email 100% Correct</div>
            {hasSpot100 === true  && <img style={{width: 140, height: 140, left: 25, top: 0, position: 'absolute'}} src={trophiecircle} alt="Spot The Phishing Email 100% Correct" />}
        </div>
        <div style={{height: 181.52, left: 962, top: 57, position: 'absolute'}}>
            <div style={{width: 148, height: 30.07, left: 0, top: 151.44, position: 'absolute', textAlign: 'center', color: '#54F4FC', fontSize: 24, fontFamily: 'Montserrat', fontWeight: '400', wordWrap: 'break-word'}}>3rd Place</div>
            {hasthird === true  &&<img style={{width: 140, height: 140, left: 4, top: 0, position: 'absolute'}} src={third} alt="3rd Place" />}
        </div>
        <div style={{height: 181.52, left: 654, top: 57, position: 'absolute'}}>
            <div style={{width: 148, height: 30.07, left: 0, top: 151.44, position: 'absolute', textAlign: 'center', color: '#54F4FC', fontSize: 24, fontFamily: 'Montserrat', fontWeight: '400', wordWrap: 'break-word'}}>2nd Place</div>
            {hassecond === true  &&<img style={{width: 140, height: 140, left: 4, top: 0, position: 'absolute'}} src={second} alt="2nd place" />}
        </div>
        <div style={{height: 182, left: 349, top: 57, position: 'absolute'}}>
            <div style={{width: 148, height: 31, left: 0, top: 151, position: 'absolute', textAlign: 'center', color: '#54F4FC', fontSize: 24, fontFamily: 'Montserrat', fontWeight: '400', wordWrap: 'break-word'}}>1st Place</div>
            {hasfirst === true  &&<img style={{width: 140, height: 140, left: 4, top: 0, position: 'absolute'}} src={first} alt="1st place" />}
        </div>
        <div style={{width: 214, height: 406, left: 60, top: 106, position: 'absolute'}}>
            <div style={{width: 214, height: 86, left: 0, top: 320, position: 'absolute', textAlign: 'center', color: '#54F4FC', fontSize: 24, fontFamily: 'Montserrat', fontWeight: '400', wordWrap: 'break-word'}}>Spot The Phishing Email Champion</div>
            {hasTrophie === true  &&  <img style={{width: 214, height: 305, left: 0, top: 0, position: 'absolute'}} src={trophie} alt="Spot The Phishing Email Champion" />}
        </div>
        <div style={{width: 187, height: 400, left: 1184, top: 112, position: 'absolute'}}>
            <div style={{width: 187, height: 86, left: 0, top: 314, position: 'absolute', textAlign: 'center', color: '#54F4FC', fontSize: 24, fontFamily: 'Montserrat', fontWeight: '400', wordWrap: 'break-word'}}>Phishing Quiz Champion</div>
            {hasstar === true  && <img style={{width: 187, height: 299, left: 0, top: 0, position: 'absolute'}} src={star} alt="Phishing Quiz Champion" />}
        </div>
    </div>
</div>
  );
}

export default Badges;