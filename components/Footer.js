import styles from "../styles/Footer.module.scss";
import Container from "./Container";
import Link from "next/link";

const footerMenus = [
  {
    path: "/",
    label: "Home",
  },
  {
    path: "/",
    label: "Adversite",
  },
  {
    path: "/",
    label: "Supports",
  },
  {
    path: "/",
    label: "Marketing",
  },
  {
    path: "/contact",
    label: "Contact",
  },
];

export default function Footer() {
  return (
    <footer>
      <Container>
        <div className={styles.bottom_area}>
          <Link href="/">
            <a>
              <img src="/logo.svg" alt="logo" />
            </a>
          </Link>
          <div className={styles.menu}>
            <nav>
              {footerMenus.map((menu, index) => (
                <Link href={menu.path} key={index}>
                  <a className={styles.link}>{menu.label}</a>
                </Link>
              ))}
            </nav>
          </div>
          <p className={styles.copyright}> Made With Love by @ShofiqulMiraz </p>
        </div>
      </Container>
    </footer>
  );
}
