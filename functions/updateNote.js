const CryptoJS = require('crypto-js');
const { findAndDecryptNotes } = require('./getNotes');

const passphrase = process.env.CRYPTO_PASSPHRASE;

exports.updateNote = async (event, context, callback, Note) => {
  const userId = context.clientContext.user.sub;

  const { title, content, timestamp } = JSON.parse(event.body);

  const noteId =
    event.multiValueQueryStringParameters._id &&
    event.multiValueQueryStringParameters._id[0];

  if (noteId && title && content && timestamp) {
    const note = await Note.findById(noteId);

    if (!noteId.match(/^[0-9a-fA-F]{24}$/) || !note) {
      console.log('Invalid request');
      callback(null, {
        statusCode: 400,
        body: 'Invalid request!',
      });
    } else {
      if (note.userId === userId) {
        note.title = CryptoJS.AES.encrypt(title, passphrase).toString();
        note.content = CryptoJS.AES.encrypt(content, passphrase).toString();
        note.timestamp = timestamp;

        await note.save();

        callback(null, {
          statusCode: 200,
          body: JSON.stringify(await findAndDecryptNotes(Note, userId)),
        });
      } else {
        callback(null, {
          statusCode: 401,
          body: 'Unauthorized request!',
        });
      }
    }
  } else {
    callback(null, {
      statusCode: 400,
      body: 'Invalid request!',
    });
  }
};
