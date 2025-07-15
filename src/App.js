import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import IntroScreen from "./components/IntroScreen"; // new
import "./App.css";

function App() {
  const [selectedItem, setSelectedItem] = useState("About");
  const [showIntro, setShowIntro] = useState(true);

  return showIntro ? (
    <IntroScreen onFinish={() => setShowIntro(false)} />
  ) : (
    <div className="app-container">
      <Sidebar selectedItem={selectedItem} setSelectedItem={setSelectedItem} />
      <Content selectedItem={selectedItem} />
    </div>
  );
}

export default App;
