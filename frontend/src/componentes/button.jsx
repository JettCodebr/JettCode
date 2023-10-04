import React from 'react';
import './button.css'; // Importe o arquivo CSS
import { FaWhatsapp } from 'react-icons/fa'; // Importe o ícone do WhatsApp (você pode precisar instalar o pacote 'react-icons')

const Button = ({ onClick }) => {
  return (
    <button className="custom-button" onClick={onClick}>
      <FaWhatsapp className="whatsapp-icon" />
      <span className="whatsapp-text">WhatsApp</span>
    </button>
  );
};

export default Button;