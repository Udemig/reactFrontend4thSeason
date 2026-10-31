import React from 'react'
import PageLinks from './PageLinks'
import { socialLinks } from '../data'
import SocialLink from './SocialLink'

const Footer = () => {
  return (
    <footer className='section footer'>
        <PageLinks parentClass="footer-links" itemClass="footer-link" />
        <ul className='footer-icons'>
            {socialLinks.map((link) =>{
                return <SocialLink key={link.id} {...link} itemClass="footer-icon" />
            })}
        </ul>
        <p className='copyright'>
            Copyright &copy; UDemig ravel tours Company
            <span id='date'>{new Date().getUTCFullYear()}</span> All rights reserved
        </p>
    </footer>
  )
}

export default Footer