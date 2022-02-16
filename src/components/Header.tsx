/* eslint-disable react/jsx-no-target-blank */
import { Component } from "react";

import { Icon } from "@iconify/react";

import Typographies from "./components/Typographies";
import styles from "../global/styles";

export default class Header extends Component<any> {
  render() {
    return (
      <header className="fixed z-50 flex items-center justify-between w-full h-20 px-10 border-b-2 shadow-md border-secondary bg-primary">
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
        <a
          target={"_blank"}
          href="https://github.com/guiisn/ShowMeTheCode-LolDesign"
          className={styles.buttonIcon}
        >
          <Icon icon="mdi:github" />
        </a>
      </header>
    );
  }
}
