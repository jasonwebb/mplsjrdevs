import React from 'react';
import EventImage from '../images/mplsjrdevs1.jpg';

const About = () => {
  return (
    <section id="about" tabindex="-1">
      <div className="content-wrap">
        <h2>About Mpls Jr Devs</h2>
        <p>
          Our priority is to make space for aspiring and less experienced
          software engineers to meet, learn from, and share experiences with one
          another.
        </p>
        <p>
          We put on monthly events to help both ourselves and others like us.
        </p>
      </div>

      <img
        src={EventImage}
        alt="Mpls Jr Devs Event at Lake Monster Brewing"
        className="responsive"
      />
    </section>
  );
};

export default About;
