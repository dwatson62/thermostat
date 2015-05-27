describe("Thermostat", function () {

  it("Has a starting temperature of 20 degrees", function() {
    var thermostat = new Thermostat();
    expect(thermostat.temperature).toEqual(20);
  });
  it("Can turn the temperature up", function() {
    thermostat = new Thermostat();
    thermostat.turnUp();
    expect(thermostat.temperature).toEqual(21)
  });
});