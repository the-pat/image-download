const test = require("ava");
const imageDownload = require("./index");

test("returns buffer", async (t) => {
  const value = await imageDownload(
    "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
  );
  t.true(Buffer.isBuffer(value));
});

test("returns null", async (t) => {
  const buffer = await imageDownload("https://patrickt.one");
  t.is(buffer, null);
});

test("rejects undefined url", async (t) => {
  try {
    await imageDownload(undefined);
    t.fail();
  } catch (err) {
    t.true(err instanceof TypeError);
    t.is(err.message, "A valid url is required");
  }
});

test("rejects null url", async (t) => {
  try {
    await imageDownload(null);
    t.fail();
  } catch (err) {
    t.true(err instanceof TypeError);
    t.is(err.message, "A valid url is required");
  }
});

test("rejects empty string url", async (t) => {
  try {
    await imageDownload("");
    t.fail();
  } catch (err) {
    t.true(err instanceof TypeError);
    t.is(err.message, "A valid url is required");
  }
});

test("returns a buffer and type", async (t) => {
    const {buffer, type} = await imageDownload.withType(
        "https://www.placecage.com/gif/200/300");
    t.true(Buffer.isBuffer(buffer));
    t.is(typeof type, "object");
    t.is(type.ext, "gif");
    t.is(type.mime, "image/gif")
});
