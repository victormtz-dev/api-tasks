import mongoose from "mongoose";
import config from "../../config/config";

(async () => {
  try {
    await mongoose.connect(config.db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });
    console.log("Connected to MongoDB", mongoose.connection.name);
  } catch (error) {
    console.error(error);
  }
})();

//MONGODB_URI=mongodb+srv://victor:martinez13@cluster0.4z731.mongodb.net/HospitalesCovid?retryWrites=true&w=majority
