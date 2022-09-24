import React from 'react';

const githubLogo = require('../interface/img/github.png')

const Header = () => {
    return (
      <div className='header'> 
         <div className='header__name'>
            <a href="&">FlashCards</a>
         </div>

        <a className='github' href='https://github.com/waytoYA/flashcards-spa' target='_blank'>
          <img src={githubLogo}className='github__logo'/>
        </a>

      </div>
    );
  }
  
  
export default Header;