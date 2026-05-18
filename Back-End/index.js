import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/admin", (req, res) => {
  let { name, pwd } = req.body;
  if (name == process.env.ADMIN_USERNAME && pwd == process.env.ADMIN_PWD) {
    return res.json({
      msg: "You are being redirected to Admin dashboard",
      success: true,
    });
  }
  return res.json({
    msg: "You are not Admin",
    success: false,
  });
});

app.listen(8000, () => {
  console.log("Working");
});

// import express from "express";

// const app = express();

// app.get("/admin", (req, res) => {
//   res.json({
//     msg: "hello",
//   });
// });

// app.listen("8000");
