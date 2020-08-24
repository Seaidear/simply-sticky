import mongoose from 'mongoose';
import { getNotes } from './getNotes';
import { createNote } from './createNote';
import { deleteNote } from './deleteNote';
import { updateNote } from './updateNote';

let conn = null;
const MONGO_URI = process.env.MONGO_URI;

exports.handler = async (event, context, callback) => {
  const { user } = context.clientContext;

  console.log(user);

  if (user) {
    context.callbackWaitsForEmptyEventLoop = false;

    const connectDB = async () => {
      try {
        if (!conn) {
          conn = await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false,
            bufferCommands: false,
            bufferMaxEntries: 0,
          });
        }
      } catch (err) {
        console.error(err.message);
        process.exit(1);
      }
    };

    await connectDB();

    conn.model(
      'notes',
      new mongoose.Schema({
        title: String,
        content: String,
        userId: String,
        timestamp: Number,
      }),
    );

    const Note = conn.model('notes');

    switch (event.httpMethod) {
      case 'GET':
        return await getNotes(event, context, callback, Note);

      case 'POST':
        return await createNote(event, context, callback, Note);

      case 'PUT':
        return await updateNote(event, context, callback, Note);

      case 'DELETE':
        return await deleteNote(event, context, callback, Note);

      default:
        callback(null, {
          statusCode: 400,
          body: 'Invalid request to API!',
        });
    }
  } else {
    callback(null, {
      statusCode: 401,
      body: 'Unauthorized request!',
    });
  }
};
