import React from 'react';
import './index.css'


const NavBar = (props) => {


  return (
    <div className="navContainer">
      <div className="contatoContainer">
        <div>
          <p>Compre pelo Telefone? (11)98492-5943</p>
        </div>
        <div>
          <a href="">Compre pelo o Whatsapp</a>
        </div>
        <div>
          <a href="mailto: nicolas.7l@hotmail.com">Email: nicolas.7l@hotmail.com</a>
        </div>
      </div>
    </div>
  );
}

export default NavBar;