import React, { useEffect } from "react";
import "./About.css";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="about">
      <div className="about-title">
        <h2>About Us</h2>
        <p>Home / About Us</p>
      </div>
      <div className="about-body">
        <h2>
          The first thing to remember about success is that it is a process �
          nothing more, nothing less.
        </h2>
        <p>
          The other virtues practice in succession by Franklin were silence,
          order, resolution, frugality, industry, sincerity, Justice,
          moderation, cleanliness, tranquility, chastity and humility. For the
          summary order he followed a little scheme of employing his time each
          day. From five to seven each morning he spent in bodily personal
          attention, saying a short prayer, thinking over the day�s business and
          resolutions, studying and eating breakfast. From eight till twelve he
          worked at his trade. From twelve to one he read or overlooked his
          accounts and dined. From two to five he worked at his trade. The rest
          of the evening until 10 he spent in music, or diversion of some sort.
          This time is used also to put things in their places.
        </p>
        <div className="about-team">
          <h1>Meet Our Team</h1>
          <p>
            We also know those epic stories, those modern-day legends
            surrounding the early failures of such supremely successful folks as
            Michael Jordan and Bill Gates.
          </p>
          <div className="about-team-container">
            <div className="about-team-box">
              <img
                src="https://ciyashop.potenzaglobalsolutions.com/cookware/wp-content/uploads/sites/90/2017/03/team-9-450x635.jpg"
                alt="about-img"
              />
              <div className="about-team-content">
                <h3>PAUL FLAVIUS</h3>
                <p>Site Supervisor</p>
              </div>
            </div>
            <div className="about-team-box">
              <img
                src="https://ciyashop.potenzaglobalsolutions.com/cookware/wp-content/uploads/sites/90/2017/03/team-10-450x635.jpg"
                alt="about-img"
              />
              <div className="about-team-content">
                <h3>FELICA QUEEN</h3>
                <p>Safety Officer</p>
              </div>
            </div>
            <div className="about-team-box">
              <img
                src="https://ciyashop.potenzaglobalsolutions.com/cookware/wp-content/uploads/sites/90/2017/03/team-2-450x635.jpg"
                alt="about-img"
              />
              <div className="about-team-content">
                <h3>JOANA WILLIAMS</h3>
                <p>CTO</p>
              </div>
            </div>
            <div className="about-team-box">
              <img
                src="https://ciyashop.potenzaglobalsolutions.com/cookware/wp-content/uploads/sites/90/2017/03/team-1-450x635.jpg"
                alt="about-img"
              />
              <div className="about-team-content">
                <h3>MELLISA DOE</h3>
                <p>Support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;