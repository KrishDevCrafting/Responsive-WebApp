import React from 'react'
// src/index.js or src/index.tsx
import 'bootstrap/dist/css/bootstrap.min.css';

import NavbarComponent from './Components/Header/Nav';
import HeroComponent from './Components/MainContent/HeroSectionComponen';
import MainContent from './Components/MainContent/MainContentComponent';

import Account from './Components/LoginSignup/Account';

function App() {
    return (
    <>
<NavbarComponent/>
<HeroComponent/>
<MainContent/>
<Account/>
   {console.log(0.2+0.4-0.6)}   
    </>)
}

export default App;