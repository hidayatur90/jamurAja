const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Order = require('./order');

const Mushroom = sequelize.define('Mushroom', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  stock: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

Mushroom.hasMany(Order, { as: 'orders' })

module.exports = Mushroom;