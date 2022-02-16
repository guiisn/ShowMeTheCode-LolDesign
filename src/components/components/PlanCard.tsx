/* eslint-disable @typescript-eslint/no-useless-constructor */
import { Component, ReactNode } from 'react';

import Typographies from './Typographies';

interface PlanCardProps {
  name: string;
  price: string;
  minutes: number;
  emphasis?: boolean;
}

export default class PlanCard extends Component<PlanCardProps, any> {
  constructor(props: PlanCardProps) {
    super(props);
  }

  render(): ReactNode {
    const { name, price, minutes, emphasis } = this.props;

    return (
      <div
        className={
          !emphasis
            ? 'flex flex-col items-center justify-center w-full lg:w-1/5 p-10 border-2 border-solid border-secondary rounded-2xl'
            : 'flex flex-col items-center justify-center w-full lg:w-1/5 p-10 bg-secondary rounded-2xl'
        }
        id="card"
      >
        <Typographies type="title" tam="big" color={1}>
          {name}
        </Typographies>
        <Typographies type="subtitle" color={2}>
          Por apenas
        </Typographies>
        <div className="flex items-start">
          <span
            className={
              !emphasis
                ? 'pt-4 text-xl font-semibold text-dark '
                : 'pt-4 text-xl font-semibold text-text '
            }
          >
            R$
          </span>
          <h1
            className={
              !emphasis
                ? 'font-extrabold text-8xl text-secondary'
                : 'font-extrabold text-8xl text-primary'
            }
          >
            {price}
          </h1>
        </div>
        <br />
        <br />
        <Typographies type="subtitle" color={1}>
          Descrição do plano
        </Typographies>
        <ul
          className={
            !emphasis ? 'font-semibold text-dark' : 'font-semibold text-primary'
          }
        >
          <br />
          <br />
          <li>Fale de graça por um tempo de {minutes} minutos.</li>
          <li>
            Caso o limite de {minutes} minutos seja ultrapassado, você só paga
            os minutos excedentes.
          </li>
        </ul>
      </div>
    );
  }
}
