import React from 'react';
import Nav from './components/authentication/Nav';
import { AuthProvider } from './context/AuthContext';
import {AuctionBody} from './components/auctions/Body'
import { Hero } from './components/home/Hero';
import './App.css'
import { Footer } from './components/footer/Footer';


function App() {
  return (
  <AuthProvider>
    <Nav />
    <Hero />
    <AuctionBody/>
    <Footer />
  </AuthProvider>
  );
}

export default App;


