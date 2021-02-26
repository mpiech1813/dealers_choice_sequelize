const navBar = require('../assets/nav_bar');

const modLayout = (items) => {
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
            <h2>Models</h2>
          </div>
          <div class = 'content'>
            ${items
              .map(
                (name) => `
                <div class='brand_name'>
                  <p>
                    <a href = '/model/${name.id}'>${name.name}</a>
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

module.exports = modLayout;
