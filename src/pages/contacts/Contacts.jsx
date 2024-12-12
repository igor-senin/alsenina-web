import React from "react";

import MiniNavbar from '../../components/MiniNavbar';

import './Contacts.css';


const Contacts = () => {
  const portraitPath = require('../../assets/Contacts/Illustration_10.2.png');
  const vinesPath = require('../../assets/Contacts/Illustration_11.png');

  return (
    <div className="contacts-page">
      <MiniNavbar/>
      <img className="vines-pic" src={vinesPath}/>

      <div className="empty-space"/>

      <div className="contacts">
        <div style={{height: "50%"}}>
          Контакты
        </div>

        <div className="contacts-text">
          <div className="text-part">tg: @sen_cho_us</div>
          <div className="text-part">mail: sen_cho_us@mail.ru</div>
          <div className="text-part">inst: @sen_cho_us</div>
          <div className="text-part">+79236782885</div>
        </div>
      </div>

      <div className="portrait-container">
        <img className="portrait-pic" src={portraitPath}/>
      </div>

      <div className="empty-space"/>
    </div>
  )
};

export default Contacts;
