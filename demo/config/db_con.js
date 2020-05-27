const mongoose = require("mongoose");

const connect = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://demoUser:1234@demo-1hhkp.mongodb.net/test?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: true,
      }
    );
    console.log(`MongoDB is up @ MongoAtlas :${conn.connection.host}`);
  } catch (error) {
    console.error(error);
  }
};

module.exports = connect;
