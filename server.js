import express from 'express';
import path from 'path';


const app = express();
app.get('/', (req, res) => {
  res.send('1');
  res.sendFile(path.join(__dirname, 'index.html'));
})
app.use(express.static('.'));
const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})