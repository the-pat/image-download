/**
Download an image from the given URL.

@param url - the URL to get the image buffer from. `null` represents that the URL didn't return an image.
@example
```js
const fs = require('fs');
const imageDownload = require('image-download');
const imageType = require('image-type');

imageDownload('https://www.fillmurray.com/g/200/300').then(buffer => {
    const type = imageType(buffer);

    fs.writeFile('bill-murray.' + type.ext, buffer, (err) => console.log(err ? err : 'done!'));
});
```
*/
export default function imageDownload(url: string): Promise<Buffer>;