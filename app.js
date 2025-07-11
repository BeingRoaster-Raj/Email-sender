const express = require('express');
const { sendEmail } = require('./services/emailService');
// const { isRateLimited } = require('./utils/rateLimiter');

const app = express();
app.use(express.json());

app.post('/send', async (req, res) => {
  const { to, body, userId } = req.body;

  if (isRateLimited(userId)) {
    return res.status(429).send('Rate limit exceeded');
  }

  const result = await sendEmail(to, body);
  res.send(result);
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
