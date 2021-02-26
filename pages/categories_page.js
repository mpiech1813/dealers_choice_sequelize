const navBar = require('../assets/nav_bar');

const catLayout = (items) => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Glvoe Store</title>
        <link rel='stylesheet' href="stylesheet.css"/>
      </head>
      <body>
        ${navBar()}
        <div>
          <div id='title'>
            <h1>Gloves Store</h1>
            <h2>Categories</h2>
          </div>
          <div class = 'content'>
            ${items
              .map(
                (name) => `
                <div class='brand_name'>
                  <p>
                    <a href = '/category/${name.id}'>${name.name}</a>
                  </p>
                </div>
              `
              )
              .join('')}
          </div>
        </div>
      </body>
    </html>
  `;
};

module.exports = catLayout;
