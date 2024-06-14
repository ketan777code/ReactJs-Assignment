function calculateSubtotal(items) {
    
    let subtotal = 0;
  
    items.forEach(item => {
      const itemSubtotal = item.price * item.quantity;
  
      subtotal += itemSubtotal;
    });
  
    return subtotal;
  }
  
  const items = [
    { price: 10.00, quantity: 2 },
    { price: 5.50, quantity: 3 },
    { price: 3.25, quantity: 4 }
  ];
  
  const subtotal = calculateSubtotal(items);
  console.log(`Subtotal: $${subtotal.toFixed(2)}`);
  