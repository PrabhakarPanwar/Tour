import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cloudinary from "cloudinary";

dotenv.config();
cloudinary.v2.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/admin", (req, res) => {
  let { name, pwd } = req.body;
  if (name == process.env.ADMIN_USERNAME && pwd == process.env.ADMIN_PWD) {
    return res.json({
      msg: "Redirected to Admin dashboard",
      success: true,
    });
  }
  return res.json({
    msg: "You are not Admin",
    success: false,
  });
});

app.get("/api/images", async (req, res) => {
  try {
    const result = await cloudinary.v2.search
      .expression("folder:admin-uploads")
      .execute();
    res.json({ success: true, image: result.resources });
  } catch (error) {
    res.json({ success: false });
  }
});

app.delete("/api/images", async (req, res) => {
  try {
    const { public_id } = req.body;

    const result = await cloudinary.v2.uploader.destroy(public_id);

    if (result.result === "ok") {
      res.json({ message: "Image deleted successfully" });
    } else {
      res.status(400).json({ error: "Failed to delete image" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error" });
  }
});

app.listen(8000, () => {
  console.log("Working");
});
