import { MongoClient } from 'mongodb';

class CustomMongoDBAdapter {
  constructor(clientPromise, options) {
    this.clientPromise = clientPromise;
    this.options = options;

    // Set the collection name to 'client'
    this.collectionName = 'client';
  }

  // Implement the required adapter methods for NextAuth.js
  async getAdapter() {
    return {
      async createUser(profile) {
        // Create a new user in the 'client' collection
        const client = await this.clientPromise;
        const db = client.db();
        return await db.collection(this.collectionName).insertOne(profile);
      },
      async getUser(id) {
        // Retrieve a user from the 'client' collection by ID
        const client = await this.clientPromise;
        const db = client.db();
        return await db.collection(this.collectionName).findOne({ _id: id });
      },
      async updateUser(user) {
        // Update a user in the 'client' collection
        const client = await this.clientPromise;
        const db = client.db();
        return await db.collection(this.collectionName).updateOne(
          { _id: user.id },
          { $set: user }
        );
      },
      async deleteUser(id) {
        // Delete a user from the 'client' collection by ID
        const client = await this.clientPromise;
        const db = client.db();
        return await db.collection(this.collectionName).deleteOne({ _id: id });
      },
    };
  }
}

export default CustomMongoDBAdapter;
