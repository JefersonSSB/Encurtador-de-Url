const Url = require('../models/url-model');

exports.create = async (data) => {
    return await Url.create(data);
}

exports.find = async (data) => {
    return Url.findOne({
        where: {
            urlCode: data
        }
    });
}