import React from 'react';
import './Footer.css';
import { Button } from '../Button';
import { Link } from 'react-router-dom';

import { FcAbout, FcAcceptDatabase } from 'react-icons/fc'

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
         Deixe o seu E-mail, a nossa equipe entrará em contato o mais breve possível
        </p>
        <p className='footer-subscription-text'>
          Milhares de cientes lhe esperam
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Seu email'
            />
            <Button buttonStyle='btn--outline'>Enviar</Button>
          </form>
        </div>
      </section>
      
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
            <FcAcceptDatabase className="nav-icon" />
              DEVHOST
            </Link>
          </div>
          <small className='website-rights'>DEVHOST © 2021</small>
          
        </div>
      </section>
    </div>
  );
}

export default Footer;