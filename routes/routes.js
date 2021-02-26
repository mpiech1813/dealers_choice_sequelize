const router = require('express').Router();
const { db, Category, Glove } = require('../db/db');
const pageLayout = require('../pages/brands_page');
const catLayout = require('../pages/categories_page');
const modLayout = require('../pages/models_page');
const brandDetail = require('../pages/brands_detail');
const modelDetail = require('../pages/model_detail');
const navBar = require('../assets/nav_bar');

//use axios

router.get('/brands', async (req, res, next) => {
  try {
    const brands = await Glove.findAll({
      where: {
        type: 'BRAND',
      },
    });
    res.send(pageLayout(brands));
  } catch (error) {
    next(error);
  }
});

router.get('/category', async (req, res, next) => {
  try {
    const categories = await Category.findAll();
    res.send(catLayout(categories));
  } catch (error) {
    next(error);
  }
});

router.get('/models', async (req, res, next) => {
  try {
    const models = await Glove.findAll({
      where: {
        type: 'MODEL',
      },
    });
    res.send(modLayout(models));
  } catch (error) {
    next(error);
  }
});

router.get('/brands/:id', async (req, res, next) => {
  try {
    const idNum = req.params.id;
    const models = await Glove.findAll({
      where: {
        ownerId: idNum,
      },
    });
    res.send(brandDetail(models));
  } catch (error) {
    next(error);
  }
});

router.get('/model/:id', async (req, res, next) => {
  try {
    const idNum = req.params.id;
    const models = await Glove.findByPk(idNum);
    res.send(modelDetail(models));
  } catch (error) {
    next(error);
  }
});

router.get('/category/:id', async (req, res, next) => {
  try {
    const idNum = req.params.id;
    const models = await Glove.findAll({
      where: {
        categoryId: idNum,
      },
    });
    res.send(brandDetail(models));
  } catch (error) {
    next(error);
  }
});

router.get('/about', async (req, res, next) => {
  try {
    const html = `
    <html>
      <head>
        <title>Boxing Gloves Store</title>
        <link rel='stylesheet' href="../stylesheet.css"/>
      </head>
      <body>
        ${navBar()}
        <div class='specs'>
          <p>
            Address: 5201 N Oketo Ave, Chicago, IL 60656<br/>
          </p>
          <p>
            Phone Number: (773) 123-4567 <br/>
          </p>
          <p>
            Email: questions@glovestore.com <br/>
          </p>
        </div>
      </body>
    </html>
    `;
    res.send(html);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
