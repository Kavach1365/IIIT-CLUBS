import React from "react";
import "./ClubCouncil.css";
import data from "../../utils/clubcouncil";

const Logo = () => {
  return (
    <div>
      <div className="clubcouncil-container">
        <div className="logo-container">
          <img
            className="logo"
            alt="logo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFJwFN7MZ4YmxE2NbnsMKaXG-I0VgtMyFdpwc8Cr5PLa0EwC7dZiaktR0kGfzKktfiexg&usqp=CAU"
          />
        </div>
      </div>
    </div>
  );
};

const Description = () => {
  return (
    <div>
      <h1 className="heading">What do we do?</h1>
      <p className="description">
        As a constituent body of the{" "}
        <span className="span">Students' Life Committee (SLC), </span>the Clubs
        Council oversees all the student-driven activities and the functioning
        of the clubs. It handles the annual budget of clubs, events, coordinates
        among different clubs and helps in creating new clubs, societies and
        special interest groups.
      </p>

      <p className="description">
        The Clubs Council works closely with the institute's Students' Life
        Office, Finance Council, Outreach, IT Offices, SLC and SAC faculty
        members, and all other student administrative bodies.
      </p>

      <p className="description">
        The primary aim of the Clubs Council is to ensure that all
        student-driven organizations on campus are successful in their aim to
        cultivate diverse campus life experiences throughout the year, and
        enrich the thriving campus community outside the classroom, while
        fostering inclusion.
      </p>
    </div>
  );
};
const Card = (props) => {
  return (
    <div>
      <div className="executive-card">
        <div>
          <img className="image" src={props.imgUrl} />
        </div>
        <h1 className="name">{props.name}</h1>
        <p className="role">{props.role}</p>
        <p className="year">
          {props.startYear}-{props.endYear}
        </p>
      </div>
    </div>
  );
};

const Members = ({ category }) => {
  return (
    <div>
      <div>
        <h1 className="heading">{category}</h1>
      </div>
      <div className="executive-container">
        {data.map((item) =>
          item.category === category ? <Card {...item} /> : null
        )}
      </div>
    </div>
  );
};
const ClubCouncilTeam = () => {
  return (
    <div>
      <div>
        <h1 className="heading">The Clubs Council Team</h1>
        <p className="Description">
          The Club Coordinators are an essential part of the Clubs Council, and
          they come together to collaboratively organise and provide an
          extraordinary range of opportunities through the form of various
          events, enabling students to pursue their hobbies and develop their
          extra-curricular skills.
        </p>
        <br />
        <p className="Description">
          And then come the Club Members, who play an important role in design,
          development and execution of any event organised by the clubs, and
          contribute to the betterment of Students' Life at IIIT, Hyderabad.
        </p>
      </div>
    </div>
  );
};
const ClubCouncil = () => {
  return (
    <div>
      <Logo />
      <Description />
      <Members category="Executive" />
      <Members category="Technical" />
      <ClubCouncilTeam />
    </div>
  );
};
export default ClubCouncil;
