"use client";

import useWindowSize from "@rooks/use-window-size";
import { useRef, useState } from "react";
import DesktopSidebar from "./DesktopSidebar";
import MobileSidebar from "./MobileSidebar";
import Shadow from "./Shadow";
import Navbar from "./navbar";

// Imported Fontawesome Globally
import { config, library } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { fas } from "@fortawesome/free-solid-svg-icons";

// Setup Fontawesome Globally
config.autoAddCss = false;
library.add(fas);

const navItems = [
  {
    name: "Dashboard",
    icon: "fa-solid fa-gauge-high",
    path: "/",
  },
  {
    name: "Home",
    icon: "fa-solid fa-house",
    path: "/home",
  },
  {
    name: "About",
    icon: "fa-solid fa-user",
    path: "/about",
  },
  {
    name: "Services",
    icon: "fa-solid fa-gear",
    path: "/service",
  },
  {
    name: "Portfolio",
    icon: "fa-solid fa-briefcase",
    path: "/portfolio",
  },
  {
    name: "Contact",
    icon: "fa-solid fa-envelope",
    path: "/contact",
  },
];

export default function Header() {
  const [collapse, setCollapse] = useState(true);
  const sidebar = useRef();
  const { innerWidth } = useWindowSize();

  const handleOpenSidebar = () => {
    if (innerWidth < 950) {
      sidebar.current.previousElementSibling.style.display = "block";
      sidebar.current.style.transform = "translateX(0px)";
    } else if (innerWidth > 950) {
      if (collapse) {
        setCollapse(false);
        sidebar.current.classList.add("custom_collapse");
        sidebar.current.parentNode.nextElementSibling.classList.add(
          "container_collapse_mode"
        );
      } else {
        setCollapse(true);
        sidebar.current.classList.remove("custom_collapse");
        sidebar.current.parentNode.nextElementSibling.classList.remove(
          "container_collapse_mode"
        );
      }
    }
  };

  const handleCloseSidebar = () => {
    if (innerWidth < 950) {
      sidebar.current.previousElementSibling.style.display = "none";
      sidebar.current.style.transform = "translateX(-999px)";
    }
  };

  return (
    <header>
      <Navbar handleOpenSidebar={handleOpenSidebar} />
      {innerWidth > 950 ? (
        <DesktopSidebar navItems={navItems} ref={sidebar} />
      ) : (
        <>
          <Shadow handleCloseSidebar={handleCloseSidebar} />
          <MobileSidebar
            navItems={navItems}
            handleCloseSidebar={handleCloseSidebar}
            ref={sidebar}
          />
        </>
      )}
    </header>
  );
}
