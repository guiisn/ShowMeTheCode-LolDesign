/* eslint-disable @typescript-eslint/no-useless-constructor */
import { Component, ReactNode } from "react";

interface ResultProps {
  origin: string;
  destiny: string;
  time: number;
  plan: string;
  withFaleMais: string;
  withoutFaleMais: string;
  columns?: any;
}

class ResultLaptop extends Component<ResultProps, any> {
  constructor(props: ResultProps) {
    super(props);
  }

  render(): ReactNode {
    const {
      origin,
      destiny,
      time,
      plan,
      withFaleMais,
      withoutFaleMais,
      columns,
    } = this.props;

    return (
      <table className="hidden w-full text-center border-collapse lg:inline-table ">
        <tr>
          {columns.map((column: any, index: number) => (
            <th key={index} className="text-dark">
              <b>{column.label}</b>
            </th>
          ))}
        </tr>
        <br />
        <tr className="text-text">
          <td>{origin}</td>
          <td>{destiny}</td>
          <td>{time}</td>
          <td>{plan}</td>
          <td>{withFaleMais}</td>
          <td>{withoutFaleMais}</td>
        </tr>
      </table>
    );
  }
}

class ResultMobile extends Component<ResultProps, any> {
  constructor(props: ResultProps) {
    super(props);
  }
  render(): ReactNode {
    const {
      origin,
      destiny,
      time,
      plan,
      withFaleMais,
      withoutFaleMais,
      columns,
    } = this.props;

    return (
      <div className="block w-full lg:hidden ">
        <div className="flex flex-row justify-between w-full">
          <div className="flex flex-col gap-5 ">
            {columns.map((column: any, index: number) => (
              <span key={index} className="text-dark">
                <b>{column.label}</b>
              </span>
            ))}
          </div>
          <div className="flex flex-col gap-5 text-right text-text">
            <span>{origin}</span>
            <span>{destiny}</span>
            <span>{time}</span>
            <span>{plan}</span>
            <span>{withFaleMais}</span>
            <span>{withoutFaleMais}</span>
          </div>
        </div>
      </div>
    );
  }
}

export { ResultLaptop, ResultMobile };
