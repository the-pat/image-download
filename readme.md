# image-download

[![image-download](https://img.shields.io/npm/v/image-download?label=image-download)](https://www.npmjs.com/package/image-download)
[![build](https://img.shields.io/github/workflow/status/the-pat/image-download/Node.js%20CI)](https://github.com/the-pat/image-download/actions/workflows/node.js.yml)
![code size](https://img.shields.io/github/languages/code-size/the-pat/image-download)

> Download an image from the given URL.

## Install

```
npm install --save image-download
```

## Usage

```js
const fs = require("fs");
const imageDownload = require("image-download");
const imageType = require("image-type");

imageDownload("https://www.fillmurray.com/g/200/300").then((buffer) => {
  const type = imageType(buffer);

  fs.writeFile("bill-murray." + type.ext, buffer, (err) =>
    console.log(err ? err : "done!");
  );
});

imageDownload.withType("https://www.placecage.com/gif/200/300").then({buffer, type} => {
  console.log(type);
  //=> {ext: 'gif', mime: 'image/gif'}

  fs.writeFile(`nicolas-cage.${type.ext}`, buffer, (err) =>
    console.log(err ? err : "done!");
  );
});
```

## API

### imageDownload(url)

Returns a `Promise`. The fulfilled value is a `Buffer` of the image.

Or `null` if the URL is bad or does not have an image.

#### url

Type: `string`

## Related

- [reddit-node-wallpaper](https://github.com/the-pat/reddit-node-wallpaper)
- [image-type](https://github.com/sindresorhus/image-type)

## License

MIT © [Patrick Tone](https://patrickt.one)
