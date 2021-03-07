import HeadMetaTags from "../components/Head/Head";
import Nav from "../components/Nav/Nav";
import styles from "../styles/Home.module.css";
import gsap from 'gsap';
import {useRef, useEffect} from 'react';
export default function Home() {
  return (
    <>
      <HeadMetaTags title="Home" />
      <Nav />
      <div className={styles.container}>
        Container
      </div>
    </>
  );
}
