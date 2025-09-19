import React from "react";
import styles from "./Card.module.css";

function Card({ title, desc, img }) {
  return (
    <div className={styles.card}>
      <img src={img} alt={title} className={styles.image} />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.desc}>{desc}</p>
    </div>
  );
}

export default Card;
