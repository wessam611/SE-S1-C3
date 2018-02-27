var express = require('express'),
  router = express.Router(),
  productCtrl = require('../controllers/ProductController'),
  userCtrl = require('../controllers/UserController'),
  orderCtrl = require('../controllers/OrdersController');

//-------------------------------Product Routes-----------------------------------
router.get('/product/getProducts', productCtrl.getProducts);
router.get('/product/getProduct/:productId', productCtrl.getProduct);
router.get(
  '/product/getProductsBelowPrice/:price',
  productCtrl.getProductsBelowPrice
);
router.post('/product/createProduct', productCtrl.createProduct);
router.patch('/product/updateProduct/:productId', productCtrl.updateProduct);
router.delete('/product/deleteProduct/:productId', productCtrl.deleteProduct);

//added quickly
router.post('/user/login',userCtrl.login);
router.post('/user/signup',userCtrl.signUp);

// Orders endpoints
router.get('/user/:userId/orders', orderCtrl.getOrders);
router.post('/user/:userId/orders', orderCtrl.postOrders);

module.exports = router;
