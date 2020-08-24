const CryptoJS = require('crypto-js');

const passphrase = process.env.CRYPTO_PASSPHRASE;

exports.findAndDecryptNotes = async (Note, userId) => {
  const notes = await Note.find({ userId }).sort({
    date: 1,
  });

  const decryptedNotes = notes.map((note) => ({
    ...note._doc,
    title: CryptoJS.AES.decrypt(note._doc.title, passphrase).toString(
      CryptoJS.enc.Utf8,
    ),
    content: CryptoJS.AES.decrypt(note._doc.content, passphrase).toString(
      CryptoJS.enc.Utf8,
    ),
  }));

  return decryptedNotes;
};

exports.getNotes = async (event, context, callback, Note) => {
  const userId = context.clientContext.user.sub;

  callback(null, {
    statusCode: 200,
    body: JSON.stringify(await this.findAndDecryptNotes(Note, userId)),
  });
};
