const userRequests = new Map();

function isRateLimited(userId) {
  const now = Date.now();
  const windowSize = 60000; // 1 minute
  const maxRequests = 5;

  if (!userRequests.has(userId)) {
    userRequests.set(userId, []);
  }

  const timestamps = userRequests.get(userId).filter(t => now - t < windowSize);
  timestamps.push(now);
  userRequests.set(userId, timestamps);

  return timestamps.length > maxRequests;
}

module.exports = { isRateLimited };
