import React from "react";
import "./Header.scss";

function Header() {
  return (
    <>
      <div className="top-header">
        <p>
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        </p>
        <select>
          <option value="en">ENG</option>
          <option value="ru">RUS</option>
          <option value="kg">KGZ</option>
        </select>
      </div>
      <header className="header">
        <div></div>
        <div></div>
      </header>
    </>
  );
}

export default Header;
