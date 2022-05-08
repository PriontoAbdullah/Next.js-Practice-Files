import { MongoClient } from 'mongodb';

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.v9ypd.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
  );

  return client;
}
