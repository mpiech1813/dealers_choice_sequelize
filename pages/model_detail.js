const navBar = require('../assets/nav_bar');

const modelDetail = (model) => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Boxing Gloves Store</title>
        <link rel='stylesheet' href="../stylesheet.css"/>
      </head>
      <body>
        ${navBar()}
        <div id='title'>
          <img src='/${model.ownerId}.png' class='img_brand'/>
        </div>
        <div class='specs'>
          <p>
            Model Name: ${model.name} <br/>
          </p>
          <p>
            Colour: ${model.colour} <br/>
          </p>
          <p>
            Material Type: ${model.material} <br/>
          </p>
        </div>
      </body>
    </html>
  `;
};

module.exports = modelDetail;
