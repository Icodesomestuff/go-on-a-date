"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { Row, Col, Space, Button, Typography } from "antd";
import { useState, useEffect } from "react";

export default function Home() {
  const [buttonPosition, setButtonPosition] = useState({
    x: "auto",
    y: "auto",
  });

  useEffect(() => {
    const updateButtonPosition = () => {
      const yesButton = document.getElementById("yesButton");
      const noButton = document.getElementById("noButton");
      if (yesButton && noButton) {
        
        const buttonWidth = noButton.offsetWidth;
        const buttonHeight = noButton.offsetHeight;

        const maxX = window.innerWidth - buttonWidth;
        const maxY = window.innerHeight - buttonHeight;

        const x = yesButton.offsetLeft + yesButton.offsetWidth + 10; // 10 is just for spacing
        const y = Math.random() * maxY;

        setButtonPosition({ x, y });
      }
    };

    window.addEventListener("resize", updateButtonPosition);

    return () => {
      // Cleanup event listener on component unmount
      window.removeEventListener("resize", updateButtonPosition);
    };
  // Call the function to set the initial position
  // updateButtonPosition();

  // window.addEventListener("resize", updateButtonPosition);

  // return () => {
  //   // Cleanup event listener on component unmount
  //   window.removeEventListener("resize", updateButtonPosition);
  // };
  }, []); // Empty dependency array ensures this runs only once

  const moveButton = () => {
    const button = document.getElementById('noButton');
    if (button) {
      const buttonWidth = button.offsetWidth;
      const buttonHeight = button.offsetHeight;

      const maxX = window.innerWidth - buttonWidth;
      const maxY = window.innerHeight - buttonHeight;

      const maxWidth = 500; // Adjust based on your constraints
      const maxHeight = 500; // Adjust based on your constraints

      const x = Math.random() * Math.min(maxX, maxWidth);
      const y = Math.random() * Math.min(maxY, maxHeight);

      setButtonPosition({ x, y });
    }
  };
  return (
    <Row className={styles.main}>
      <Col>
        <h1 className="text">Would you like to go on a date with me ?</h1>
        <div className={styles.gif_container}>
          <Image
            src="/firstBear.gif"
            alt="Next.js Logo"
            width={250}
            height={300}
            priority
          />
        </div>
        <div className={styles.buttons}>
            <Button
              id="yesButton"
              shape="round"
              size={"middle"}
              style={{
                display: "inline-flex",
                alignItems: "center",
                backgroundColor: "#b366ff",
                transition: "backgroundColor 0.3s ease",
                border: "none",
                boxShadow:
                  "0 4px 6px rgba(0, 0, 0, 0.1), 0 8px 10px rgba(0, 0, 0, 0.1)",
                  position:"absolute",
                  marginRight:"150px",
              }}
            >
              <Image src="heart.svg" height={20} width={21} />
              <Typography
                style={{
                  padding: "4px",
                  color: "#f6aca2",
                  fontFamily: "Nunito",
                  fontWeight: "bolder",
                  fontSize: "18px",
                }}
              >
                YES
              </Typography>
            </Button>
            <Button
              id="noButton"
              shape="round"
              size={"middle"}
              onMouseOver={moveButton}
              style={{
                display: "inline-flex",
                alignItems: "center",
                backgroundColor: "#b366ff",
                transition: "0.3s",
                border: "none",
                boxShadow:
                  "0 4px 6px rgba(0, 0, 0, 0.1), 0 8px 10px rgba(0, 0, 0, 0.1)",
                left: `${ buttonPosition.x}px`,
                top: `${buttonPosition.y}px`,
                position: "absolute",
                marginLeft:"150px",
                
              }}
            >
              <Image src="brokenHeart.svg" height={20} width={20} />
              <Typography
                style={{
                  padding: "4px",
                  color: "#f6aca2",
                  fontFamily: "Nunito",
                  fontWeight: "bolder",
                  fontSize: "18px",
                }}
              >
                NO
              </Typography>
            </Button>
        </div>
      </Col>
    </Row>
  );
}
