/**
 * Test the locale microlibrary.
 * 
 * @author Joseph Fehrman
 * @since 07/16/2016
 */
QUnit.module("Locale");

QUnit.test("Locale shall return a latitude and a longitude in the promise chain.", function(assert){
  assert.expect(2);
  var done = assert.async();
  var currentLocation = locale();
  currentLocation.then(function(currentLocation){
    assert.ok(currentLocation.latitude, "Latitude exists.");
    assert.ok(currentLocation.longitude, "Longitude exists.");
    done();
  });
});

QUnit.test("Locale shall have options to override the default geo_options.", function(assert){
  var done = assert.async();
  var options = {enableHighAccuracy : false};
  var currentLocation = locale(options);
  currentLocation.then(function(currentLocation){
    var results = currentLocation.options.enableHighAccuracy;
    var expectedResults = false;
    assert.equal(results, expectedResults, "Expecting enableHighAccuracy to be overridden.");
    done();
  });
});