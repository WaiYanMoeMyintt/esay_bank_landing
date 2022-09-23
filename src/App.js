import React from 'react'
import "./index.css";
import Navbar from './Nav/Navbar';
import Header from './Header/Header';
import Wave from './Wave/Wave';
import Service from './Service/Service';
import Article from './Article/Article';
import Footer from './Footer/Footer';
function App() {
  return (
    <div>
         <Navbar/>
         <Header />
         <Wave />
         <Service />
         <Article />
         <Footer />
    </div>
  )
}

export default App;