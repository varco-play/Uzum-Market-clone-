import mongoose from "mongoose";
 
function connectDB(mongo_url: string) {
  try {
    mongoose.connect(mongo_url as string).then(() => {
      console.log("Connected to db - uzum main");
    });
  } catch (err) {
    console.log(err);
  }
}

export default connectDB;
