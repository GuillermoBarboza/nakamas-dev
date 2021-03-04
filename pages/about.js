import HeadMetaTags from "../components/Head/Head";
import Nav from '../components/Nav/Nav'
import styles from "../styles/About.module.css";

export default function About() {
  return (
    <div>
      <HeadMetaTags title="About Us" />
      <Nav/>
      <h1>NAKAMABOUT</h1>
    </div>
  );
}
