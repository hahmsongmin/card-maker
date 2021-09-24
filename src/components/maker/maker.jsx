import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Editor from "../editor/editor";
import Footer from "../footer/footer";
import Header from "../header/header";
import Preview from "../preview/preview";
import styles from "./maker.module.css";

const Maker = ({ authService }) => {
  const [cards, setCards] = useState([
    {
      id: "1",
      name: "songmin",
      company: "google",
      theme: "light",
      title: "software engineer",
      email: "tft0720@gmail.com",
      message: "go for it",
      fileName: "IvanSelah",
      fileURL: null,
    },
    {
      id: "2",
      name: "songmin2",
      company: "google",
      theme: "dark",
      title: "software engineer",
      email: "tft0720@gmail.com",
      message: "go for it",
      fileName: "IvanSelah",
      fileURL: null,
    },
    {
      id: "3",
      name: "songmin3",
      company: "google",
      theme: "colorful",
      title: "software engineer",
      email: "tft0720@gmail.com",
      message: "go for it",
      fileName: "IvanSelah",
      fileURL: null,
    },
  ]);

  const history = useHistory();

  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        history.push("/");
      }
    });
  });

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor cards={cards} />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
