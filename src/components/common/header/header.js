// import React from "react";
// import './Header.css';
// import blackLogo from '../../../assets/Images/comman/header/blackLogo.png';
// import close from '../../../assets/Images/comman/header/close.svg';
// import hamburger from '../../../assets/Images/comman/header/hamburger.svg';
// import dropDown from '../../../assets/Images/comman/header/drop-down-icon.svg'
// import { Link } from "react-router-dom";
// function header(){
//     const solutions=document.querySelector(".header-solutions");
   
    
//     function solutionDropDown() {
//         const solutions = document.querySelector(".header-solutions");
//         const solutionDrop = document.querySelector('.solution-drop-down');
      
//         if (solutions && solutionDrop) {
//           solutionDrop.classList.toggle('s-header-reveal');
//           const drop = document.querySelector(".header-drop-down");
//           solutions.classList.toggle('outer-drop-color');
//           drop.classList.toggle('header-reveal');
//           const headerImage = document.querySelector(".header-solutions img");
//           headerImage.classList.toggle('rotate-icon');
//           headerImage.style.paddingLeft = headerImage.style.paddingLeft === "0px" ? "" : "0px";
//         }
//       }
    
//      function uiuxDrop(event) {
//         const headerInnerDrop = event.currentTarget;
//         const innerDrop = headerInnerDrop.nextElementSibling;
      
//         // Toggle classes for inner drop and header inner drop
//         innerDrop.classList.toggle('header-hide');
//         headerInnerDrop.classList.toggle('inner-drop-color');
//         innerDrop.classList.toggle('inner-drop-color');
      
//         // Toggle rotate-icon class for the img tag
//         const icon = headerInnerDrop.querySelector('img');
//         icon.classList.toggle('rotate-icon');
      
//         // Toggle font weight for the button
//         headerInnerDrop.style.fontWeight = headerInnerDrop.style.fontWeight === "500" ? "normal" : "500";
//       }
       
//    function sideMenuBar(){
//       const hamburger = document.querySelector(".hamburger");
//       const exitIcon=document.querySelector(".exit-icon");
//       const headerContents = document.querySelector(".header-contents");
//       function toggleMenu() {
//         headerContents.classList.toggle('show-contents');
//         hamburger.classList.toggle('hide');
//         exitIcon.classList.toggle('show');
//         document.body.classList.toggle('overflow');
//     }

//       hamburger.addEventListener('click', toggleMenu);
//       exitIcon.addEventListener('click', toggleMenu);

//     }

   

// return(

//     <header className="header">
//     <div className="header-container">
//       <div className="logo" >
//       <img src={blackLogo} alt="" />
//       </div>

//       <div className="header-contents">
//         <div className="header-contents-first">
//           {/* <div className="solutions">
//             <button className="header-solutions" onClick={solutionDropDown}>
//               Solutions <img src={dropDown} alt="" />
//             </button>

            
//               <div className="solution-drop-down">
//                 <div className="solution-drop-down-container">
//                   <div className="solutions-ui">
//                     <div className="solutions-ui-heading">
//                       <h1>User Interface</h1>
//                     </div>
//                     <ul>
//                       <li><a href="">Spatial Design</a></li>
//                       <li><a href="">E-commerce</a></li>
//                       <li><a href="">Fintech</a></li>
//                       <li><a href="">Landing Page</a></li>
//                       <li><a href="">Custom</a></li>
//                       <li><a href="">Android App</a></li>
//                       <li><a href="">IOS App</a></li>
//                     </ul>
//                   </div>
//                   <div className="solutions-ux">
//                     <div className="solutions-ux-heading">
//                       <h1>User Experience</h1>
//                     </div>
//                     <ul>
//                       <li><a href="">User Flow</a></li>
//                       <li><a href="">Journey Map</a></li>
//                       <li><a href="">Empathy Map</a></li>
//                       <li><a href="">Usability Test</a></li>
//                       <li><a href="">Heuristic Evaluation</a></li>
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//           </div>

//           <div className="header-drop-down">
//             <div className="header-inner-drop">
//               <button onClick={(event)=>uiuxDrop(event)}>User Interface <img src={dropDown} alt="" /></button>
//               <div className="inner-drop" >
//                 <a href=""><li>Spatial Design</li></a>
//                 <a href=""><li>E-commerce</li></a>
//                 <a href=""><li>Fintech</li></a>
//                 <a href=""><li>Landing Page</li></a>
//                 <a href=""><li>Custom</li></a>
//                 <a href=""><li>Android App</li></a>
//                 <a href=""><li>IOS App</li></a>
//               </div>
//             </div>
//             <div className="header-inner-drop">
//               <button onClick={(event)=>uiuxDrop(event)}>User Experience <img src={dropDown} alt="" /></button>
//               <div className="inner-drop">
//                 <a href=""><li>User Flow</li></a>
//                 <a href=""><li>Journey Map</li></a>
//                 <a href=""><li>Empathy Map</li></a>
//                 <a href=""><li>Usability Test</li></a>
//                 <a href=""><li>Heuristic Evaluation</li></a>
//               </div>
//             </div>
//           </div>
//          */}

//        <Link to="/course"><button className="header-academy">Course</button></Link> 
//         <button className="header-resources">Resources</button>
//         </div>

//       <div className="header-contents-second">
//       <Link to="/login"> <button className="header-login" >Login</button></Link> 
//        <Link to="/signup"><button className="header-signup" >Sign Up Free</button> </Link> 
//       </div>
//       </div>
      
//     </div>
//     <img src={hamburger} alt="" className="hamburger" onClick={sideMenuBar}/>
//     <img src={close} alt="" className="exit-icon" onClick={sideMenuBar}/>
//   </header>

// )
// }

// export default header;

import React, { useState } from "react";
import './Header.css';
import blackLogo from '../../../assets/Images/comman/header/whiteLogo.png';
import close from '../../../assets/Images/comman/header/close_small.png';
import hamburger from '../../../assets/Images/comman/header/hamburger-white.png';
import dropDown from '../../../assets/Images/comman/header/drop-down-icon.svg'
import { Link } from "react-router-dom";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen(!menuOpen);
    document.body.classList.toggle('overflow'); // Add or remove overflow class for body
  }

  // Close the menu when navigating to a different page
  function handleNavigation() {
    setMenuOpen(false);
    document.body.classList.remove('overflow'); // Ensure overflow class is removed when navigating
  }

  return (
    <header className="header">
      <nav className="header-container">
       <div className="logo">
       <Link  to="/"> <img src={blackLogo} alt="trafy logo" /></Link> 
        </div>

        <div className={`header-contents ${menuOpen ? 'show-contents' : ''}`}>
          <div className="header-contents-first">
            <Link to="/courses" onClick={handleNavigation}><button className="header-academy">Courses</button></Link>
            <button className="header-resources">Resources</button>
          </div>

          <div className="header-contents-second">
            <Link to="/login" onClick={handleNavigation}><button className="header-login">Login</button></Link>
            <Link to="/signup" onClick={handleNavigation}><button className="header-signup">Sign Up Free</button></Link>
          </div>
        </div>
      </nav>
      <img src={hamburger} alt="" className={`hamburger ${menuOpen ? 'hide' : ''}`} style={{height:"20px"}}  onClick={toggleMenu} />
      <img src={close} alt="" className={`exit-icon ${menuOpen ? 'show' : ''}`} onClick={toggleMenu} />
    </header>
  );
}

export default Header;
