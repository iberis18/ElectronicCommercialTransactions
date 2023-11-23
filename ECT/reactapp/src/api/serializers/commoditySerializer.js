export const commoditySerializer = (response) => {
  return {
    // ...response,
    id: response.id || 0,
    okpd2: response.okpd2 || "22.22.19.000",
    name: response.name || "Пакет почтовый пластиковый",
    unit: response.unit || "Штука",
    quantity: response.quantity || 659.00,
    price: response.prise || 21.57,
    cost: (response.quantity && response.prise) 
      ? (response.quantity * response.prise).toFixed(2) 
      : (659.00 * 21.57).toFixed(2),
  };
};
  