import React from 'react';
import P from 'prop-types';
import './styles.css';

function Header({ black }) {
  return (
    <header className={black ? 'black' : ''}>
      <div className="header--logo">
        <a href="#">
          <img src="https://logodownload.org/wp-content/uploads/2014/10/netflix-logo-5.png" alt="netflix logo" />
        </a>
      </div>
      <div className="header--user">
        <a href="#">
          <img src="https://i.pinimg.com/originals/c0/8e/6c/c08e6c9595e03202a46a95f66578799f.png" alt="Usuário" />
        </a>
      </div>
    </header>
  );
}

Header.propTypes = {
  black: P.bool,
};

export default Header;
