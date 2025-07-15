import React from "react";
import "./Content.css";

const contentMap = {
  "About": (
    <>
      <h2>About</h2>
      <p>Hello! I'm Akash, a software engineer who enjoys building things that (usually) work.</p>
    </>
  ),
  "Education": (
    <>
      <h2>Education</h2>
      <p>B.Tech. Computer Science – GECA</p>
      <p>HSC – Gurukul English School</p>
    </>
  ),
  "Experience": (
    <>
      <h2>Experience</h2>
      <p>Freelance Developer – Freelance | Self Employed</p>
      <p>SDE Intern – Fenxify</p>
    </>
  ),
  "Price Predictor": <h2>Price Predictor</h2>,
  "TradingView-API": <h2>TradingView API Project</h2>,
  "Newzy": <h2>Newzy App</h2>,
  "Portfolio": <h2>Portfolio Website</h2>,
  "Skills & Tools": (
    <>
      <h2>Skills & Tools</h2>
      <p>React, JavaScript, Node.js, Express, MongoDB, Git, Chrome Extensions, etc.</p>
    </>
  ),
  "BetterLC": (
    <>
      <h2>BetterLC</h2>
      <p>Chrome extension for LeetCode addicts. Overlays and injects company tags right on problem pages, assisting during interview prep. DOM magic makes it all seamless.</p>
      <p>Built this to avoid spending bucks just for the company tags list. Turns out, thousands of users were tired of that too. Managed to get <span style={{ color: "#f8a74f" }}>more than 2,500 active users</span>!</p>
      <a href="https://chrome.google.com/webstore" target="_blank" rel="noreferrer" style={{ color: "#0d6efd" }}>
        Check it out on Chrome Store
      </a>
    </>
  )
};

export default function Content({ selectedItem }) {
  return (
    <div className="content">
      {contentMap[selectedItem] || <h2>Select a section to see details.</h2>}
    </div>
  );
}
