import React from "react";
import "./Sidebar.css";

const sections = [
  {
    title: "About",
    items: ["Hello! I'm Akash, a final year student who enjoys building things that (usually) work."],
  },
  {
    title: "Education",
    items: ["B.Tech. Electrical Engineering - IIT Jammu"],
  },
  {
    title: "Experience",
    items: ["SDE Intern - VouchrIT" , "Freelance Developer - MyConfidentialStore"],
  },
  {
    title: "Projects",
    items: ["EchoMart", "EchoChat", "EV Autonomous Systems", "Predictive Maintainence"],
  },
  {
    title: "Skills & Tools",
    items: ["Skills"],
  },
];

export default function Sidebar({ selectedItem, setSelectedItem }) {
  return (
    <div className="sidebar">
      {sections.map((section, idx) => (
        <div className="sidebar-box" key={idx}>
          <div className="sidebar-box-header">
            <span className="sidebar-label">{section.title}</span>
            <div className="sidebar-top-line" />
          </div>
          <div className="sidebar-content">
            {section.items.length > 0 ? (
              section.items.map((item, i) => (
                <div
                  key={i}
                  className={`sidebar-item ${selectedItem === item ? "active" : ""}`}
                  onClick={() => setSelectedItem(item)}
                >
                  {item}
                </div>
              ))
            ) : (
              <div className="sidebar-empty">Coming Soon</div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
