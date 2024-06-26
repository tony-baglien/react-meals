const currencyConverter = (number) => {
  const convertedNumber = new Intl.NumberFormat("en-US", {style: "currency", currency: "USD"}).format(number)

  return convertedNumber
};


export default currencyConverter
