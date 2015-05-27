describe("Thermostat", function () {

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe("Has a starting temperature", function () {
    it("Has a starting temperature of 20 degrees", function() {
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
  });
});