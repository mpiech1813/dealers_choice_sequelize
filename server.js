const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());
app.use('/', require('./routes/routes'));

const PORT = process.env.PORT || 1813;
app.listen(PORT, () => console.log(`listening on port ${PORT}`));
