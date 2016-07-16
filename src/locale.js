/**
 * Retrieves the devices location.
 * 
 * @author Joseph Fehrman
 * @since 07/09/2016
 * @return Promise chain representing coordinates.
 */
function locale(){
  /**
   * Private object designed to house coordinates.
   */
  var Location = function(latitude, longitude){
    this.longitude = longitude;
    this.latitude = latitude;
  }
  
  var geo_options = {
    enableHighAccuracy: true, 
    maximumAge        : 30000, 
    timeout           : 27000
  };
  
  return new Promise(function(resolve, reject){
      // Evaluate if the browser supports GPS location.
      if(navigator.geolocation){
        // Get the current location.
        navigator.geolocation.getCurrentPosition(locationSuccess, locationFailed, geo_options);
      }else{
        // Evaluate that the browser does not support GPS location show the following error message.
        reject(Error("Can not locate device's location.  Browser does not support GPS locations."));
        alert("Could not locate device's location.");
      }
    
      /**
      * Private function for successful geolocation queries.
      */
      function locationSuccess(position){
        resolve(new Location(position.coords.latitude, position.coords.longitude));
      }
      
      /**
      * Private function for failed geolocation queries.
      */
      function locationFailed(error){
        console.error("Location error " + error.code + ": " + error.message);
        alert("Could not locate device's location.")
      }
    });
}