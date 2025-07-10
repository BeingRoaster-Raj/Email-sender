module.exports = {
  sendEmail: async (to, body) => {
    if (Math.random() < 0.7) return true;
    throw new Error("Provider1 failed");
  }
};
