export const currencyFormatter = (value: number) =>
  value
    .toFixed(2)
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
    .replace(/(\.|,)00$/g, '');
