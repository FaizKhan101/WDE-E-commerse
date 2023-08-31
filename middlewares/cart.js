const Cart = require("../models/cart.model");

function initializeCart(req, res, next) {
  let cart;

  
  if (!req.session.cart) {
    cart = new Cart();
  } else {
    const {items,totalPrice,totalQuantity} = req.session.cart;
    cart = new Cart(items,totalPrice,totalQuantity);
  }
  res.locals.cart = cart;
  next();
}

module.exports = initializeCart;
