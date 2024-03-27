// models/exampleModel.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const ROLES = ['admin', 'pemilik mitra', 'karyawan', 'pelanggan'];
const User = sequelize.define('User', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.ENUM(...ROLES),
    allowNull: false,
    unique: true,
  },
});

module.exports = User;