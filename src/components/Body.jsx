// File: src/components/Body.jsx
import React from "react";
import Card from "./Card";
import Razer from "../assets/V3-pro.png";
import HD600 from "../assets/HD-600.webp";
import JBL from "../assets/JBL-Speaker.png";
import Wooting from "../assets/Wooting-60he.png";
import Xl2540 from "../assets/Xl2540.avif";

const Body = () => (
  <main className="card-div">
    <div className="card-grid">
      <Card
        image={Razer}
        title="Razer V3 Pro"
        items={["Ergonomic", "RGB Lighting", "Wireless"]}
      />
      <Card
        image={HD600}
        title="Sennheiser HD 600"
        items={["Open-back", "Audiophile", "Neutral Sound"]}
      />
      <Card
        image={JBL}
        title="JBL Portable Speaker"
        items={["Waterproof", "Bluetooth", "360° Sound"]}
      />
      <Card
        image={Wooting}
        title="Wooting 60HE Keyboard"
        items={["Analog Input", "Hot-swappable", "RGB"]}
      />
      <Card
        image={Xl2540}
        title="BenQ Zowie XL2540"
        items={["240Hz Refresh", "DyAc Technology", "Esports Focused"]}
      />
    </div>
  </main>
);

export default Body;
