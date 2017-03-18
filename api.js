'use strict';

const request = require('request');

exports.getImagesFromPage = function(req, res) {
	request(
		`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=f7a59cbf8bf9d30665687c9163fd36a3&tags=paris&per_page=10&page=${req.params.page}&format=json&jsoncallback=parseJson&extras=owner_name,url_m`,
		function (error, response, body) {
			const parseJson = (obj) => obj && obj.photos && obj.photos.photo;
			let photos = [];

			if (!error && response.statusCode == 200) {
				photos = eval(body);
			}

			res.json(photos.map((photo) => {
				return {
					title: photo.title,
					owner: photo.ownername,
					url: photo.url_m
				}
			}));
		}
	);
};