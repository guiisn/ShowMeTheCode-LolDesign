import { Component } from 'react';

import Typographies from './components/Typographies';
import { ResultLaptop, ResultMobile } from './components/Results';
import styles from '../global/styles';

import { DDDs, plans, columns, prices } from '../utils/informations';
import { humanizePrice } from '../utils/functions';

import {
  getPriceOfOriginToDestiny,
  getTimeOfPlan,
  calculator,
} from '../utils/functions';

interface SimulatorState {
  origin: string;
  destiny: string;
  time: number;
  plan: string;
  withFaleMais: number;
  withoutFaleMais: number;
}

export default class Simulator extends Component<any, SimulatorState> {
  constructor(props: any) {
    super(props);

    this.state = {
      origin: '',
      destiny: '',
      time: 0,
      plan: '',
      withFaleMais: 0,
      withoutFaleMais: 0,
    };
  }

  componentDidUpdate(prevProps: any, prevState: any) {
    if (
      prevState.origin !== this.state.origin ||
      prevState.destiny !== this.state.destiny ||
      prevState.time !== this.state.time ||
      prevState.plan !== this.state.plan
    ) {
      const { origin, destiny, plan, time } = this.state;
      const priceOriginToDestiny = getPriceOfOriginToDestiny(
        origin,
        destiny,
        plan,
        time,
        prices
      );
      const timeOfPlan = getTimeOfPlan(plan);
      const calculate = calculator(time, timeOfPlan, priceOriginToDestiny);
      const { withFaleMais, withoutFaleMais } = calculate;

      this.setState({
        withFaleMais,
        withoutFaleMais,
      } as any);
    }
  }

  render() {
    const { origin, destiny, plan, time, withFaleMais, withoutFaleMais } =
      this.state;

    const handleChange = (event: any) => {
      this.setState({ [event.target.name]: event.target.value } as any);
    };

    return (
      <div className="sticky flex flex-col items-center justify-start w-full px-10 mb-20 lg:mb-96 screen">
        <Typographies type="title" tam="big" color={1}>
          Simulador
        </Typographies>
        <br />
        <br />
        <div className="flex flex-col w-full gap-4 lg:w-auto lg:flex-row lg:justify-between ">
          <select
            className={styles.inputs}
            name="origin"
            onChange={handleChange}
          >
            <option value="">Selecione o DDD de origem</option>
            {DDDs.map((ddd: any, index: number) => (
              <option value={ddd.label} key={index}>
                {ddd.label}
              </option>
            ))}
          </select>
          <select
            className={styles.inputs}
            name="destiny"
            onChange={handleChange}
          >
            <option value="">Selecione o DDD de destino</option>
            {DDDs.map((ddd: any, index: number) => (
              <option value={ddd.label} key={index}>
                {ddd.label}
              </option>
            ))}
          </select>
          <input
            type="number"
            className={styles.inputs}
            placeholder="Tempo (minutos)"
            name="time"
            onChange={handleChange}
          />
          <select className={styles.inputs} name="plan" onChange={handleChange}>
            <option value="">Selecione o plano</option>
            {plans.map((plan: any, index: number) => (
              <option value={plan.label} key={index}>
                {plan.label}
              </option>
            ))}
          </select>
        </div>
        <br />
        <br />
        {origin && destiny && time && plan && (
          <>
            <ResultLaptop
              origin={origin}
              destiny={destiny}
              plan={plan}
              time={time}
              withFaleMais={humanizePrice(withFaleMais)}
              withoutFaleMais={humanizePrice(withoutFaleMais)}
              columns={columns}
            />
            <ResultMobile
              origin={origin}
              destiny={destiny}
              plan={plan}
              time={time}
              withFaleMais={humanizePrice(withFaleMais)}
              withoutFaleMais={humanizePrice(withoutFaleMais)}
              columns={columns}
            />
          </>
        )}
      </div>
    );
  }
}
