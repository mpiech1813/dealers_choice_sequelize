const { Sequelize, STRING } = require('sequelize');
const db = new Sequelize(
  process.env.DATABASE_URL || 'postgres://localhost/dealers_choice'
);

const Glove = db.define('glove', {
  name: {
    type: STRING,
    allowNull: false,
    unique: true,
    validate: {
      notEmpty: true,
    },
  },
  type: {
    type: STRING,
    allowNull: false,
    defaultValue: 'MODEL',
    validate: {
      isIn: [['BRAND', 'MODEL']],
    },
  },
  colour: {
    type: STRING,
  },
  material: {
    type: STRING,
  },
});

const Category = db.define('category', {
  name: {
    type: STRING,
    allowNull: false,
  },
});

Glove.belongsTo(Glove, { as: 'owner' });
Glove.hasMany(Glove, { as: 'units', foreignKey: 'ownerId' });
Glove.belongsTo(Category);
Category.hasMany(Glove);

module.exports = {
  Glove,
  Category,
  db,
};
