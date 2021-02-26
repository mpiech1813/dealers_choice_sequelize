const express = require('express');
const path = require('path');
const app = express();
const syncAndSeed = require('./db/syncAndSeed.js');

app.use(express.json());
app.use(express.static(path.join(__dirname, './public')));
app.use('/', require('./routes/routes'));

const run = async () => {
  try {
    await syncAndSeed();

    const PORT = process.env.PORT || 1813;
    app.listen(PORT, () => console.log(`listening on port ${PORT}`));
  } catch (error) {
    console.log(error);
  }
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
