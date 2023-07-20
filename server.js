const express = require('express');
const app = express();
const PORT = 3000; // You can choose any available port you like

app.use(express.static('public'));

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});