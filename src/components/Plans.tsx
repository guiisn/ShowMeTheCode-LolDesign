import { Component, ReactNode } from 'react';

import Typographies from './components/Typographies';

import { plans } from '../utils/informations';

import PlanCard from './components/PlanCard';

export default class Plans extends Component {
  render(): ReactNode {
    return (
      <div className="sticky flex flex-col items-center justify-start w-full px-10 mb-10 screen">
        <Typographies type="title" tam="big" color={1}>
          Conheça nossos planos
        </Typographies>
        <br />
        <br />
        <div className="flex flex-col justify-center w-full gap-4 lg:flex-row ">
          {plans.map((plan: any, index: number) => (
            <PlanCard
              key={index}
              name={plan.label}
              price={plan.price}
              minutes={plan.minutes}
              emphasis={plan.minutes === 60 && true}
            />
          ))}
        </div>
      </div>
    );
  }
}
