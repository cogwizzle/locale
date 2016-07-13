# Locale
Javascript location function that return a promise chain with a device's current location.

## Preface
Locale is a Javascript micro framework that was designed to handle retrieving the GPS location of your device.  This framework returns the GPS location as a promise chain because the promise structure is a more accessible method of retrieval than the navigator API.  It is some what a facade class.

## Example
```
var deviceLocation = locale();
locale.then(function(location){
   console.log("lon: " + location.longitude + ", lat: " location.latitude); 
});
```

## License
The MIT License