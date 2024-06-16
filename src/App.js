import React from 'react'
// src/index.js or src/index.tsx
import 'bootstrap/dist/css/bootstrap.min.css';

import NavbarComponent from './Components/Header/Nav';
import HeroComponent from './Components/MainContent/HeroSectionComponen';
import MainContent from './Components/MainContent/MainContentComponent';
function App() {
    return (
    <>
<NavbarComponent/>
<HeroComponent/>
<MainContent/>
      
    </>)
}

export default App;