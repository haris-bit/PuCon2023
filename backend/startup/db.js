const mongoose = require('mongoose');

/**
 * The method connects server to the database.
 */
module.exports = function() {
  const db = "mongodb+srv://bsef19m519:jlrJozwnU8QJKvtS@cluster0.l0ahg1e.mongodb.net/dynamicEventSchedulerDB";
  mongoose.connect(db)
    .then(() => console.log(`Connected to ${db}...`))
    .catch((err)=> console.log(`Could not connect to MongoDB...`));
}