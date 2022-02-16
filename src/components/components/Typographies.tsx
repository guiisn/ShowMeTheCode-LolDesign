/* eslint-disable @typescript-eslint/no-useless-constructor */
import { Component } from "react";

interface TyphographiesProps {
  color: number;
  type: string;
  tam?: string;
}

interface TyphographieTitleProps {
  color: number;
  tam?: string;
}

interface TyphographieSubtitleProps {
  color: number;
}

const allStyles = "";

export default class Typographies extends Component<TyphographiesProps> {
  constructor(props: TyphographiesProps) {
    super(props);
  }

  render() {
    const { color, type, children, tam } = this.props;
    return (
      <>
        {type === "title" ? (
          <TyphographieTitle tam={tam} color={color}>
            {children}
          </TyphographieTitle>
        ) : (
          <TyphographieSubtitle color={color}>{children}</TyphographieSubtitle>
        )}
      </>
    );
  }
}

class TyphographieTitle extends Component<TyphographieTitleProps> {
  constructor(props: TyphographieTitleProps) {
    super(props);
  }

  render() {
    const { color, children, tam } = this.props;
    return (
      <h1
        className={
          tam === "big" && color === 1
            ? "text-text text-2xl lg:text-4xl font-black"
            : tam === "big" && color === 2
            ? "text-dark text-2xl lg:text-4xl font-black"
            : tam === "regular" && color === 1
            ? "text-text text-sm lg:text-base font-bold"
            : "text-dark text-sm lg:text-base font-bold"
        }
      >
        {children}
      </h1>
    );
  }
}

class TyphographieSubtitle extends Component<TyphographieSubtitleProps> {
  constructor(props: TyphographieSubtitleProps) {
    super(props);
  }

  render() {
    const { color, children } = this.props;
    return (
      <h1
        className={
          color === 1
            ? "text-base font-bold text-text"
            : "text-base font-bold text-dark"
        }
      >
        {children}
      </h1>
    );
  }
}
