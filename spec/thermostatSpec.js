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
      thermostat.reset();
      expect(thermostat.temperature).toEqual(20)
    });
  });
});