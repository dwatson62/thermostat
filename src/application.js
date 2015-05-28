thermostat = new Thermostat

$(document).ready(function() {

  $('#tempUp').click(function() {
    thermostat.turnUp();
    $('#temp').html(thermostat.temperature);
    $('body').css({backgroundColor: thermostat.colour });
  });

  $('#tempDown').click(function() {
    thermostat.turnDown();
    $('#temp').html(thermostat.temperature);
    $('body').css({backgroundColor: thermostat.colour });
  });

  $('#tempReset').click(function() {
    thermostat.resetTemp();
    $('#temp').html(thermostat.temperature);
    $('body').css({backgroundColor: thermostat.colour });
  });

  $('#checkBox').click(function() {
    thermostat.powerSave();
    $('#temp').html(thermostat.temperature);
    $('body').css({backgroundColor: thermostat.colour });
  });



});
