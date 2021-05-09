import styles from "../styles/Nav.module.scss";
import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const navLinks = [
  {
    path: "/",
    label: "home",
  },
  {
    path: "/features",
    label: "features",
  },
  {
    path: "/pricing",
    label: "pricing",
  },
  {
    path: "/testimonial",
    label: "testimonial",
  },
];

export default function Nav() {
  const router = useRouter();
  const [mobilemenuopen, setmobilemenuopen] = useState(false);
  const handleMenuOpen = () => {
    setmobilemenuopen(true);
  };
  const handleMenuClose = () => {
    setmobilemenuopen(false);
  };
  return (
    <nav className={styles.nav}>
      <div
        className={styles.logo}
        onClick={() => {
          router.push("/");
          setmobilemenuopen(false);
        }}
      >
        <img src="/logo.svg" alt="logo" />
      </div>
      <div className={styles.menuopen} onClick={handleMenuOpen}>
        <img src="/menu.svg" alt="menuopen" />
      </div>
      <ul className={mobilemenuopen ? styles.navlistshow : styles.navlisthide}>
        <div className={styles.menuclose} onClick={handleMenuClose}>
          <img src="/close.svg" alt="menuclose" />
        </div>
        {navLinks.map((link, index) => (
          <li className={styles.navlinks} onClick={handleMenuClose} key={index}>
            <Link href={link.path}>
              <a>{link.label}</a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
