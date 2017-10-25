'use strict';

const got = require('got');
const imageType = require('image-type');

module.exports = async(url) => {
    if (!url) {
        throw new Error('The url is required');
    }

    const response = await got(url, { encoding: null });

    const buffer = Buffer.from(response.body, 'binary');
    const type = imageType(buffer);

    if (!type) {
        return null;
    }

    return buffer;
};