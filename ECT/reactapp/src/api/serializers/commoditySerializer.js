export const commoditySerializer = (response) => {
    return {
        // ...response,
        id: response.id || 1,
        okpd2: response.okpd2 || "22.22.19.000",
        name: response.name || "name of object comodity",
        unit: response.unit || "штука",
        quantity: response.quantity || 100.00,
        price: response.prise || 100.00,
        cost: (response.quantity && response.prise) ? response.quantity * response.prise : 100.00 * 100.00,
    };
};
  