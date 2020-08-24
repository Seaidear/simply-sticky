const CryptoJS = require('crypto-js');
const { findAndDecryptNotes } = require('./getNotes');

const passphrase = process.env.CRYPTO_PASSPHRASE;

exports.createNote = async (event, context, callback, Note) => {
  const { title, content, userId, timestamp } = JSON.parse(event.body);

  if (title && content && userId && timestamp) {
    const newNote = new Note({
      title: CryptoJS.AES.encrypt(title, passphrase).toString(),
      content: CryptoJS.AES.encrypt(content, passphrase).toString(),
      userId,
      timestamp,
    });

    await newNote.save();

    callback(null, {
      statusCode: 200,
      body: JSON.stringify(await findAndDecryptNotes(Note)),
    });
  } else {
    callback(null, {
      statusCode: 400,
      body: 'Invalid request to API!',
    });
  }
};
