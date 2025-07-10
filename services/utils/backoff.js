function exponentialBackoff(retries) {
  return Math.pow(2, retries) * 100;
}

function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

module.exports = { exponentialBackoff, wait };
