import React from "react";
import "./Blog.css";
import { BsArrowRight } from "react-icons/bs";

export function Blog() {
  return (
    <div className="blog">
      <h2 className="blogTitle">BLOG</h2>
      <div className="container blogCont">
        <div className="blogBox">
          <div className="blogLeft">
            <ul className="blogMovements">
              {/* 2022 */}
              <li className="august item twentyTwo">
                <h4 className="monthName">August</h4>
                <p className="blogDesc">
                  <span>01 August, 2022</span>
                  Amazon'dan Offer Oldim
                  <BsArrowRight className="itemIcon" />
                </p>
              </li>
              {/* 2022 April */}
              <li className="april item">
                <h4 className="monthName">April</h4>
                <p className="blogDesc">
                  <span>09 April, 2022</span>
                  100ta Interyu Nimani O'rgatadi?
                  <BsArrowRight className="itemIcon" />
                </p>
              </li>

              {/* 2021 */}
              {/* 2021 november */}
              <li className="november item twentyOne">
                <h4 className="monthName">November</h4>
                <p className="blogDesc">
                  <span>30 November, 2021</span>
                  Bloomberg'dan Offer Oldim
                  <BsArrowRight className="itemIcon" />
                </p>
                <p className="blogDesc">
                  <span>01 November, 2021</span>
                  Facebook'dan Offer Oldim
                  <BsArrowRight className="itemIcon" />
                </p>
              </li>
              {/* 2021 june  */}
              <li className="june item">
                <h4 className="monthName">June</h4>
                <p className="blogDesc">
                  <span>30 June, 2021</span>
                  Yandex'ga Topshirish Haqida
                  <BsArrowRight className="itemIcon" />
                </p>
                <p className="blogDesc">
                  <span>26 June, 2021</span>
                  Toptal'ga Topshrish Haqida
                  <BsArrowRight className="itemIcon" />
                </p>
              </li>
              {/* 2021 April */}
              <li className="april item">
                <h4 className="monthName">April</h4>
                <p className="blogDesc">
                  <span>25 April, 2021</span>
                  Universitetda O'qishga 7 Sabab
                  <BsArrowRight className="itemIcon" />
                </p>
                <p className="blogDesc">
                  <span>01 April, 2021</span>
                  Dasturchi bo'lmang
                  <BsArrowRight className="itemIcon" />
                </p>
              </li>
              {/* 2021 March */}
              <li className="march item">
                <h4 className="monthName">March</h4>
                <p className="blogDesc">
                  <span>28 March, 2021</span>
                  Birinchi ishni Topish Haqida
                  <BsArrowRight className="itemIcon" />
                </p>
                <p className="blogDesc">
                  <span>01 March, 2021</span>
                  Nega Kitoblardan O'rganish Foydaliroq
                  <BsArrowRight className="itemIcon" />
                </p>
              </li>
              {/* 2021 january */}
              <li className="january item">
                <h4 className="monthName">January</h4>
                <p className="blogDesc">
                  <span>16 January, 2021</span>
                  Yaxshi Resumi Tayorlash Haqida
                  <BsArrowRight className="itemIcon" />
                </p>
                <p className="blogDesc">
                  <span>06 January, 2021</span>
                  Yozgi Intership Haqida
                  <BsArrowRight className="itemIcon" />
                </p>
              </li>
              {/* 2020 */}
              {/* 2020 december */}
              <li className="december item twenty">
                <h4 className="monthName">December</h4>
                <p className="blogDesc">
                  <span>22 December, 2020</span>
                  Why I Don't Like Subscriptions
                  <BsArrowRight className="itemIcon" />
                </p>
                <p className="blogDesc">
                  <span>04 December, 2020</span>
                  Taking Adavantage of Remote Work
                  <BsArrowRight className="itemIcon" />
                </p>
              </li>
              {/* 2020 October */}
              <li className="october item">
                <h4 className="monthName">October</h4>
                <p className="blogDesc">
                  <span>27 October, 2020</span>
                  Howthorne Effect
                  <BsArrowRight className="itemIcon" />
                </p>
              </li>
              {/* 2020 august */}
              <li className="august item">
                <h4 className="monthName">August</h4>
                <p className="blogDesc">
                  <span>31 August, 2020</span>
                  Home Office Setup for Productivity
                  <BsArrowRight className="itemIcon" />
                </p>
                <p className="blogDesc">
                  <span>16 August, 2020</span>
                  What Teaching Has Taught Me
                  <BsArrowRight className="itemIcon" />
                </p>
              </li>
              {/* 2020 june */}
              <li className="june item">
                <h4 className="monthName">June</h4>
                <p className="blogDesc">
                  <span>10 June, 2020</span>
                  Focus is About Saying No
                  <BsArrowRight className="itemIcon" />
                </p>
              </li>
              {/* 2020 may */}
              <li className="may item">
                <h4 className="monthName">May</h4>
                <p className="blogDesc">
                  <span>29 May, 2020</span>
                  Book Review: Living by The Code
                  <BsArrowRight className="itemIcon" />
                </p>
                <p className="blogDesc">
                  <span>13 May, 2020</span>
                  Side Projects for Professional Growth
                  <BsArrowRight className="itemIcon" />
                </p>
              </li>
              {/* 2020 April */}
              <li className="april item">
                <h4 className="monthName">April</h4>
                <p className="blogDesc">
                  <span>20 April, 2020</span>
                  It's All About The Priorities
                  <BsArrowRight className="itemIcon" />
                </p>
                <p className="blogDesc">
                  <span>09 April, 2020</span>
                  My Journey of Becoming a Software Engineer
                  <BsArrowRight className="itemIcon" />
                </p>
              </li>
              {/* 2019 */}
              {/* 2019 February */}
              <li className="february item nineTeen">
                <h4 className="monthName">February</h4>
                <p className="blogDesc">
                  <span>27 February, 2019</span>
                  Recommendation Letter by J.Rakhmonov
                  <BsArrowRight className="itemIcon" />
                </p>
              </li>
            </ul>
          </div>
          <div className="blogRight">
            <div className="fixedBox">
              <h3 className="newsletterTitle">NEWSLETTER</h3>
              <p className="newsletterParagraf">
                Subscribe to{" "}
                <a className="talkLink" href="#">
                  @lazyprogrammer
                </a>{" "}
                telegram channel where I share my new courses, articles, talks
                and more.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
