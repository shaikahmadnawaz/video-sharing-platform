import "dotenv/config";
import connectDB from "./db/index";
import { app } from "./app";

connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.log("Express server error ", error);
      throw error;
    });

    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server started at http://localhost:${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log("MongoDB connection failed ", error);
  });