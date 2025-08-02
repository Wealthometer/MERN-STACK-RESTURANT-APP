import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "RESTURANT",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }, 
    console.log('✅ MongoDB Connected Successfully')
    )
    .then(() => {
      console.log("✅ Connected to DB Successfully");
    })
    .catch((err) => {
      console.log("❌ DB Connection Failed");
      console.error("🔎 Reason:", err.message); // 👈 THIS is what we need
    });
};
  