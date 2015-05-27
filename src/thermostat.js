function Thermostat() {
  this.temperature = 20;
};

Thermostat.prototype.turnUp = function() {
  this.temperature ++ ;
};

Thermostat.prototype.turnDown = function() {
  if(this.temperature > 10) {
    this.temperature -- ;
  };
};

Thermostat.prototype.reset = function() {
  this.reset;
};