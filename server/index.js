const express = require('express');
const app = express();
const port = 8000;

require('./config/mongoose.config');

require('./routes/products.routes')(app);

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.listen(port, () => console.log(`Server is actively listening on Port ${port}`))