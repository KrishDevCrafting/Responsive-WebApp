import React from 'react'
// src/index.js or src/index.tsx
import 'bootstrap/dist/css/bootstrap.min.css';

import NavbarComponent from './Components/Header/Nav';
import HeroComponent from './Components/MainContent/HeroSectionComponen';
function App() {
    return (
    <>
<NavbarComponent/>
<HeroComponent/>
      
    </>)
}

export default App;