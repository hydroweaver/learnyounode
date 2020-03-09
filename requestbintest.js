const https = require('https')

const data = JSON.stringify({"name" : "jd"});

const options = {
	hostname: "enjzdmdpt91la.x.pipedream.net",

};

const req = https.request(options);
req.end(data);