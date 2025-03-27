import { type FunctionComponent } from "react";

import { Logo } from "@/components/atoms/logo/component";
import { Wrapper } from "@/components/atoms/wrapper/component";

import styles from "./page.module.css";

const Home: FunctionComponent = () => {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <Logo />
      </header>
      <main className={styles.main}>
        <Wrapper>This is where you can place your components</Wrapper>
      </main>
    </div>
  );
};

export default Home;
