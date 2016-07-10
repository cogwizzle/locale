/**
 * Test the locale microlibrary.
 */
QUnit.module("Locale");

QUnit.test("Locale shall return a latitude and a longitude in the promise chain.", function(assert){
  assert.expect(2);
  var done = assert.async();
  var currentLocation = locale();
  currentLocation.then(function(currentLocation){
    assert.ok(currentLocation.latitude != undefined, "Latitude exists.");
    assert.ok(currentLocation.longitude != undefined, "Longitude exists.");
    done();
  });
});