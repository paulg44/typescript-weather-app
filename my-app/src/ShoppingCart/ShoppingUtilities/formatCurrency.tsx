// Component for format currency

const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
  currency: "GBP",
  style: "currency",
});

function formatCurrency(number: number) {
  return CURRENCY_FORMATTER.format(number);
}

export default formatCurrency;
