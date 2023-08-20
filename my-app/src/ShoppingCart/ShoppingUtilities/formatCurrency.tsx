// Component for format currency

const CURRENCY_FORMATtER = new Intl.NumberFormat(undefined, {
  currency: "GBP",
  style: "currency",
});

function formatCurrency(number: number) {
  return CURRENCY_FORMATtER.format(number);
}

export default formatCurrency;
