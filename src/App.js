import React from 'react';
import Nav from './components/authentication/Nav';
import { AuthProvider } from './context/AuthContext';
import {AuctionBody} from './components/auctions/Body'


function App() {
  return (
  <AuthProvider>
    <Nav />
    <AuctionBody/>
  </AuthProvider>
  );
}

export default App;


