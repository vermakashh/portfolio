import React from "react";
import "./Content.css";

const contentMap = {
  "Hello! I'm Akash, a final year student who enjoys building things that (usually) work.": (
  <>
  <p>
    I am <strong>Akash Verma</strong>, a final-year B.Tech student in Electrical Engineering at <strong>IIT Jammu</strong>, with a strong foundation in 
    <span style={{ color: "#007bff", fontWeight: "bold" }}> full-stack development</span>, 
    <span style={{ color: "#007bff", fontWeight: "bold" }}> AI/ML</span>, and 
    <span style={{ color: "#007bff", fontWeight: "bold" }}> systems design</span>.
    I blend hands-on problem solving with scalable architecture—from real-time voice-driven apps to large-scale data parsing engines.
  </p>

  <p>
    I recently worked as a <span style={{ color: "#8c52ff", fontWeight: "bold" }}>Research Fellow</span> on the 
    <strong> EV Autonomous Systems Project</strong> under <strong>TIH-IoT, IIT Bombay</strong>, 
    where I explored control systems, embedded intelligence, and next-gen mobility solutions.
    I was also awarded the <span style={{ color: "#8c52ff", fontWeight: "bold" }}>Hyundai Hope Scholarship 2024</span>—granted to aspiring innovators from IITs—
    in recognition of my work and vision in applied tech and impact-driven innovation.
  </p>

  <p>
    I thrive at the intersection of tech and purpose. I built <span style={{ fontWeight: "bold", color: "#27ae60" }}>EchoChat</span>, 
    a full-stack real-time chat platform integrating <strong>voice cloning</strong> (XTTS) and 
    <strong> speech-to-text transcription</strong> (Whisper).
    It leverages <strong>React.js, Node.js, MongoDB, Socket.io, AWS</strong>, and <strong>JWT authentication</strong> to deliver a seamless, scalable messaging experience with AI-powered enhancements.
  </p>

  <p>
    I lead from the front, having served as <span style={{ color: "#f39c12", fontWeight: "bold" }}>Secretary of PRISM</span>, the official media body of IIT Jammu, 
    and <span style={{ color: "#f39c12", fontWeight: "bold" }}>President of E-Cell, I2EDC</span>, where I’ve shaped outreach strategies, led media campaigns, and nurtured startup and design culture on campus.
  </p>

  <p>
    At heart, I’m a <span style={{ fontWeight: "bold", color: "#8c52ff" }}>builder, researcher, and systems thinker</span>—always iterating, debugging, and refining. 
    Whether it’s extracting structured insights from bank statements or designing agentic AI workflows, I bring a structured yet experimental mindset.
  </p>

  <p>
    Outside of work, I’m into <em>long treks</em>, <em>chill lofi beats</em>, <em>meaningful conversations</em>, and the occasional philosophical deep dive into <strong>mind-body dualism</strong>.
  </p>
</>
  ),

  "B.Tech. Electrical Engineering - IIT Jammu": (
    <>
    <div style={{ marginBottom: "1.5rem" }}>
      <div style={{ fontSize: "1.1rem", fontWeight: "bold", color: "#ffffff" }}>
        B.Tech. in Electrical Engineering – Indian Institute of Technology (IIT) Jammu
      </div>
      <div style={{ color: "#437A97", marginTop: "0.3rem" }}><strong>
        2022 – 2026</strong>
      </div>
    </div>
    <ul>
      <li>
        <strong>Research Fellow</strong> – EV Autonomous Systems Project under <strong>TIH-IoT, IIT Bombay</strong>
      </li>
      <li>
        <strong>Hyundai Hope Scholarship 2024</strong> awardee for aspiring innovators from IITs
      </li>
      <li>
        Specialized in: Embedded Systems, AI/ML, Full-Stack Development, Control Systems
      </li>
      <li>
        <strong>Secretary</strong> of PRISM – Student Media Body
      </li>
      <li>
        <strong>President</strong> of E-Cell, I2EDC – IIT Jammu
      </li>
    </ul>
  </>
  ),
  "Freelance Developer - MyConfidentialStore": (
  <>
    <div style={{ marginBottom: "1.5rem" }}>
      <div style={{ fontSize: "1.1rem", fontWeight: "bold", color: "#ffffff" }}>
        Confidential Store – Developer (Freelance) · Remote
      </div>
      <div style={{ color: "#437A97", marginTop: "0.3rem" }}><strong>
        Oct 2024 – Jan 2025</strong>
      </div>
      <ul>
        <li>
          Designed and implemented a responsive and component-driven frontend architecture using <strong>React.js</strong> and <strong>Material UI</strong>, delivering a seamless and high-performance user experience across devices.
        </li>
        <li>
          Implemented a <strong>user authentication system</strong> and protected routes while ensuring smooth state management and <strong>API integration</strong> with backend services.
        </li>
        <li>
          Collaborated with the backend team to define and consume <strong>RESTful APIs</strong>, ensuring efficient state management and synchronous data flow between the frontend and <strong>MongoDB backend</strong>.
        </li>
      </ul>
    </div>
  </>
),

"SDE Intern - VouchrIT": (
  <>
    <div>
      <div style={{ fontSize: "1.1rem", fontWeight: "bold", color: "#ffffff" }}>
        VoucherIT – Software Developer Intern · Remote
      </div>
      <div style={{ color: "#437A97", marginTop: "0.3rem" }}><strong>
        June 2025 – Present</strong>
      </div>
      <ul>
        <li>
          Developed <strong>10+ Python scripts</strong> to automate data extraction from diverse banking statements, increasing processing efficiency by <strong>30%</strong>.
        </li>
        <li>
          Designed and implemented <strong>5+ custom reconciliation strategies</strong>, ensuring <strong>99% accuracy</strong> in financial data matching and validation.
        </li>
        <li>
          Debugged and optimized <strong>20+ strategy handlers</strong>, enhancing extraction reliability and reducing processing errors by <strong>25%</strong>.
        </li>
        <li>
          Collaborated with the ML team to preprocess and structure large-scale datasets for training <strong>privacy-preserving models</strong>, improving model accuracy and relevance.
        </li>
      </ul>
    </div>
  </>
),
"EchoMart": (
  <>
    <div style={{ fontSize: "1.1rem", fontWeight: "bold", color: "#ffffff" }}>
      EchoMart – Voice-Enabled E-Commerce Platform with Multilingual Agentic AI
    </div>
    <div style={{ color: "#437A97", marginTop: "0.3rem", marginBottom: "0.5rem" }}>
      <strong>July 2025</strong>
    </div>
    <p>
      A multilingual, voice-first e-commerce platform that lets users search, browse, and manage their carts through natural speech.
      Powered by Whisper and XTTS, it delivers a seamless and intelligent AI shopping assistant experience with support for regional language input and voice-based inventory alerts.
    </p>
    <ul>
      <li>
        <span style={{ color: "#8c52ff", fontWeight: "bold" }}>Tools & technologies:</span> React.js, Node.js, Express.js, MongoDB, Whisper (Faster-Whisper), XTTS, AWS, Google Maps API, Firebase, Tailwind CSS
      </li>
      <li>
        Designed a voice-first shopping experience using <strong>Whisper</strong> for multilingual speech-to-text and <strong>XTTS</strong> for personalized voice response generation.
      </li>
      <li>
        Built an <strong>agentic AI assistant</strong> to handle product discovery, cart management, and search—emulating natural conversation with users.
      </li>
      <li>
        Integrated <strong>Google Maps API</strong> for store locator and region-specific product visibility.
      </li>
      <li>
        Developed a responsive frontend with <strong>speech-based navigation</strong>, keyword highlighting, and dynamic filtering.
      </li>
      <li>
        Engineered backend APIs for real-time product recommendations and orchestrated frontend-backend state flow.
      </li>
      <li>
        Implemented <strong>Firebase Cloud Messaging</strong> for inventory-based wishlist reminders.
      </li>
    </ul>
  </>
),

"EchoChat": (
  <>
    <div style={{ fontSize: "1.1rem", fontWeight: "bold", color: "#ffffff" }}>
      EchoChat – Real-Time Communication Platform with Voice Cloning
    </div>
    <div style={{ color: "#437A97", marginTop: "0.3rem", marginBottom: "0.5rem" }}>
      <strong>April 2025 – May 2025</strong>
    </div>
    <p>
      A full-stack real-time messaging application with support for live presence, typing indicators, and secure communication.
      Integrated XTTS-based voice cloning allows users to send personalized speech from text, creating a more human and immersive chat experience.
    </p>
    <ul>
      <li>
        <span style={{ color: "#8c52ff", fontWeight: "bold" }}>Tools & technologies:</span> React.js, Tailwind CSS, Node.js, Express.js, Socket.io, MongoDB, AWS S3
      </li>
      <li>
        Developed a full-stack real-time messaging app with <strong>live user presence</strong>, typing indicators, and low-latency communication.
      </li>
      <li>
        Engineered a scalable <strong>WebSocket-based communication layer</strong> using Socket.io.
      </li>
      <li>
        Implemented JWT-based user authentication and protected routes.
      </li>
      <li>
        Integrated <strong>XTTS voice cloning</strong> to convert text into personalized speech using user-uploaded reference audio.
      </li>
      <li>
        Handled file uploads securely via Multer and stored them on <strong>AWS S3</strong>.
      </li>
    </ul>
  </>
),

"EV Autonomous Systems": (
  <>
    <div style={{ fontSize: "1.1rem", fontWeight: "bold", color: "#ffffff" }}>
      EV Autonomous Systems Project – TIH-IoT, IIT Bombay
    </div>
    <div style={{ color: "#437A97", marginTop: "0.3rem", marginBottom: "0.5rem" }}>
      <strong>Feb 2025 – April 2025</strong>
    </div>
    <p>
      A research fellowship project under TIH-IoT, IIT Bombay focused on developing an autonomous electric vehicle and its control system for self-driven navigation and embedded decision-making.
    </p>
    <ul>
      <li>
        <span style={{ color: "#8c52ff", fontWeight: "bold" }}>Tools & technologies:</span> Arduino Uno, DC Motors, GPS Module, PID Control, Ultrasonic Sensors, Python, C++
      </li>
      <li>
        Worked as a <strong>Research Fellow</strong> under TIH-IoT at IIT Bombay on a project focused on electric vehicle autonomy.
      </li>
      <li>
        Designed and analyzed control systems for EV steering and real-time navigation.
      </li>
      <li>
        Explored embedded intelligence for obstacle detection, load balancing, and motion control.
      </li>
      <li>
        Simulated navigation logic integrating PID tuning and GPS + sensor fusion for positioning.
      </li>
    </ul>
  </>
),

"Predictive Maintainence": (
  <>
    <div style={{ fontSize: "1.1rem", fontWeight: "bold", color: "#ffffff" }}>
      Predictive Maintenance System – BLDC Motors
    </div>
    <div style={{ color: "#437A97", marginTop: "0.3rem", marginBottom: "0.5rem" }}>
      <strong>Dec 2023 – Jan 2024</strong>
    </div>
    <p>
      A machine learning-based system designed to detect early faults in industrial BLDC motors using time-series sensor data.
      The model estimates Remaining Useful Life (RUL) and enables proactive maintenance, reducing downtime and improving operational efficiency.
    </p>
    <ul>
      <li>
        <span style={{ color: "#8c52ff", fontWeight: "bold" }}>Tools & technologies:</span> Python, Scikit-learn, Pandas, NumPy, Vibration Sensors, Thermal Monitoring
      </li>
      <li>
        Built a machine learning-based predictive maintenance pipeline for <strong>Brushless DC Motors</strong> used in industrial systems.
      </li>
      <li>
        Extracted time-series features like vibration amplitude, thermal profile, and current variations.
      </li>
      <li>
        Trained classification models to detect faults and estimate Remaining Useful Life (RUL).
      </li>
      <li>
        Enabled proactive intervention and reduced unplanned downtime.
      </li>
    </ul>
  </>
),
"Skills": (
  <>
    <div style={{ marginBottom: "1rem" }}>
    <div style={{ fontSize: "1.1rem", fontWeight: "bold", color: "#ffffff", marginBottom: "0.6rem" }}>
        Relevant Coursework:
      </div>
      <p style={{ margin: 0 }}>
        Data Structures and Algorithms, Database Management Systems, Operating Systems, Computer Networks,
        Computer Architecture, Machine Learning, Digital Design, Electronic Systems, Signal and Systems
      </p>
    </div>

    <div style={{ marginBottom: "1rem" }}>
    <div style={{ fontSize: "1.1rem", fontWeight: "bold", color: "#ffffff", marginBottom: "0.3rem" }}>
        Technical Skills:
      </div>
      <ul>
        <li>
          <span style={{ fontWeight: "bold", color: "#437A97" }}>Programming:</span> C, C++, Python, JavaScript, HTML, CSS, SQL, Verilog
        </li>
        <li>
          <span style={{ fontWeight: "bold", color: "#437A97" }}>Tools & OS:</span> Git, GitHub, MongoDB, MySQL, Google Colab, Jupyter Notebook, AWS S3, Postman
        </li>
        <li>
          <span style={{ fontWeight: "bold", color: "#437A97" }}>Libraries/Frameworks:</span> Node.js, Express.js, React.js, Flask, Tailwind CSS, Socket.io, OpenCV, Pandas, NumPy, Scikit-learn, TensorFlow, Keras
        </li>
        <li>
          <span style={{ fontWeight: "bold", color: "#437A97" }}>Other Skills:</span> JWT Authentication, REST APIs, WebSockets, Multer, AWS SDK
        </li>
      </ul>
    </div>
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
