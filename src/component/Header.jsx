import React from "react";

export default function Header() {
  return (
    <header>
      <a href="#">
        <img src="/Logo.png" alt="" />
      </a>
      <div className="col">
        <nav>
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About us</a>
            </li>
            <li>
              <a href="">How it works</a>
            </li>
            <li>
              <a href="">Services</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </nav>
        <a className="login" href="#">
          Login
        </a>
      </div>
    </header>
  );
}
