// importaciones
const soap = require("soap");

module.exports.Uncademy = async function (req, res) {
	const url = process.env.URL || 'http://localhost:3004/wsdl?wsdl';
	var p = await new Promise(async function(resolve, reject) {
		await soap.createClient(url, async function(err, client) {
			if(err) throw err;
		    var args = {id: 1};
		    
		    await client.MessageSplitter(args, async function(err, res) {
		        if(err) reject(err);
				resolve(res);
		    });
		});
	});
	res.send(p)
}