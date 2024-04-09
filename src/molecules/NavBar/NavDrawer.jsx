import { Drawer } from "antd";
import { AiOutlineClose } from "react-icons/ai";
import styles from "./NavBar.module.scss";
import React from "react";
import { navBarItems } from "./navItems";
import NavItem from "./NavItem";
import { useNavigate } from "react-router-dom";

function NavDrawer({ visible, onCloseDrawer }) {
  const navigate = useNavigate();
  const onSelect = (route) => {
    navigate(route);
    onCloseDrawer();
  };
  return (
    <Drawer
      placement="left"
      open={visible}
      autoFocus
      closeIcon={false}
      className={styles.navDrawer}
      maskClosable
      onClose={onCloseDrawer}
    >
      <div className={styles.navDrawerContents}>
        <div className={styles.topContainer}>
          <AiOutlineClose
            className={styles.closeIcon}
            onClick={onCloseDrawer}
          />
        </div>
        <div className={styles.navItems}>
          {navBarItems.map(({ label, route }) => (
            <NavItem label={label} route={route} onSelect={onSelect} />
          ))}
        </div>
      </div>
    </Drawer>
  );
}

export default NavDrawer;
