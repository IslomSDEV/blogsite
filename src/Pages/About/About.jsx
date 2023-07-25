import React from "react";
import "./About.css";
import blog from "../../Assets/Images/blog.jpg";
import workstation from "../../Assets/Images/workstation.png";
import prof from "../../Assets/Images/prof.jpg";

export function About() {
  return (
    <div className="about">
      <h2 className="aboutTitle">ABOUT ME</h2>
      <div className="container aboutCont">
        <div className="infoBox">
          <p className="aboutMe">
            I am Azimjon Pulatov, a 22-year-old{" "}
            <strong>Software Engineer </strong>from Tashkent, Uzbekistan,
            currently living in Warsaw, Poland.
          </p>
          <p className="aboutMe">
            I am always contributing to developer events by giving a talk or as
            a mentor, especially the ones that engage women in tech. As a
            developer, I really want to see more diversity in the industry.
          </p>
          <img className="aboutImg" src={blog} alt="For Blog" />
          <span className="spanText">DjangoGirls, Tashkent</span>
          <p className="aboutMe">
            Recently I experimented working standing and found it really useful
            to stay focused and a little healthier. I was able to transform my
            workstation with the books I read.
          </p>
          <img className="aboutImg" src={workstation} alt="Workstation" />
          <span className="spanText">Super Dispatch, Tashkent office</span>
          <p className="aboutMe">
            I am also known as "lazy programmer", very handy nature for
            programmers. I love repetitive tasks, I see them as an opportunity
            for automation. Also, whenever I am not working standing, you find
            me working laying on a sofa.
          </p>
          <img className="aboutImg" src={prof} alt="My picture" />
          <span className="spanText">GroundZero Chilanzar, Tashkent</span>
          <p className="aboutMe">
            In short, it's me, Azimjon, a friendly programmer from Uzbekistan.
            You can read my story of becoming a software engineer here.
          </p>
        </div>
      </div>
    </div>
  );
}
