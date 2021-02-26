const navBar = require('../assets/nav_bar');

const pageLayout = (items) => {
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
            <h2>Brands</h2>
          </div>
          <div class = 'content'>
            ${items
              .map(
                (name) => `
                <div class='brand_name'>
                  <a href = '/brands/${name.id}'>
                    <img src = '/${name.id}.png'/>
                  </a>
                  <p>
                    <a href = '/brands/${name.id}'>${name.name}</a>
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

module.exports = pageLayout;
