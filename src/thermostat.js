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
  this.changeColour();
};

Thermostat.prototype.powerSave = function() {
  if(this.powerSaving == true) {
    this.powerSaving = false;
  }
  else
  {
    this.powerSaving = true;
    if(this.temperature > 25) {
      this.temperature = 25;
      this.changeColour();
    };
  };
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
  // document.body.style.backgroundImage = "url('http://craigmcn.ca/wp-content/uploads/2012/09/old-man.jpg')";
   document.body.style.background = this.colour;
   document.getElementById("temp").innerHTML = thermostat.temperature;
};

thermostat = new Thermostat