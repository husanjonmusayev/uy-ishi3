import React from "react";

export default function Hero() {
  return (
    <div className="hero">
      <div className="textSection">
        <div className="item">
          <h1>
            Easy <br /> payment for <br /> any business
          </h1>

          <p>
            For ambitious companies around the world, wallet makes moving money
            as simple, borderless and programmable as the rest of the internet.
          </p>
        </div>

        <a className="start" href="#">Get Started</a>
      </div>
      <div className="imgSection">
        <img src="/Hero.png" alt="hero_img" />
      </div>
    </div>
  );
}
