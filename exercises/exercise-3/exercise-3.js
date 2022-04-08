let order = [
  { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29 },
  { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39 },
  { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.8 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.0 },
  { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.0 },
  { itemName: "Hash Brown", quantity: 4, unitPrice: 0.4 },
];



const [itemName, quantity, unitPrice] = order;


function orderedItems(order){
  
  let arr = [];
  let itemTotal;

  for(item of order){
    itemTotal = (item.unitPrice * item.quantity);
    arr.push(itemTotal);
  }
  return arr;
}

const costArray = orderedItems(order);


function orderTotal(costArray){
  let total = 0;

  costArray.forEach(price => {
    total += price;
  })

  return total;
}

const total = orderTotal(costArray);


function receipt(order){
  
  const receiptHeader = 'QTY     ITEM                TOTAL';
  console.log(receiptHeader);

  for(item of order){
    console.log(`${item.quantity}       ${item.itemName}           ${(((item.unitPrice * item.quantity) * 100) / 100)
    .toFixed(2)}`);
  }
  console.log('');
  console.log(`Total: ${total}`);
}

receipt(order);