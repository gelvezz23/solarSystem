import React from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">Solar System</Link>
      </div>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link href="/planets">Planets</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
