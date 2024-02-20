import { useState } from 'react';
import './style.css'
import {WhatsAppOutlined} from '@ant-design/icons'
//import { ContactButton } from '../../components/contact-button';

export const Header = () => {
  /*const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };*/

  return (
    <div className="border">
    <header className="header">
      <div className="logo">
        <img src="/logo.webp" alt="Logo" />
        <span style={{color: '#4B9AD8', fontWeight: 'bold'}}>OXYN</span>
      </div>
      {/*<nav className={`menu ${isMenuOpen ? 'is-open' : ''}`}>
        <ul>
          <li><a href="#home">Lorem</a></li>
          <li><a href="#about">Ipsum</a></li>
          <li><a href="#services">Dolor</a></li>
          <li><a href="#contact">Sit Amet</a></li>
        </ul>
  </nav>*/}
      <button onClick={() => {
               window.open('https://wa.me/5548991555418', '_blank', 'noopener,noreferrer') 
            }} className="contact-info"><WhatsAppOutlined style={{ fontSize: '15px', marginBottom: '-1px' }}/> (48) 99155-5418</button>
      {/*<button className="menu-toggle" onClick={toggleMenu}>☰</button>*/}
    </header>
    </div>
  );
};