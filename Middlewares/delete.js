const user = require('../Models/userModel');
const cartModel = require('../Models/cartModel');
const orderModel = require('../Models/orderModel');

const userModel = User.userModel;
const cart = cartModel.CartItem;
const order = orderModel.Order;
// Define a pre-remove middleware for the User model
userModel.pre('remove', function (next) {
  // Remove associated cart items
  cart.remove({ user: this._id }).exec();

  // Remove associated orders
  order.remove({ user: this._id }).exec();

  next();
});

const userObjectId = '...'; // Replace with the user's ObjectId
userModel.findByIdAndRemove(userObjectId, (err, user) => {
  if (err) {
    console.error('Error deleting user:', err);
  } else {
    console.log('User deleted:', user);
  }
});
