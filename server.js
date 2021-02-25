const express = require('express');
const path = require('path');
const app = express();
const { Sequelize, STRING } = require('sequelize');

const db = new Sequelize('postgres://localhost/dealers_choice');

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

app.use(express.json());
app.use('/', require('./routes/routes'));

Glove.belongsTo(Glove, { as: 'owner' });
Glove.hasMany(Glove, { as: 'units', foreignKey: 'ownerId' });
Glove.belongsTo(Category);
Category.hasMany(Glove);

const syncAndSeed = async () => {
  await db.sync({ force: true });

  // categories
  const [boxing, mma] = await Promise.all(
    ['boxing', 'mma'].map((name) => {
      Category.create({ name });
    })
  );

  // brands
  const venum = await Glove.create({
    name: 'Venum',
    type: 'BRAND',
  });
  const hayabusa = await Glove.create({
    name: 'Hayabusa',
    type: 'BRAND',
  });
  const revgear = await Glove.create({
    name: 'Revgear',
    type: 'BRAND',
  });
  const fairtex = await Glove.create({
    name: 'Fairtex',
    type: 'BRAND',
  });

  // models

  const impact = await Glove.create({
    name: 'Impact',
    type: 'MODEL',
    colour: 'Black',
    material: 'PU',
    ownerId: 1,
  });
  const elite = await Glove.create({
    name: 'Elite',
    type: 'MODEL',
    colour: 'Green',
    material: 'Leather',
    ownerId: 1,
  });
  const trooper = await Glove.create({
    name: 'Trooper',
    type: 'MODEL',
    colour: 'Blue',
    material: 'PU',
    ownerId: 1,
  });
  const t3 = await Glove.create({
    name: 'T3',
    type: 'MODEL',
    colour: 'Blue',
    material: 'Vylar',
    ownerId: 2,
  });
  const t3lx = await Glove.create({
    name: 'T3LX',
    type: 'MODEL',
    colour: 'Grey',
    material: 'Leather',
    ownerId: 2,
  });
  const symbiote = await Glove.create({
    name: 'Symbiote',
    type: 'MODEL',
    colour: 'Black',
    material: 'Vylar',
    ownerId: 2,
  });
  const pinnaclep4 = await Glove.create({
    name: 'Pinnacle P4',
    type: 'MODEL',
    colour: 'Orange',
    material: 'Vylar',
    ownerId: 3,
  });
  const s5allrounder = await Glove.create({
    name: 'S5 All Rounder',
    type: 'MODEL',
    colour: 'Red',
    material: 'Leather',
    ownerId: 3,
  });
  const s4sentinel = await Glove.create({
    name: 'S4 Sentinel',
    type: 'MODEL',
    colour: 'Red',
    material: 'Leather',
    ownerId: 3,
  });
  const survival = await Glove.create({
    name: 'Survival',
    type: 'MODEL',
    colour: 'Silver',
    material: 'Leather',
    ownerId: 4,
  });
  const deluxe = await Glove.create({
    name: 'Deluxe',
    type: 'MODEL',
    colour: 'Gold',
    material: 'Leather',
    ownerId: 4,
  });
  const glory = await Glove.create({
    name: 'Glory',
    type: 'MODEL',
    colour: 'Gold',
    material: 'Synthetic',
    ownerId: 4,
  });
};

const run = async () => {
  try {
    await syncAndSeed();

    const PORT = process.env.PORT || 1813;
    app.listen(PORT, () => console.log(`listening on port ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  Glove,
  Category,
  db,
};

run();
//                          Schema:
//             Gloves                                Category
// ==================================     ==================================
//||                                ||   ||                                ||
//||   Brand Name                   ||   ||       Boxing                   ||
//||                                ||   ||                                ||
//||                                ||   ||                                ||
//||   Model Names                  ||   ||       MMA                      ||
//||                                ||   ||                                ||
//||                                ||   ||                                ||
//||                                ||   ||                                ||
//||                                ||   ||                                ||
// ==================================     ==================================

//     Particular model will belong to either boxing or mma gloves and will belong to a brand name
