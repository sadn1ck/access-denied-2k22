import React from "react";
import Footer from "./Footer";
import "../css/Rules.css";
import Men from "./Men";

const Rules = () => {
  return (
    <section className="rules-section">
      <Men />
      <div className="rules-container">
        <div className="head">
          <center>
            <h1>Rules</h1>
          </center>
        </div>
        <div className="body">
          <ul>
            <li>
              Our primary method of communication for the CTF will be Discord.
              All the relevant discussions and announcements during the contest
              are to be posted on this discord channel.
            </li>
            <li>
              ACCESS DENIED 2022 is a jeopardy CTF. You do not need to set up a
              VPN environment.
            </li>
            <li>
              Each participant can register to be part of only one team. There
              is no limitation on the number of participants in a single team.
              All participants of the same team should only use one team
              account.
            </li>
            <li>
              Teams partaking in illegal actions such as sharing flags or
              solutions during the contest will be disqualified.
            </li>
            <li>
              Attacking machines other than those designated as ACCESS DENIED
              2022 target machines is prohibited.
            </li>
            <li>
              If you think you have a valid flag that the system rejects, please
              contact us.
            </li>
            <li>
              If you find a bug in the contest infrastructure, please report it
              to us.
            </li>
            <li>
              ACCESS DENIED 2022 uses a dynamic scoring scheme. The points for
              each flag are fixed and no breakthrough points will be awarded.
            </li>
            <li>In order to claim prizes, problem writeups are required.</li>
            <li>Prizes are TBA.</li>
            <li>
              If you are not sure if something is a violation of the rules, ask
              us!
            </li>
            <li>Do not brute force infrastructure or flags.</li>
            <li>
              There is no need to use automated scanners on any of the
              challenges.
            </li>
            <li>
            Don’t horde flags to rise to the top instantly.
            </li>
            <li>
              Flag format for the CTF is accessdenied{"{*}"}.
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Rules;
