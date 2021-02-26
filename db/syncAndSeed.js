const { Glove, Category, db } = require('./db');

const syncAndSeed = async () => {
  await db.sync({ force: true });

  // categories
  const [boxing, mma] = await Promise.all(
    ['Boxing Gloves', 'MMA Gloves'].map((name) => {
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
    categoryId: 1,
  });
  const elite = await Glove.create({
    name: 'Elite',
    type: 'MODEL',
    colour: 'Green',
    material: 'Leather',
    ownerId: 1,
    categoryId: 1,
  });
  const trooper = await Glove.create({
    name: 'Trooper',
    type: 'MODEL',
    colour: 'Blue',
    material: 'PU',
    ownerId: 1,
    categoryId: 1,
  });
  const t3 = await Glove.create({
    name: 'T3',
    type: 'MODEL',
    colour: 'Blue',
    material: 'Vylar',
    ownerId: 2,
    categoryId: 1,
  });
  const t3lLx = await Glove.create({
    name: 'T3LX',
    type: 'MODEL',
    colour: 'Grey',
    material: 'Leather',
    ownerId: 2,
    categoryId: 1,
  });
  const symbiote = await Glove.create({
    name: 'Symbiote',
    type: 'MODEL',
    colour: 'Black',
    material: 'Vylar',
    ownerId: 2,
    categoryId: 1,
  });
  const pinnacleP4 = await Glove.create({
    name: 'Pinnacle P4',
    type: 'MODEL',
    colour: 'Orange',
    material: 'Vylar',
    ownerId: 3,
    categoryId: 1,
  });
  const s5Allrounder = await Glove.create({
    name: 'S5 All Rounder',
    type: 'MODEL',
    colour: 'Red',
    material: 'Leather',
    ownerId: 3,
    categoryId: 1,
  });
  const s4Sentinel = await Glove.create({
    name: 'S4 Sentinel',
    type: 'MODEL',
    colour: 'Red',
    material: 'Leather',
    ownerId: 3,
    categoryId: 1,
  });
  const survival = await Glove.create({
    name: 'Survival',
    type: 'MODEL',
    colour: 'Silver',
    material: 'Leather',
    ownerId: 4,
    categoryId: 1,
  });
  const deluxe = await Glove.create({
    name: 'Deluxe',
    type: 'MODEL',
    colour: 'Gold',
    material: 'Leather',
    ownerId: 4,
    categoryId: 1,
  });
  const glory = await Glove.create({
    name: 'Glory',
    type: 'MODEL',
    colour: 'Gold',
    material: 'Synthetic',
    ownerId: 4,
    categoryId: 1,
  });
  const t3Mma = await Glove.create({
    name: 'T3MMA',
    type: 'MODEL',
    colour: 'Black',
    material: 'Vylar',
    ownerId: 2,
    categoryId: 2,
  });
  const t3MmaLx = await Glove.create({
    name: 'T3MMALX',
    type: 'MODEL',
    colour: 'Tan',
    material: 'Leather',
    ownerId: 2,
    categoryId: 2,
  });
  const undisputed2 = await Glove.create({
    name: 'Undisputed 2.0',
    type: 'MODEL',
    colour: 'White',
    material: 'PU',
    ownerId: 1,
    categoryId: 2,
  });
  const gladiator3 = await Glove.create({
    name: 'Gladiator 3.0',
    type: 'MODEL',
    colour: 'Grey',
    material: 'PU',
    ownerId: 1,
    categoryId: 2,
  });
  const proms1 = await Glove.create({
    name: 'Pro Series MS1',
    type: 'MODEL',
    colour: 'Red',
    material: 'Vylar',
    ownerId: 3,
    categoryId: 2,
  });
  const deluxeMma = await Glove.create({
    name: 'Deluxe MMA',
    type: 'MODEL',
    colour: 'Red',
    material: 'Vylar',
    ownerId: 3,
    categoryId: 2,
  });
  const superSparing = await Glove.create({
    name: 'Super Sparring',
    type: 'MODEL',
    colour: 'Red',
    material: 'Leather',
    ownerId: 4,
    categoryId: 2,
  });
  const superGrapling = await Glove.create({
    name: 'Super Sparring Grappling',
    type: 'MODEL',
    colour: 'Black',
    material: 'Leather',
    ownerId: 4,
    categoryId: 2,
  });
};

module.exports = syncAndSeed;
