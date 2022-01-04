const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.get('/health', (req, res) => {
  res.status(200).send('Ok');
});

app.listen(process.env.PORT);
console.log(`Backend endpoint: ${process.env.REACT_APP_API_URI}`)
console.log(`Frontend ready at http://localhost:${process.env.PORT}`);
