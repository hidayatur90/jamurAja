const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Mushroom = require('./mushroom');
const StatusOrder = require('./statusorder');

const Order = sequelize.define('Order', {
  date_order: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  address: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  count_mushroom: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

Order.hasOne(Mushroom, { as: 'mushroom_id' })
Order.hasOne(StatusOrder, { as: 'status_order_id' })

module.exports = Order;