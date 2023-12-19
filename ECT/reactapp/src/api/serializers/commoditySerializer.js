export const commoditySerializer = (response) => {
  return {
    // ...response,
    id: response.id || 0,
    okpd2: response.okpd2 || "",
    name: response.name || "",
    unit: response.unit || "",
    quantity: response.quantity || 0.00,
    price: response.prise || 0.00,
    cost: (response.quantity && response.prise) 
      ? (response.quantity * response.prise).toFixed(2) 
      : 0.00,
  };
};
  