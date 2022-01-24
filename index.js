"use strict";

const https = require('https');
const imageType = require("image-type");
const isUrl = require("is-url-superb");

module.exports = (url) => {
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

        return type ? resolve(data) : resolve(null);
      });
    });
  });
};
