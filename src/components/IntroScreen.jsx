import React from "react";
import { TypeAnimation } from 'react-type-animation';
import './IntroScreen.css';

const IntroScreen = ({ onFinish }) => {
  return (
    <div className="intro-screen">
      <TypeAnimation
        sequence={[
            'Hey there!', 1000,
            'I’m Akash Verma.', 1000,
            'Welcome to my portfolio.', 1000,
            () => onFinish()
        ]}
        wrapper="h1"
        cursor={true}
        speed={30}
        repeat={0}
    />
    </div>
  );
};

export default IntroScreen;
