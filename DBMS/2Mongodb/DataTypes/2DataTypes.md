1. MongoDB Data Types Table
2. Example MongoDB Document
Here's how you can store different data types inside a MongoDB document:

db.users.insertOne({
  _id: ObjectId("507f1f77bcf86cd799439011"),
  name: "Alice Johnson",
  age: 30,
  isActive: true,
  hobbies: ["traveling", "photography"],
  address: {
    street: "123 Main St",
    city: "San Francisco",
    zip: 94107
  },
  salary: NumberDecimal("5000.75"),
  createdAt: new Date(),
  lastLogin: Timestamp(),
  profilePic: BinData(0, "base64EncodedData"),
  passwordHash: null
});


3. Explanation of Example
_id → Unique identifier (ObjectId).
name → A string representing the user's name.
age → An integer representing the user’s age.
isActive → A boolean value indicating active status.
hobbies → An array storing multiple values.
address → A sub-document (embedded document) containing the user's address.
salary → A high-precision decimal value.
createdAt → A date object storing account creation time.
lastLogin → A timestamp representing the last login.
profilePic → Binary data (image storage).
passwordHash → A null value indicating missing data.

4. Important Notes
BSON Format: MongoDB stores all data in BSON (Binary JSON), which supports more data types than regular JSON.
Flexible Schema: MongoDB allows storing different data types in the same collection.
Indexing & Performance: Some data types (like ObjectId, Date, Boolean) are indexed for faster queries.
