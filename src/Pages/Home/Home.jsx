import React from "react";
import heroImg from "../../Assets/Images/hero.jpg";
import { FaYoutube, FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Home.css";

export function Home() {
  return (
    <div>
      <div className="container homeCont">
        <div className="heroBox">
          <div>
            <div className="imgAndTitle">
              <img className="heroImg" src={heroImg} alt="Islombek picture" />
              <div className="titleBox">
                <h1 className="heroName">Islombek Ermamatov</h1>
                <h3 className="heroJob">Front End Developer</h3>
                <span>
                  <FaYoutube className="heroSocial" />
                  <FaGithub className="heroSocial" />
                  <FaLinkedin className="heroSocial" />
                  <FaTelegram className="heroSocial" />
                </span>
              </div>
            </div>
            <p className="heroDesc">
              I write about non-technical stuff in the technical world.
            </p>
            <div>
              <Link to={"/blog"}>
                <button className="herobtnRead homeBtn">Read Blog</button>
              </Link>
              <Link to={"/about"}>
                <button className="herobtnAbout homeBtn">About me</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
