const jwt = require('jwt-simple');
const moment = require('moment');
const secret = 'clave_secreta_proyecto';

exports.createToken = (member) => {
	let payload = {
		sub: member.id,
		department_major: member.department_major,
		name: member.name,
		photo_URL: member.photo_URL,
		iat: moment().unix(),
		exp: moment().add(10, 'minutes').unix
	};

	return jwt.encode(payload, secret);
};