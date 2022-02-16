/* eslint-disable react/jsx-no-target-blank */
import { Component } from "react";

import { Icon } from "@iconify/react";

import Typographies from "./components/Typographies";
import styles from "../global/styles";

export default class Header extends Component<any> {
  render() {
    return (
      <header className="z-50 fixed w-full h-20 border-b-2 border-secondary flex justify-between items-center px-10 shadow-md bg-primary">
        <a
          target="_blank"
          href="https://www.linkedin.com/in/guiisn/"
          className={styles.buttonIcon}
        >
          <Icon icon="mdi:linkedin" />
        </a>
        <Typographies type="title" tam="regular" color={1}>
          Telzir Telefonia | FaleMais
        </Typographies>
        <button className={styles.buttonIcon}>
          <Icon icon="mdi:github" />
        </button>
      </header>
    );
  }
}
