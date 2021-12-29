const formatNumberToCurrency = number => {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COL"
  }).format(number)
}

export default formatNumberToCurrency
