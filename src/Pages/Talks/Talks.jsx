import React, { useContext, useState } from "react";
import { Context } from "../../Components/Context/Context";
import { BsArrowRight } from "react-icons/bs";
import "./Talks.css";

export function Talks() {
  const { handleModal, setHandleModal } = useContext(Context);
  const talksData = JSON.parse(localStorage.getItem("talks"));

  return (
    <div className="talk">
      <h2 className="talkTitle">TALKS</h2>
      <div className="container talkCont">
        <div className="talksLeft">
          <button
            className="talksCreateBtn"
            onClick={() => setHandleModal(true)}
          >
            Create
          </button>
          <ul className="talksMovement">
            {talksData.map((item) => {
              return (
                <li key={item.id} className="talksItem">
                  <div className="itemFlex">
                    <div className="itemImgBox">
                      <img className="itemImg" src={item.image} alt="Picture" />
                    </div>
                    <div className="talksInfoBox">
                      <span className="itemDate">{item.date}</span>
                      <h4 className="itemTitle">{item.title}</h4>
                      <BsArrowRight className="itemArrow" />
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="talksRight">
          <div className="fixedBox">
            <h3 className="newsletterTitle">NEWSLETTER</h3>
            <p className="newsletterParagraf">
              Subscribe to{" "}
              <a className="blogLink" href="#">
                @lazyprogrammer
              </a>{" "}
              telegram channel where I share my new courses, articles, talks and
              more.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
