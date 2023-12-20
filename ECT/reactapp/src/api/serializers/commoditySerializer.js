export const commoditySerializer = (response) => {
  return {
    // ...response,
    id: response.id || 0,
    okpd2: response.okpd2 || "",
    name: response.name || "",
    unit: response.unit || "",
    quantity: response.quantity || 0.00,
    price: response.price || 0.00,
    cost: (response.quantity && response.price) 
      ? (response.quantity * response.price).toFixed(2) 
      : 0.00,
  };
};
  