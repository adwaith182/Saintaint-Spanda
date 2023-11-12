import React from "react";
import Doctor from "../Assets/doctor-group.png";
import SolutionStep from "./SolutionStep";
import "../Styles/About.css";

function About() {
  return (
    <div className="about-section" id="about">
      <div className="about-image-content">
        <img src={Doctor} alt="Doctor Group" className="about-image1" />
      </div>

      <div className="about-text-content">
        <h3 className="about-title">
          <span>About Us</span>
        </h3>
        <p className="about-description">
          Welcome to saintaint, your trusted partner for accessible and
          personalized product. Our product offer your well-being. Join us on
          this journey towards a healthier you.
        </p>

        <h4 className="about-text-title">Your Solutions</h4>

        <SolutionStep
          title="Choose a product"
          description="Find your perfect product and book with ease at Spanda."
        />

        <SolutionStep
          title="Make a Schedule"
          description="Choose the date and time that suits you best"
        />

        <SolutionStep
          title="Get Your product"
          description="Our Team will deliver you the aproduct, helping you achieve your best possible health."
        />
      </div>
    </div>
  );
}

export default About;
