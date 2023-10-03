const cart = ["pants", "shirts"];

createOrder(cart)
  .then((orderId) => {
    console.log(orderId);
    return orderId;
  })
  .then((orderId) => {
    return proceedToPayment(orderId);
  })
  .then((result) => {
    console.log(result);
  });

function createOrder(cart) {
  const promise = new Promise((resolve, reject) => {
    if (validateInfo(cart)) {
      setTimeout(() => {
        const orderId = Math.floor(Math.random() * 900000);
        resolve(orderId);
      }, 2000);
    } else {
      const error = new Error("cart is not valid");
      reject(error);
    }
  });

  return promise;
}

function proceedToPayment(orderId) {
  return new Promise((resolve, reject) => {
    resolve("Payment successful!!");
  });
}

function validateInfo(cart) {
  if (cart) {
    return true;
  }
}
