# image-download

> Download an image from the given URL.

## Install

```
npm install --save image-download
```

## Usage

```js
const imageDownload = require('image-download');

console.log(await imageDownload('someurl.io/image.jpg'));
```

## API

### imageDownload(url)

Returns a `Buffer` of the image.

Or `null` if the URL is bad or does not have an image.

#### url

Type: `string`

## License

MIT © [Patrick Tone](https://patrickt.one)