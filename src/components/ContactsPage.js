import React from 'react';

const ContactsPage = () => {
  return (
    <div className="contacts-page">
      <h2>Get in touch with me</h2>
      <div className="contacts-page__container">
        <div className="contacts-page__info">
          <p>+38 099 247 53 75</p>
          <p>Kyiv, Ukraine</p>
          <p>waleria.gora@gmail.com</p>
          <a href="https://www.linkedin.com/in/valeria-gora-b6a004108/" target="_blank">
            <i class="fab fa-linkedin fa-2x"></i>
          </a>
          <a href="https://t.me/valeria38" target="_blank">
            <i class="fab fa-telegram fa-2x"></i>
          </a>
        </div>
        
      </div>
      
    </div>
  )
};

export default ContactsPage;