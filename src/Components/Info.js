import React from "react";
import InformationCard from "./InformationCard";
import {
  faAssistiveListeningSystems,
  faVolumeUp,
  faBatteryFull,
} from "@fortawesome/free-solid-svg-icons";
import "../Styles/Info.css";

function Info() {
  return (
    <div className="info-section" id="services">
      <div className="info-title-content">
        <h3 className="info-title">
          <span>What We Do</span>
        </h3>
        <p className="info-description">
          Our company is dedicated to crafting cutting-edge health solutions,
          specializing in innovative products like the digital stethoscope. We
          strive to redefine healthcare through technology, ensuring precision
          and efficiency in every heartbeat.
        </p>
      </div>

      <div className="info-cards-content">
        <InformationCard
          title="High Definition Audio"
          description="Our Emergency Care service is designed to be your reliable support
            in critical situations. Whether it's a sudden illness, injury, or
            any medical concern that requires immediate attention, our team of
            dedicated healthcare professionals is available 24/7 to provide
            prompt and efficient care."
            icon={faVolumeUp}

        />

        <InformationCard
          title="Exceptional Earpiece Comfort"
          description="Our team of experienced cardiologists and medical experts use
            state-of-the-art technology to assess your cardiovascular health and
            design personalized treatment plans. From comprehensive screenings
            to advanced interventions, we are committed to helping you maintain
            a healthy heart and lead a fulfilling life."
            icon={faAssistiveListeningSystems}


        />

        <InformationCard
          title="Long Battery Life"
          description="Smile with confidence as our Dental Care services cater to all your
            oral health needs. Our skilled dentists provide a wide range of
            treatments, from routine check-ups and cleanings to cosmetic
            procedures and restorative treatments."
            icon={faBatteryFull}

        />
      </div>
    </div>
  );
}

export default Info;
