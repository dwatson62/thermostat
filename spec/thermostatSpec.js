describe("Thermostat", function () {

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe("Has a starting temperature", function () {
    it("of 20 degrees", function() {
      expect(thermostat.temperature).toEqual(20);
    });
  });

  describe('Can increase the temperature', function() {
    it("by 1 degrees", function() {
      thermostat.turnUp();
      expect(thermostat.temperature).toEqual(21)
    });
    it("by 2 degrees", function() {
      thermostat.turnUp();
      thermostat.turnUp();
      expect(thermostat.temperature).toEqual(22)
    });
  });

  describe('Can descrease the temperature', function() {
    it('by 1 degrees', function() {
      thermostat.turnDown();
      expect(thermostat.temperature).toEqual(19)
    });
    it('by 2 degrees', function() {
      thermostat.turnDown();
      thermostat.turnDown();
      expect(thermostat.temperature).toEqual(18)
    });
    it('by 10 degrees', function() {
      for(i = 1; i < 11; i ++) {
        thermostat.turnDown();
      };
      expect(thermostat.temperature).toEqual(10)
    });
    it('but cannot go lower than 10 degrees', function() {
      for(i = 1; i < 12; i ++) {
        thermostat.turnDown();
      };
      expect(thermostat.temperature).toEqual(10)
    });
  });

  describe('Can reset the temperature', function() {
    it('back to 20 degrees', function () {
      thermostat.resetTemp();
      expect(thermostat.temperature).toEqual(20)
    });
  });

  describe('Power saving mode', function() {
    it('is switched on by default', function() {
      expect(thermostat.powerSaving).toBe(true)
    });
    it('can be switched off', function() {
      thermostat.powerSaveOff();
      expect(thermostat.powerSaving).toBe(false)
    });
    it('can be switched back on', function() {
      thermostat.powerSaveOff();
      thermostat.powerSaveOn();
      expect(thermostat.powerSaving).toBe(true)
    });
  });

  describe('During power save mode', function() {
    it('the maximum temperature is 25 degrees', function() {
      for(i = 1; i < 6; i ++) {
        thermostat.turnUp();
      };
      expect(thermostat.temperature).toEqual(25)
    });
    it('the temperature cannot go higher than 25 degrees', function() {
      for(i = 1; i < 7; i ++) {
        thermostat.turnUp();
      };
      expect(thermostat.temperature).toEqual(25)
    });
  });

  describe('When power save mode is off', function() {
    beforeEach(function () {
      thermostat.powerSaveOff();
    });

    it('the maximum temperature is 32 degrees', function () {
      for(i = 1; i < 13; i ++) {
        thermostat.turnUp();
      };
      expect(thermostat.temperature).toEqual(32)
    });
    it('the temperature cannot go higher than 32 degrees', function() {
      for(i = 1; i < 14; i ++) {
        thermostat.turnUp();
      };
      expect(thermostat.temperature).toEqual(32)
    });
  });

  describe('The thermostat colour is', function () {
    it('Green when less than 18 degrees', function () {
      for(i = 1; i < 4; i ++) {
        thermostat.turnDown();
      };
      expect(thermostat.colour).toEqual('Green')
    });
    it('Red when greater than 24 degrees', function () {
      for(i = 1; i < 6; i ++) {
        thermostat.turnUp();
      };
      expect(thermostat.colour).toEqual('Red')
    });
    it('Yellow for any other temperature', function () {
      expect(thermostat.colour).toEqual('Yellow')
    });
  });

});