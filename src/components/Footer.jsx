import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ {year} Dev H Gowda</p>
    </footer>
  );
}

export default Footer;
