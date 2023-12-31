"use client";
import styles from "../page.module.css";
import { Row, Col } from "antd";
import Image from "next/image";

export default function YesPage() {

  return (
    <Row className={styles.main}>
      <Col>
        <h1 className="text">Good Decision</h1>
        <div className={styles.gif_container}>
          <Image
            src="/yesBear.gif"
            alt="No image found"
            width={250}
            height={300}
            priority
          />
        </div>
      </Col>
    </Row>
  );
}
