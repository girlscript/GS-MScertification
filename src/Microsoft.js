import React from 'react';
import './index.css';
// import { makeStyles } from '@material-ui/core/styles';
 import logo from "./images/MicrosoftLogo.png";
//  import "./Microsoft.css"
// import Button from '@material-ui/core/Button';


// const useStyles = makeStyles ((theme)=>({ 
//    root : {
//       height: "100vh" , 
//       backgroundColor : "#ffffff" ,
//    },
//    image : {
//        display : "flex",
//        justifyContent : "center",
//        justifyItems : "center",
//        marginTop : "15vh",
//    },
//    title : {
//     marginTop : "0vh",
//     display : "flex" , 
//     justifyItems : "center" ,
//     justifyContent : "center" ,
//     fontSize :  "210%" ,
//     letterSpacing : "0" ,
//     marginBottom : "0vh" ,
//     fontFamily : "Titillium Web" ,
//     lineHeight : "150%",

//   },
//     subtitle : {
//       display : "flex" , 
//       justifyItems : "center" ,
//       justifyContent : "center" ,
//       fontSize :  "22px" ,
//       marginTop : "0vh",
//       lineHeight : "100%",
//     },

//   button : {
//     backgroundColor : "#47ABFC" ,
//     color :"black",
//     height : "50px",
//     width  :  "200px" ,
//     border : "none" ,




// },
// btn : {
//     display : "flex",
//     justifyContent : "center",
//     justifyItems : "center",
// },
//  })) ;

function Microsoft() {
   // const classes = useStyles();
   var heading = "LEARN AND GET\nCERTIFIED IN\nMICROSOFT AZURE";
   return (

      <div>
         <div className='container___'>
         <div className='logo-container'>
            <img src={logo} alt="Logo" className='logo'/>
         </div>
         
            <h6 className='main-heading display-linebreak'>{heading}</h6>
            <p className='sub-heading'>Participate in the Microsoft Certification Challenge, build a strong foundation over</p>
            <p className='sub-heading'>Azure and get the Azure Certification Voucher worth 4000 INR! for FREE.</p>
            <div className="button-container">
          <button
            className="blue-button"
            onClick={() => {
              let val = document.getElementById("home-container");
              return val.scrollIntoView();
            }}
            style={{
              cursor: "pointer",
            }}
          >
            Get Started for free
          </button>
        </div>
            
         </div>
      </div>)
}

export default Microsoft;
