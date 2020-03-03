module.exports = function getSeason( date ) {
  if (date === undefined) return 'Unable to determine the time of year!';
  if (!(date instanceof Date)) throw new Error('');
  if (isNaN(date)) {
    return 'Unable to determine the time of year!';  
  }

  if (date.getMonth() === 11 || date.getMonth() === 0 || date.getMonth() === 1) return 'winter';
  else if (date.getMonth() > 1 && date.getMonth() <= 4) return 'spring';
  else if (date.getMonth() > 4 && date.getMonth() <= 7) return 'summer';
  else if (date.getMonth() > 7 && date.getMonth() <= 10) return 'autumn';
};
