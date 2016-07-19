/**
 * Test the extend microlibrary.
 */

var objectA = {};
var objectB = {};

QUnit.module("Extend", {
 beforeEach : function(){
   console.info("Before extend test fire.");
   objectA = {"x" : "x"};
   objectB = {"x" : "z", "y" : "y"};
 }
});

QUnit.test("Extend shall have the ability to append new properties.", function(assert){
  extend(objectA, objectB);
  assert.deepEqual(objectA, objectB, "Expected that objectA has objectB's values.");
});
  
QUnit.test("Extend shall be able to override previously existing properties.", function(assert){
  var expectedResults = {"x" : "x", "y" : "y"};
  extend(objectB, objectA);
  assert.deepEqual(objectB, expectedResults, "Expected that objectB's x value will be objectA's x value.")
});