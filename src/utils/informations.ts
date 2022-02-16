const DDDs = [
  {
    label: '011',
  },
  {
    label: '016',
  },
  {
    label: '017',
  },
  {
    label: '018',
  },
];

const plans = [
  {
    label: 'FaleMais 30',
    price: '18,00',
    minutes: 30,
  },
  {
    label: 'FaleMais 60',
    price: '35,00',
    minutes: 60,
  },
  {
    label: 'FaleMais 120',
    price: '70,00',
    minutes: 120,
  },
];

const columns = [
  {
    label: 'DDD ORIGEM',
  },
  {
    label: 'DDD DESTINO',
  },
  {
    label: 'TEMPO',
  },
  {
    label: 'PLANO FALE MAIS',
  },
  {
    label: 'COM PLANO (R$)',
  },
  {
    label: 'SEM PLANO (R$)',
  },
];

const prices = [
  {
    label: '011_016',
    price: 1.9,
  },
  {
    label: '016_011',
    price: 2.9,
  },
  {
    label: '011_017',
    price: 1.7,
  },
  {
    label: '017_011',
    price: 2.7,
  },
  {
    label: '011_018',
    price: 0.9,
  },
  {
    label: '018_011',
    price: 1.9,
  },
];

export { DDDs, plans, columns, prices };
