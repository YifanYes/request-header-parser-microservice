const express = require('express');
const app = express();
const port = 3000;

// Enabling CORS 
var cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 }));  // some legacy browsers choke on 204

// Middleware to serve the CSS stylesheet
app.use("/styles", express.static(__dirname.concat('/styles')));

// Main page
app.get("/", (req, res) => {
  let path = __dirname.concat('/views/index.html');
  res.sendFile(path, error => {
    if (error) next(error);
    console.log("Served: index.html");
  });
});

app.get("/api/whoami", (req, res) => {
  res.json({
    ipaddress: req.ip,
    language: req.acceptsLanguages()[0],
    software: req.get('User-Agent')
  });
});

// Redirect user to 404 error page if the requested URL is not found
app.use((req, res) => {
  let path = __dirname.concat('/views/404.html');
  res.sendFile(path, error => {
    if (error) next(error);
    console.log("404 page not found");
  });
})

app.listen(port, error => {
  if (error) return console.log(error);
  console.log(`Server running on PORT ${port}`);
});

// Export the Express API
module.export = app;