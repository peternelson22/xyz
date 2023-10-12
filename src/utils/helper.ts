export const formatPrice = (price: number) => {
  return Intl.NumberFormat('en-us', {
    currency: 'USD',
    style: 'currency',
  }).format(price / 100);
};
