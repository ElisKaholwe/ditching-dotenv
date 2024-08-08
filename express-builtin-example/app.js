// A Simple Server That Runs on Port (defined).
const express = require('express');
const app = express();
// No Longer Needed to Manually configuring  'dotenv'
// Curious How ? Take a peek inside the package.json >>> "start"

// PORT (value retrieved from the .env file)
const PORT = process.env.PORT || 3000;

// Starting the server on the defined port
try {
  app.listen(PORT, () => {
    console.log(`server is listening on localhost:${PORT}`);
  });
} catch (error) {
  console.error(`A ${error.name} : ${error.message} has occurred!`);
}
