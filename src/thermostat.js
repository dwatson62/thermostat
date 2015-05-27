function Thermostat() {
  this.temperature = 20;
  this.powerSaving = true;
  this.colour = 'Yellow'
};

Thermostat.prototype.turnUp = function() {
  if(this.powerSaving == true && this.temperature < 25) {
    this.temperature ++ ;
  }
  else if(this.powerSaving == false && this.temperature < 32) {
    this.temperature ++ ;
  }
  this.changeColour();
};

Thermostat.prototype.turnDown = function() {
  if(this.temperature > 10) {
    this.temperature -- ;
  };
  this.changeColour();
};

Thermostat.prototype.resetTemp = function() {
  this.temperature = 20;
};

Thermostat.prototype.powerSaveOff = function() {
  this.powerSaving = false;
};

Thermostat.prototype.powerSaveOn = function() {
  this.powerSaving = true;
};

Thermostat.prototype.changeColour = function() {
  if(this.temperature < 18) {
    this.colour = 'Green';
  }
  else if(this.temperature > 24) {
    this.colour = 'Red';
  }
  else {
    this.colour = 'Yellow';
  };
};

Thermostat.prototype.update = function() {
   document.getElementById("temp").innerHTML = thermostat.temperature;
};

thermostat = new Thermostat