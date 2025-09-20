import React from "react";
import styles from "./Hero.module.css";
import Card from "../Cards/Card";

function Hero() {
  const cards = [
    { id: 1, title: "Web Development", desc: "Modern, scalable websites with React & Next.js.", img: "/images/web.jpg" },
    { id: 2, title: "UI/UX Design", desc: "Creative user-friendly designs using Figma.", img: "/images/uiux.jpg" },
    { id: 3, title: "Mobile Apps", desc: "Hybrid mobile apps with smooth experience.", img: "/images/mobile.jpg" },
    { id: 4, title: "API Integration", desc: "Dynamic apps with real-time API data.", img: "/images/api.jpg" },
    { id: 5, title: "CMS Solutions", desc: "Manage content easily with Sanity CMS.", img: "/images/cms.jpg" },
    { id: 6, title: "Performance", desc: "Optimized, fast-loading web applications.", img: "/images/performance.webp" },
    { id: 7, title: "E-Commerce", desc: "Custom online stores with secure payments.", img: "/images/ecomerce.jpg" },
    { id: 8, title: "Cloud Hosting", desc: "Deploy apps with reliable cloud solutions.", img: "/images/cloud.jpeg" },
  ];

  return (
    <section className={styles.hero}>
      <h1 className={styles.heading}>Our Expertise at DevStudio</h1>
      <div className={styles.cardGrid}>
        {cards.map((card) => (
          <Card key={card.id} title={card.title} desc={card.desc} img={card.img} />
        ))}
      </div>
    </section>
  );
}

export default Hero;
