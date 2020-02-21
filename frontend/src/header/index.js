import React from 'react';
import './header.scss';
import Logo from '../images/logo.png';
console.log(Logo);
function Header() {
  return (
    <>
    <div class="header">
      <div class="container-fluid">
        <div class="row">
          <div class="col-sm-4 col-xs-6">
             <div class="C-logo"> <a href="javascript" title="Rage communications"><img src={Logo} alt="Rage communications"/></a></div>
          </div>
          <div class="col-sm-8 col-xs-6">
             <div class="C-logo"> <a href="javascript" title="Rage communications"><img src={Logo} alt="Rage communications"/></a></div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Header;
