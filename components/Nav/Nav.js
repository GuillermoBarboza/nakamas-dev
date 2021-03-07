import styles from "./Nav.module.css";
import Link from "next/link";
import gsap from 'gsap';
import {useRef, useEffect} from 'react';

export default function Nav() {
    const home = useRef(null);
    const about = useRef(null);

    useEffect(() => {
        gsap.from(home.current, {y: -50, opacity: 0, duration: 2.2, ease: 'power4.out', delay: 1})

        gsap.from(about.current, {y: -50, opacity: 0, duration: 2.2, ease: 'power4.out', delay: 1, rotation: 360})
    }, [])
  return (
    <nav className={styles.Nav}>
      <ul>
        <li ref={home}>
          <Link  href="/">Home</Link>
        </li>
        <li ref={about}>
          <Link  href="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}
