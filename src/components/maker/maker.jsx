import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Editor from "../editor/editor";
import Footer from "../footer/footer";
import Header from "../header/header";
import Preview from "../preview/preview";
import styles from "./maker.module.css";

const Maker = ({ authService }) => {
  const [cards, setCards] = useState({
    1: {
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
    2: {
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
    3: {
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
  });

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

  const addOrUpdateCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
  };
  const deleteCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
  };

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor
          cards={cards}
          addCard={addOrUpdateCard}
          updateCard={addOrUpdateCard}
          deleteCard={deleteCard}
        />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
