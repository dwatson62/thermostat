function Thermostat() {
  this.temperature = 20;
  this.powerSaving = true;
};

Thermostat.prototype.turnUp = function() {
  if(this.powerSaving == true && this.temperature < 25) {
    this.temperature ++ ;
  }
  else if(this.powerSaving == false && this.temperature < 32) {
    this.temperature ++ ;
  };
};

Thermostat.prototype.turnDown = function() {
  if(this.temperature > 10) {
    this.temperature -- ;
  };
};

Thermostat.prototype.reset = function() {
  this.reset;
};

Thermostat.prototype.powerSaveOff = function() {
  this.powerSaving = false;
};

Thermostat.prototype.powerSaveOn = function() {
  this.powerSaving = true;
};