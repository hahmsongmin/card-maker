import React, { useEffect } from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import styles from "./login.module.css";
import { useHistory } from "react-router";

const Login = ({ authService }) => {
  const history = useHistory();
  const loginDone = (userId) => {
    history.push({
      pathname: "/maker",
      state: { id: userId },
    });
  };
  const onLogin = (event) => {
    authService //
      .login(event.currentTarget.textContent)
      .then((data) => loginDone(data.user.uid));
  };

  useEffect(() => {
    authService //
      .onAuthChange((user) => {
        user && loginDone(user.uid);
      });
  });

  return (
    <section>
      <Header />
      <section className={styles.login}>
        <h1 className={styles.title}>Login</h1>
        <ul className={styles.items}>
          <li className={styles.item}>
            <button className={styles.button} onClick={onLogin}>
              <i className="fab fa-google"></i>
              <span>Google</span>
            </button>
          </li>
          <li className={styles.item}>
            <button className={styles.button} onClick={onLogin}>
              <i className="fab fa-github"></i>
              <span>Github</span>
            </button>
          </li>
        </ul>
      </section>
      <Footer />
    </section>
  );
};

export default Login;
