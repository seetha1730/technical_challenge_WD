import express from 'express';
import phoneData from "./data/phones.json" assert {type: 'json'}
import cors from 'cors'; 

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3001;

app.get('/phones', (req, res) => {
  res.json(phoneData);
});
app.get('/phones/:phoneId', (req, res) => {
    const phoneId = req.params.phoneId;
    const phone = phoneData.find((p) => p.id === parseInt(phoneId));
  
    if (phone) {
      res.json(phone);
    } else {
      res.status(404).json({ error: 'Phone not found' });
    }
  });

app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
});
