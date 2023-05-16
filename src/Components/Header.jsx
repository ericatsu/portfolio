import React from 'react';

function Header({ openHireMeDialog }) {
  return (
    <header>
      {/* Your header content */}
      <button onClick={openHireMeDialog}>Hire Me</button>
    </header>
  );
}

export default Header;
