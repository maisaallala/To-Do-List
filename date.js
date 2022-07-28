//jshint esversion:6
exports.getDate = function(){
  const today = new Date();
const oprions = {
    weekday: 'long',
    day: "numeric",
    month: "long"
  };

  return today.toLocaleDateString("en-US", oprions);
};


exports.getDay = function () {
  const today = new Date();
  const oprions = {
    weekday: 'long'    };

  return  today.toLocaleDateString("en-US", oprions);
};
