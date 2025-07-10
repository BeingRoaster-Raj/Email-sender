const provider1 = require('../providers/provider1');
const provider2 = require('../providers/provider2');
// const { wait, exponentialBackoff } = require('../utils/backoff');

const sentEmails = new Set();

async function sendEmail(to, body) {
  const key = `${to}-${body}`;
  if (sentEmails.has(key)) return "Already Sent";

  let attempt = 0;
  const maxRetries = 3;

  while (attempt < maxRetries) {
    try {
      await provider1.sendEmail(to, body);
      sentEmails.add(key);
      return 'Sent via Provider 1';
    } catch (e) {
      await wait(exponentialBackoff(attempt));
      attempt++;
    }
  }

  try {
    await provider2.sendEmail(to, body);
    sentEmails.add(key);
    return 'Sent via Provider 2';
  } catch (e) {
    return 'Failed';
  }
}

module.exports = { sendEmail };
