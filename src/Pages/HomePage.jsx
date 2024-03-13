import React from "react";
import "../Styles/HomePage.css";
import homeImg1 from "../assets/homeImg1.png";
import homeImg2 from "../assets/homeImg2.png";
import homeImg3 from "../assets/homeImg3.png";
import homeImg4 from "../assets/homeImg4.png";
import homeImg5 from "../assets/homeImg5.png";
import homeImg6 from "../assets/homeImg6.png";
import homeImg7 from "../assets/homeImg7.png";
import homeImg8 from "../assets/homeImg8.png";
import homeImg9 from "../assets/homeImg9.png";
import homeImg10 from "../assets/homeImg10.png";
import homeImg11 from "../assets/homeImg11.png";
import homeImg12 from "../assets/homeImg12.png";
import homeImg13 from "../assets/homeImg13.png";
import homeSvg1 from "../assets/homeSvg1.svg";
import homeSvg2 from "../assets/homeSvg2.svg";
import homeSvg3 from "../assets/homeSvg3.svg";
import homeSvg4 from "../assets/homeSvg4.svg";
import homeSvg5 from "../assets/homeSvg5.png";

const HomePage = () => {
  return (
    <div className="home">
      <div className="div1">
        <img src={homeImg1} alt="" />
        <img src={homeImg2} alt="" />
      </div>
      <div className="div2">
        <div>
          <p>
            <h3>
              Our commitment to all-round development shines in diverse
              extracurricular activities.
            </h3>
            <br />
            <span>{`(Our Students love that!)`}</span>
          </p>
          <img src={homeImg3} alt="" /> <br />
          <button className="activity">
            SEE ALL ACTIVITIES <span>{`-->`}</span>
          </button>
        </div>
        <div>
          <img src={homeImg4} alt="" />
        </div>
        <div>
          <img src={homeImg5} alt="" />
          <img src={homeImg5} alt="" />
        </div>
      </div>
      <div className="div3">
        <img src={homeImg6} alt="" />
      </div>
      <div className="div4">
        <div>
          <img src={homeImg7} alt="" />
        </div>
        <div>
          <p>
            <span className="paraSpan">
              At Tula’s, we ask, “How can we make school better?”
            </span>{" "}
            <br />
            Using the latest research on how girls learn best, we designed an
            innovative modular schedule, personalized for each student. Our
            girls are focused, not overwhelmed. “Girls Rule” isn’t just a saying
            here. Develop leadership skills, build compassion, gain
            responsibility, and prepare to change the world.
          </p>
          <button className="activity">
            LEARN MORE <span>{`->`}</span>
          </button>
        </div>
      </div>
      <div className="div5">
        <div>
          <h3>
            <span className="heading">Why</span>{" "}
            <span className="paraSpan">TIS ?</span>
          </h3>
        </div>
        <div>
          <div>
            <p>
              <span className="heading">A FOCUS ON...</span> <br />
              <span className="paraSpan">MANAGEMENT</span> <br />
              Extremely Friendly and Approachable Management. Tula’s
              International School combines – respect for tradition with a
              progressive application of modern sciences, academic rigour with a
              caring heart, and individual appreciation with the warmth of a
              school community
            </p>
          </div>
          <div>
            <img src={homeImg8} alt="" />
          </div>
          <div>
            <img src={homeSvg1} alt="" />
            <img src={homeSvg2} alt="" />
            <img src={homeSvg3} alt="" />
            <img src={homeSvg4} alt="" />
            <img className="management" src={homeSvg5} alt="" />
          </div>
        </div>
      </div>
      <div className="div6">
        <img src={homeImg9} alt="" />
        <img src={homeImg10} alt="" />
      </div>
      <div className="div7">
        <div>
          <img src={homeImg11} alt="" />
          <img src={homeImg12} alt="" />
        </div>
        <div>
          <img src={homeImg4} alt="" />
        </div>
        <div>
          <p>
            Awards and achievements, gleaming in sight, Honor efforts and
            perseverance in flight. <br />
            <span>{`(Everybody loves that)`}</span>
          </p>
          <img src={homeImg12} alt="" />
          <button className="activity">
            SEE ALL REWARDS <span>{`-->`}</span>
          </button>
        </div>
      </div>
      <div className="div8">
        <div>
          <h3>
            <span className="heading">From The</span> <br />
            <span className="paraSpan">Parents</span>
          </h3>
          <hr className="horizontal" />
          <p>
            What stands out to us is the school's emphasis on individualized
            attention. Our child's teachers have been attentive to their unique
            needs, providing the support and encouragement necessary for their
            academic success.
          </p>
        </div>
        <div>
          <img src={homeImg13} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
