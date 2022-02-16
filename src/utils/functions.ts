const getPriceOfOriginToDestiny = (
  origin: string,
  destiny: string,
  plan: string,
  time: number,
  prices: any
) => {
  if (origin && destiny && plan && time) {
    for (let price of prices) {
      if (price.label === `${origin}_${destiny}`) return price.price;
    }
  }
};

const getTimeOfPlan = (plan: string) => {
  return parseInt(plan.split(" ")[1]);
};

const calculator = (
  time: number,
  timeOfPlan: number,
  priceOriginToDestiny: number
) => {
  let withFaleMais;
  let withoutFaleMais;

  if (time <= timeOfPlan) {
    withFaleMais = 0;
    withoutFaleMais = time * priceOriginToDestiny;
  }
  if (time > timeOfPlan) {
    withFaleMais =
      (time - timeOfPlan) * priceOriginToDestiny +
      (time - timeOfPlan) * priceOriginToDestiny * 0.1;
    withoutFaleMais = time * priceOriginToDestiny;
  }

  return { withFaleMais, withoutFaleMais };
};

const humanizePrice = (price: any) => {
  const toFloat = parseFloat(price);
  const decimal = toFloat.toFixed(2);
  const toStr = decimal.toString();

  return toStr.replace(".", ",");
};

export { getPriceOfOriginToDestiny, getTimeOfPlan, calculator, humanizePrice };
