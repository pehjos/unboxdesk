import React from "react";
import styles from "./head.module.css";
import { Avatar, IconButton } from "@mui/material";
import { StarOutline } from "@mui/icons-material";

import Image from "next/image";

const HeadlineCard = ({ image }) => {
  return (
    <div className={styles.headlineCard}>
      <div className={styles.image__wrapper}>
        <div className={styles.category}>
          <span>Technology</span>
        </div>
        <img className={styles.image} height={700} width={600} src={image} alt="Hi" />
        <div className={styles.cardInfo}>
          <h4 className={styles.title}>
          How to install Cydia on any iPhone Step 01: Go to www.cydiacloud.com from the Safari web browser on your iDevice Step 02: Tap on "Cydia Download" button Step 03: Cydia Cloud installer will take a few
          </h4>
          <div className={styles.bottom}>
            <div className={styles.source}>
           
              <p>Hookwal</p>
            </div>
            <div className={styles.bottomRight}>

                {" "}
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="whitesmoke" class="bi bi-bookmark-star" viewBox="0 0 16 16">
  <path d="M7.84 4.1a.178.178 0 0 1 .32 0l.634 1.285a.178.178 0 0 0 .134.098l1.42.206c.145.021.204.2.098.303L9.42 6.993a.178.178 0 0 0-.051.158l.242 1.414a.178.178 0 0 1-.258.187l-1.27-.668a.178.178 0 0 0-.165 0l-1.27.668a.178.178 0 0 1-.257-.187l.242-1.414a.178.178 0 0 0-.05-.158l-1.03-1.001a.178.178 0 0 1 .098-.303l1.42-.206a.178.178 0 0 0 .134-.098L7.84 4.1z"/>
  <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/>
</svg>
  
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeadlineCard;
