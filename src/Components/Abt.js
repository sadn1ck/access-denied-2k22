import React, { useRef } from "react";
import { Link } from "react-router-dom";
import abtImg from "../assets/img/abt/about.svg";
import "../css/Abt.css";
import useAbtBtn from "./hooks/useAbtBtn";
import useAbtHeadAnim from "./hooks/useAbtHeadAnim";
import useAbtImg from "./hooks/useAbtImg";
import useAccDesc from "./hooks/useAccDec";
import useAccDen from "./hooks/useAccDen";
import useNavObsToChangeColor from "./hooks/useNavObsToChangeColor";

const Abt = () => {
  const abtHeadRef = useRef();
  const accDenRef = useRef();
  const accDescRef = useRef();
  const accBtnRef = useRef();
  const accImgRef = useRef();

  useAbtHeadAnim(
    {
      root: null,
      rootMargin: "0px",
      threshold: "0.3",
    },
    abtHeadRef
  );
  useAccDen(
    {
      root: null,
      rootMargin: "0px",
      threshold: "0.3",
    },
    accDenRef
  );
  useAccDesc(
    {
      root: null,
      rootMargin: "0px",
      threshold: "0.3",
    },
    accDescRef
  );
  useAbtBtn(
    {
      root: null,
      rootMargin: "0px",
      threshold: "0.3",
    },
    accBtnRef
  );

  useAbtImg(
    {
      root: null,
      rootMargin: "0px",
      threshold: "0.3",
    },
    accImgRef
  );

  return (
    <section className="abt-section" id="about">
      <div className="abt-container">
        <div className="heading" ref={abtHeadRef}>
          <center>
            <h1>ABOUT US</h1>
          </center>
        </div>
        <div className="abt-main">
          <div className="abt-1">
            <div className="abt-head" ref={accDenRef}>
              <h2>ACCESS DENIED 2022</h2>
            </div>
            <div className="abt-desc" ref={accDescRef}>
              <p>
                CodeIIEST is one of the newest clubs of the Indian Institute of
                Engineering Science and Technology, Shibpur. Since its inception
                in November of 2014, the club has been actively involved in the
                development of comprehensive computer science abilities among
                students. The group is made up of a variety of interests and
                serves as a fantastic hub for a variety of instructive and
                interactive programs. The students stay up to date on new
                technology, which helps them improve their skills and foster
                creativity and innovation.
              </p>
            </div>
            <div className="abt-btn" ref={accBtnRef}>
              <a className="abt-btn-style" target="_blank" href="https://discord.com/invite/2DBxyHaUX2">
                Join Discord
              </a>
            </div>
          </div>
          <div className="abt-2">
            <div className="abt-img-div" ref={accImgRef}>
              <img src={abtImg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Abt;
