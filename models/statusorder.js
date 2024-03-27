const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Order = require('./order');

const STATUSORDER = ['Completed', 'Pending']
const Order = sequelize.define('StatusOrder', {
  status: {
    type: DataTypes.ENUM(...STATUSORDER),
    allowNull: false,
  },
});

Order.hasMany(Order, { as: 'orders' })

module.exports = Order;