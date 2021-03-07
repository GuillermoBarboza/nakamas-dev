import HeadMetaTags from "../components/Head/Head";
import Nav from "../components/Nav/Nav";
import styles from "../styles/Home.module.css";


export default function Home() {


  return (
    <>
      <HeadMetaTags title="Home" />
      <Nav />
      <div className={styles.container}>
        <h1 className={styles.animatedTitle}>Container</h1>
      </div>
    </>
  );
}
