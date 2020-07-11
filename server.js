const express = require("express");
const path= require('path');

const app = express();


const PORT = process.env.PORT || 5000;

//static folder

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//router
//routing api datas
require("./routes/apiRoutes")(app);
//routing html files
require("./routes/htmlRoutes")(app);

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });

