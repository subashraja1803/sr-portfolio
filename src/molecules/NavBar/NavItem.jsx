import React from "react";
import styles from "./NavBar.module.scss";

function NavItem({ label, route, key, onSelect }) {
  return (
    <div key={key} className={styles.navItem} onClick={() => onSelect(route)}>
      {label}
    </div>
  );
}

export default NavItem;
