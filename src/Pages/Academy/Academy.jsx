import React from "react";
import "./Academy.css";

export function Academy() {
  const academyApi = [
    {
      id: 1,
      img: "https://azimjon.com/media/courses/algorithms.png",
      text: "KURS",
      price: "NARXI: 249K so'm BEPUL",
      title: "Algoritmlar: Kirish",
      desc: "Ma'lumot tuzilmalari, qidiruv algoritmlari, rekursiya va boshqa muhim algoritmik g'oyalar haqida o'rganamiz.",
      btn: "Kursni boshlash",
      isOpen: true,
    },
    {
      id: 2,
      img: "https://azimjon.com/media/courses/python.png",
      text: "KURS",
      price: "TEZ KUNLARDA",
      title: "Python Asoslari",
      desc: "Python dastulash tili va standart kutubxonasini boshdan oyoq ko'rib chiqamiz. Ajoyib loyihalar yaratib, muammolar yechishni o'rganamiz.",
      btn: "Kursni boshlash",
      isOpen: false,
    },
    {
      id: 3,
      img: "https://azimjon.com/media/courses/golang.png",
      text: "KURS",
      price: "TEZ KUNLARDA",
      title: "Go Dasturlash Tili",
      desc: "Go dasturlash tiliga sayohat, ma'lumot tuzilmalari, standart kutubxonasi, konkurent dasturlar ustida ishlash haqida o'rganamiz.",
      btn: "Kursni boshlash",
      isOpen: false,
    },
    {
      id: 4,
      img: "https://azimjon.com/media/courses/devops.png",
      text: "KURS",
      price: "TEZ KUNLARDA",
      title: "Zamonaviy DevOps",
      desc: "DevOps'ning muhim g'oyalari, Linux Operatsion Tizimi, Bash, Docker, Kubernetes haqida no'ldan o'rganamiz.",
      btn: "Kursni boshlash",
      isOpen: false,
    },
  ];

  return (
    <div className="academy">
      <h2 className="academyTitle">ACADEMY</h2>
      <div className="container academyCont">
        <div className="academyCours">
          <ul className="academyCoursList">
            {academyApi.map((item) => {
              return (
                <li key={item.id} className="academyItem">
                  <div className="imageDiv">
                    <img className="itemImages" src={item.img} alt="Picture" />
                  </div>
                  <div className="infoDiv">
                    <div className="itemTopFlex">
                      <span className="itemNamePrice nm">{item.text}</span>
                      <span className="itemNamePrice pc">{item.price}</span>
                    </div>
                    <h3 className="academyItemTitle">{item.title}</h3>
                    <p className="academyItemDesc">{item.desc}</p>
                    {item.isOpen ? (
                      <button className="itemBtnStart">{item.btn}</button>
                    ) : null}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
