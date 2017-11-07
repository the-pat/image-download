# image-download 

[![Build Status](https://travis-ci.org/the-pat/image-download.svg?branch=master)](https://travis-ci.org/the-pat/image-download)

> Download an image from the given URL.

## Install

```
npm install --save image-download
```

## Usage

```js
const fs = require('fs');
const imageDownload = require('image-download');
const imageType = require('image-type');

imageDownload('https://www.fillmurray.com/g/200/300').then(buffer => {
    const type = imageType(buffer);

    fs.writeFile('bill-murray.' + type.ext, buffer, (err) => console.log(err ? err : 'done!'));
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
