import { Component } from "react";

import { Icon } from "@iconify/react";

import Typographies from "./components/Typographies";
import styles from "../global/styles";

import logo from "../assets/logo.svg";

export default class Infos extends Component {
  render() {
    return (
      <div className="sticky flex items-center justify-center w-full h-screen px-10 lg:justify-between">
        <div className="text-center lg:text-left lg:w-1/3">
          <Typographies type="title" tam="big" color={1}>
            Telzir Telefonia | FaleMais
          </Typographies>
          <br />
          <Typographies type="subtitle" color={2}>
            uma empresa especializada em chamadas de longa distância nacional.
          </Typographies>
          <Typographies type="subtitle" color={2}>
            criamos este site para que nossos clientes consigam observar os
            benefícios que o nosso novo produto, o FaleMais oferece.
          </Typographies>
          <br />
          <div className="w-full">
            <button className={`${styles.buttonSecondary} w-full lg:w-1/2`}>
              <Icon icon="mdi:phone" /> Simule uma ligação
            </button>
          </div>
        </div>
        <div className="justify-end hidden w-1/2 lg:flex ">
          <img src={logo} alt="telzir" className="w-1/3 " />
        </div>
      </div>
    );
  }
}
