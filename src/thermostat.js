function Thermostat() {
  this.temperature = 20;
};

Thermostat.prototype.turnUp = function() {
  this.temperature ++ ;
};