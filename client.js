var soap = require('soap');
var url = "http://b166-161-10-20-195.ngrok.io/wsdl?wsdl";

// Create client
soap.createClient(url, function (err, client) {
  if (err) {
    throw err;
  }
  /*
   * Parameters of the service call: they need to be called as specified
   * in the WSDL file
   */

  var args = {
    id: 10,
  };

  // call the service
  client.Documents(args, function (err, res) {
    if (err) throw err;
    // print the service returned result
    console.log(res);
  });
});
