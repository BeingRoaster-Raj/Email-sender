module.exports = {
  sendEmail: async (to, body) => {
    if (Math.random() < 0.5) return true;
    throw new Error("Provider2 failed");
  }
};
