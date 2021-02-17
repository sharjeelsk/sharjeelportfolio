import React from 'react'
import FirstSegment from './components/FirstSegment'
import SecondSegment from './components/SecondSegment'
import CardGroup from './components/CardGroup'
import ThirdSegment from './components/ThirdSegment'
import Footer from './components/Footer'
import Header from './components/Header'


import "./App.css"

function App() {
  return (
    <div>
    <Header id="1" />
    <FirstSegment />
    <SecondSegment/>

    <CardGroup />
    <ThirdSegment />
    <Footer />
    
   
    </div>
  );
}

export default App;
