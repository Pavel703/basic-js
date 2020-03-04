module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  return {
    turns: Math.pow(2, disksNumber),
    seconds: Math.pow(2, disksNumber) / (turnsSpeed / 3600)
  };
};
