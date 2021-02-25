const router = require('express').Router();
const { Glove, Category, db } = require('../server');

router.get('/', async (req, res, next) => {
  try {
    console.log(Category);
    const brands = await Category.findAll();
  } catch (error) {
    next(error);
  }
});

// router.get('/brands', async (req, res, next) => {
//   try {
//     // const brands = await Glove.findAll({
//     //   where: {
//     //     type: 'BRAND',
//     //   },
//     // });
//     // res.send(brands);
//   } catch (error) {
//     next(error);
//   }
// });

module.exports = router;
