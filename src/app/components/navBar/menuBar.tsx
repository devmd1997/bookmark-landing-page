"use client";

import "./navBarStyles.css";
import { MenuBarContext } from "@/app/providers/MenuProvider";
import { navItems } from "@/app/utils/constants";
import { useContext, useEffect } from "react";
import NavBar from "./navBar";

export default function MenuBar() {
  const { isOpen } = useContext(MenuBarContext);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      document.body.style.overflowX = "hidden";
    }

    console.log(isOpen);
    return () => {
      document.body.style.overflow = "unset";
      document.body.style.overflowX = "hidden";
    };
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <aside>
          <NavBar />
          <ul>
            {navItems.map((item) => (
              <li key={item}>
                <a href="#">{item.toUpperCase()}</a>
              </li>
            ))}
          </ul>
          <button className="login-button-menu">Login</button>
        </aside>
      )}
    </>
  );
}
