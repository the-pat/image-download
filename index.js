"use strict";

const https = require('https');
const imageType = require("image-type");
const isUrl = require("is-url-superb");

const imageDownload = (url, includeType) => {
  if (!(url && isUrl(url))) throw new TypeError("A valid url is required");

  return new Promise((resolve) => {
    https.get(url, (response) => {
      let data = Buffer.from([], "binary");

      response.on("data", (chunk) => {
        const buffer = Buffer.from(chunk, "binary");
        const length = data.length + buffer.length;

        data = Buffer.concat([data, buffer], length);
      });

      response.on("end", () => {
        const type = imageType(data);

        if (includeType) {
            return type
                ? resolve({buffer: data, type})
                : resolve({buffer: null, type});
        } else {
            return type
                ? resolve(data)
                : resolve(null);
        }
      });
    });
  });
};

module.exports = (url) => imageDownload(url, false);
module.exports.withType = (url) => imageDownload(url, true);