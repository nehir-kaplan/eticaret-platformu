const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('E-ticaret sitem yayında!'));
app.listen(3000, () => console.log('Sunucu 3000 portunda çalışıyor.'));