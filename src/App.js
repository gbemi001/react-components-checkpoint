import React from 'react';
import { ProfilePhoto } from './Component/Profile/profilePhoto.js';
import {FullName} from './Component/Profile/fullName.js';
import { Address } from './Component/Profile/address.js';
import './App.css';
import "./style.css";

function App() {
  return(
  <div className='App-Class'>
    <ProfilePhoto/>
    <FullName/>
    <Address/>
  </div>
  );
}

export default App;
