import React, { useState } from "react";
import styles from "./NavBar.module.scss";
import { AiOutlineMenu } from "react-icons/ai";
import NavDrawer from "./NavDrawer";

function NavBar() {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <div className={styles.navBar}>
        <AiOutlineMenu
          className={styles.menuIcon}
          onClick={() => setVisible(true)}
        />
      </div>
      <NavDrawer visible={visible} onCloseDrawer={() => setVisible(false)} />
    </>
  );
}

export default NavBar;
