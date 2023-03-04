import React from "react";
import NavBar from "../../../../NavBar";

import resumeSvg from "../../assets/resume.svg";
import Body from "../Body/Body";

import styles from "./Header.module.css";

function Header() {
  return (<><NavBar/>
 
    <div className={styles.containeras}>
      <div className={styles.left}>
        <p className={styles.heading}>
          A <span>Resume</span> that stands out!
        </p>
        <p className={styles.heading}>
          Make your own resume. <span>It's free</span>
        </p>
      </div>
      <div className={styles.right}>
        <img src={resumeSvg} alt="Resume" />
      </div>
    </div>
    <Body/>
    </>
  );
}

export default Header;
