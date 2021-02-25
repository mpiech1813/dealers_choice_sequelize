const router = require('express').Router();

router.get('/', async (req, res, next) => {
  try {
    const html = `
        <html>
            <head> </head>
            <body>
                <h1>Dealers Choice Sequelize</h1>
            </body>
        </html>

        `;
    res.send(html);
  } catch (error) {
    next(error);
  }
});
