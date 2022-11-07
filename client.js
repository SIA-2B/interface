var soap = require('soap');
var url = 'http://sounds-interface-z5fiut5qsa-uc.a.run.app/wsdl?wsdl';

// Create client
soap.createClient(url, function (err, client) {
    if (err){
      throw err;
    }
    /* 
    * Parameters of the service call: they need to be called as specified
    * in the WSDL file
    */
   
    var args = {
      user: "voy"
    };
    // call the service
    client.Documents(args, function (err, res) {
      if (err)
        throw err;
        // print the service returned result
      console.log(res); 
    });
  });