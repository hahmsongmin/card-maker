import React, { memo } from "react";
import styles from "./footer.module.css";

const Footer = memo(() => {
  return (
    <section className={styles.footer}>
      <h1 className={styles.title}>ⓒ IvanSelah</h1>
    </section>
  );
});

export default Footer;
