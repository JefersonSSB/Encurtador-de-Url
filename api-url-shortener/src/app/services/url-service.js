const Url = require('../models/url-model');
const repository = require("../repositories/url-repository")

exports.generateUrlShort = async (data) => {
    let url = null;
    do {

        data.urlCode = generateCode()
        url = await repository.find(data.urlCode);

    } while (url != null)

    return await repository.create(data);
}

exports.getUrlRedirect = async (data) => {
    const url = await repository.find(data);
    if (url != null) {
        return url.urlFull;
    }
    return null;
};


function generateCode() {
    let text = "";
    const possible = "ABCDEFGHIJKLMNOPQRSTUVXZabcdefghijklmnopqrstuvxz0123456789";

    for (let i = 0; i < 5; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
}