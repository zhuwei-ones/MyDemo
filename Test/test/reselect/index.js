const  { createSelector } = require("reselect")

const selectShopItems = (state) => {
  console.log("selectShopItems", state);
  return state.shop.items;
};

const selectTaxPercent = state =>{
  console.log("selectTaxPercent", state);

    return  state.shop.taxPercent
}

const selectSubtotal = createSelector(selectShopItems, (items) => {
  console.log("selectSubtotal", items);
  return items.reduce((subtotal, item) => subtotal + item.value, 0);
});


const selectSubtotal2 = createSelector(selectSubtotal, (items) => {
    console.log("selectSubtotal2", items);
    return 100
  });

const selectTotal = createSelector(
    selectSubtotal2,
  selectTaxPercent,
  (subtotal, tax) => {
    console.log("selectTotal", subtotal, tax);
    return { total: subtotal + tax };
  }
);

const exampleState = {
  shop: {
    taxPercent: 8,
    items: [
      { name: "apple", value: 1.2 },
      { name: "orange", value: 0.95 },
    ],
  },
};

// console.log(selectSubtotal(exampleState)) // 2.15
// console.log(selectTax(exampleState)) // 0.172
console.log(selectTotal(exampleState)); // { total: 2.322 }
