var nconf = require('nconf');

nconf.argv().env();

nconf.defaults({
	MONGODB_URI: 'mongodb://localhost/stream_nodejs',
	PORT: 8000,
	GITHUB_CLIENT_ID: 'Iv1.7619ebf4447f0251',
	GITHUB_CLIENT_SECRET: '23d7d7944543fc43bd0bed3228524e9532036caa',
	GITHUB_CALLBACK: 'http://getstream.io',
});

module.exports = nconf;
