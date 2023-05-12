import React from 'react';
import Nav from './components/authentication/Nav';
import { AuthProvider } from './context/AuthContext';
import {AuctionBody} from './components/auctions/Body'
import { Hero } from './components/home/Hero';


function App() {
  return (
  <AuthProvider>
    <Nav />
    <Hero />
    <AuctionBody/>
  </AuthProvider>
  );
}

export default App;


