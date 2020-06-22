import got from "got";
import imageType from "image-type";
import isUrl from "is-url-superb";

export default async (url) => {
  if (!(url && isUrl(url))) throw new TypeError("A valid url is required");

  const response = await got(url, { encoding: null });
  const buffer = Buffer.from(response.body, "binary");
  const type = imageType(buffer);

  if (!type) return null;

  return buffer;
};
