import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';

const app = express();
const port = 5000;

app.use(cors());

app.get('/fetchTelegramContent/:id', async (req, res) => {
  const postId = req.params.id;
  const url = `https://t.me/yahooboohoo/${postId}?embed=1`;

  try {
    const response = await fetch(url);
    const text = await response.text()
    console.log(`Fetched content for post ${postId}:`, text); 
    res.send(text);
  } catch (error) {
    console.error('Error fetching content:', error); 
    res.status(500).send('Error fetching Telegram content');
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
